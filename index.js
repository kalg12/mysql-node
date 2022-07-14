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

