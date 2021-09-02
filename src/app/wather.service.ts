import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherResponse } from './weather-response';

@Injectable({
  providedIn: 'root'
})
export class WatherService {

  url: string = "https://weatherapi-com.p.rapidapi.com/current.json";
  options = {
    params: {q: 'Brasilia'},
    headers: {
      'x-rapidapi-key': 'b9e3a7bbd5mshf66f90a88233522p1e2031jsn2188a6aa0047',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  getBrasiliaWeather() {
    return this.http.get<WeatherResponse>(this.url, this.options);
  }

  getWeather(city: string) {
    this.options.params.q = city;
    return this.http.get<WeatherResponse>(this.url, this.options);
  }

  constructor(private http: HttpClient) { }
}
