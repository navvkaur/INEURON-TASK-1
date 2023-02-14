const dotnev = require('dotenv').config();
import { Request,Response,NextFunction} from "express";
const path = require('path');

const Details = require("../model/detail");


exports.addDetails=async (req:Request ,res:Response,next : NextFunction)=>{
    try {
      console.log(req.body)
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      
  console.log(name,email,message)
      if (!email) {
          throw new Error('Email is mandatory !')
      }
      const data = await Details.create({
          name:name,
          email:email,
          message:message
      })
  
      res.status(201).json({ data });
  } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
  }
}

exports.getDetails = async (req:Request ,res:Response,next : NextFunction)=>{
try{
    
   let detail = await  Details.findAll()
         
            res.status(200).json({details:detail});
      
    
} catch(err) {
    console.log(err);
    res.status(500).json({error : err})
}
}

exports.deleteDetails = async (req:Request ,res:Response,next : NextFunction)=>{
    try{
        const id = req.params.id;
         
        const user = Details.findAll({where:{id:id}});
        if(!user){
            console.log('This user does not exist.');
            return res.sendStatus(400);
        }
        await Details.destroy({where: {id:id}});
        res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.status(500).json({error : err})
        }
}
exports.editDetails= async (req:Request ,res:Response,next : NextFunction) => {
    try{
        
        const updatedname = req.body.name;
        const updatedemail = req.body.email;
        const updatedmessage = req.body.message;
        const id = req.params.id;
        console.log(id);
        let user = await Details.update(
            {
               name :updatedname,
            email:updatedemail,
           message:updatedmessage
            },
                {where:{id:id}})
                console.log(user);
                res.status(201).json({user}); 
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}