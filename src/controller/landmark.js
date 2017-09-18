import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import Landmark from '../model/landmark';


export default({ config, db }) => {
  let api = Router();

// '/v1/landmark/add'
api.post('/add', (req, res) => {
  let newMark = new Landmark();
  newMark.name = req.body.name;

  newMark.save(err => {
    if(err){
      res.send(err);
    }
    res.json({ message: "Landmark successfully documented!" });
  });
});

api.get('/', (req,res) => {
  Landmark.find({}, (err, landmarks) => {
    if (err) {
      res.send(err);
    }
    res.json(landmarks);
  });
});

return api;
}
