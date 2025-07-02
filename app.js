const form = document.querySelector("form");
const ul = document.querySelector("ul");
const overlay = document.querySelector(".overlay");
const createUserBtn = document.getElementById("create__user");

function open() {
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
}

function close() {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
}

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = form.image.value;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const from = form.from.value;
  const job = form.job.value;
  const selected = document.querySelector(`input[name="gender"]:checked`);
  console.log(image, firstName, lastName, age, from, job, selected);
  ul.innerHTML += ` <li class="user__item">
          <img
            src="${image}"
            alt="this form img"
            class="user__img"
            width="150"
            height="150"
          />
          <h3 class="user__name">${firstName}, ${lastName}, ${age} age.</h3>
          <p class="user__from">From: ${from}</p>
          <p class="user__job">Job: ${job}</p>
          <p class="user__gender">Gender: ${selected.id}</p>
          <button class="user__delete">Delete</button>
        </li>`;
  close();
  form.reset();
});

ul.addEventListener("click", (e) => {
  e.target.classList == "user__delete" && e.target.parentElement.remove();
});
createUserBtn.addEventListener("click", open);
overlay.addEventListener("click", close);
document.addEventListener("keyup", (e) => {
  e.key == "Escape" && close();
});
