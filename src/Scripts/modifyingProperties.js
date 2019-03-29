var gens = {
  fname: "Fname",
  lname: "Lname",
  cell: {
    home: [],
    mobile: ["9088836373", "9393327262"]
  },
  email: "fname.lname@google.com",
  address: {
    line1: "test block", //spread arr
    city: "test city",
    state: "test state",
    zip: "303328",
    country: "TestCountry"
  },
  exit: "",
  assets: [
    {
      id: "10202",
      name: "asset1",
      date: "12.3.2004",
      type: "delicate",
      category: "v2",
      returnDate: "30.3.2004"
    },
    {
      id: "10203",
      name: "asset2",
      date: "12.3.2004",
      type: "delicate",
      category: "v1",
      returnDate: "30.3.2004"
    },
    {
      id: "10205",
      name: "asset1",
      date: "12.3.2004",
      type: "delicate",
      category: "v3",
      returnDate: "30.3.2004"
    },
    {
      id: "10207",
      name: "asset1",
      date: "12.3.2004",
      type: "delicate",
      category: "v2",
      returnDate: ""
    }
  ]
};

document.getElementById("t1").innerHTML = returnAsset();
const returnAsset = (function() {
  "use strict";
  return function returnAsset({ exit }) {
    return "Today";
  };
})();

const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
};
