const router = require("express").Router();
const db = require("../models");
const api = require("../public/api");

router.get("/api/workouts", (req, res) =>{
    db.Workout.find({})
    .populate("exercises")
    .then(lastWorkout => {
        res.json(lastWorkout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

router.post("/api/workouts", (req, res) =>{
    db.Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

router.put("/api/workouts/:id", (req,res) =>{

});