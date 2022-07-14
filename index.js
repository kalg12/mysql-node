import { createConnection } from 'mysql2'

//Creando conexión
const conexion = createConnection(
    {
        host: "sql521.main-hosting.eu",
        user: "u413489667_ejemplo",
        password: "Ejemplo2022",
        database: "u413489667_ejemplo"
    }
)

/* Consulta de todos los usuarios de una tabla en mi BD */
conexion.query('SELECT * FROM personas', (error, fila)=>{
    if(error) throw error
    fila.forEach(
        fila => console.log(fila)
    )
    console.log(`Tu tabla tiene un total de: ${fila.length} datos`)
})