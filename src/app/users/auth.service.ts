/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-function-paren */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor() {}

  public get() {
    const localStorageToken = localStorage.getItem('user.token');

    if (!localStorageToken) {
      return;
    } else {
      return localStorageToken;
    }
  }
}
