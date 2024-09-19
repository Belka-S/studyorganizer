import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authenticate } from 'store/auth/authSlice';
import { getUserThunk } from 'store/auth/authThunks';

const GooglePage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const result = { user: { accessToken, refreshToken } };

  dispatch(authenticate({ result }));
  dispatch(getUserThunk());
};

export default GooglePage;
