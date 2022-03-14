//fs: filesystem
const fs = require('fs');
//const db = require('../util/database');


var caricaturas = [];


//Para leer las caricaturas
fs.readFile('./tops/caricaturas.json', (err, data) => {
    if (err) throw err;
    caricaturas = JSON.parse(data);
    console.log(caricaturas);
});


module.exports = class Caricaturas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        caricaturas.push(this);
        let cari = JSON.stringify(caricaturas);
        fs.writeFileSync('./tops/caricaturas.json', cari, 'utf8');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllCaricaturas() {
        return caricaturas;
    }

    
}

// const db = require('../../util/database');


// module.exports = class Caricaturas{

//     //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
//     constructor(nuevo_nombre,nueva_sinopsis,nueva_imagen) {
//         this.nombre = nuevo_nombre;
//         this.sinopsis = nueva_sinopsis;
//         this.imagen = nueva_imagen;
//     }

//     //Este método servirá para guardar de manera persistente el nuevo objeto. 
//     save() {
//         return db.execute('INSERT INTO caricaturas (nombre, sinopsis,imagen) VALUES (?, ?,?)',
//         [this.nombre, this.sinopsis,this.imagen]
//     );
//     }

//     //Este método servirá para devolver los objetos del almacenamiento persistente.
//     static fetchAllCaricaturas() {
//        console.log(db.execute('SELECT * FROM caricaturas'));
//         return db.execute('SELECT * FROM caricaturas');
//     }
 
// }