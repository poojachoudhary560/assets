document.getElementById("t1").innerHTML = test();

const createProfile = (name, age, gender) => ({
  name,
  age,
  gender
});

function test() {
  Object.keys(createProfile("test", 20, "M"));
}
