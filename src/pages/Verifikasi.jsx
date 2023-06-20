import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import "../assets/css/Verifikasi.css";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  // const [isVerified, setIsVerified] = useState(false);

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  // const Verifikasi = () => {
  //   const handleChangeInput = (e) => {};
  //   return (
  //     <>
  //       <Navbar />
  //       <Container fluid>
  //         <Link to="/Register">
  //           <p className="ms-5 fs-1 text-color">
  //             <IoArrowBack />
  //           </p>
  //         </Link>
  //         <h2 className="text-center mb-5 fw-bold">Masukkan OTP</h2>
  //         <div
  //           className="d-flex flex-row justify-content-center mt-2"
  //           // onSubmit={onSubmit}
  //         >
  //           <Form>
  //             <Form.Group className="mb-3" controlId="formBasicEmail">
  //               <Form.Text>
  //                 Ketik 6 digit kode yang dikirimkan ke <b>r*****@gmail.com</b>
  //               </Form.Text>
  //               <div className="mt-4 mb-5 text-center">
  //                 <Form.Control
  //                   type="text"
  //                   value={otp}
  //                   onChange={handleOTPChange}
  //                   maxLength={6}
  //                 />
  //               </div>
  //               <div className="ms-2 text-center">
  //                 <Link to="" className="text-colorr">
  //                   Kirim ulang OTP dalam 60 detik
  //                 </Link>
  //               </div>
  //             </Form.Group>
  //             <Button type="submit" className="button w-100">
  //               Simpan
  //             </Button>
  //           </Form>
  //         </div>
  //       </Container>
  //     </>
  //   );
  // };
  return (
    <>
      <Navbar />
      <Container fluid>
        <Link to="/Register">
          <p className="ms-5 fs-1 text-color">
            <IoArrowBack />
          </p>
        </Link>
        <h2 className="text-center mb-5 fw-bold">Masukkan OTP</h2>
        <div
          className="d-flex flex-row justify-content-center mt-2"
          // onSubmit={onSubmit}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke <b>r*****@gmail.com</b>
              </Form.Text>
              <div className="mt-4 mb-5 text-center">
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={handleOTPChange}
                  maxLength={6}
                />
              </div>
              <div className="ms-2 text-center">
                <Link to="" className="text-colorr">
                  Kirim ulang OTP dalam 60 detik
                </Link>
              </div>
            </Form.Group>
            <Button type="submit" className="button w-100">
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default OTPVerification;
