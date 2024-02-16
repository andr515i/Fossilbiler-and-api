import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

public isAdmin: boolean = false;

  async isAdminEnabled(): Promise<boolean> {
    return Promise.resolve(this.isAdmin)
  }


   toggleLogin(): Promise<boolean> {
    this.isAdmin = !this.isAdmin;
    console.log(this.isAdmin);
    
    return Promise.resolve(this.isAdmin);
  }

}
