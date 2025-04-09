const User = require('../models/Users');
const AssessmentProgress = require('../models/AssessmentProgress');
const BasicInfo = require('../models/BasicInfo');
const Career = require('../models/Career');
const Chats = require('../models/Chats');
const Colleges = require('../models/Colleges');
const Courses = require('../models/Courses');
const Education = require('../models/Education');
const GlobePosts = require('../models/GlobePosts');
const McqTests = require('../models/McqTests');
const Mentors = require('../models/Mentors');
const PostComments = require('../models/PostComments');
const PostLikes = require('../models/PostLikes');
const TestQuestions = require('../models/TestQuestions');
const VideoSuggestions = require('../models/VideoSuggestions');
const WorkExperience = require('../models/WorkExperience');
const mongoose = require('mongoose');

exports.getAllDetails = async (req, res) => {
  try {
    const users = await User.aggregate([
      { $lookup: { from: "assessment_progress", localField: "_id", foreignField: "user_id", as: "assessment_progress" } },
      { $lookup: { from: "basic_info", localField: "_id", foreignField: "user_id", as: "basic_info" } },
      { $lookup: { from: "education", localField: "_id", foreignField: "user_id", as: "education" } },
      { $lookup: { from: "globe_posts", localField: "_id", foreignField: "user_id", as: "globe_posts" } },
      { $lookup: { from: "mcq_tests", localField: "_id", foreignField: "user_id", as: "mcq_tests" } },
      { $lookup: { from: "work_experience", localField: "_id", foreignField: "user_id", as: "work_experience" } },
      { $lookup: { from: "chats", localField: "_id", foreignField: "user_id", as: "chats" } },
      { $lookup: { from: "post_comments", localField: "_id", foreignField: "user_id", as: "post_comments" } },
      { $lookup: { from: "post_likes", localField: "_id", foreignField: "user_id", as: "post_likes" } }
    ]);

    const career = await Career.find();
    const colleges = await Colleges.find();
    const courses = await Courses.find();
    const mentors = await Mentors.find();
    const test_questions = await TestQuestions.find();
    const video_suggestions = await VideoSuggestions.find();

    const aggregatedDetails = {
      users,
      career,
      colleges,
      courses,
      mentors,
      test_questions,
      video_suggestions
    };

    console.log(aggregatedDetails);
    res.json(aggregatedDetails);
  } catch (error) {
    console.error('Error getting aggregated details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = await require('../models/Users').aggregate([
      { $match: { _id: mongoose.Types.ObjectId(userId) } },
      { $lookup: { from: "assessment_progress", localField: "_id", foreignField: "user_id", as: "assessment_progress" } },
      { $lookup: { from: "basic_info", localField: "_id", foreignField: "user_id", as: "basic_info" } },
      { $lookup: { from: "education", localField: "_id", foreignField: "user_id", as: "education" } },
      { $lookup: { from: "globe_posts", localField: "_id", foreignField: "user_id", as: "globe_posts" } },
      { $lookup: { from: "mcq_tests", localField: "_id", foreignField: "user_id", as: "mcq_tests" } },
      { $lookup: { from: "work_experience", localField: "_id", foreignField: "user_id", as: "work_experience" } },
      { $lookup: { from: "chats", localField: "_id", foreignField: "user_id", as: "chats" } },
      { $lookup: { from: "post_comments", localField: "_id", foreignField: "user_id", as: "post_comments" } },
      { $lookup: { from: "post_likes", localField: "_id", foreignField: "user_id", as: "post_likes" } }
    ]);
    if(!userData.length){
      return res.status(404).json({ error: "User not found" });
    }
    console.log("User data:", userData[0]);
    res.json(userData[0]);
  } catch (error) {
    console.error('Error getting user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};