const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) =>{
    Workout.find()
        .then((workouts) => {
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
            console.log(err);
        })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
        console.log(err);
    })
})

router.post("/api/workouts", ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
        console.log(err);
    })
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}},
        {new: true, runValidators: true}
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
            console.log(err);
        });
});



module.exports = router;