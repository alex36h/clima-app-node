const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la coudad para obtener el clima',
        demand: true

    }
}).argv;


//clima.getClima(35, 139)
//    .then(console.log)
//   .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const temp = await clima.getClima(35, 139);
        return `El clima de ${direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);