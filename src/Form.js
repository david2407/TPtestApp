import React, { useState } from "react";
import { Alert, Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AlertSuccess from "./AlertSuccess";

export default function UserForm({ companyData }) {
  const { register, handleSubmit } = useForm({ defaultValues: companyData });

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data) => {
    const url = `http://localhost:3000/companies/${data.id}`;

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => {
        setError(error.message);
        setShowError(true);
      })
      .then((response) => {
        setSuccessMessage("Se actualizo la empresa correctamente");
        setShowSuccess(true);
      });
  };

  return (
    <div className="Form col-md-8 col-lg-6">
      <div className="card shadow">
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {showError && (
                <Alert
                  variant="danger"
                  onClose={() => setShowError(false)}
                  dismissible
                >
                  <Alert.Heading>Error!</Alert.Heading>
                  <p>{error}</p>
                </Alert>
              )}

              {showSuccess && (
                <Alert
                  variant="success"
                  onClose={() => setShowSuccess(false)}
                  dismissible
                >
                  <Alert.Heading>Exitoso!</Alert.Heading>
                  <p>{successMessage}</p>
                </Alert>
              )}

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Identification Type</Form.Label>
                <Form.Control required as="select" name="IdType" ref={register}>
                  <option>Persona Juridica</option>
                  <option>Persona Natural</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicIdNumber">
                <Form.Label>Identification Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Identification"
                  name="id"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName1">
                <Form.Label>First Name part</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  name="firstName1"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName2">
                <Form.Label>First Name Second part</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="firstName2"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName1">
                <Form.Label>Last Name first part</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  name="lastName1"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName2">
                <Form.Label>Last Name Second Part</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="lastName2"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  ref={register}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  placeholder="1234 Main St"
                  name="address"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  placeholder="City"
                  name="city"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCity">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  placeholder="Phone Number"
                  name="cellNumber"
                  ref={register}
                  type="number"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckboxCellphoneMessages">
                <Form.Check
                  required
                  type="checkbox"
                  label="Send phone messages authorization"
                  name="sendPhoneMessages"
                  ref={register}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckboxEmailMessages">
                <Form.Check
                  required
                  type="checkbox"
                  label="Send email messages authorization"
                  name="sendEmailMessages"
                  ref={register}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* form stars here */}
      </div>
    </div>
  );
}
