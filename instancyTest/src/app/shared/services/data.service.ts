import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Data } from 'src/app/model/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    let url = '../../../assets/repo/data.json';
    return this.http.get(url);
  }

}
