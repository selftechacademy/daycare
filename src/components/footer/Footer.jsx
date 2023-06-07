import theme from "../../theme";
import "./footer.style.css";

import React from "react";

function Footer() {
  const currentYear = new Date();

  return (
    <>
      <footer
        class="mainContainer"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div class="containerFooter">
          <div class="row">
            <div class="aboutContainer">
              <h6>About</h6>
              <p class="text-justify">
                Helen Lucy Child Care Center provides caring and dedicated child
                care and education services in Chicago, Illinois, for kids from
                fifteen months to six years old. The center provides education,
                social, cultural, emotional, physical and recreational areas to
                provide parents the opportunity to give their child the best
                start possible.
              </p>
            </div>

            <div class="linksContainer">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Why Us</a>
                </li>
                <li>
                  <a href="#">Our Nannies</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="containerCopyright">
          <div class="iconsFooter">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="copyrightFooter">
            <p class="copyright-text">
              {`Copyright  © ${currentYear.getFullYear()} All Rights Reserved by`}
              <a href="#"> Helen Lucy Child Care</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
