import { Action, ActionReducerMap, createReducer, on } from "@ngrx/store";
import { WeatherResponse } from "../weather-response";
import * as fromApp from './app.actions';


export interface WeatherState {
    data: WeatherResponse | null;
    city: string | null;
}

const initialState: WeatherState = {
    data: null,
    city: null
}

const _weatherReducer = createReducer(
    initialState,
    on(fromApp.fetchData, (state, action) => ({ ...state, city: action.city })),
    on(fromApp.setData, (state, action) => ({ ...state, data: action.weather })),
    on(fromApp.setError, (state) => state)
);

export function weatherReducer(state: WeatherState = initialState, action: Action) {
    return _weatherReducer(state, action);
}

export interface AppState {
    weather: WeatherState
}

export const reducers: ActionReducerMap<AppState> = {
    weather: weatherReducer
}
