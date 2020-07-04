import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'

import { AppData } from './app-data.model'

@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(private http: HttpClient) { }


  createUser(form: object) {
    const appData: AppData = {
      firstName: form['firstName'],
      lastName: form['lastName'],
      email: form['email'],
      phNumber: form['phNumber'],
      path: form['path']
    }
    this.http.post("http://localhost:3001/api/user/register", appData)
      .subscribe(response => {
        console.log(response);
      }, err =>{
        console.log(err);
      })
  }


}
