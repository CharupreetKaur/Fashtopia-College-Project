import React from "react";
import Layout from "../commponets/Layouts/Layout";

const Aboutus = () => {
  return (
    <Layout title={"About us"}>
      <style>{`
        .aboutus-container {
          background: linear-gradient(135deg, #ffe4ec, #fff0f5, #ffe0ea);
          padding: 30px;
          min-height: 100vh;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          color: #444;
        }

        .aboutus-heading {
          color: #d63384;
          font-weight: bold;
          font-size: 28px;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px #fff;
        }

        .aboutus-text {
          background-color: #fff8fb;
          border: 2px dashed #ffb6c1;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 0 8px rgba(255, 182, 193, 0.2);
        }

        .aboutus-image {
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(255, 192, 203, 0.3);
        }
      `}</style>

      <div className="row aboutus-container align-items-center">
        <div className="col-md-6">
          <img
            src="/images/aboutus.jpg"
            alt="about us"
            className="aboutus-image"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="aboutus-heading">About Us</h2>
          <div className="aboutus-text">
            <p>
              Welcome to <strong>Fashtopia</strong>, your one-stop online fashion store where style meets convenience.
              We believe that fashion is not just about what you wear, but how you wear it. At Fashtopia, we offer a wide
              range of trendy clothing, accessories, and footwear for both men and women, ensuring that you look and feel
              your best at all times.
            </p>
            <p>
              Whether you are looking for the latest seasonal trends, wardrobe staples, or exclusive limited-edition items,
              Fashtopia has it all. We carefully curate our collections from high-quality fabrics and work with top designers
              to bring you the best in contemporary fashion.
            </p>
            <p>
              What sets Fashtopia apart is our commitment to customer satisfaction. Our easy-to-navigate website, fast and
              secure payment methods, and reliable delivery services ensure that your shopping experience is seamless from
              start to finish.
            </p>
            <p>
              At Fashtopia, we are passionate about helping you express your unique style and personality through fashion. We
              believe that fashion should be accessible to everyone, which is why we offer affordable prices without compromising
              on quality. Join us in creating a fashion revolution that empowers you to dress confidently and stylishly.
            </p>
            <p>Thank you for choosing Fashtopia. Happy shopping!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
