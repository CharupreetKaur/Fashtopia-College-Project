import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <style>
        {`
          body {
            background: linear-gradient(to bottom right, #ffd6e8, #ffe6f0);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            margin: 0;
            padding: 0;
          }

          main {
            min-height: 70vh;
            padding: 20px;
            margin: 20px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
            font-size: 18px;
            color: #333;
          }
        `}
      </style>

      <Header />
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "FASHTOPIA - Shop Now",
  description: "MERN stack project",
  keywords: "mern, react, node, mongodb",
  author: "charupreetkaur",
};

export default Layout;
