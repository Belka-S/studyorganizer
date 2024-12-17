import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TiStar } from 'react-icons/ti';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { MdOutlineTextIncrease } from 'react-icons/md';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useElements, useClusters } from 'utils/hooks';
import { updateElementThunk } from 'store/element/elementThunks';
import { setElementTrash, setActiveElement } from 'store/element/elementSlice';
import { updateClusterThunk } from 'store/cluster/clusterThunks';

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
  sortByDate,
  setSortByDate,
  translateAll,
  liColor,
  setLiColor,
}) => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { elementTrash, activeElement } = useElements();

  const [isForm, setIsForm] = useState(false);

  const { _id, favorite, checked } = el;
  const isInTrash = elementTrash.find(el => el._id === _id);

  const [article, setArticle] = useState('');

  const handleFavorite = () => {
    dispatch(updateElementThunk({ _id, favorite: !favorite }));
  };

  const handleChecked = () => {
    dispatch(updateElementThunk({ _id, checked: !checked }));
  };

  const handleTrash = () => dispatch(setElementTrash(el));

  const handleEdit = e => {
    if (isForm) {
      setIsForm(false);
    } else {
      const height = e.target.closest('div').clientHeight;
      setIsForm(height);
    }
  };

  const handleSetArticle = () => {
    if (article === '') setArticle('der ');
    if (article === 'der ') setArticle('die ');
    if (article === 'die ') setArticle('das ');
    if (article === 'das ') setArticle('');
  };

  const handleSetActiveElement = e => {
    const { _id } = activeCluster;
    dispatch(setActiveElement(el));
    if (e.currentTarget.id !== 'active-element') {
      dispatch(updateClusterThunk({ _id, activeEl: el._id }));
    }
  };

  const isActive = _id === activeElement?._id;

  return (
    <Li
      id={isActive ? 'active-element' : null}
      onClick={handleSetActiveElement}
      liColor={liColor}
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

      {isForm && (
        <ElEditForm
          el={el}
          article={article}
          isForm={isForm}
          setIsForm={setIsForm}
        />
      )}
      {!isForm && (
        <Element
          el={el}
          sortByDate={sortByDate}
          setSortByDate={setSortByDate}
          setLiColor={setLiColor}
        />
      )}

      <FlexWrap $h="100%" $p="0" $fd="column">
        <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
          <FiTrash2 size="16px" />
        </TrashBtn>

        {isForm && (
          <EditBtn onClick={handleSetArticle}>
            <MdOutlineTextIncrease size="18px" />
          </EditBtn>
        )}

        <EditBtn onClick={handleEdit}>
          <FiEdit3 size="15px" />
        </EditBtn>
      </FlexWrap>
    </Li>
  );
};

export default LiElement;

LiElement.propTypes = {
  el: PropTypes.object,
  index: PropTypes.string,
  length: PropTypes.string,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  translateAll: PropTypes.func,
  liColor: PropTypes.string,
  setLiColor: PropTypes.func,
};
