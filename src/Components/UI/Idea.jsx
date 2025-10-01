

const Idea = () => {
    return (
      <section className="container">
        <div className="idea">
            <div className="idea_left">
                <h2>Have a project idea. <br /> Let’s work together!</h2>
                <p>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>

            <div className="idea_btn">
                <a className="BtnIdea" href="#">let’ work together <img src="../../public/image/idea/ArrowRight.png" alt="image" /></a>
            </div>

            </div>
            <div className="idea_right">
                <div className="mail">
                    <div className="image">
                       <img src="../../public/image/idea/Envelope.png" alt="Image" />
                    </div>
                    <div className="content">
                        <p>Chat with me</p>
                        <h4>tanjilabithi12@gmail.com</h4>
                    </div>
                    </div>
                    
                    <div className="call">
                    <div className="image">
                        <img src="../../public/image/idea/PhoneCall.png" alt="Image" />
                    </div>
                    <div className="content">
                        <p>Call Me</p>
                        <h4>+1-202-555-0190</h4>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Idea;