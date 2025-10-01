

const Footer = () => {
    return (
        <section className="container">
            <div className="footer">
            <div className="footer_left">
                <div className="about">
                   <img src="../../public/image/footer/logo.png" alt="" /> 
                   <h3>Tanjila Khatun</h3>

                </div>
                <div className="address">
                   <p>4517 Ave. Manchester, Kentucky <br /> 39495, Los Angeles, California, USA</p>
                </div>

            </div>
            <div className="footer_right">
                
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
               <li><a href="#">Article</a></li>
            </ul>

           <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a className="active" href="#">Pricing Plans</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

         <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">CodePen</a></li>
         </ul>
       </div>
      </div>
    </section>
    );
};

export default Footer;