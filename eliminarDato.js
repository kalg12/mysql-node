/* Eliminar usuario de una tabla */
conexion.query('DELETE FROM personas WHERE id = 1', (error, fila)=>{
    if(error) throw error
    console.log(`Se elimino el usuario con id: ${fila.insertId}`)
})