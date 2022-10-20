// I want to use the inquirer package to ask the user a series of questions that I THEN want to use to generate an html file
const inquirer = require('inquirer');
const fs = require('fs');

// I want to have a function that generates markdown using the answers from the inquirer.prompt

const genHtml= ({name, location, github, linkedin, food, hobby}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <p class="lead">My favorite food is ${food}.</p>
    <p class="lead">My favorite hobby is ${hobby}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is <a href="https://github.com/${github}" target="_blank">${github}</a></li>
      <li class="list-group-item">LinkedIn: <a href="https://www.linkedin.com/in/${linkedin}" target="_blank">${linkedin}</a></li>
    </ul>
  </div>
</div>
</body>
</html>`

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?'
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?'
    },
    {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn?'
    },
]).then((answers)=>{
    // console.log(answers)
    const htmlWrite = genHtml(answers);
    fs.writeFile(`./team/${answers.name}.html`, htmlWrite, (err)=>{
        err ? console.log(err) : console.log("Your file was created! Check your directory!")  
    })
})
