const Hero = () => {
    return (
        <section className="container">
            <div className="hero">
                <div className="hero_left">
                    <h1>👋 Hey, I’m Tanjila <br /> Full-Stack Engineer.</h1>
                    <p>Full Stack Frontend Developer and Content Writing Based on LA. I specialize in Bug Fixing, Responsive Web Design, and Visual Development.</p>
                    <div className="btn">
                        <button className="btn1">Hire me <img src="../../public/image/hero_icon/ArrowRight.png" alt="icon" /></button>
                        <button className="btn2"><img src="../../public/image/hero_icon/play.png" alt="icon" />Play Intro</button>
                    </div>
                </div>
                <div className="hero_right">
                    <img src="../../public/image/hero_icon/hero.png" alt="" />

                </div>
            </div>

        </section>
    );
};

export default Hero;