import './attributes/style.css';
import './attributes/contact.css';

export function contact() {
  const content = document.querySelector('#content');
  content.innerHTML = "";

  const name = document.createElement('h1')
  name.innerHTML = "SOUL"
  name.setAttribute('id', 'name')
  content.appendChild(name)

  const reserveBtn = document.createElement('button')
  reserveBtn.innerHTML = "Reserve a Table Here"
  reserveBtn.setAttribute('id', 'reserveBtn')
  content.appendChild(reserveBtn)
  const reservationTimes = ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]; // Add more options as needed

  reserveBtn.addEventListener("click", function() {
    const existForm = document.getElementById("formContainer")
    if (existForm) {
      return
    }

    const formContainer = document.createElement("div");
    formContainer.setAttribute('id', 'formContainer')

    formContainer.innerHTML = '';
    const form = document.createElement("form");
    form.setAttribute('id', 'form')
    form.innerHTML = '';

    const firstNameInput = createInput("firstName", "text", "First Name");
    const lastNameInput = createInput("lastName", "text", "Last Name");
    const phoneNumberInput = createInput("phoneNumber", "tel", "Telephone");
    const dateInput = createInput("reservationDate", "date", "Select a Date");

    const timeSelect = document.createElement("select");
    timeSelect.setAttribute('id', 'reservationTime');
    timeSelect.required = true;

    reservationTimes.forEach(time => {
      const option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
  });

    form.appendChild(firstNameInput);
    form.appendChild(lastNameInput);
    form.appendChild(phoneNumberInput);
    form.appendChild(dateInput);
    form.appendChild(timeSelect);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.setAttribute('id', 'submit')
    form.appendChild(submitButton);
    form.addEventListener("submit",confirmation)

    formContainer.appendChild(form);
    content.appendChild(formContainer);
  });

  function confirmation(e) {
    e.preventDefault(); // Prevent the form from submitting

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const reservationTime = document.getElementById("reservationTime").value;

    const confirmationText = `Thank you, ${firstName} ${lastName}! Your reservation for ${reservationDate} at ${reservationTime} has been confirmed. We will contact you at ${phoneNumber} if there are any issues.`;
    window.confirm(confirmationText)

    const formContainer = document.getElementById('formContainer')
    formContainer.remove()
  };

  function createInput(id, type, label) {
      const inputDiv = document.createElement("div");
      const inputLabel = document.createElement("label");
      inputLabel.for = id;
      inputLabel.textContent = label;
      const input = document.createElement("input");
      input.id = id;
      input.type = type;
      input.required = true;
      inputDiv.appendChild(inputLabel);
      inputDiv.appendChild(input);
      return inputDiv;
  }

  const description = document.createElement('div');
  description.innerHTML = "For further questions please contact us at :"

  const description1 = document.createElement('p');
  description1.innerHTML = "+69 1234 5678"

  const description2 = document.createElement('p');
  description2.innerHTML = "soulRestaurant@email.com"

  description.appendChild(description1)
  description.appendChild(description2)

  content.appendChild(description)
}
