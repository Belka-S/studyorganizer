import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import { useAuth, useClusters, useElements } from 'utils/hooks';
import { translateText, scrollOnDomEl } from 'utils/helpers';
import {
  fetchElementsThunk,
  updateElementThunk,
} from 'store/element/elementThunks';
import { setActiveElement } from 'store/element/elementSlice';
import ElementLangBar from 'components/ElementBars/ElementLangBar';
import ElementEditBar from 'components/ElementBars/ElementEditBar';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import { themes } from 'styles/themes';
import ElementPlayBar from 'components/ElementBars/ElementPlayBar';
import { startsWithSmall } from 'utils/helpers/startsWithCapital';

import LiElement from './Li/LiElement';
import { List } from './ElementList.styled';

const { white } = themes.colors;

const ElementList = () => {
  const dispatch = useDispatch();
  const { ref, inView, entry } = useInView({
    initialInView: true,
    rootMargin: '0px 0px -30px 0px',
  });
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const { allElements, elementTrash, elementFilter, isLoading } = useElements();

  const [liColor, setLiColor] = useState(white);

  let { elementSelect } = useElements();
  elementSelect = !elementSelect ? [] : elementSelect;

  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    if (!activeCluster) return;
    dispatch(fetchElementsThunk({ cluster: activeCluster._id }))
      .unwrap()
      .then(({ result }) => {
        if (!activeCluster.activeEl) return;
        const activeEl = result.elements.find(
          ({ _id }) => _id === activeCluster.activeEl,
        );
        dispatch(setActiveElement(activeEl));
      })
      .then(() => {
        const activeDomEl = document.getElementById('active-element');
        activeDomEl && scrollOnDomEl(activeDomEl);
      });
  }, []);

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
      sortByDate
        ? (a, b) => b.createdAt.localeCompare(a.createdAt)
        : (a, b) => a.createdAt.localeCompare(b.createdAt),
    );

  const translateAll = async () => {
    const lang = user.lang;
    let counter = 0;
    await filtredElements.forEach(async el => {
      if (counter > 1) return;
      const { _id, element } = el;
      if (!element.startsWith('[') || lang !== el.lang) {
        const payload = { from: activeCluster.lang, to: lang };
        const caption = await translateText(element, payload, user.engine);
        dispatch(updateElementThunk({ _id, lang, caption }));
        counter = counter + 1;
      }
    });
  };

  const isScrollable =
    window.innerHeight <
    entry?.target.getBoundingClientRect().y +
      entry?.target.getBoundingClientRect().height * 1.5;

  return (
    <>
      <List>
        {filtredElements.map((element, index, arr) => (
          <LiElement
            key={element._id}
            el={element}
            index={index}
            length={arr.length}
            sortByDate={sortByDate}
            setSortByDate={setSortByDate}
            translateAll={translateAll}
            liColor={liColor}
            setLiColor={setLiColor}
          />
        ))}

        <div ref={ref}>
          <ElementLangBar />
          <ElementEditBar
            className={!inView || !isScrollable ? 'shown' : 'hidden'}
          />
          <ElementPlayBar
            className={!inView || !isScrollable ? 'shown' : 'hidden'}
            filtredElements={filtredElements}
            setLiColor={setLiColor}
          />
        </div>
      </List>

      {isLoading && <OvalLoader />}
    </>
  );
};

export default ElementList;
