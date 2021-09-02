export interface WeatherResponse {
    current: {
        last_updated: string,
        temp_c: number,
        condition: {
            text: string
            icon: string
        }
    },
    location: {
        lat: number,
        lon: number
    }
}
