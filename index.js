//Realizado por Stiven Cuellar Mejia
//Ingeniero de Sistemas UdeM

//Creación de constante para vincular archivo de datos
const { cursoExtensionTdeA, obtenerCursoPorId } = require('./datos');

//Creación de constante para vincular archivo
const { yargs } = require('./archivo');

//Creación de constante para exportar archivo plano
const fs = require('fs');

//Procedimiento para validar los argumentos ingresados por el usuario que desa consultar los cursos de extensión que tiene disponibles
//el Tecnologico de Antioquia
const iniciarProceso = (yargs, cursoExtensionTdeA) => {
    if (yargs._[0] === 'cursoExtensionTdeA') {

        imprimirCursosTdeA(cursoExtensionTdeA);

    } else if(yargs._[0] === 'prematricula') {
        const cursoExtensionTdeA = obtenerCursoPorId(yargs.idCurTdeA);
        prematriculaArchivo(cursoExtensionTdeA, yargs.nomIntCurTdeA, yargs.idIntCurTdeA);

    } else {
        console.log('\nEl proceso de consulta se debe iniciar de la siguiente forma: ');
        console.log('\n>> Para listar los cursos digite: node index cursoExtensionTdeA');        
        console.log('\n>> Para iniciar proceso de inscripción digite: node index prematricula');  
    }
}

//Procedimiento para imprimir los cursos de extensión disponibles para prematricula
const imprimirCursosTdeA = (cursoExtensionTdeA) => {
    let incremento = 0;
    let posicion = setInterval(() => {
        const {id, nombre, semanas, inversion} = cursoExtensionTdeA[incremento];
        console.log('\n>> Codigo del Curso: '+ id + 
                    '\n>> Nombre del Curso: ' + nombre + 
                    '\n>> Duración del curso (Semanas): ' + semanas + 
                    '\n>> Valor a Invertir (COP): $' + inversion +'\n');
        
        incremento++;    
        
        if (incremento === cursoExtensionTdeA.length) {
            clearInterval(posicion);
        }

    }, 2000);
}

//Procedimiento para la creación del archivo de personas prematriculadas en los cursos de extensión del Tecnologico de Antioquia
const prematriculaArchivo = (cursoExtensionTdeA, nomIntCurTdeA, idIntCurTdeA) => {
    textInf = 'Proceso de prematricula para '+ nomIntCurTdeA 
            + ' identificado con el número ' + idIntCurTdeA 
            + ' en el curso ' + cursoExtensionTdeA.nombre
            + ' Gracias por elegir nuestra institución';

    fs.writeFile('prematriculadosTdeA.txt', textInf, (error) => {
        console.log('error',error);
    });    
    console.log('\nPrematricula realizada exitosamente');
    console.log('\nSe ha exportado el archivo prematriculadosTdeA como comprobante de su prematricula');
}

//llamado de función para iniciar proceso de inscripción
iniciarProceso(yargs, cursoExtensionTdeA);
