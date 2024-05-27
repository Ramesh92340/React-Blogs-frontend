

const ContactPage = () => {
    return (

        <div>
            <header>
                <h1 className='Contact_page_name_atvi' >Contact Us</h1>
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

            <div className='background_color_contect'>
                <div class="contact-section">
                    <h2>Contact Information</h2>
                    <p>If you have any inquiries or feedback, feel free to reach out to us using the following contact details:</p>

                    <div class="contact-details">
                        <p><strong>Email:</strong> Inspirationalblogs.@gmail.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Blog Street, sanfransico, U.S.A</p>
                    </div>


                </div>

            </div>

            <footer>
                <p>&copy; 2023 [Inspirationalblogs]. All rights reserved.</p>
            </footer>
        </div>


    );

};

export default ContactPage;