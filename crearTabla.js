//Crear crear una tabla en nuestra BD
conexion.query('CREATE TABLE personas (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(200), apellido VARCHAR(200), edad INT)',(error, rows)=>{
    if(error) throw error
    console.log(rows)
})