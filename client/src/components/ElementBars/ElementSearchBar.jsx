import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useElements } from 'utils/hooks';
import { setElementFilter, setElementSelect } from 'store/element/elementSlice';
import { selectElementFilter } from 'store/element/elementSelectors';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;
const { s, m } = themes.indents;

const ElementSearchBar = () => {
  const dispatch = useDispatch();
  const { elementSelect } = useElements();
  const [selectValue, setSelectValue] = useState(elementSelect);

  useEffect(() => {
    dispatch(setElementSelect(selectValue));
  }, [dispatch, selectValue]);

  const getOptions = selectValue => {
    let options = baseOptions.filter(
      el => !['recent', 'gdrive', 'ungdrive'].includes(el.value),
    );

    if (selectValue.includes('favorite')) {
      options = options.filter(el => el.value !== 'unfavorite');
    }
    if (selectValue.includes('unfavorite')) {
      options = options.filter(el => el.value !== 'favorite');
    }
    if (selectValue.includes('checked')) {
      return options.filter(el => el.value !== 'unchecked');
    }
    if (selectValue.includes('unchecked')) {
      return options.filter(el => el.value !== 'checked');
    }
    return options;
  };

  const defaultValue = getOptions(selectValue).filter(el => {
    return elementSelect.includes(el.value);
  });

  return (
    <GridWrap
      $w="100%"
      $m={`0 ${s} 0 0 `}
      $cg={s}
      $ai="center"
      $gtc="11fr 10fr"
    >
      <Select
        isMulti
        onChange={data => setSelectValue(data ? data.map(el => el.value) : '')}
        defaultValue={defaultValue}
        isClearable={selectValue}
        options={getOptions(selectValue)}
        $ol={ol}
        $b={b}
        $bh={bh}
        $br={m}
      />
      <Filter selector={selectElementFilter} reducer={setElementFilter} />
    </GridWrap>
  );
};

export default ElementSearchBar;
