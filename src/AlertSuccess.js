import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertSuccess({ message }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Exitoso!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
