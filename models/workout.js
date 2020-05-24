const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trime: true,
                    required: "Enter Excercise Type."
                },
                name: {
                    type: String, 
                    trim: true,
                    required: "Enter an excercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter the durations of excercise"
                },
                distance: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;