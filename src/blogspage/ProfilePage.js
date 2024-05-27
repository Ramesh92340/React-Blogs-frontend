import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const ProfilePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('null');
  const [dateTime, setDateTime] = useState('');
  const navigate = useNavigate();

  // const location = useLocation();
  // const {mail}= location.state || null;
  // console.log(userdetails);
  // const details = userdetails.foundUser   
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString(); // Get the current date and time as a string
    setDateTime(dateTimeString);
    // Create a new blog post object
    // Perform actions like submitting the form data, sending to the server, etc.
    console.log('Form submitted with:', { title, description, content, file });

    // const postData = { title, description, content, file, dateTime };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', content);


    axios.post('http://localhost:5000/blogpost', formData)



      .then(response => {
        console.log('Data successfully submitted:', response.data);
        // Additional handling after successful submission

        navigate('/HomePage')
      })

      .catch(error => {
        console.error('Error submitting data:', error);
        // Handling errors, if any
      });
    // Reset the form after submission
    setTitle('');
    setDescription('');
    setContent('');
    setFile('null');
    setDateTime('');



  };


  return (

    <div>
      <header>
        <h1 className='profile_page_name_atvi'>My profile</h1>

        <nav>
          <ul>
            <li><a className='Home_page_name' href="HomePage">Home</a></li>
            <li><a className='About_page_name' href="AboutPage">About</a></li>
            <li><a className='Contact_page_name' href="ContactPage">Contact</a></li>
            <li><a className='profile_page_name' href="ProfilePage">Profile</a></li>
            <button className='logoutButton'> <a href="LogIn"> LogOut</a></button>
          </ul>
        </nav>
      </header>


      <div class="background_color_profile">


        <div class="post-content" >

          <div>
            <form onSubmit={handleSubmit}>
              <h1>What going in Your Mind...?</h1><br />

              {/* {mail} */}
              <div>
                <label>Title of the Post</label>

                <br />
                <input className='title' name='title' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <br />

              <div>
                <label>Description</label>
                <br />
                <input className='description' name='description' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <br />

              <div>
                <label>Content</label>
                <br />
                <textarea className='content' placeholder="Content" name='content' value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
              </div>
              <br />
              <div>

                <label >File Upload:</label>
                <input type="file" name='file_url' onChange={handleFileChange} />
              </div>
              <br />
              <button className='post_button' type="submit">Post</button>
              {dateTime && <p >Date and Time: {dateTime}</p>}

            </form>

          </div>
        </div>


      </div>




    </div>


  );

};

export default ProfilePage;














