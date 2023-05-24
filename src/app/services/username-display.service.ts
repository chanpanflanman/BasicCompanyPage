import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameDisplayService {
  userDisplay: {
    name: string;
  }
  constructor() { }
}
