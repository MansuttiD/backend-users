const express = require('express')

const db = require('./utils/database')

const app = express();

const port = 9000

const userRouter = require('./users/users.router')

db.authenticate()
    .then(() => {
        console.log('Database Authenticated!');
    })
    .catch((err) => {
        console.log(er);
    })

    db.sync()
    .then(()=> {
        console.log('Database Synced');
    })
    .catch((err) => {
        console.log(err);
    })


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
