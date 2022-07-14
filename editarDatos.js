/* Editar usuarios de una tabla */
conexion.query(' UPDATE personas SET nombre = "Juan" WHERE id = 1', (error, fila)=>{
    if(error) throw error
    console.log(`Se edito el usuario con id: ${fila.insertId}`)
})
