import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useAuth, useGdrive } from 'utils/hooks';
import { setGdriveFilter, setGdriveSelect } from 'store/gdrive/gdriveSlice';
import { listFilesThunk } from 'store/gdrive/gdriveThunks';
import { themes } from 'styles/themes';
import { selectGdriveFilter } from 'store/gdrive/gdriveSelectors';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;
const { s, m } = themes.indents;

const GdriveSearchBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { gdriveFolders, gdriveSelect } = useGdrive();
  const [selectValue, setSelectValue] = useState(
    () => user?.gdriveSelect ?? [],
  );

  useEffect(() => {
    dispatch(listFilesThunk());
    dispatch(setGdriveSelect(selectValue));
  }, [dispatch, selectValue]);

  if (gdriveFolders.length === 0) return;

  const getOptions = selectValue => {
    const data = gdriveFolders.map(el => ({
      value: el.name.split(' / ')[0],
      label: el.name.split(' / ')[0],
    }));

    let options = [
      ...baseOptions.filter(el =>
        ['trash', 'gdrive', 'ungdrive'].includes(el.value),
      ),
      ...new Map(data.map(item => [item.value, item])).values(),
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

  const defaultValue = getOptions(selectValue).filter(el => {
    return gdriveSelect.includes(el.value);
  });

  return (
    <FlexWrap $jc="flex-end" $p="0">
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
    </FlexWrap>
  );
};

export default GdriveSearchBar;
