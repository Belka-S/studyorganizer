import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useAuth, useClusters, useGdrive } from 'utils/hooks';
import { setGdriveFilter, setGdriveSelect } from 'store/gdrive/gdriveSlice';
import { selectGdriveFilter } from 'store/gdrive/gdriveSelectors';
import { updateSubjectThunk } from 'store/cluster/clusterThunks';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;
const { m } = themes.indents;

const GdriveSearchBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { clusterSubjects } = useClusters();
  const { gdriveFolders } = useGdrive();

  const subject = clusterSubjects.find(({ _id }) => _id === user.subjectId);
  const [selectValue, setSelectValue] = useState(subject?.gdriveSelect ?? []);

  if (gdriveFolders.length === 0) return;

  // Get select options
  const data = gdriveFolders.map(el => ({
    value: el.name.split(' / ')[0],
    label: el.name.split(' / ')[0],
  }));

  const options = [
    ...baseOptions.filter(el =>
      ['trash', 'gdrive', 'ungdrive'].includes(el.value),
    ),
    ...new Map(data.map(item => [item.value, item])).values(),
  ];

  const defaultValue = options.filter(el => {
    return subject?.gdriveSelect.includes(el.value);
  });

  const getOptions = (options, selectValue) => {
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

  if (!subject) return;
  return (
    <FlexWrap $jc="flex-end" $p="0">
      <Select
        isMulti
        onChange={data => {
          const value = data.map(el => el.value);
          setSelectValue(data ? value : '');
          dispatch(setGdriveSelect(value));
          const payload = { _id: user.subjectId, gdriveSelect: value };
          dispatch(updateSubjectThunk(payload));
        }}
        defaultValue={defaultValue}
        isClearable={selectValue}
        options={getOptions(options, selectValue)}
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
