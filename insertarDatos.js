//Insertar datos a una tabla de nuestra BD
conexion.query('INSERT INTO personas SET ?',{
    nombre: "Jose Luis",
    apellido: "Estrada Vargas",
    edad:22
}, (error, rows) => {
    if(error) throw error
    console.log(rows)
})