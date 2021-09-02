import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherEffects } from './store/app.effects';
import { reducers, weatherReducer } from './store/app.reducer';
import { FinancesComponent } from './components/finances/finances.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {metaReducers: []}),
    StoreModule.forFeature('weather', weatherReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
