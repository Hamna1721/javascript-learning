async function getWeatherData(){
    // const APIKEY = '1bdb5ea1e7609b63c1a9d1b5b6eee6a6';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.855112&lon=67.0079286&appid=1bdb5ea1e7609b63c1a9d1b5b6eee6a6`);
    const data = await res.json();
    console.log(data);
}

getWeatherData()