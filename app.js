theAge = prompt("Enter an age less than 90(years):");

function lifeInWeeks(age) {
  if (age > 90) {
    alert("The age you entered is greater than 90, please try again");
  } else if (age == "") {
    alert("Your age can't be blank");
  } else {
    let years = 90 - age;
    let months = years * 12;
    let weeks = months * 4;
    let days = years * 365;
    alert(
      `You have ${days} days, ${weeks} weeks and ${months} months left till you are 90`
    );
  }
}

lifeInWeeks(theAge);
