const submit = document.querySelector(".buton");

submit.addEventListener("click", function (e) {
  //grab content from feet input
  let feet = document.querySelector("#feet");
  let inches = document.querySelector("#inches");
  const results = document.querySelector("#results");
  e.preventDefault();

  feet = parseInt(feet.value);
  inches = parseInt(inches.value);

  results.classList.remove("bg-info");
  results.classList.remove("text-info");
  results.classList.add("trans");
  if (isNaN(feet) || isNaN(inches)) {
    results.textContent = "Please enter a valid number!";
    if ((results.textContent = "Please enter a valid number!")) {
      trans = setTimeout(() => {
        results.classList.remove("trans");
        results.textContent = "";
        results.classList.add("bg-info");
        results.classList.add("text-info");
      }, 6000);
    }
  } else if (feet < 0) {
    results.textContent = "Feet value should not be negative value or invalid";
    if ((results.textContent = "Feet value is not negative value or invalid")) {
      trans = setTimeout(() => {
        results.classList.remove("trans");
        results.textContent = "";
        results.classList.add("bg-info");
        results.classList.add("text-info");
      }, 6000);
    }
  } else if (inches < 0) {
    results.textContent = "Please enter an inch value greater than 0";
    if ((results.textContent = "Please enter an inch value greater than 0")) {
      trans = setTimeout(() => {
        results.classList.remove("trans");
        results.textContent = "";
        results.classList.add("bg-info");
        results.classList.add("text-info");
      }, 6000);
    }
  } else {
    //make conversion to centimers
    //cm = inches * 2.54
    let totalInches = (feet * 12 + inches) * 2.54;
    results.textContent = `${totalInches} cm`;
    // document.querySelector('#feet').value = '';
    // document.querySelector('#inches').value = '';
  }
});
