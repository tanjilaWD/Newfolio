

const Achievement_card = ({image,title,description}) => {
    return (
        <div className="achievement_card">
            <img src={image} alt="Image" />
            <h3>{title}</h3>
            <p>{description}</p>
            
        </div>
    );
};

export default Achievement_card;