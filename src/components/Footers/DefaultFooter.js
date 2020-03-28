/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed and Coded by{" "}
            <a
              href="https://www.linkedin.com/in/victor-bramy-17876b162/"
              target="_blank"
            >
              Victor-Bramy
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
