import PropTypes from 'prop-types';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { TiStar } from 'react-icons/ti';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useClusters, useElements } from 'utils/hooks';
import { scrollOnBottom, scrollOnDomEl, scrollOnTop } from 'utils/helpers';
import { updateElementThunk } from 'store/element/elementThunks';
import { setElementTrash, setActiveElement } from 'store/element/elementSlice';

import Element from './Element/Element';
import ElEditForm from './Element/ElEditForm';
import {
  Li,
  LabelFavorite,
  LabelChecked,
  TrashBtn,
  EditBtn,
} from './LiElement.styled';
import { TranslateBtn } from './Element/Element.styled';

const LiElement = ({
  el,
  index,
  length,
  translateAll,
  liColor,
  setLiColor,
  editCount,
  setEditCount,
}) => {
  const dispatch = useDispatch();
  const elementRef = useRef(null);
  const { activeCluster } = useClusters();
  const { elementTrash, activeElement, allElements } = useElements();

  const [isForm, setIsForm] = useState(false);

  const { _id, favorite, checked } = el;
  const isInTrash = elementTrash.find(el => el._id === _id);
  const isActive = _id === activeElement?._id;

  const handleEdit = useCallback(
    bool => {
      setIsForm(!bool);
      if (bool) {
        setEditCount(editCount - 1);
      } else {
        setEditCount(editCount + 1);
      }
    },
    [editCount, setEditCount],
  );

  // Set key controle
  const modalEl = document.querySelector('#modal');
  useEffect(() => {
    if (!isActive) return;
    const { sortBy } = activeCluster;
    const isMedia = activeElement.element.startsWith('[');

    const handleKeyDown = e => {
      if (e.key === 'F2' && !isMedia && modalEl.children.length === 0) {
        e.preventDefault();
        isActive && handleEdit(!isForm);
        e.currentTarget.blur();
      }

      if (editCount > 0) return;
      if (e.key === 'ArrowDown' && !e.metaKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        const index = allElements.findIndex(
          ({ _id }) => _id === activeElement?._id,
        );
        dispatch(setActiveElement(allElements[sortBy ? index - 1 : index + 1]));
        scrollOnDomEl(elementRef.current.nextElementSibling);
      }
      if (e.key === 'ArrowUp' && !e.metaKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        const index = allElements.findIndex(
          ({ _id }) => _id === activeElement?._id,
        );
        dispatch(setActiveElement(allElements[sortBy ? index + 1 : index - 1]));
        scrollOnDomEl(elementRef.current.previousElementSibling);
      }
      if (e.altKey && e.key === 'ArrowDown' && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        scrollOnBottom();
      }
      if (e.altKey && e.key === 'ArrowUp' && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        scrollOnTop();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activeCluster,
    activeElement?._id,
    activeElement.element,
    allElements,
    dispatch,
    editCount,
    handleEdit,
    isActive,
    isForm,
    modalEl.children.length,
  ]);

  const handleFavorite = () => {
    dispatch(updateElementThunk({ _id, favorite: !favorite }));
  };

  const handleChecked = () => {
    dispatch(updateElementThunk({ _id, checked: !checked }));
  };

  const handleTrash = () => dispatch(setElementTrash(el));

  return (
    <Li
      id={isActive ? 'active-element' : null}
      licolor={liColor}
      ref={elementRef}
    >
      <FlexWrap $h="100%" $p="0" $fd="column">
        <LabelFavorite $hovered={favorite}>
          <input
            type="checkbox"
            name="favorite"
            checked={favorite}
            onChange={handleFavorite}
          />
          <TiStar size="20px" />
        </LabelFavorite>

        <LabelChecked $hovered={checked}>
          <input
            type="checkbox"
            name="checked"
            checked={checked}
            onChange={handleChecked}
          />
          <FaCheck size="15px" />
        </LabelChecked>

        {isForm && length === index + 1 && (
          <TranslateBtn onClick={translateAll}>
            <FaExternalLinkAlt size="16px" />
          </TranslateBtn>
        )}
      </FlexWrap>

      {isForm && <ElEditForm el={el} handleEdit={handleEdit} />}
      {!isForm && (
        <Element el={el} editCount={editCount} setLiColor={setLiColor} />
      )}

      <FlexWrap $h="100%" $p="0" $fd="column">
        <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
          <FiTrash2 size="16px" />
        </TrashBtn>

        <EditBtn onClick={() => handleEdit(isForm)}>
          <FiEdit3 size="15px" />
        </EditBtn>
      </FlexWrap>
    </Li>
  );
};

export default LiElement;

LiElement.propTypes = {
  el: PropTypes.object,
  index: PropTypes.number,
  length: PropTypes.number,
  translateAll: PropTypes.func,
  liColor: PropTypes.string,
  setLiColor: PropTypes.func,
  editCount: PropTypes.number,
  setEditCount: PropTypes.func,
};
