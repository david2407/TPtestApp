import React, { Component, useState, useEffect } from "react";
import { Toast, Card, Button, Form } from "react-bootstrap";
import UserForm from "./Form";

function InitialForm(data) {
  const [CompanyId, setCompanyId] = useState(0);
  const [messageError, setMessageError] = useState("");

  const [ableUpdate, setAbleUpdate] = useState(false);

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  const handleSubmit = (e) => {
    e.preventDefault();

    const comp = data.data.find((item) => item.id == CompanyId);

    if (comp.ableRegister == true) {
      setAbleUpdate(true);
    } else {
      setMessageError(comp.message);
      setShowA(!showA);
    }
  };

  return (
    <div className="container">
      {!ableUpdate && (
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicIdNumber">
                <Form.Label>Identification Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Insert Id Number"
                  onChange={(e) => setCompanyId(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>

          <Toast show={showA} autohide onClose={toggleShowA}>
            <Toast.Header>
              <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>
              {messageError.length === 0
                ? "La empresa no esta registrada en la base de datos"
                : messageError}
            </Toast.Body>
          </Toast>
        </Card>
      )}

      {ableUpdate && (
        <UserForm
          companyData={data.data.find((element) => element.id == CompanyId)}
        />
      )}
    </div>
  );
}

export default InitialForm;
