import Achievement_card from "./Achievement_card";

const Achievement = () => {
    return (
       <section className="container">
          <div className="achievement_section">
            <div className="record">
               <div className="number">
                <Achievement_card
                image="../../public/image/achievement/Stack.png"
                title="23+"
                description="Years of experience"
                />
                </div>
                <div className="number">
                <Achievement_card
                image="../../public/image/achievement/Briefcase.png"
                title="325+"
                description="Completed Projects"
                />
                </div>
                <div className="number">
                <Achievement_card
                image="../../public/image/achievement/SmileyWink.png"
                title="279+"
                description="Happy Clients"
                />
                </div>
                <div className="number">
                <Achievement_card
                image="../../public/image/achievement/Coffee.png"
                title="1652+"
                description="Hours of Work"
                />
                </div>
            </div>
          </div>
       </section>
    );
};

export default Achievement;