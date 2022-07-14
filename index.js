import { createConnection } from 'mysql2'
import 'dotenv/config'

//Creando conexión
const conexion = createConnection(
    {
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE
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