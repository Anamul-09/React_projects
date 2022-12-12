import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spm88db",
        "template_77uidhj",
        form.current,
        "VP2LUR0eS7WSbywEM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("error sending message");
        }
      );
  };

  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-10 wow fadeIn m-auto text-center"
              data-wow-delay="0.1s"
            >
              <p className="fs-5 fw-bold text-primary">Contact Us</p>
              <h1 className="display-5 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done
                dfghkfdghikfdhgfikdhgkfdnvfdskhgvfikdhgvbn.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <button className="btn btn-primary py-3 px-4" type="submit">
                      Send Message
                    </button> */}
                    <input
                      classNameName="btn btn-primary"
                      type="submit"
                      value="Send Email"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
