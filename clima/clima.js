const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=429c539a6ccea82bc2b1c4d3fb588b5a`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}