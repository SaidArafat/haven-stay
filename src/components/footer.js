import React from "react";
import FooterList from "./common/footerList";
import Icon from "./common/icons/icon";

const Footer = () => {
  return (
    <section className="container py-5 mt-5 ">
      <footer className="row">
        <section className="col-md-3 text-center text-md-start pb-3">
          <h4 className="fs-3 fw-semibold text-capitalize">
            <span className="bg-dark text-white px-2 me-1 rounded-circle">
              H
            </span>
            otel
          </h4>
          <p className="opacity-50 my-4">
            The right property of you. big range of top-rated properties. Price
            guarantee.
          </p>
          <div>
            <Icon link="facebook.com" icon="fa-brands fa-facebook" />
            <Icon link="twitter.com" icon="fa-brands fa-twitter" />
            <Icon link="youtube.com" icon="fa-brands fa-youtube" />
            <Icon link="instagram.com" icon="fa-brands fa-instagram" />
          </div>
        </section>
        <FooterList
          title="quick link"
          items={["booking", "support", "blog", "reviews", "rooms"]}
        />
        <FooterList
          title="Company"
          items={[
            "global location",
            "mission",
            "career",
            "investor",
            "privacy policy",
          ]}
        />
        <FooterList
          title="Legal Information"
          items={["Terms of use", "Privacy Policy", "Hotel license agreement"]}
        />
      </footer>
    </section>
  );
};

export default Footer;
