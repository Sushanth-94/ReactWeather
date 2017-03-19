var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ef351de63e33053132f5dda5a6fad421&units=metric';

module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      debugger;
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }
      else{
        return response.data.main.temp;
      }
    },function(error){
      throw new Error(error.data.message);
    });
  }
};
