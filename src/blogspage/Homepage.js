


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/newspost');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsToRender = data.item && data.item.length > 0 ? data.item : [];

  //  console.log(itemsToRender,"itemsToRender")
  console.log(data, "data")

  return (
    <div>



      <header>
        <h1 className='Home_page_name_atvi'>Home</h1>

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

      <div className='background_color'>

        <ul>
          {itemsToRender.map(items => (

            <li key={items.id}>

              <div className='postcard'>
                <div className='img_card'>

                  <div className=' text_content col-8'>
                    <h1 className='title' >{items.title}</h1>
                    <h3 className='description' >{items.description}</h3>
                    <p className='content' >{items.content}</p><br />
                  </div>
                  <div className=' img_content col-4'>
                    <img className='img_size' alt='' src={items.file_url} />
                    <p className='time_size'>{items.created_at}</p>
                  </div>  <br />


                </div>
              </div>

              <br /></li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
