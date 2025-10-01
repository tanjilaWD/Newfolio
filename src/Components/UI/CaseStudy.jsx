

const CaseStudy = () => {
    return (
       <section className="container">
        <div className="caseStuday">
            <h2>Latest Case Study</h2>
            <p>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.</p>

            <div className="caseStudy_list">
                <img
                className="caseStudy_card"
                 src="../../public/image/case/image.png" alt="Image" 
                 />
                <img
                className="caseStudy_card"
                 src="../../public/image/case/image1.png" alt="Image" 
                 />
                <img
                className="caseStudy_card"
                 src="../../public/image/case/image2.png" alt="Image" 
                 />
            </div>
        </div>

       </section>
    );
};

export default CaseStudy;