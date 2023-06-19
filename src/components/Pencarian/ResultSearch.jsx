import React from "react";
import { Accordion } from "react-bootstrap";

const ResultSearch = () => {
  return (
    <Accordion className="my-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div>
            <div className="d-flex flex-row">
              <img src="../assets/img/logo_leaf.svg" alt="" />
              <h6 className="fw-semibold fs-12 my-auto ms-2">Jet Air</h6>
              <h6 className="fw-semibold fs-12 my-auto mx-2">-</h6>
              <h6 className="fw-semibold fs-12 my-auto ">Economy</h6>
            </div>
            <div className="d-flex">
              <div className="my-auto">
                <h6 className="fw-semibold fs-14 ">07:00</h6>
                <h6 className="fw-semibold fs-12 ">JKT</h6>
              </div>
              <div className="d-flex flex-column">
                <h6 className="fs-12 mx-auto">4h 0m</h6>
                <img src="../assets/img/arrow.svg" alt="" />
                <h6 className="fs-12 mt-2 mx-auto">Direct</h6>
              </div>
              <div className="my-auto">
                <h6 className="fw-semibold fs-14 ">11:00</h6>
                <h6 className="fw-semibold fs-12 ">MLB</h6>
              </div>
              <div className="d-flex">
                <div className=" my-auto mx-5">
                  <img src="../assets/img/baggage.svg" alt="" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="text-purple fw-semibold">IDR 4.950.000</h5>
                  <button className="bg-purple rounded-4 py-2 text-white fw-semibold">
                    Pilih
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex">
            <div className="d-flex flex-column">
              <h6 className="text-purple fw-semibold fs-14">
                Detail Penerbangan
              </h6>
              <h6 className="fw-bold fs-16">07:00</h6>
              <h6 className="fw-normal fs-14">3 Maret 2023</h6>
              <div className="d-flex">
                <h6 className="fw-semibold fs-14">Soekarno Hatta</h6>
                <h6 className="fw-semibold fs-14 mx-2">-</h6>
                <h6 className="fw-semibold fs-14">Terminal 1A Domestik</h6>
              </div>
            </div>
            <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
              Keberangkatan
            </h6>
          </div>
          <div className="border-bottom w-50 mx-auto my-2"></div>
          <div className="d-flex">
            <div className="me-2 my-auto">
              <img src="../assets/img/logo_leaf.svg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex">
                  <h6 className="fw-bold fs-14">Jet Air</h6>
                  <h6 className="fw-bold fs-14 mx-2">-</h6>
                  <h6 className="fw-bold fs-14">Economy</h6>
                </div>
                <div className="d-flex">
                  <h6 className="fw-bold fs-14">JT</h6>
                  <h6 className="fw-bold fs-14 mx-2">-</h6>
                  <h6 className="fw-bold fs-14">203</h6>
                </div>
              </div>
              <h6 className="fw-bold fs-14 mt-2">Informasi:</h6>
              <h6 className="fw-normal fs-14">Baggage 20 Kg</h6>
              <h6 className="fw-normal fs-14">Cabin Baggage 7 Kg</h6>
              <h6 className="fw-normal fs-14">in Flight Entertainment</h6>
            </div>
          </div>
          <div className="border-bottom w-50 mx-auto my-2"></div>
          <div className="d-flex">
            <div className="d-flex flex-column">
              <h6 className="fw-bold fs-14">07:00</h6>
              <h6 className="fw-normal fs-14">3 Maret 2023</h6>
              <h6 className="fw-semibold fs-14">
                Melbourne International Airport
              </h6>
            </div>
            <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
              Kedatangan
            </h6>
          </div>
          <div className=" mx-auto ">
            <button className="w-100 bg-purple rounded-4 px-5 py-1 text-white fw-semibold">
              Pilih
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ResultSearch;
