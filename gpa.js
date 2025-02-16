// Function to get the grades from the input
function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    // Split the grades into an array and clean up any spaces
    const gradesArray = grades.split(",");
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    return cleanGrades;
  }
  
  // Function to lookup the GPA point value for each grade
  function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    return points;
  }
  
  // Function to calculate the GPA based on the grades
  function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2); // Round to two decimal places
  }
  
  // Function to display the GPA on the page
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = `Your GPA is: ${gpa}`;
  }
  
  // Click handler function when the button is clicked
  function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
  }
  
  // Adding event listener to the button
  document.querySelector("#submitButton").addEventListener("click", clickHandler);