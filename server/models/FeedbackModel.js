import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  tweetId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "savedTweet",
    required: true,
    unique:true
  },
  feedbackText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "users", // Reference to the 'User' model
  //   required: true,
  // },
});

export const FeedbackModel = mongoose.model("Feedback", feedbackSchema);
