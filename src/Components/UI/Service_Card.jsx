

const Service_Card = ({image, title, description}) => {
    return (
        <div className="service_card">
            <img className="abc" src={image} alt="" />
            <div className="service_card_description">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#">Let’s Work Together <img className="arrow" src="../../public/image/service/ArrowRight.png" alt="" /></a>
            </div>
            
        </div>
    );
};

export default Service_Card;