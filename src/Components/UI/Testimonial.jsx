

const Testimonial = () => {
    return (
        <section className="container">
            <div className="testimonial">
                <div className="testimonial_left">

                   <div className="client1">
                    <h2>Client Testimonial</h2>
                    <p>Praesent interdum eu magna a imperdiet. Ut orci ipsum, rutrum id  tortor sit amet,<br /> mattis cursus libero. Phasellus facilisis malesuada nibh vel commodo.</p>
                   </div>
                   
                   <div className="quote">
                    <img src="../../public/image/testimonial/DoubleQuotes.png" alt="Image" />
                    <p>“Great Designer, does great work and is very flexible with change. if you’re a programmer and are looking for UI/UX designer is definitely well qualified for the job.”</p>
                   </div>

                   <div className="founder">
                    <div className="img">
                      <img src="../../public/image/testimonial/Rectangle.png" alt="Image" />
                    </div>
                    <div className="content">
                        <h3>Cameron Williamson</h3>
                        <p>Founder of Relik</p>
                    </div>
                    <div className="icon">
                        <img src="../../public/image/testimonial/ArrowRight.png" alt="Image" />
                        <img src="../../public/image/testimonial/ArrowRight1.png" alt="Image"/>
                    </div>

                   </div>

                </div>
                <div className="testimonial_right">
                <img src="../../public/image/testimonial/image.png" alt="Image"/>

                </div>
            </div>

        </section>
    );
};

export default Testimonial;