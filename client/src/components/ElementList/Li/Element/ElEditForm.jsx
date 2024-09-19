import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck, BsTextareaResize } from 'react-icons/bs';
import { SiGoogletranslate } from 'react-icons/si';

import { translateText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';
import { updateElementThunk } from 'store/element/elementThunks';

import {
  Form,
  SubmitBtn,
  ResizeBtn,
  TranslateBtn,
  BtnWrap,
  Textarea,
} from './Element.styled';

const ElementEditForm = ({ el, article, isForm, setIsForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const { _id, element, caption } = el;
  const height = isForm + 24;

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
    let element = data.element.trim();
    let caption = data.caption.trim();
    if (element.endsWith(',')) {
      element = element.substring(0, element.length - 1);
    }
    if (element.includes(' ·')) {
      element = element.replaceAll(' ·', ',');
    }
    if (caption.endsWith(',')) {
      caption = caption.substring(0, caption.length - 1);
    }

    dispatch(updateElementThunk({ _id, lang, element, caption }));
    setIsForm(false);
  };

  const translateElement = async () => {
    const element = watch('element');
    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation);
    setValue('caption', caption);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register('element')} style={{ height }} />

      <BtnWrap>
        <SubmitBtn>
          <BsSendCheck size="16px" />
        </SubmitBtn>
        <ResizeBtn type="button" onClick={() => setIsForm(height)}>
          <BsTextareaResize size="16px" />
        </ResizeBtn>
        <TranslateBtn type="button" onClick={translateElement}>
          <SiGoogletranslate size="16px" />
        </TranslateBtn>
      </BtnWrap>

      <Textarea {...register('caption')} style={{ height }} />
    </Form>
  );
};

export default ElementEditForm;

ElementEditForm.propTypes = {
  el: PropTypes.object,
  article: PropTypes.string,
  isForm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setIsForm: PropTypes.func,
};
