const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000
// Connection 
mongoose.connect('mongodb://localhost:27017/Student', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(function () {
    console.log("Connection connected Successfully");
}).catch(function () {
    console.log("Connection Fail");
})

//Schema
const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        required:true
    },
    rollNo:{
        type:String,
        required:true
    }
    

});
//Model
const Student = mongoose.model('Student', StudentSchema);

//InsertMany
Student.insertMany([
    { firstName: 'Manoj',lastName:'kumar', age: 20,rollNo:'18Bca060'},
    { firstName: 'Rajan',lastName:'jha', age: 26,rollNo:'18Bca061'},
    { firstName: 'Manoranjan',lastName:'pandey', age: 19,rollNo:'62'},
    { firstName: 'Rahul',lastName:'kumar', age: 23,rollNo:'18Bca063'},
    { firstName: 'Harshit',lastName:'singh', age: 17,rollNo:'18Bca064'}
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});

//updateOne
// Student.updateOne({age:{$gte:23}}, 
//     {firstName:"ABCD"}, function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated Docs : ", docs);
//     }
// });

//deleteOne
// Student.deleteOne({ age:17 }).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });


//remove
// Student.remove({firstName:'Gourav'}, function (err, result) {
//     if (err){
//         console.log(err)
//     }else{
//         console.log("Result :", result) 
//     }
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})