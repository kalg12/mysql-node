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

//Insertar datos a una tabla de nuestra BD
conexion.query('INSERT INTO personas SET ?',{
    nombre: "Kevin",
    apellido: "Luciano",
    edad:27
}, (error, rows) => {
    if(error) throw error
    console.log(rows)
})