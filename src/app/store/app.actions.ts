import { createAction, props } from "@ngrx/store";
import { WeatherResponse } from "../weather-response";
import { AppTypes } from "./app.types";

export const fetchData = createAction(
    AppTypes.getWeather,
    props<{city: string}>()
);

export const setData = createAction(
    AppTypes.setWeather,
    props<{weather: WeatherResponse}>()
);

export const setError = createAction(
    AppTypes.error,
    props<{error: string}>()
);
