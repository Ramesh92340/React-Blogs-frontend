import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    gender: '',
    mail: '',
    password: '',
    confirmPassword: '',
  });

  const { name, mobile, gender, mail, password, confirmPassword } = data

  const navigate = useNavigate();


  const ChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (name.length < 3) {
        alert('Name must be at least 3 characters');
      }
      else if (mobile.length < 10) {
        alert('mobile number atlest 10 digits')
      }
      else if (!gender) {
        alert('Please select a gender');
      }
      else if (mail.length === 0) {
        alert('Please enter your email');
      }
      else if (!validateEmail(mail)) {
        alert('Please enter a valid email address');
      }
      else if (password.length < 6) {
        alert('Password must be at least six characters');
      } else if (password !== confirmPassword) {
        alert('Passwords must match');
      } else {
        const response = await axios.post('http://localhost:5000/blogregister', data);
        if (response.data.message === 'User already exists') {
          console.log('POST request successful!', response.data);
          alert('User already exists. Please login or use a different email.');
          console.log(data)
        } else {
          alert('Success');
        }

        navigate('/LogIn');
      }
      function validateEmail(mail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(mail);
      }
    }
    catch (error) {
      console.error('Error making POST request:', error);
      // Handle the error, show a user-friendly message, etc.
    }

  };



  return (
    <div className="regist">
      <h1 className='highlight' >welcome user!</h1>
      <h3 className='highlight'>please fill your details and Register free</h3>


      <div className='formcard' >

        <form className='acive' onSubmit={submitHandler}>

          <table>
            <tbody>
              <tr>
                <td><label>Name :</label></td>
                <td> <input type="text" name="name" value={name} onChange={ChangeHandler} />  </td>
              </tr>
              <br />

              <tr>
                <td><label> mobile:</label> </td>
                <td><input type="number" name="mobile" value={mobile} onChange={ChangeHandler} />  </td>
              </tr>
              <br />

              <tr>
                <td> <label>  gender: </label> </td>

                <td> <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={ChangeHandler} />Male
                  <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={ChangeHandler} />Female
                  <input type="radio" name="gender" value="others" checked={gender === 'others'} onChange={ChangeHandler} />Others </td>

              </tr>

              <br />

              <tr>
                <td><label>Email  :  </label>  </td>
                <td><input type="email" name="mail" value={mail} onChange={ChangeHandler} />    </td>
              </tr>
              <br />

              <tr>
                <td> <label>Password  : </label></td>
                <td> <input type="password" name="password" value={password} onChange={ChangeHandler} />    </td>
              </tr>
              <br />


              <tr>
                <td>  <label>Confirm Password  : </label></td>
                <td> <input type="password" name="confirmPassword" value={confirmPassword} onChange={ChangeHandler} /></td>
              </tr>
            </tbody>
          </table>

          <input className='filledButton' type="submit" value="Register" />
        </form>
      </div>
      <h3 className='highlight'>Are you already have an account.? <a className='LogInlink' href=' /LogIn'>log.in</a> </h3>
    </div>
  );
};

export default RegistrationForm;




