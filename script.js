//open modal
const openModalButton = document.querySelector('#open-modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', () => {
  modalWrapper.classList.add('show');
});

closeModalButton.addEventListener('click', () => {
  modalWrapper.classList.remove('show');
});

window.addEventListener('click', e => {
  if (e.target === modalWrapper) {
    modalWrapper.classList.remove('show');
  }
});

//form validation

const form = document.querySelector('#signup-form');
const feedbacks = document.querySelectorAll('.feedback');
const successIcons = document.querySelectorAll('.success-icon');
const failureIcons = document.querySelectorAll('.failure-icon');
const patterns = {
  username: /^[a-z\d]{5,15}$/i,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]+(\.[a-z]+)?$/i,
  password: /^[\w@\-]{8,20}$/
};
const inputs = form.querySelectorAll('input');

function invalidInputStatus(input, inputIndex) {
  input.setAttribute('class', 'invalid');
  successIcons[inputIndex].classList.remove('show');
  failureIcons[inputIndex].classList.add('show');
  input.focus();
}

function validInputStatus(input, inputIndex) {
  input.setAttribute('class', 'valid');
  successIcons[inputIndex].classList.add('show');
  failureIcons[inputIndex].classList.remove('show');
}

function validateInput(input, inputIndex, pattern) {
  const doesPatternMatch = pattern.test(input.value);
  if (!doesPatternMatch) {
    invalidInputStatus(input, inputIndex);
    return false;
  } else {
    validInputStatus(input, inputIndex);
    return true;
  }
}

//live feedback: will test the pattern each time the user types a new character
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    validateInput(input, index, patterns[input.id]);
  });
});

//toggle password visibility
const togglePasswordButton = document.querySelector('.toggle-password');
form.password.addEventListener('input', () => {
  togglePasswordButton.classList.add('show');
});
togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  let iconClass;
  if (form.password.type === 'password') {
    form.password.type = 'text';
    iconClass = 'fa-eye';
    togglePasswordButton.setAttribute('aria-pressed', 'true');
  } else {
    form.password.type = 'password';
    iconClass = 'fa-eye-slash';
    togglePasswordButton.setAttribute('aria-pressed', 'false');
  }
  togglePasswordButton.firstElementChild.setAttribute(
    'class',
    `far ${iconClass}`
  );
}

//submit event: check all the inputs when submitting the form, show feedback div of each input
form.addEventListener('submit', e => {
  const validationResult = [];
  inputs.forEach((input, index) => {
    const inputValidation = validateInput(input, index, patterns[input.id]);
    validationResult.push(inputValidation);
  });
  const areAllInputsValid = validationResult.every(item => item === true);
  if (!areAllInputsValid) {
    e.preventDefault();
  }
});
