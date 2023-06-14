import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const DataPenumpang = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  return (
    <div className="dataPenumpang">
      <h5 className="fw-bold mb-4">Isi Data Penumpang</h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Penumpang 1 - Adult
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Title
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Nama Lengkap
              </Form.Label>
              <Form.Control type="text" />
              <div className="d-flex justify-content-between align-items-center mt-2">
                <Form.Text>Punya Nama Keluarga?</Form.Text>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleInput}
                />
              </div>
            </Form.Group>

            {showInput && (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Keluarga
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Tanggal Lahir
              </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Kewarganegaraan
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                KTP/Paspor
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Negara Penerbit
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Berlaku Sampai
              </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataPenumpang;
