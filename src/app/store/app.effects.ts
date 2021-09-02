import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { WatherService } from '../wather.service';
import * as fromApp from './app.actions';
import { slectCity } from './app.selectors';
import { WeatherResponse } from '../weather-response';

@Injectable()
export class WeatherEffects {
 
  loadWeather$ = createEffect(
    () => this.actions$.pipe(
        ofType(fromApp.fetchData),
        withLatestFrom(slectCity),
        mergeMap((city) =>
            this.weatherService.getWeather(city).pipe(
                tap(obj => console.log(obj)),
                map((weather: WeatherResponse) => {
                  const obj: WeatherResponse = {
                    current: {
                      last_updated: weather.current.last_updated,
                      temp_c: weather.current.temp_c,
                      condition: {
                        text: weather.current.condition.text,
                        icon: weather.current.condition.icon
                      }
                    },
                    location:{
                      lat: weather.location.lat,
                      lon: weather.location.lon,
                    }
                  }
                  return  fromApp.setData({ weather: obj })
                })
            )
        )
    )
  );
 
  constructor(
    private actions$: Actions,
    private weatherService: WatherService
  ) {}
}