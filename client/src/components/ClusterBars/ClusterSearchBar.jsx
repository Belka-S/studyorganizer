import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Filter from 'components/shared/Filter/Filter';
import Select from 'components/shared/Select/Select';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useAuth, useClusters } from 'utils/hooks';
import { selectClusterFilter } from 'store/cluster/clusterSelectors';
import { setClusterFilter, setClusterSelect } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

const { s, m } = themes.indents;
const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { clusterGroups, clusterSelect } = useClusters();
  const [selectValue, setSelectValue] = useState(() => user?.select);

  useEffect(() => {
    dispatch(setClusterSelect(selectValue));
  }, [dispatch, selectValue]);

  if (clusterGroups.length === 0) return;

  const getOptions = selectValue => {
    let options = [
      ...baseOptions.filter(
        el => !['recent', 'gdrive', 'ungdrive'].includes(el.value),
      ),
      ...clusterGroups
        .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
        .sort((a, b) => a.value.localeCompare(b.value)),
    ];
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

  const defaultValue = getOptions(selectValue).filter(el => {
    return clusterSelect.includes(el.value);
  });

  return (
    <GridWrap $w="100%" $m={`0 ${s} 0 0 `} $cg={s} $ai="center" $gtc="2fr 1fr">
      <Select
        isMulti
        onChange={data => {
          setSelectValue(data ? data.map(el => el.value) : ''); // dispatch(updateUserThunk({ select: selectValue }));
        }}
        defaultValue={defaultValue}
        isClearable={selectValue}
        options={getOptions(selectValue)}
        $ol={ol}
        $b={b}
        $bh={bh}
        $br={m}
      />
      <Filter selector={selectClusterFilter} reducer={setClusterFilter} />
    </GridWrap>
  );
};

export default ClustersSearchBar;
