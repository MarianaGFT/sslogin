import React from "react";
import LoginCss from "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <section className="welcome-box">
          <h2>Welcome to website!</h2>
          <div className="password-requirements">
            {/* ---- EJEMPLO PARA QUE FUNCIONE LO DE LA CONTRASEÑA
                        <a className={contrasena.length >= 8 ? "success" : null}>
                        8 carácteres como mínimo.
                      </a> */}
            <a className="success">8 carácteres como mínimo.</a>
            <a className="success">Al menos una letra.</a>
            <a className="success">Al menos un número.</a>
          </div>
        </section>
        <section className="form-wrapper">
          <div className="form-login">
            <h2>USER LOGIN</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                LOGIN
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
