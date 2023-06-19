import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./pencarian.css";

const CardFilter = () => {
  return (
    <Card className="mx-4 py-2 rounded-4 bg-detail">
      <Card.Body>
        <Card.Title>
          <h6 className="fw-semibold ms-2">Filter</h6>
        </Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <button className=" bg-transparent border-0">
              <div className="d-flex py-2 border-bottom">
                <img src="../assets/img/fi_box.svg" alt="" />
                <h6 className="my-auto ms-2 fw-normal">Transit</h6>
                <img
                  src="../assets/img/fi_chevron-right.svg"
                  alt=""
                  className="ms-auto"
                />
              </div>
            </button>
            <button className=" bg-transparent border-0">
              <div className="d-flex py-2 border-bottom  bg-transparent border-0">
                <img src="../assets/img/fi_heart.svg" alt="" />
                <h6 className="my-auto ms-2 fw-normal">Fasilitas</h6>
                <img
                  src="../assets/img/fi_chevron-right.svg"
                  alt=""
                  className="ms-auto"
                />
              </div>
            </button>
            <button className=" bg-transparent border-0">
              <div className="d-flex py-2  bg-transparent border-0 ">
                <img src="../assets/img/fi_dollar-sign.svg" alt="" />
                <h6 className="my-auto ms-2 fw-normal">Harga</h6>
                <img
                  src="../assets/img/fi_chevron-right.svg"
                  alt=""
                  className="ms-auto"
                />
              </div>
            </button>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardFilter;
