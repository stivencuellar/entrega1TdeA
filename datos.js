//Realizado por Stiven Cuellar Mejia
//Ingeniero de Sistemas UdeM


//Listado de cursos que están disponibles para proceso de prematricula en extensión del TdeA.
const cursoExtensionTdeA = [{
        id: 9999,
        nombre: 'Fundamentos Inteligencia Artificial',
        semanas: '8 semanas',
        inversion: 1300000
    }, {
        id: 9998,
        nombre: 'Conociendo Internet of Things',
        semanas: '6 semanas',
        inversion: 930000
    }, {
        id: 9997,
        nombre: 'Fundamentos del Blockchain',
        semanas: '8 semanas',
        inversion: 1000000
    }, {
        id: 9996,
        nombre: 'Node.JS',
        semanas: '4 semanas',
        inversion: 500000
    }, {
        id: 9995,
        nombre: 'Ingles Avanzado',
        semanas: '6 semanas',
        inversion: 500000
    }
];

//Funcionalidad para hacer búsqueda de cursos de extensión disponibles
const obtenerCursoPorId = (idCurTdeA) => cursoExtensionTdeA.find(cursoTdeA => cursoTdeA.id === idCurTdeA);

module.exports = { cursoExtensionTdeA, obtenerCursoPorId };