import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

function Riwayat() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setIsClicked(!isClicked);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  //   const handleClick = () => {
  //   };
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <h5>
            <strong>Riwayat Pemesanan</strong>
          </h5>
        </Row>
        <Row className="d-flex justify-content-between gap-3">
          <Col>
            <Button style={{ background: "#A06ECE", border: "0" }}>
              <BsArrowLeft />
              &nbsp; Beranda
            </Button>
          </Col>
          <Col className="d-flex justify-content-end gap-3">
            <Button style={{ background: "#A06ECE", border: "0" }}>
              <LuFilter />
              &nbsp; Filter
            </Button>
            <Button className="bg-transparent border-0">
              <AiOutlineSearch color="#7126B5" size={25} />
            </Button>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between">
          <Col className="options d-grid gap-3 mt-3">
            <div
              className={` option ${
                selectedOption === "option1" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("option1")}
            >
              <Card
                style={{
                  width: "30rem",
                  border:
                    selectedOption === "option1"
                      ? "1px solid #7126B5BF"
                      : "none",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onClick={toggleDetails}
              >
                <Card.Header className="bg-transparent ">
                  <span
                    style={{
                      background: "#73CA5C",
                      color: "white",
                      padding: "5px 15px 5px 15px",
                      borderRadius: "15px",
                      width: "10px",
                    }}
                  >
                    Issued
                  </span>
                </Card.Header>
                <Card.Body className="d-flex justify-content-between">
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Jakarta <br />
                      5 Maret 2023
                      <br />
                      19:10
                    </Card.Text>
                  </div>
                  <div className="d-grid justify-items-center">
                    <Card.Text>4h 0m</Card.Text>
                    <BsArrowRight size={25} />
                  </div>
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Melbourne <br />
                      6 Maret 2023
                      <br />
                      12:10
                    </Card.Text>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Text>
                      <strong>
                        Booking Code: <br />
                      </strong>
                      6723y2GHK
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text>
                      <strong>
                        Class: <br />
                      </strong>
                      Economy
                    </Card.Text>
                  </div>
                  <div className="d-flex align-items-center">
                    <Card.Text>
                      <span style={{ color: "#4B1979" }}>
                        <strong>IDR 9.850.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`option ${
                selectedOption === "option2" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("option2")}
            >
              <Card
                style={{
                  width: "30rem",
                  border:
                    selectedOption === "option2"
                      ? "1px solid #7126B5BF"
                      : "none",

                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onClick={toggleDetails}
              >
                <Card.Header className="bg-transparent ">
                  <span
                    style={{
                      background: "#FF0000",
                      color: "white",
                      padding: "5px 15px 5px 15px",
                      borderRadius: "15px",
                      width: "10px",
                    }}
                  >
                    Unpaid
                  </span>
                </Card.Header>
                <Card.Body className="d-flex justify-content-between">
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Jakarta <br />
                      5 Maret 2023
                      <br />
                      19:10
                    </Card.Text>
                  </div>
                  <div className="d-grid justify-items-center">
                    <Card.Text>4h 0m</Card.Text>
                    <BsArrowRight size={25} />
                  </div>
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Melbourne <br />
                      6 Maret 2023
                      <br />
                      12:10
                    </Card.Text>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Text>
                      <strong>
                        Booking Code: <br />
                      </strong>
                      6723y2GHK
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text>
                      <strong>
                        Class: <br />
                      </strong>
                      Economy
                    </Card.Text>
                  </div>
                  <div className="d-flex align-items-center">
                    <Card.Text>
                      <span style={{ color: "#4B1979" }}>
                        <strong>IDR 9.850.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div
              className={`option ${
                selectedOption === "option3" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("option3")}
            >
              <Card
                style={{
                  width: "30rem",
                  border:
                    selectedOption === "option3"
                      ? "1px solid #7126B5BF"
                      : "none",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onClick={toggleDetails}
              >
                <Card.Header className="bg-transparent ">
                  <span
                    style={{
                      background: "#8A8A8A",
                      color: "white",
                      padding: "5px 15px 5px 15px",
                      borderRadius: "15px",
                      width: "10px",
                    }}
                  >
                    Cancelled
                  </span>
                </Card.Header>
                <Card.Body className="d-flex justify-content-between">
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Jakarta <br />
                      5 Maret 2023
                      <br />
                      19:10
                    </Card.Text>
                  </div>
                  <div className="d-grid justify-items-center">
                    <Card.Text>4h 0m</Card.Text>
                    <BsArrowRight size={25} />
                  </div>
                  <div className="d-flex">
                    <MdLocationPin size={25} />
                    <Card.Text>
                      Melbourne <br />
                      6 Maret 2023
                      <br />
                      12:10
                    </Card.Text>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Text>
                      <strong>
                        Booking Code: <br />
                      </strong>
                      6723y2GHK
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text>
                      <strong>
                        Class: <br />
                      </strong>
                      Economy
                    </Card.Text>
                  </div>
                  <div className="d-flex align-items-center">
                    <Card.Text>
                      <span style={{ color: "#4B1979" }}>
                        <strong>IDR 9.850.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {selectedOption && (
            <Col className="details ">
              <Card
                border="transparent"
                style={{
                  width: "30rem",
                  borderRight: "0px",
                  borderLeft: "0px",
                  borderTop: "0px",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                }}
                onClick={toggleDetails}
              >
                <Card.Header className="bg-transparent d-flex justify-content-between align-items-center">
                  <h5 className="mt-3">
                    <strong>Detail Pesanan</strong>
                  </h5>

                  {selectedOption === "option1" && (
                    <Card.Text>
                      <span
                        style={{
                          background: "#73CA5C",
                          color: "white",
                          padding: "5px 15px 5px 15px",
                          borderRadius: "15px",
                          width: "10px",
                        }}
                      >
                        Issued
                      </span>
                    </Card.Text>
                  )}
                  {selectedOption === "option2" && (
                    <Card.Text>
                      <span
                        style={{
                          background: "#FF0000",
                          color: "white",
                          padding: "5px 15px 5px 15px",
                          borderRadius: "15px",
                          width: "10px",
                        }}
                      >
                        Unpaid
                      </span>
                    </Card.Text>
                  )}
                  {selectedOption === "option3" && (
                    <Card.Text>
                      <span
                        style={{
                          background: "#8A8A8A",
                          color: "white",
                          padding: "5px 15px 5px 15px",
                          borderRadius: "15px",
                          width: "10px",
                        }}
                      >
                        Cancelled
                      </span>
                    </Card.Text>
                  )}
                </Card.Header>

                <ListGroup
                  className="d-grid border-1 "
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <div>
                    <Card.Text>
                      Booking Code:&nbsp;
                      <span style={{ color: "#7126B5" }}>
                        <strong>6723y2GHK</strong>
                      </span>
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Card.Text>
                      <strong>19:10</strong>
                    </Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>Keberangkatan</strong>
                      </span>
                    </Card.Text>
                  </div>
                  <div className="d-grid ">
                    <Card.Text>
                      5 Maret 2023 <br />
                      <span style={{ color: "#4B1979" }}>
                        Soekarno Hatta - Terminal 1A Domestik
                      </span>
                    </Card.Text>
                  </div>
                </ListGroup>
                <ListGroup
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <Card.Text>
                    <strong>
                      Jet Air - Economy <br />
                    </strong>
                    <strong>
                      JT - 203 <br />
                      <br />
                    </strong>
                    <strong>
                      Informasi: <br />
                    </strong>
                    <span style={{ color: "#4B1979" }}>
                      Penumpang 1: Mr. Harry Potter <br />
                    </span>
                    ID: 1234567 <br />
                    <span style={{ color: "#4B1979" }}>
                      Penumpang 2: Miss Hermione <br />
                    </span>
                    ID: 789658 <br />
                  </Card.Text>
                </ListGroup>
                <ListGroup
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <Card.Text>
                      <strong>21:10</strong>
                    </Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>Keberangkatan</strong>
                      </span>
                    </Card.Text>
                  </div>
                  <Card.Text>
                    5 Maret 2023 <br />
                    <span style={{ color: "#4B1979" }}>
                      Melbourne International Airport
                    </span>
                  </Card.Text>
                  <div className="d-grid "></div>
                </ListGroup>
                <ListGroup
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <Card.Text>
                    <strong>Rincian Harga</strong>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text>2 Adults</Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>IDR 9.550.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Card.Text>1 Baby</Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>IDR 0</strong>
                      </span>
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Card.Text>Tax</Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>IDR 300.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                </ListGroup>
                <ListGroup
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    border: "0",
                    borderBottom: "0",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <Card.Text>Total</Card.Text>
                    <Card.Text>
                      <span style={{ color: "#A06ECE" }}>
                        <strong>IDR 9.850.000</strong>
                      </span>
                    </Card.Text>
                  </div>
                </ListGroup>
                {selectedOption === "option1" && (
                  <Button
                    style={{
                      background: "#7126B5",
                      color: "white",
                      borderTopRightRadius: "0",
                      borderTopLeftRadius: "0",
                      borderBottom: "0",
                      border: "0",
                    }}
                  >
                    Cetak Tiket
                  </Button>
                )}
                {selectedOption === "option2" && (
                  <Button
                    style={{
                      background: "#FF0000",
                      color: "white",
                      borderTopRightRadius: "0",
                      borderTopLeftRadius: "0",
                      border: "0",
                    }}
                  >
                    Lanjut Bayar
                  </Button>
                )}
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Riwayat;
