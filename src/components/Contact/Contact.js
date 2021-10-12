import React from "react";
import "./Contact.css";
import Gradient from "rgt";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="contact_container" id="Contact-section">
      <center>
        <h1 className="contact_heading">
          <Gradient dir="left-to-right" from="#f857a6" to="#ff5858">
            Contact
          </Gradient>
        </h1>
      </center>

      <div className="contact_content">
        <div className="contact_info-data">
          <MdLocationPin size={70} color="white" />
          <h1 className="contact_icon-text">Chennai,Tamilnadu</h1>
        </div>

        <div className="contact_info-mail">
          <AiOutlineMail
            size={75}
            color="white"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?fs=1&to=farhaanm110@gmail.com&tf=cm"
              )
            }
          />
          {isDesktopOrLaptop && (
            <button
              className="conatct_mailto"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/?fs=1&to=farhaanm110@gmail.com&tf=cm"
                )
              }
            >
              farhaanm110@gmail.com
            </button>
          )}
        </div>

        <div>
          <button
            className="contact_icon-btn "
            onClick={() => window.open("https://github.com/mdfarhaan")}
          >
            <IoLogoGithub size={60} color="white" />
          </button>
          <button
            className="contact_icon-btn "
            onClick={() =>
              window.open("https://www.linkedin.com/in/mdfarhaan/")
            }
          >
            <IoLogoLinkedin size={60} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
