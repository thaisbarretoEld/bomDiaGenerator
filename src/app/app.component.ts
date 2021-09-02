import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchData } from './store/app.actions';
import { AppState } from './store/app.reducer';
import { selectData } from './store/app.selectors';
import { WatherService } from './wather.service';
import { WeatherResponse } from './weather-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  weatherData: Observable<WeatherResponse> | null = null;
  
  ngrxWeather$ = this.store.select(selectData);

  constructor(
    private weatherService: WatherService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.weatherData = this.weatherService.getWeather('brasilia');
    
    this.store.dispatch(fetchData({ city: 'brasilia' }));
    this.ngrxWeather$.subscribe(info => console.log(info)) //var 
  }
}
