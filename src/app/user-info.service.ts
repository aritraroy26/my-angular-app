import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  loadData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/').pipe(
      map((data) => {
        //map transforms data flowing through an Observable
        return data.results[0];
      }),
      map((userInfoRaw) => {
        //userInfoRaw here is what the above map returns which is data.results[0]. The second map further transforms the data.
        return {
          name:
            userInfoRaw.name.title +
            ' ' +
            userInfoRaw.name.first +
            ' ' +
            userInfoRaw.name.last,
          email: userInfoRaw.email,
        };
      })
    );
  }
}
