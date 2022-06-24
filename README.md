## Form validation

Form validation in JavaScript using Regular Expressions. 

The project contains a registration form the user can fill out to create an account, entering a username, email, and password. Each input is validated with regular expressions following a set of rules:

- username: it must be between 5 - 15 characters long and contain only letters and numbers
- email: it must be a valid address, e.g. me@mydomain.com or me@domain.co.uk
- password: it must contain letters, numbers, @, _ or -, and be between 8 - 20 characters long

The validation occurs as the user is typing into the input (a feedback message is shown to help the user) and also when the user submits the form.

Regular Expressions:

```javascript
const patterns = {
  username: /^[a-z\d]{5,15}$/i,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]+(\.[a-z]+)?$/i,
  password: /^[\w@\-]{8,20}$/
};
```

### Link: 
- [Live app](https://julianachagas.github.io/form-validation/)
### Technologies
- HTML
- CSS
- JavaScript

### Concepts practiced

- DOM manipulation
- Regular Expressions (Regex)
- Events: click, input, submit
- `.preventDefault()` method
- Array methods: `forEach`, `every`, `push`

### Useful resources

- [freeCodeCamp: Learn JavaScript Form Validation](https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/)

- [Regular Expressions (RegEx) playlist - The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)

<br>

***
##### Made with 💜 by Juliana Chagas 