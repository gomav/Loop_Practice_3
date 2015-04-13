// Data Set

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// Proble 1
for(var i=0; i<students.length; i++) {
  console.log(students[i].name);
}

//  Problem 2
for(var i=0; i<students.length; i++) {
  console.log(students[i].age);
}

// Problem 3
for(var i=0; i<students.length; i++) {
  console.log(students[i].name + ', ' + students[i].city);
}

// Problem 4
for(var i=0; i<students.length; i++) {
  console.log(students[i].name + " is from Boulder");
}

// Problem 5
for(var i=0; i<students.length; i++) {
  if (students[i] === students[1] || students[i] === students[students.length-3]){
    console.log(students[i].name + " is older than 25");
  }

}
