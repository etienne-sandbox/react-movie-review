import ky from 'ky';
import React from 'react';
import { useQuery } from 'react-query';
import { Div } from '../stitches.config';
import * as Api from '../api';
import { QueryResultHandler } from './QueryResultHandler';

interface Props {
  api: string;
}

export const Movies: React.FC<Props> = ({ api }) => {
  const moviesResult = useQuery('movies', () => ky(api + '/movies').json<Api.Movies>());

  return (
    <Div
      css={{
        maxWidth: '400px',
        margin: '4rem auto',
      }}
    >
      <QueryResultHandler
        result={moviesResult}
        onResolved={(movies) => {
          return (
            <Div>
              {movies.map((movie) => {
                return <Div key={movie.movie_id}>{movie.title}</Div>;
              })}
            </Div>
          );
        }}
      />
      TODO
    </Div>
  );
};
