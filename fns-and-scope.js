//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
//test comment

function isTyler(name){
  if(name === 'Tyler'){
    return true;
  } else{
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  var name = prompt("Enter your name: ");
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
  var name = getName();
  alert("Welcome, " + name);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //A parameter is a placeholder set up in a function and an argument is the data that is passed into that placeholder.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Undefined
  //NaN
  //Null
  //''
  //0
  //false
  // To check if something is falsy, pass it through an if statement with nothing else.  If it returns a falsy value, then it's falsy.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Barry";
}
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = function(){
  myName();
}

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
  return function(){
    return "Barry";  
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();