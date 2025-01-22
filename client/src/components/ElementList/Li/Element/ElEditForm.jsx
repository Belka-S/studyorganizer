import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck, BsTextareaResize } from 'react-icons/bs';
import { SiGoogletranslate } from 'react-icons/si';
import { MdOutlineTextIncrease } from 'react-icons/md';

import { translateText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';
import {
  updateElementThunk,
  fetchElementsThunk,
} from 'store/element/elementThunks';

import {
  Form,
  SubmitBtn,
  ResizeBtn,
  TranslateBtn,
  BtnWrap,
  Textarea,
  EditBtn,
} from './Element.styled';

const ElementEditForm = ({ el, isForm, setIsForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const [article, setArticle] = useState('');

  const { _id, element, caption } = el;
  const height = isForm + 42;

  const { register, watch, setValue, handleSubmit, setFocus } = useForm({
    mode: 'onBlur',
    defaultValues: { element, caption },
  });

  // set Article (Deutsch)
  useEffect(() => {
    setFocus('element');
    if (article && element.trim().startsWith('der')) {
      setValue('element', article + element.replace('der', '').trim() + ', ');
    } else if (article && element.trim().startsWith('die')) {
      setValue('element', article + element.replace('die', '').trim() + ', ');
    } else if (article && element.trim().startsWith('das')) {
      setValue('element', article + element.replace('das', '').trim() + ', ');
    } else {
      article
        ? setValue('element', article + element + ', ')
        : setValue('element', article + element);
    }
  }, [article, element, setFocus, setValue]);

  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.key === '+') {
        e.preventDefault();
        await translateElement();
        handleSubmit(onSubmit)();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
      if (e.key === 'Escape') {
        setIsForm(false);
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onSubmit = data => {
    const lang = user.lang;
    let element = data.element.split(/\s+/).join(' ').trim();
    let caption = data.caption.trim();
    if (element.endsWith(',')) {
      element = element.substring(0, element.length - 1);
    }
    if (element.includes('·')) {
      element = element.replaceAll(' ·', ',').replaceAll('· ', ', ');
    }
    if (caption.endsWith(',')) {
      caption = caption.substring(0, caption.length - 1);
    }

    dispatch(updateElementThunk({ _id, lang, element, caption })).then(
      dispatch(fetchElementsThunk()),
    );

    setIsForm(false);
  };

  const handleSetArticle = () => {
    if (article === '') setArticle('der ');
    if (article === 'der ') setArticle('die ');
    if (article === 'die ') setArticle('das ');
    if (article === 'das ') setArticle('');
  };

  const translateElement = async () => {
    let element = watch('element');
    const isSentence = ['.', '!', '?'].includes(element.at(element.length - 1));
    const words = !isSentence && element.split(/\s+/);
    if (['der', 'die', 'das'].includes(words[0])) {
      element = words[1];
    }
    const parts = !isSentence && element.split(',');
    if (parts.length === 3) {
      element = parts[0] + ',';
    }
    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation, user.engine);
    setValue('caption', caption);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register('element')} style={{ height }} />

      <BtnWrap>
        <ResizeBtn type="button" onClick={() => setIsForm(height)}>
          <BsTextareaResize size="16px" />
        </ResizeBtn>
        <EditBtn type="button" onClick={handleSetArticle}>
          <MdOutlineTextIncrease size="18px" />
        </EditBtn>
        <TranslateBtn type="button" onClick={translateElement}>
          <SiGoogletranslate size="16px" />
        </TranslateBtn>
        <SubmitBtn>
          <BsSendCheck size="16px" />
        </SubmitBtn>
      </BtnWrap>

      <Textarea {...register('caption')} style={{ height }} />
    </Form>
  );
};

export default ElementEditForm;

ElementEditForm.propTypes = {
  el: PropTypes.object,
  isForm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setIsForm: PropTypes.func,
};
