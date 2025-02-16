import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'sonner';

import { setGoogleToken } from 'store/auth/authSlice';
import { SCOPES } from 'servises/google/googleScopes';

const ReactH5AudioPlayer = ({ src, accessToken, expiresIn }) => {
  const dispatch = useDispatch();
  const playerRef = useRef();
  const [blobUrl, setBlobUrl] = useState('dump');

  const googleLogin = useGoogleLogin({
    onSuccess: res => {
      const { access_token, expires_in } = res;
      const googleToken = {
        accessToken: access_token,
        expiresIn: expires_in * 1000 + Date.now(),
      };
      dispatch(setGoogleToken(googleToken));
      getBlobUrl(access_token);
    },
    onError: err => toast.error(err.message),
    scope: SCOPES,
  });

  const getBlobUrl = async token => {
    try {
      const blob = await axios
        .get(src, {
          responseType: 'blob',
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => res.data);
      const blobUrl = URL.createObjectURL(blob);
      setBlobUrl(blobUrl);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const isToken = Date.now() < expiresIn;

  return (
    <AudioPlayer
      ref={playerRef}
      src={src.endsWith('.mp3') ? src : blobUrl}
      onError={() => isToken && getBlobUrl(accessToken)}
      onPlay={() => !isToken && googleLogin()}
      onPause={e => e.target.blur()}
      onEnded={e => e.target.blur()}
      controls
    />
  );
};

export default ReactH5AudioPlayer;

ReactH5AudioPlayer.propTypes = {
  src: PropTypes.string,
  accessToken: PropTypes.string,
  expiresIn: PropTypes.number,
};
