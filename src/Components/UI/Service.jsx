import Service_Card from "./Service_Card";


const Service = () => {
    return (
      
       <div className="service_section">
        <div className="text_section">
            <h2>My Services</h2>
            <p>Morbi risus elit, fringilla in cursus a, molestie non dui. <br /> Nunc accumsan gravida risus, ac semper libero mollis ut.</p>
        </div>
        <div className="img_section">
           <Service_Card
           image="../../public/image/service/service3.png"
           title="Back-end Development"
           description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
           />

           <Service_Card
           image="../../public/image/service/service2.png"
           title="Front-end Development"
           description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
           />

           <Service_Card
           image="../../public/image/service/service1.png"
           title="Content Writing"
           description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
           />

        </div>

       </div>
       
    );
};

export default Service;