const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import all models
const Users = require('../models/Users');
const WorkExperience = require('../models/WorkExperience');
const PostLikes = require('../models/PostLikes');
const TestQuestions = require('../models/TestQuestions');
const VideoSuggestions = require('../models/VideoSuggestions');
const PostComments = require('../models/PostComments');
const Mentors = require('../models/Mentors');
const McqTests = require('../models/McqTests');
const GlobePosts = require('../models/GlobePosts');
const Education = require('../models/Education');
const Chats = require('../models/Chats');
const Courses = require('../models/Courses');
const Colleges = require('../models/Colleges');
const AssessmentProgress = require('../models/AssessmentProgress');
const BasicInfo = require('../models/BasicInfo');
const Career = require('../models/Career');

// POST endpoint to create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email, password, firebaseUid } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: "Name, email, and password are required" 
      });
    }
    
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        error: "An account with this email already exists. Please sign in instead." 
      });
    }
    
    // Create new user
    const newUser = new Users({
      name,
      email,
      password,
      firebaseUid // Store Firebase UID for reference
    });
    
    const savedUser = await newUser.save();
    
    // Return success with user data (excluding password)
    res.status(201).json({
      success: true,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: "Failed to create account" });
  }
});

// GET endpoint to validate user by email and password
router.get('/users/email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.query;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required"
      });
    }
    
    // Find user by email
    const user = await Users.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        error: "No account found with this email. Please sign up first." 
      });
    }
    
    // Check password
    if (user.password !== password) {
      return res.status(401).json({ 
        success: false, 
        error: "Incorrect password. Please try again." 
      });
    }
    
    // Return success with user data (excluding password)
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error validating user:', error);
    res.status(500).json({ success: false, error: "Authentication error" });
  }
});

// Route to get all data from all collections
router.get('/all', async (req, res) => {
  try {
    const data = {
      users: await Users.find(),
      workExperience: await WorkExperience.find(),
      postLikes: await PostLikes.find(),
      testQuestions: await TestQuestions.find(),
      videoSuggestions: await VideoSuggestions.find(),
      postComments: await PostComments.find(),
      mentors: await Mentors.find(),
      mcqTests: await McqTests.find(),
      globePosts: await GlobePosts.find(),
      education: await Education.find(),
      chats: await Chats.find(),
      courses: await Courses.find(),
      colleges: await Colleges.find(),
      assessmentProgress: await AssessmentProgress.find(),
      basicInfo: await BasicInfo.find(),
      career: await Career.find()
    };
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get data from a specific collection
router.get('/:collection', async (req, res) => {
  try {
    const collection = req.params.collection;
    let model;
    
    switch(collection) {
      case 'users': model = Users; break;
      case 'workExperience': model = WorkExperience; break;
      case 'postLikes': model = PostLikes; break;
      case 'testQuestions': model = TestQuestions; break;
      case 'videoSuggestions': model = VideoSuggestions; break;
      case 'postComments': model = PostComments; break;
      case 'mentors': model = Mentors; break;
      case 'mcqTests': model = McqTests; break;
      case 'globePosts': model = GlobePosts; break;
      case 'education': model = Education; break;
      case 'chats': model = Chats; break;
      case 'courses': model = Courses; break;
      case 'colleges': model = Colleges; break;
      case 'assessmentProgress': model = AssessmentProgress; break;
      case 'basicInfo': model = BasicInfo; break;
      case 'career': model = Career; break;
      default: return res.status(400).json({ error: 'Invalid collection name' });
    }

    const data = await model.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;