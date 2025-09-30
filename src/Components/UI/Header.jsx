

const Header = () => {
    return (
       <section className="container">
            <div className="header">
                <div className="header_left">
                    <img src="../../public/image/logo/logo.png" alt="" />
                    <h2>Newfolio</h2>
                </div>
                <div className="header_right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Article</a></li>
                        <li><a href="#" class="contact-button">CONTACT</a></li>
                    </ul>
                    </div>
                </div>
            </section>
    );
};

export default Header;