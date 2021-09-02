import { createSelector } from "@ngrx/store";

export const slectCity = (state: any) => state.city;

export const selectWeather = (state: any) => state.weather;

export const selectData = createSelector(
    selectWeather,
    (state: any) => state.data
);

