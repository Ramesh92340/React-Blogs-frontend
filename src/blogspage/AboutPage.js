// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';




const AboutPage = () => {
    return (

        <div>
            <header>
                <h1 className='About_page_name_atvi' >About Us</h1>
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

            <div className="background_color_contect ">
                <div class='contact-section'>
                    <h2>Welcome to  INSPIRATIONAL BLOGS</h2>
                    <p>
                        Inspirational blogs is a platform dedicated to [brief description of the blog's purpose or niche]. We strive to [goals and objectives of the blog, e.g., inform, inspire, entertain] our readers through engaging and informative content.
                    </p>

                    <p>
                        Our team of passionate writers and contributors is committed to providing [adjectives to describe the content] content on [topics/interests covered]. Whether you're an enthusiast or a novice, our aim is to [how the blog benefits the audience, e.g., educate, entertain, etc.] you with a wealth of information.
                    </p>

                    <p>
                        Join us on this journey as we explore [topics/areas covered] and share insights, tips, and ideas to create an enriching experience for our readers.
                    </p>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 [Inspirationalblogs]. All rights reserved.</p>
            </footer>
        </div>


    );

};

export default AboutPage;