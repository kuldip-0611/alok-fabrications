import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import product01 from "../../Assets/Product/Product_01.png";
import product02 from "../../Assets/Product/Product_02.png";
import product03 from "../../Assets/Product/Product_03.png";
import product04 from "../../Assets/Product/Product_04.png";
import product05 from "../../Assets/Product/Product_05.png";
import product06 from "../../Assets/Product/Product_06.png";
import rightArrow from "../../Assets/Product/Frame.png";
import crossIcon from "../../Assets/cross.png";
import "./ProductsMainSection.css";

const html = (
  <>
    <p className="modal_title">Tank & Vessels</p>
    <p className="modal_text">
      Our tanks and vessels are built to serve a variety of industrial
      applications. Whether for storage, pressure containment, or mixing, we
      provide durable, high-quality equipment built to your exact
      specifications.
    </p>
    <p className="modal_semi_title">Storage Tanks</p>
    <ul className="modal_ul_list">
      <li>Capacity: 1 kL to 50 kL </li>
      <li>Geometry: Horizontal,Vertical</li>
      <li>Types: Single-walled, Double-walled </li>
      <li>Coating: Epoxy</li>
    </ul>
  </>
);
const ProductsMainSection = () => {
  const [show, setShow] = useState(0);
  console.log("show: ", show);

  const handleClose = () => setShow(0);
  const ProductLiat = [
    {
      id: 1,
      title: "Silos",
      image: product01,
      html: html,
    },
    { id: 2, title: "Tank & Vessels", image: product02, html: html },
    { id: 3, title: "Recievers", image: product03, html: html },
    { id: 4, title: "Column and Filters", image: product04, html: html },
    { id: 5, title: "Tank & Vessels", image: product05, html: html },
    { id: 6, title: "Process Tanks", image: product06, html: html },
  ];

  const selectedProduct = ProductLiat.find((p) => p.id === show);
  return (
    <>
      <section id="products" className="container">
        <div className="row">
          <div className="cover_products">
            {ProductLiat.map((item) => (
              <div key={item.id}>
                <img src={item.image} width={349} height={349} alt="products" />
                <div className="mt-3">
                  <button
                    onClick={() => {
                      setShow(item.id);
                    }}
                    className="ct_btn_outline_primary"
                  >
                    {item.title}
                    <img
                      src={rightArrow}
                      width={20}
                      height={20}
                      alt="right Arrow"
                      className="btn_rightArrow"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal
        show={!!show}
        onHide={handleClose}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
      >
        <div className="modal_cover">
          <div className="modal_container">
            <div className="flex_1">
              <img
                src={selectedProduct?.image}
                className="modal_image"
                alt="products"
              />
            </div>
            <div className="flex_1">{selectedProduct?.html}</div>
          </div>

          <img
            src={crossIcon}
            alt="cross"
            className="modal_cross"
            onClick={() => {
              setShow(0);
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ProductsMainSection;
