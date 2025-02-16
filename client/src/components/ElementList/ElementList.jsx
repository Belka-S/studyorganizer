import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { PiTranslateBold } from 'react-icons/pi';

import { useClusters, useElements } from 'utils/hooks';
import { scrollOnDomEl, startsWithSmall } from 'utils/helpers';
import { fetchElementsThunk } from 'store/element/elementThunks';
import { setActiveElement } from 'store/element/elementSlice';
import ElementLangBar from 'components/ElementBars/ElementLangBar';
import ElementEditBar from 'components/ElementBars/ElementEditBar';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import { themes } from 'styles/themes';
import ElementPlayBar from 'components/ElementBars/ElementPlayBar';
import SelectionBtn from 'components/shared/Button/SelectionBtn';

import LiElement from './Li/LiElement';
import { List } from './ElementList.styled';

const { white } = themes.colors;

const ElementList = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { allElements, activeElement, elementTrash, elementFilter, isLoading } =
    useElements();

  const [liColor, setLiColor] = useState(white);
  const [editCount, setEditCount] = useState(0);
  const [selectMode, setSelectMode] = useState(false);

  const { ref, inView, entry } = useInView({
    initialInView: true,
    rootMargin: `0px 0px ${window.innerHeight / 2}px 0px`,
  });

  // Scroll on activeElement
  useEffect(() => {
    if (!activeCluster) return;

    const scrollOnActiveEl = () => {
      const activeDomEl = document.getElementById('active-element');
      activeDomEl && scrollOnDomEl(activeDomEl);
    };
    if (activeElement?._id === activeCluster.activeEl) {
      scrollOnActiveEl();
    } else {
      dispatch(fetchElementsThunk({ cluster: activeCluster._id }))
        .unwrap()
        .then(({ result }) => {
          if (!activeCluster.activeEl) return;
          const activeEl = result.elements.find(
            ({ _id }) => _id === activeCluster.activeEl,
          );
          dispatch(setActiveElement(activeEl));
        })
        .then(() => scrollOnActiveEl());
    }
  }, []);

  // Set selection mode
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.altKey) {
        setSelectMode(true);
      }
    };
    const handleKeyUp = e => {
      if (!e.altKey) {
        setSelectMode(false);
      }
    };
    addEventListener('keyup', handleKeyUp);
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
      removeEventListener('keyup', handleKeyUp);
    };
  }, [selectMode, setSelectMode]);

  // Get filtred & selected elements
  let { elementSelect } = useElements();
  elementSelect = !elementSelect ? [] : elementSelect;

  const activeClusterElements = allElements
    .filter(el => el.cluster === activeCluster?._id)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  // element trash/filter/favorite/checked
  const getElements = () => {
    const trashId = elementTrash.map(el => el._id);

    return elementSelect.includes('trash')
      ? activeClusterElements.filter(el => trashId.includes(el._id))
      : activeClusterElements;
  };

  const filtredElements = getElements()
    .filter(({ element, caption, favorite, checked }) => {
      // filter
      const allFiltred =
        element.toLowerCase().replace('·', '').includes(elementFilter) ||
        element.toLowerCase().includes(elementFilter) ||
        caption.toLowerCase().includes(elementFilter);
      // wordlist
      const allFiltredWordlist = elementSelect.includes('wordlist')
        ? allFiltred && startsWithSmall(element)
        : allFiltred;
      // favorite
      const getFavorite = () => {
        if (elementSelect.some(op => ['favorite', 'unfavorite'].includes(op))) {
          return elementSelect.includes('favorite')
            ? allFiltredWordlist && favorite === true
            : allFiltredWordlist && favorite === false;
        } else {
          return allFiltredWordlist;
        }
      };
      // checked
      const getCheckedFavorite = () => {
        if (elementSelect.some(op => ['checked', 'unchecked'].includes(op))) {
          return elementSelect.includes('checked')
            ? getFavorite() && checked === true
            : getFavorite() && checked === false;
        } else {
          return getFavorite();
        }
      };

      return getCheckedFavorite();
    })
    .sort(
      activeCluster.sortBy
        ? (a, b) => b.createdAt.localeCompare(a.createdAt)
        : (a, b) => a.createdAt.localeCompare(b.createdAt),
    );

  const isScrollable =
    window.innerHeight <
    entry?.target.getBoundingClientRect().y +
      entry?.target.getBoundingClientRect().height * 1.5;

  return (
    <>
      <List>
        {filtredElements.map(el => (
          <LiElement
            key={el._id}
            el={el}
            liColor={liColor}
            setLiColor={setLiColor}
            editCount={editCount}
            setEditCount={setEditCount}
            selectMode={selectMode}
          />
        ))}

        {!isLoading && (
          <div ref={ref}>
            <ElementLangBar />
            <ElementEditBar
              className={inView && isScrollable ? 'bar-up' : 'bar-down'}
            />
            <ElementPlayBar
              className={inView && isScrollable ? 'bar-up' : 'bar-down'}
              filtredElements={filtredElements}
              setLiColor={setLiColor}
            />
          </div>
        )}
      </List>

      <SelectionBtn>
        <span>Translate</span>
        &ensp;
        <PiTranslateBold size={18} />
      </SelectionBtn>

      {isLoading && <OvalLoader />}
    </>
  );
};

export default ElementList;
