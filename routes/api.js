var express = require('express');
var router = express.Router();
var path = require('path');

var users = require('../models/controller.users');
var Courses = require('../models/courses');

// Useable functions
// Formatting date to 01:12 at 21/03/2015
function formatTime(){
    var date = new Date();

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    day = (day<10) ? "0"+day : day;
    monthIndex = (monthIndex<10) ? "0"+monthIndex : monthIndex;
    hours = (hours<10) ? "0"+hours : hours;
    minutes = (minutes<10) ? "0"+minutes : minutes;

    date = hours+":"+minutes+" at "+day+"/"+monthIndex+"/"+year;
    return date;
}
// Capitalizing first letter
function capitalize(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Here we have API main entrance');
});

// COURSES ROUTES
router.route('/courses')
    .get(function(req, res) {
        Courses.find(function(err, courses) {
            if (err) res.send(err);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json(courses);
        });
    })
    .post(function(req, res) {
        var course = new Courses();

        course.title = req.body.title.toLowerCase();
        course.description = req.body.description.toLowerCase();
        course.author = req.body.author.toLowerCase();
        course.chapters = [{
            cName: "Intro",
            lection: "Text Lection",
            practice: "Text Practice",
            test: "Text Test",
            result: 0
        }];
        course.dataPublished = formatTime();
        course.dataChanged = course.dataPublished;
        course.totalResult = 0;

        course.save(function(err) {
            if (err) res.send(err);
            res.json({message: "Course created", course: course.title, author: course.author})
        });
});

router.route('/courses/:title')
    .get(function(req, res) {
        Courses.findOne({ title: req.params.title }, function(err, course) {
            if (err) res.send(err);
            res.json(course);
        });
    })
    .put(function(req, res) {
        Courses.findOne({ title: req.params.title }, function(err, course) {
            if (err) res.send(err);

            if (req.body.title) course.title = req.body.title.toLowerCase();
            if (req.body.description) course.description = req.body.description.toLowerCase();
            if (req.body.author) course.author = req.body.author;
            course.dataChanged = formatTime();

            course.save(function(err) {
                if (err) res.send(err);
                res.json({ message: 'Course '+course.title+'updated!' });
            });
        });
    })
    .delete(function(req, res) {
        Courses.remove({
            title: req.params.title
        }, function(err, course) {
            if (err) return res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
});
router.route('/courses/author/:author')
    .get(function(req, res) {
        var coursesAll = [];
        Courses.find({ author: req.params.author }, function(err, courses) {
            if (err) res.send(err);
            courses.forEach(function(course){
                coursesAll.push(capitalize(course.title));
            });
            res.json(coursesAll);
        });
});

router.route('/user/register')
  .post(users.register);
router.route('/user/login')
  .get(users.getLogin)
  .post(users.login);

module.exports = router;
