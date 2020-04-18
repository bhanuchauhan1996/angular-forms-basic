import { Observable, of } from 'rxjs';
import { UserSetting } from './user-setting';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  postUserSettingForm(userSetting:UserSetting):Observable<any>{
      return this.httpClient.post('https://putsreq.com/QRW2fBiQfGRmC298J5OU',userSetting);
    //return of(userSetting);
  }
}
