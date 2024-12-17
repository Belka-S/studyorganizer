import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth, useClusters, useElements } from 'utils/hooks';
import { translateText } from 'utils/helpers';
import {
  fetchElementsThunk,
  updateElementThunk,
} from 'store/element/elementThunks';
import ElementLangBar from 'components/ElementBars/ElementLangBar';
import { themes } from 'styles/themes';

import LiElement from './Li/LiElement';
import { List } from './ElementList.styled';

const { white } = themes.colors;

const ElementList = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const { allElements, elementTrash, elementFilter } = useElements();

  const [liColor, setLiColor] = useState(white);

  let { elementSelect } = useElements();
  elementSelect = !elementSelect ? [] : elementSelect;

  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    dispatch(fetchElementsThunk());
  }, [dispatch]);

  useEffect(() => {
    const activeFileEl = document.getElementById('active-element');
    const scrollOnActive = () => {
      activeFileEl?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    scrollOnActive();
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
      // filter + favorite
      const filtredFavorite = elementSelect.includes('favorite')
        ? allFiltred && favorite === true
        : allFiltred;
      // filter + favorite + checked
      if (elementSelect.some(el => ['checked', 'unchecked'].includes(el))) {
        return elementSelect.includes('checked')
          ? filtredFavorite && checked === true
          : filtredFavorite && checked === false;
      }
      return filtredFavorite;
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
        const translation = { from: activeCluster.lang, to: lang };
        const caption = await translateText(element, translation);
        dispatch(updateElementThunk({ _id, lang, caption }));
        counter = counter + 1;
      }
    });
  };

  return (
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

      <ElementLangBar
        filtredElements={filtredElements}
        setLiColor={setLiColor}
      />
    </List>
  );
};

export default ElementList;
