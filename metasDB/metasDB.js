const db = require('../configuracionDB/conectarDB')


function pedirMarca (callback) {
    db.any('SELECT NOW()')
        .then(data => {
            callback(null, data)
        })
        .catch(error => {
            callback(error)
        })
}

function pedirMetas (tabla,callback) {
    db.any(`SELECT * FROM ${tabla}`)
        .then(data => {
            callback(null, data)
        })
        .catch(error => {
            callback(error)
        })
}

function pedirMeta (tabla,id,callback) {
    db.any(`SELECT * FROM ${tabla} WHERE id = ${id}`)
        .then(([data]) => {
            callback(null, data)
        })
        .catch(error => {
            callback(error)
        })
}
function crearMeta (tabla,meta,callback) {
    const llaves = Object.keys(meta)
    const nombre_columna = llaves.join()
    const valores = llaves.map((llave) => { 
        if(meta[llave] != ''){return `'${meta[llave]}'`}else{return 'null'}}).join()

    db.any(`INSERT INTO ${tabla} (${nombre_columna}) 
            VALUES (${valores}) RETURNING * ;`)
        .then(([data]) => {
            callback(null, data)
        })
        .catch(error => {
            callback(error)
        })
}
function actualizarMeta (tabla,meta,callback) {
    const llaves = Object.keys(meta)
    const claves_valores = llaves.map((llave) => {return `${llave}=${meta[llave] != null 
        ? `'${meta[llave]}'`: null}`}).join()
    
    db.any(` update ${tabla} set ${claves_valores} where id = ${meta.id} RETURNING * ;`)
        .then(([data]) => {
            callback(null, data)
        })
        .catch(error => {
            callback(error)
        })
}
function borrarMeta (tabla,id,callback) {

    db.any(`delete from ${tabla} where id=${id};`)
        .then(([data]) => {
            callback(null, data)
        })*/
        .catch(error => {
            callback(error)
        })
}
module.exports = {pedirMarca,pedirMetas,pedirMeta,crearMeta,actualizarMeta,borrarMeta}
