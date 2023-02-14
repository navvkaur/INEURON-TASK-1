import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import path = require('path')
const sequelize = require('./util/database')
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
import Router from './routes/routes'
const bodyParser = require('body-parser');

app.use(bodyParser.json({ extended: false}));
dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }
 
 app.use(cors({
  origin:'http://127.0.0.1:5500'
}));


// app.use('/', (req, res) =>   res.sendFile(path.join(__dirname,'./views/design.html')));
app.use(Router);

 sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
})



