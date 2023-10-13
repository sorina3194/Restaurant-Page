import './attributes/style.css';

export function contact() {
  const content = document.querySelector('#content');
  content.innerHTML = "";

  const name = document.createElement('h1')
  name.innerHTML = "SOUL"
  name.setAttribute('id', 'name')
  content.appendChild(name)

  const reservation = document.createElement('h3')
  reservation.innerHTML = "Reservation"
  reservation.setAttribute('id', 'reservation')
  content.appendChild(reservation)

  const reserveBtn = document.createElement('button')
  reserveBtn.innerHTML = "Reserve Here"
  content.appendChild(reserveBtn)

  reserveBtn.addEventListener("click", function() {
      const formContainer = document.createElement("div");
      formContainer.innerHTML = '';
      formContainer.setAttribute('id', 'formContainer')

      const form = document.createElement("form");

      const firstNameInput = createInput("firstName", "text", "First Name");
      const lastNameInput = createInput("lastName", "text", "Last Name");
      const phoneNumberInput = createInput("phoneNumber", "tel", "Phone Number");
      const dateInput = createInput("reservationDate", "date", "Select a Date");

      form.appendChild(firstNameInput);
      form.appendChild(lastNameInput);
      form.appendChild(phoneNumberInput);
      form.appendChild(dateInput);
      
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);

      formContainer.appendChild(form);
      content.appendChild(formContainer);
  });

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
}
