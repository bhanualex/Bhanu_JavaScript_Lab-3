

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "506c49440b7804a07f56feffe01884a0";

class WeatherAPI {


  buildURL(locationName) {


    this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);

    // q
    this.weatherAPIURL.searchParams.append("q", locationName);

    // units
    this.weatherAPIURL.searchParams.append("units", "metric");

    // appid 
    this.weatherAPIURL.searchParams.append("appid", API_KEY);

    console.log(this.weatherAPIURL.toString());
  }

  async invokeURL() {

    const responseObj = await fetch(this.weatherAPIURL.toString());

    const responseJSON = await responseObj.json();

    return responseJSON;
  }

}

export { WeatherAPI }