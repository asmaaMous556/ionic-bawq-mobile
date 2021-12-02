/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { isObservable, Subscribable } from 'rxjs';
import { clientDeviceGetMany, UnifiedGraphQlOutput } from './devices.schema';
import {
  ClientDevice,
  GetManyClientDevicesOutput,
  GqlOutput,
} from './devices.types';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor(private apollo: Apollo) {}

  clientGetManyDevices(): Subscribable<GqlOutput<ClientDevice[]>> {
    const variables = {
      inputs: {
        filter: {
          deletedAt: { value: null },
        },
      },
    };
    return this.apollo
      .query({
        query: clientDeviceGetMany,
        variables,
      })
      .pipe(UnifiedGraphQlOutput);
  }
}
