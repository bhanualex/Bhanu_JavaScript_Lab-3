

import {WeatherAPI} from "./weather-api.js"

function testBuildURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("Japan");

}

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.buildURL("Japan");
  const responseJSON = await weatherAPIObj.invokeURL();

  console.log(responseJSON);

}
testInvokeURL();