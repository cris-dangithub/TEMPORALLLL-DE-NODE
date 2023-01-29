import React from "react";
import HeaderMobilesImgMobile from "../components/Home/HeaderMobilesImgMobile";
import HeaderBgMobile from "./../components/Home/HeaderBgMobile";

const Home = () => {
  return (
    <article>
      <header>
        <div>
          <img src="/images/image-mockups.png" alt="" />
          <HeaderBgMobile />
        </div>
        <section>
          <h2>Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spendin, saving, budgeting, investing, and muche
            more.
          </p>
          <button>Request Invite</button>
        </section>
      </header>

      <article>
        <section>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </section>
      </article>
    </article>
  );
};

export default Home;
