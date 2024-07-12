const form = document.getElementById("user-form");

const foods = document.getElementsByName("food");
const gender = document.getElementsByName("gender");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const state = document.getElementById("state");
const country = document.getElementById("country");
const pincode = document.getElementById("pincode");

const tableBody = document.getElementById("table-body");

const data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("foods-invalid").style.display = "none";
  document.getElementById("gender-invalid").style.display = "none";
  form.classList.remove("was-validated");
  let foodArr = [];
  let genderVal = "";
  foods.forEach((food) => {
    if (food.checked) foodArr.push(food.value);
  });

  gender.forEach((el) => {
    if (el.checked) genderVal = el.value;
  });
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
  } else if (genderVal.length === 0) {
    document.getElementById("gender-invalid").style.display = "block";
  } else if (foodArr.length < 2) {
    document.getElementById("foods-invalid").style.display = "block";
  } else {
    console.log(fname.value);
    let obj = {
      firstName: fname.value,
      lastName: lname.value,
      email: email.value,
      country: country.value,
      state: state.value,
      pincode: pincode.value,
      foods: foodArr,
      gender: genderVal,
    };
    data.push(obj);

    form.reset();

    data.forEach((el) => {
      tableDataHTML = `<td>${el.firstName}</td>
      <td>${el.lastName}</td>
      <td>${el.email}</td>
      <td>${el.pincode}</td>
      <td>${el.gender}</td>
      <td
        ><ul class="list-group">
        ${el.foods
          .map(
            (el) =>
              `<li class="list-group-item text-white" style="background-color:transparent; border:none">${el}</li>`
          )
          .join("")}
        </ul></td
      >
      <td>${el.state}</td>
      <td>${el.country}</td>`;
      tableBody.insertAdjacentHTML("beforeend", tableDataHTML);
    });
  }
});
