//Realizado por Stiven Cuellar Mejia
//Ingeniero de Sistemas UdeM


//Opciones
const opt = {
    idCurTdeA: { //Identificador de los cursos de extensión del Tecnológico de Antioquia
        demand: true,
        alias: 'idCur'
    },
    nomIntCurTdeA: { //Nombre del interesado en los cursos de extensión del Tecnológico de Antioquia
        demand: true,
        alias: 'nomIntCur'
    },
    idIntCurTdeA: { //Identificador del interesado en los cursos de extensión del Tecnológico de Antioquia
        demand: true,
        alias: 'idIntCur'
    }
}

const yargs = require('yargs')
              .command('cursoExtensionTdeA', 'Consultar los cursos disponibles: ')
              .command('prematricula', 'Inscribir interesado: ', opt)
              .argv;

module.exports = {yargs};