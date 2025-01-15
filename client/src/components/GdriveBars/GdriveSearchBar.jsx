import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useGdrive } from 'utils/hooks';
import { setGdriveFilter, setGdriveSelect } from 'store/gdrive/gdriveSlice';
import { themes } from 'styles/themes';
import { selectGdriveFilter } from 'store/gdrive/gdriveSelectors';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;
const { s, m } = themes.indents;

const GdriveSearchBar = () => {
  const dispatch = useDispatch();
  const { gdriveFolders, gdriveSelect } = useGdrive();
  const [selectValue, setSelectValue] = useState(gdriveSelect);

  useEffect(() => {
    dispatch(setGdriveSelect(selectValue));
  }, [dispatch, selectValue]);

  const getOptions = () => {
    let options = [
      ...baseOptions.filter(el =>
        ['trash', 'gdrive', 'ungdrive'].includes(el.value),
      ),
      ...gdriveFolders.map(el => ({ value: el.name, label: el.name })),
    ];
    if (selectValue.includes('gdrive')) {
      options = options.filter(el => el.value !== 'ungdrive');
    }
    if (selectValue.includes('ungdrive')) {
      options = options.filter(el => el.value !== 'gdrive');
    }
    if (selectValue.includes('trash')) {
      return options.filter(el => el.value === 'trash');
    }
    if (!selectValue.includes('trash') && selectValue.length > 0) {
      return options.filter(el => el.value !== 'trash');
    }
    return options;
  };

  const defaultValue = getOptions().filter(el => {
    return gdriveSelect.includes(el.value);
  });

  return (
    <GridWrap $w="100%" $m={`0 ${s} 0 0 `} $cg={s} $ai="center" $gtc="2fr 1fr">
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
      <Filter selector={selectGdriveFilter} reducer={setGdriveFilter} />
    </GridWrap>
  );
};

export default GdriveSearchBar;
