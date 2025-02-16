import { useDispatch } from 'react-redux';
import { HiX } from 'react-icons/hi';
import { toast } from 'sonner';

import Button from 'components/shared/Button/Button';
import { useElements } from 'utils/hooks';
import * as elementThunks from 'store/element/elementThunks';
import { emptyElementTrash } from 'store/element/elementSlice';

import { themes } from 'styles/themes';

const { button } = themes.shadows;

const DeleteBtn = () => {
  const dispatch = useDispatch();
  const { elementTrash } = useElements();

  const emptyTrash = () => {
    toast.success('Are you sure you want to delete the selected Element(s)?', {
      duration: Infinity,
      closeButton: true,
      // cancel: { label: 'No' },
      action: {
        label: 'Yes',
        onClick: () => {
          // delete trash elements
          dispatch(
            elementThunks.deleteElementThunk(
              elementTrash.map(el => el._id).join('&'),
            ),
          )
            .unwrap()
            .then(() => dispatch(emptyElementTrash()));
        },
      },
    });
  };

  return (
    <>
      <Button onClick={emptyTrash} $s="m" $round={true} $bs={button}>
        <HiX size={16} />
      </Button>
    </>
  );
};

export default DeleteBtn;
