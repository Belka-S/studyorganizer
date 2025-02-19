import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import Filter from 'components/shared/Filter/Filter';
import Select from 'components/shared/Select/Select';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useAuth, useClusters } from 'utils/hooks';
import { selectClusterFilter } from 'store/cluster/clusterSelectors';
import { setClusterFilter, setClusterSelect } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

const { m } = themes.indents;
const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { clusterGroups, clusterSubjects } = useClusters();

  const subject = clusterSubjects.find(({ _id }) => _id === user.subjectId);
  const [selectValue, setSelectValue] = useState(subject?.clusterSelect ?? []);

  useEffect(() => {
    dispatch(setClusterSelect(selectValue));
  }, [dispatch, selectValue]);

  if (clusterGroups.length === 0) return;

  // Get select options
  const options = [
    ...baseOptions.filter(
      el => !['recent', 'wordlist', 'gdrive', 'ungdrive'].includes(el.value),
    ),
    ...clusterGroups
      .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
      .sort((a, b) => a.value.localeCompare(b.value)),
  ];

  const getOptions = (options, selectValue) => {
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
    if (selectValue.includes('recent')) {
      return options.filter(el => el.value !== 'trash');
    }
    return options;
  };

  const defaultValue = options.filter(el => {
    return subject?.clusterSelect.includes(el.value);
  });

  return (
    <FlexWrap $jc="flex-end" $p="0">
      <Select
        isMulti
        onChange={data => setSelectValue(data ? data.map(el => el.value) : '')}
        defaultValue={defaultValue}
        isClearable={selectValue}
        options={getOptions(options, selectValue)}
        $ol={ol}
        $b={b}
        $bh={bh}
        $br={m}
      />
      <Filter selector={selectClusterFilter} reducer={setClusterFilter} />
    </FlexWrap>
  );
};

export default ClustersSearchBar;
