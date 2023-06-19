import React, { useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import "../assets/css/Banner.css";

function Banner() {
  const [showPassenger, setShowPassenger] = useState(false);
  const [showSeatClass, setShowSeatClass] = useState(false);
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [valueDewasa, setValueDewasa] = useState("");
  const [valueAnak, setValueAnak] = useState("");
  const [valueBayi, setValueBayi] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [sum, setSum] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");

  // const handleDateChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedDate(value);
  // };

  const handleSumClick = () => {
    const num1 = parseFloat(valueDewasa);
    const num2 = parseFloat(valueAnak);
    const num3 = parseFloat(valueBayi);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      const result = num1 + num2 + num3;
      setSum(result.toString());
    }
  };

  const handleClosePassenger = () => setShowPassenger(false);
  const handleShowPassenger = () => setShowPassenger(true);
  const handleCloseSeatClass = () => setShowSeatClass(false);
  const handleShowSeatClass = () => setShowSeatClass(true);
  const handleSwitchChange = () => {
    setIsEnabled(!isEnabled);
  };
  const handleChangeValueDewasa = (event) => {
    setValueDewasa(event.target.value);
  };
  const handleChangeValueAnak = (event) => {
    setValueAnak(event.target.value);
  };
  const handleChangeValueBayi = (event) => {
    setValueBayi(event.target.value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "input1") {
      setValueFrom(value);
    } else if (name === "input2") {
      setValueTo(value);
    }
  };
  const handleSwitchClick = () => {
    setValueFrom(valueTo);
    setValueTo(valueFrom);
  };

  const handleSaveChanges = () => {
    handleClosePassenger();
    handleSumClick();
  };
  return (
    <div>
      <div className="cont"
        style={{
          backgroundImage:
          " linear-gradient(to right,rgba(113, 38, 181, 1), rgba(159,102,210,1), rgba(182,156,205,1)",
          zIndex:-1,
          height:150,
          marginBottom:-250,
          marginTop: 80,
        }}>
      </div>
    <Container>
      <Row className="d-flex ">
        <Col>
        <div className="banner w-200 mt-5">
          <img
            src={require("../assets/img/brn.svg").default}
            alt="banner"
            style={{
              width: "100%",
              height: 255,
              borderRadius: 20,
              backgroundImage:
                " linear-gradient(to right,rgba(255, 233, 202, 1), rgba(255,0,0,0))",
            }}
          />
          </div>
        </Col>
      </Row>
        <Container
          className="border-0 bg-white"
          style={{
            boxShadow:
              "0 0px 10px 0 rgba(0, 0, 0,  0.15)",
              width: 978,
              marginTop: 35,
              borderRadius: 12,
              paddingTop: 35,
              paddingRight: 35,
              paddingLeft: 35,
              fontFamily: "Poppins",
          }}
        >
          <Card.Header className="border-0 mb-3">
            <h6><b>
              Pilih Jadwal Penerbangan spesial di
              <span style={{ color: "#7126B5" }}> AirTix!</span>
            </b></h6>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form className="d-flex gap-3 align-items-center justify-content-center ">
                <Form.Group
                  className=" mb-3 d-flex align-items-center justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Group>
                    <TbPlaneDeparture size={25} />
                    <Form.Label>From</Form.Label>
                  </Form.Group>
                  <Form.Control
                    name="input1"
                    value={valueFrom}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Jakarta(JKTA)"
                    className="inputLocation"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Button
                    style={{ background: "#7126B5", border: "0" }}
                    className="d-flex align-items-center justify-content-between border-0"
                    onClick={handleSwitchClick}
                  >
                    <VscArrowSwap />
                  </Button>
                </Form.Group>

                <Form.Group
                  className="gap-3 mb-3 d-flex align-items-center justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Group>
                    <TbPlaneArrival size={25} />
                    <Form.Label>To</Form.Label>
                  </Form.Group>
                  <Form.Control
                    name="input2"
                    value={valueTo}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Melbourne(MLB)"
                    className="inputLocation"
                  />
                </Form.Group>
              </Form>
              {/* ////////////////////////////////////////////////////////// */}
              <Form className="inputSchedule gap-3 align-items-center justify-content-center  ">
                <Form.Group
                  className="gap-3 mb-3 d-flex align-items-center justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Group>
                    <MdOutlineDateRange size={25} />
                    <Form.Label>Date</Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Departure</Form.Label>

                    <Form.Control
                      type="date"
                      // value={selectedDate}
                      // onChange={handleDateChange}
                    />
                    {/* <p>Selected Date: {selectedDate}</p> */}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Return</Form.Label>

                    <Form.Control
                      type="date"
                      disabled={!isEnabled}
                      placeholder={isEnabled ? "Input enabled" : "Input disabled"}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="switch"
                      label=""
                      checked={isEnabled}
                      onChange={handleSwitchChange}
                    />
                  </Form.Group>
                </Form.Group>

                <Form.Group
                  className="gap-3 mb-3 d-flex align-items-center justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Group>
                    <MdOutlineAirlineSeatReclineNormal size={25} />
                    <Form.Label>To</Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Passengers</Form.Label>

                    <Form.Control
                      type="text"
                      placeholder={`${sum} Passengers `}
                      onClick={handleShowPassenger}
                      readOnly="readonly"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Seat Class</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Class"
                      onClick={handleShowSeatClass}
                      readOnly="readonly"
                    />
                  </Form.Group>
                </Form.Group>
              </Form>
            </Card.Text>
          </Card.Body>
          <Modal show={showPassenger} onHide={handleClosePassenger}>
            <Modal.Header closeButton>
              <Modal.Title>Passengers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group>
                    <Form.Group className="d-grid">
                      <Form.Label>Dewasa</Form.Label>
                      <Form.Text>(12Tahun Ke Atas)</Form.Text>
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group className="d-flex">
                      <Form.Control
                        type="number"
                        placeholder="0"
                        autoFocus
                        value={valueDewasa}
                        onChange={handleChangeValueDewasa}
                        min="0"
                      />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group>
                    <Form.Group className="d-grid">
                      <Form.Label>Anak</Form.Label>
                      <Form.Text>(2 - 11 Tahun)</Form.Text>
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group className="d-flex">
                      <Form.Control
                        type="number"
                        placeholder="0"
                        autoFocus
                        value={valueAnak}
                        onChange={handleChangeValueAnak}
                        min="0"
                      />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group className="d-grid">
                    <Form.Label>Bayi</Form.Label>
                    <Form.Text>(Di Bawah 2 Tahun)</Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group className="d-flex">
                      <Form.Control
                        type="number"
                        placeholder="0"
                        autoFocus
                        value={valueBayi}
                        onChange={handleChangeValueBayi}
                        min="0"
                      />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showSeatClass} onHide={handleCloseSeatClass}>
            <Modal.Header closeButton>
              <Modal.Title>Passengers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {["radio"].map((type) => (
                  <div key={`reverse-${type}`} className="mb-3 d-grid ">
                    <Form.Group className="d-flex justify-content-between">
                      <Form.Group className="d-grid">
                        <Form.Label>Economy</Form.Label>
                        <Form.Text>IDR 4.950.000</Form.Text>
                      </Form.Group>
                      <Form.Check
                        className="d-flex align-items-center"
                        reverse
                        label=""
                        name="group1"
                        type={type}
                        id={`reverse-${type}-1`}
                      />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between">
                      <Form.Group className="d-grid">
                        <Form.Label>Premium Economy</Form.Label>
                        <Form.Text>IDR 7.550.000</Form.Text>
                      </Form.Group>
                      <Form.Check
                        className="d-flex align-items-center"
                        reverse
                        label=""
                        name="group1"
                        type={type}
                        id={`reverse-${type}-2`}
                      />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between">
                      <Form.Group className="d-grid">
                        <Form.Label>Business</Form.Label>
                        <Form.Text>IDR 29.220.000</Form.Text>
                      </Form.Group>
                      <Form.Check
                        className="d-flex align-items-center"
                        reverse
                        label=""
                        name="group1"
                        type={type}
                        id={`reverse-${type}-3`}
                      />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between">
                      <Form.Group className="d-grid">
                        <Form.Label>First Class</Form.Label>
                        <Form.Text>IDR 87.620.000</Form.Text>
                      </Form.Group>
                      <Form.Check
                        className="d-flex align-items-center"
                        reverse
                        label=""
                        name="group1"
                        type={type}
                        id={`reverse-${type}-4`}
                      />
                    </Form.Group>
                  </div>
                ))}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseSeatClass}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            style={{
              background: "#7126B5",
              border: "0",
              width: "100%",
              paddingRight:-35,
              marginTop:35,
            }}
            type="submit"
            size="md"
            as={Link}
            to="/CariPenerbangan"
          >
            Cari Penerbangan
          </Button>
        </Container>
    </Container>
    </div>
  );
}

export default Banner;
