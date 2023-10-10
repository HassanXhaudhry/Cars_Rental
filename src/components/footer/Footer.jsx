import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_box">
          <div className="footer-left">
            <h2 className="footer-heading">MORENT</h2>
            <h4 style={{ color: "gray" }}>
              Our vision is to provide convenience <br />
              and help increase your sales business.
            </h4>
          </div>

          <div className="footer-items">
            <div className="footer_about">
              <ul className="footer_li">
                <h3>About</h3>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relations</li>
              </ul>
            </div>

            <div className="footer_community">
              <ul className="footer_li">
                <h3>Community</h3>
                <li>Events</li>
                <li>Blogs</li>
                <li>Prodcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            <div className="footer_socials">
              <ul className="footer_li">
                <h3>Socials</h3>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_line">
        <h4>
          <div className="bottom-left">
            &copy; 2022-MORENT. All rights reserved
          </div>
        </h4>
        <div className="bottom-right">
          <h4> Privacy & Policy</h4>
          <h4> Terms and conditions</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
