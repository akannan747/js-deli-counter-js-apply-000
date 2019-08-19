function takeANumber(line, new_customer) {
  //line.push(new_customer);
  return "Welcome, " + new_customer + ". You are number " + line.push(new_customer) + " in line.";
}

let c_number = 0;

function takeANumber2(line) {
  line.push(++c_number);
  return "Welcome, you are number " + c_number + "!";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  let response;
  if (line.length === 0) {
    response = "The line is currently empty.";
  } else {
    response = "The line is currently: " + lineToString(line);
  }
  return response;
}

// helper function
function lineToString(line) {
  let string = "";
  for (var i = 0; i < line.length; i++) {
    string = string + (i+1).toString() + ". " + line[i];
    if (i < line.length - 1) {
      string += ', ';
    }
  }
  return string;
}