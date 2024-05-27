import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const LogIn = () => {

  const [data, setData] = useState({
    mail: '',
    password: '',
  });

  const { mail, password } = data;


  const navigate = useNavigate();


  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await axios.post('http://localhost:5000/blogsigin', data);
      alert('Login successfully....');

      navigate('/ProfilePage');
      console.log(response.data);
    } catch (error) {
      console.error('Error in login:', error);
    }
  };
  return (
    <div className='LogIn'>
      <form className='main' onSubmit={submitHandler}>
        <h1>LOGIN</h1>
        <table>
          <tbody>
            <tr>
              <td><label>Email -</label></td>
              <td>  <input type="email" id="Email" name="mail" value={mail} onChange={changeHandler} required /> </td>
            </tr>
            <br></br>
            <br></br>
            <tr>
              <td> <label>Password -</label></td>
              <td> <input type="password" id="password" name="password" value={password} onChange={changeHandler} required /></td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>

        <input className='loginbtn' type='submit' value='login' /><br /><br />

        <button className='logregister'> <a href="/"> Register</a></button>
      </form>
    </div>
  );
};

export default LogIn;