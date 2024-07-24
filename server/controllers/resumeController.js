const mongoose = require('mongoose')

const resumeSchema = require('../models/ResumeSchema')






exports.PostResume = function(req, res, next){

const savedResume = new resumeSchema({
 Name :  req.body.Name,
 Profile: req.body.Profile,
 ProfessionalSkills : req.body.ProfessionalSkills,
 Email : req.body.Email,
 Addresss : req.body.Addresss,
 PersonalSkills: req.body.PersonalSkills,
 DateOfBirth : req.body.DateOfBirth,
 Experience : req.body.Experience,
 Education : req.body.Education,
 Referees : req.body.Referees,
 JobTitle: req.body.JobTitle

})



}


exports.GetResume = function(req, res, next){


}



exports.UpdateResume = function(req, res, next){


}


exports.DeleteResume = function(req, res, next){


}