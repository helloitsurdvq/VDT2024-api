import mongoose from "mongoose";

const traineeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Unknown"],
    },
    school: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Trainee = mongoose.model("Trainee", traineeSchema);
