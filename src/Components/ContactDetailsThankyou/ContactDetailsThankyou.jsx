import React from "react";
import "./ContactDetailsThankyou.css";
import thankyou from "../../Assets/thankyou.png";
import mailLetter from "../../Assets/mailletter.png";

const ContactDetailsThankyou = () => {
  const width = window.innerWidth;
  console.log("width: ", width);

  return (
    <div className="bg_gray">
      <section className="container  pb-4">
        <div className="row">
          <p className="Contact_US_Title_th mt-5">Shaping Industry Together</p>
          <p className="Contact_US_discription_th mt-3">
            {width > 768 ? (
              <>
                When it comes to industrial equipment, experience matters.
                <br /> With years of expertise and a dedication to quality,
                we're the <br />
                reliable partner you need. Get a quote today and see why <br />
                businesses trust us for durable, high-performance equipment.
              </>
            ) : (
              "When it comes to industrial equipment, experience matters. With years of expertise and a dedication to quality, we're the reliable partner you need. Get a quote today and see why businesses trust us for durable, high-performance equipment."
            )}
          </p>
          <div className="cu_blue_container_th mt-3">
            <img
              src={mailLetter}
              className="thankyou_letter"
              alt="thank letter"
              width={"auto"}
            />
            <img
              src={thankyou}
              className="thankyou_text_img"
              alt="thank text"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetailsThankyou;
