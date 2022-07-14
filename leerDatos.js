/* Consulta de todos los usuarios de una tabla en mi BD */
conexion.query('SELECT * FROM personas', (error, fila)=>{
    if(error) throw error
    fila.forEach(
        fila => console.log(fila)
    )
    console.log(`Tu tabla tiene un total de: ${fila.length} datos`)
})