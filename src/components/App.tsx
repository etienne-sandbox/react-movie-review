import React, { useCallback, useState } from 'react';
import { Div, Input } from '../stitches.config';
import ky from 'ky';
import { Movies } from './Movies';

export const App: React.FC = () => {
  const [apiUrl, setApiUrl] = useState('http://localhost:3001');
  const [validApi, setValidApi] = useState(false);
  const [apiError, setApiError] = useState<null | string>(null);

  const validateApi = useCallback(async () => {
    setApiError(null);
    try {
      await ky(apiUrl);
      setValidApi(true);
    } catch (error) {
      setApiError(error.message);
    }
  }, [apiUrl]);

  if (!validApi) {
    return (
      <Div
        css={{
          maxWidth: '400px',
          margin: '4rem auto',
        }}
      >
        <Input
          placeholder="http://localhost:3001"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              validateApi();
            }
          }}
        />
        {apiError && <p>apiError</p>}
      </Div>
    );
  }

  return <Movies api={apiUrl} />;
};
