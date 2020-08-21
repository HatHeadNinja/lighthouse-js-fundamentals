/*
REQUIREMENTS:
Given a list of instructors and we will create a single object 
to organize them based on their course.

TEST INPUTS:
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

EXPECTED OUTPUTS:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/

const organizeInstructors = function(instructors) {
  console.log(instructors);
  
  let courses = {};
  let length = instructors.length;
  // Parse courses into new object
  // If course already exists don't add it
  for (let i = 0; i < length; i++) {
    if (instructors.course) {
      courses.name = instructors.course;
    }
    
  }

  // Iterate through new course object and find instructors in array provided by function

  // Return object
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));