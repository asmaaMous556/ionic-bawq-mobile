/* eslint-disable @typescript-eslint/naming-convention */
import { ApolloQueryResult } from '@apollo/client';
import { NetworkStatus } from '@apollo/client/core/networkStatus';
import { ApolloError } from '@apollo/client/errors';
import { gql } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { isObservable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const clientDeviceGetMany = gql`
  query {
    output: clientDeviceGetMany {
      clientDevices {
        type
        _id
        sim {
          apn
          number
          password
          username
        }
        imei
        isOnline
        name
        password
        active
        client
        createdAt
        createdBy
        deletedAt
        desc
      }
    }
  }
`;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function UnifiedGraphQlOutput<T = any>(source: any) {
  if (isObservable(source)) {
    return source.pipe(
      catchError<any, any>((error) => {
        throw error;
      }),
      map(({ data, errors }: ApolloQueryResult<T>): T => {
        if (errors) {
          throw errors[0];
        } else {
          return data;
        }
      })
    );
  }

  return source;
}
