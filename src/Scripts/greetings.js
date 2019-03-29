document.getElementById("t1").innerHTML = greeting();

function greeting(name = "Anonymous") {
  return "Hello " + name;
}
