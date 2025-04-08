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