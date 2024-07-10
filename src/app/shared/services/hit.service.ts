import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HitResponse, HitResponseData } from '../models/hit-response';

@Injectable({
  providedIn: 'root'
})
export class HitService {
  constructor(
    private http: HttpClient
  ) {}

  get(): Observable<HitResponseData> {
    return this.http.get<HitResponse>('https://hitdigital.com.br/test.php')
      .pipe(map((res) => {
        return res.data
      }));
  }
}
