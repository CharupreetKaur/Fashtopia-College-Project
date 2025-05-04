import React from "react";
import Layout from "../commponets/Layouts/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contactus = () => {
  return (
    <Layout title={"Contact Us"}>
      <style>{`
        .contactus-container {
          background: linear-gradient(135deg, #fff0f5, #ffe4ec, #ffe0ea);
          padding: 40px 20px;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          color: #444;
        }

        .contactus-heading {
          color: #d63384;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 15px;
          text-align: center;
          text-shadow: 1px 1px 2px #fff;
        }

        .contactus-text {
          background-color: #fff8fb;
          border: 2px dashed #ffb6c1;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 0 8px rgba(255, 182, 193, 0.2);
        }

        .contactus-icon {
          color: #d63384;
          font-size: 20px;
          margin-right: 10px;
        }

        .contactus-img {
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(255, 192, 203, 0.3);
        }
      `}</style>

      <div className="row contactus-container align-items-center">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpg"
            alt="Contact Us"
            className="contactus-img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="contactus-heading">Get in Touch With Us</h2>
          <div className="contactus-text">
            <p>
              Have a question or need help with your order? Our support team is
              here for you 24/7. Whether it's product details, order issues, or
              just a suggestion, feel free to contact us!
            </p>
            <p className="mt-4">
              <BiMailSend className="contactus-icon" />
              Email: <strong>support@fashtopia.com</strong>
            </p>
            <p className="mt-3">
              <BiPhoneCall className="contactus-icon" />
              Phone: <strong>+91-123-456-7890</strong>
            </p>
            <p className="mt-3">
              <BiSupport className="contactus-icon" />
              Toll-Free: <strong>1800-123-4567</strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
