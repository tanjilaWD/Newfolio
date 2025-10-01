import Achievement_card from "./Achievement_card";

const Achievement = () => {
    return (
       <section className="container">
          <div className="achievement_section">
            <div className="record">
                <Achievement_card
                image="../../public/image/achievement/Stack.png"
                title="23+"
                description="Years of experience"
                />
                <Achievement_card
                image="../../public/image/achievement/Briefcase.png"
                title="325+"
                description="Completed Projects"
                />
                <Achievement_card
                image="../../public/image/achievement/SmileyWink.png"
                title="279+"
                description="Happy Clients"
                />
                <Achievement_card
                image="../../public/image/achievement/Coffee.png"
                title="1652+"
                description="Hours of Work"
                />
            </div>
          </div>
       </section>
    );
};

export default Achievement;