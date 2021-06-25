import React, { useState } from "react";
import LoginCss from "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");

  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const onSubmit = (e) => {
    var user = checkEmail(email);
    var password = checkPassword(contrasena);
    e.preventDefault();
    if (user && password === true) {
      console.log(user, password);
      alert("Contraseña correcta");
      window.location.href = '/home';

      // window.location.href = "/home";

    } else {
      alert("Escribe una contraseña correcta");
      setEmail("");
      setContrasena("");
    }
    // console.log(contrasena,email)
  };

  const checkEmail = (email) => {
    var valido = null;
    if (emailRegex.test(email)) {
      // valido.innerText = "válido";
      console.log("valido");
      valido = true;
    } else {
      // valido.innerText = "incorrecto";
      console.log("no valido");
      valido = false;
    }
    return valido;
  };

  const checkPassword = (contrasena) => {
    if (contrasena.length >= 8) {
      var mayuscula = false;
      var minuscula = false;
      var numero = false;
      var caracter_raro = false;

      for (var i = 0; i < contrasena.length; i++) {
        if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
          mayuscula = true;
        } else if (
          contrasena.charCodeAt(i) >= 97 &&
          contrasena.charCodeAt(i) <= 122
        ) {
          minuscula = true;
        } else if (
          contrasena.charCodeAt(i) >= 48 &&
          contrasena.charCodeAt(i) <= 57
        ) {
          numero = true;
        } else {
          caracter_raro = true;
        }
      }
      if (
        mayuscula == true &&
        minuscula == true &&
        caracter_raro == true &&
        numero == true
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <section className="welcome-box">
          <h2>BIENVENIDO!</h2>
          <div className="password-requirements">
            {/* ---- EJEMPLO PARA QUE FUNCIONE LO DE LA CONTRASEÑA
                        <a className={contrasena.length >= 8 ? "success" : null}>
                        8 carácteres como mínimo.
                      </a> */}
            <h1 className="primary">Requisitos password</h1>
            <a className="success">8 carácteres como mínimo.</a>
            <a className="success">Al menos una letra minuscula.</a>
            <a className="success">Al menos una letra mayuscula.</a>
            <a className="success">Al menos un caracter raro.</a>
            <a className="success">Al menos un número.</a>
          </div>
        </section>
        <section className="form-wrapper">
          <div className="form-login">
            <h2>USER LOGIN</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                  
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  value={contrasena}
                  onChange={(e) => {
                    setContrasena(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={onSubmit}>
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
