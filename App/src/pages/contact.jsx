
import { useState } from 'react';


// Helper functions to be used later
// import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {

  // Set all variables to 0 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // something is doing this anyway with email

  const handleInputChange = (e) => {

    // const { target } = e;
    const target = e.target
    console.log(target)
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
       
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!inputValue) {
      setErrorMessage('No inputValue');
    }
  };

  const handleBlur = (e) => {
    const target = e.target;
    const inputValue = target.value;

    // Check if the field is empty when the user leaves the input field
    if (!inputValue) {
      setErrorMessage(`Please enter your ${target.placeholder}`);
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields required to send a message");
      return
    }
    
    alert(`Hello ${name}, welcome to my portfolio!`);

    // Clears form
    setEmail('');
    setName('');
    setMessage('');

  };

  return (
    <section id='contact'>

      <div className="container">
        <h1>Hello {name}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
        <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="password"
            placeholder="Type your message here"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    </section>

  );
}

export default Contact;

// add functionality to put the error message as a p element below the form when an error triggers.  use &&

// function Contact() {
//   return (
//     <main>
//     <div className='container'>
//         <p>This is the contact me section</p>
//         <p>This is where content will go</p>
//     </div>
//     </main>
//   );
// }

// export default Contact;






    // if (!validateEmail(email) || name) {
    //   setErrorMessage('Email or name is invalid');
    //   return;
    // }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${name}`
    //   );
    //   return;
    // }