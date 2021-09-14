import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

const myDB = mysql.createPool(
    {host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password: 'ravi123',
    database: 'edgytest'    
}

)

app.get("/", (req, res) => {
  let myQuery = `SELECT * FROM data_nilai`
myDB.query(myQuery,(error,result)=>{
    if (error){
        return res.status(404).json(error)
    }
    return res.status(200).json(result)


})
});




let PORT = process.env.PORT || 5004;
app.listen(PORT, () => `Server running on port ${PORT} 🔥`);