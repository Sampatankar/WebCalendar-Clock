//FUNCTION TO SHOW THE DAY:
function showDate() {
  //Initialise a string:
  let str = "";

  //Create a variable calling the date method so we can take bits of it as needed:
  let now = new Date();

  //Create an array with the full day names:
  let days = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  //Create an array with the right adjective for the date:
  let adj = new Array("st", "nd", "rd", "th");

  //Create an array with the full month names:
  let months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  //Create a function to add on the adjective for the right date:
  function dateAdj() {
    if (now.getDate() === 1 || now.getDate() === 21 || now.getDate() === 31) {
      return adj[0];
    } else if (now.getDate() === 2 || now.getDate() === 22) {
      return adj[1];
    } else if (now.getDate() === 3 || now.getDate() === 23) {
      return adj[2];
    } else {
      return adj[3];
    }
  }

  //Create the string that takes all the arrays, variables, and functions together into a string, and updates the date:
  str +=
    days[now.getDay()] +
    ", " +
    now.getDate() +
    dateAdj() +
    " " +
    months[now.getMonth()] +
    " " +
    now.getFullYear();

  //Append the string to the <p> of class "mydate":
  document.getElementById("mydate").innerHTML = str;
}

//Run the function showDate every second:
setInterval(showDate, 500);

//FUNCTION TO SHOW THE TIME:
function doTime() {
  let str = "";

  let now = new Date();

  //three functions - one being triggered won't trigger the others:
  function addZeroS() {
    if (now.getSeconds() < 10) {
      return "0";
    } else {
      return "";
    }
  }

  function addZeroM() {
    if (now.getMinutes() < 10) {
      return "0";
    } else {
      return "";
    }
  }

  function addZeroH() {
    if (now.getHours() < 10) {
      return "0";
    } else {
      return "";
    }
  }

  str +=
    addZeroH() +
    now.getHours() +
    ":" +
    addZeroM() +
    now.getMinutes() +
    ":" +
    addZeroS() +
    now.getSeconds();

  document.getElementById("mytime").innerHTML = str;
}

setInterval(doTime, 500);
