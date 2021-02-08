import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertDismissible({ errorMessage }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Ocurrio un Error!</Alert.Heading>
        <p>{errorMessage}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
