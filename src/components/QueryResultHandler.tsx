import React from 'react';
import { QueryResult } from 'react-query';

interface Props<T> {
  result: QueryResult<T>;
  onResolved?: (data: T, pending: boolean) => React.ReactElement | null;
  onPending?: () => React.ReactElement | null;
  onRejected?: (error: any) => React.ReactElement | null;
}

export function QueryResultHandler<T>({
  result,
  onPending,
  onResolved,
  onRejected,
}: React.PropsWithChildren<Props<T>>): React.ReactElement | null {
  if (result.isError) {
    if (onRejected) {
      return onRejected(result.error);
    }
    return <p>Unhandled Error</p>;
  }
  if (result.isFetched) {
    if (onResolved) {
      return onResolved(result.data!, result.isFetching);
    }
    return <p>Unhandled Resolved</p>;
  }
  if (result.isFetching) {
    if (onPending) {
      return onPending();
    }
    return <p>Loading...</p>;
  }
  return null;
}
