import React, { useState } from "react";
import { Alert, Card, Button, Form } from "react-bootstrap";
import UserForm from "./Form";

function InitialForm(data) {
  const [CompanyId, setCompanyId] = useState(0);
  const [messageError, setMessageError] = useState("");

  const [ableUpdate, setAbleUpdate] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const comp = data.data.find((item) => item.id == CompanyId);

    if (comp !== undefined) {
      if (comp.errorCode > 0) {
        setMessageError(
          comp.errorMessage !== undefined ? comp.errorMessage : ""
        );
        setShowError(true);
      } else {
        setAbleUpdate(true);
      }
    } else {
      setMessageError("La empresa no se encuentra en la base de datos");
      setShowError(true);
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

          {showError && (
            <Alert
              variant="danger"
              onClose={() => setShowError(false)}
              dismissible
            >
              <Alert.Heading>Error!</Alert.Heading>
              <p>{messageError}</p>
            </Alert>
          )}
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
