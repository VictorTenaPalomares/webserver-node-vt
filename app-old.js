
const http = require('node:http');

http.createServer((req, res) => {


    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Víctor'
    // };



    // Hay que serializar la respuesta al tipado correcto JSON , text plain, etc...
    // res.write(JSON.stringify(persona));
    // res.write('id, nombre\n');
    // res.write('1, Victor\n');
    // res.write('2, Corinne\n');
    // res.write('3, Enzo\n');
    // res.write('4, nombre\n');

    res.write('Hola Mundo');



    // si no no para
    res.end();

})
    .listen(8080);

console.log('Escuchando el puerto ', 8080);