import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsSendCheck, BsTextareaResize } from 'react-icons/bs';
import { SiDeepl, SiGoogletranslate } from 'react-icons/si';
import { MdOutlineTextIncrease } from 'react-icons/md';

import { translateText, normalizeClipboard } from 'utils/helpers';
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
      if (e.code === 'NumpadAdd' || (e.ctrlKey && e.key === 'Escape')) {
        e.preventDefault();
        await translateElement(user.engine);
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
    let caption = data.caption.trim();
    let element = normalizeClipboard(data.element, activeCluster.lang)
      .split(/\s+/)
      .join(' ')
      .replaceAll('\n', ' ')
      .trim();
    // Normalize element
    if (element.endsWith(',')) {
      element = element.substring(0, element.length - 1);
    }
    // Normalize caption
    if (caption.endsWith(',')) {
      caption = caption.substring(0, caption.length - 1);
    }
    if (user.lang.includes('en') && activeCluster.lang.includes('de')) {
      const isNetzVerb =
        (element.includes('hat') || element.includes('ist')) &&
        element.split('\n')[0].split(/,\s+/)[0].endsWith('n');
      if (isNetzVerb) {
        const captionParts = caption.split(/,\s+/);
        caption = captionParts
          .map(el => (el.startsWith('to ') ? el : `to ${el}`))
          .join(', ');
      }
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

  const translateElement = async engine => {
    const inputText = watch('element');
    const element = normalizeClipboard(inputText, activeCluster.lang)
      .split(/\s+/)
      .join(' ')
      .replaceAll('\n', ' ')
      .trim();

    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation, engine);
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
        <TranslateBtn type="button" onClick={() => translateElement('google')}>
          <SiGoogletranslate size="16px" />
        </TranslateBtn>
        <TranslateBtn type="button" onClick={() => translateElement('deepl')}>
          <SiDeepl size="18px" />
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
