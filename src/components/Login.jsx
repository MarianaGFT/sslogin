import React, { useState, useEffect } from "react";
import LoginCss from "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");
  const [counterErrors, setCounterErrors] = useState(0);
  const [countdown, setCountdown] = useState(10);

  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const onSubmit = (e) => {
    var user = checkEmail(email);
    var password = checkPassword(contrasena);
    e.preventDefault();
    if (user && password === true) {
      console.log(user, password);
      alert("Contraseña correcta");
      window.location.href = "/home";
    } else {
      if (counterErrors === 2) {
        console.log("if", counterErrors);
        setTimeout(function () {
          setCounterErrors(0);
          window.location.reload();
        }, 10000);
      }
      alert("⚠ Contraseña incorrecta ⚠");
      setEmail("");
      setContrasena("");
      setCounterErrors(counterErrors + 1);
      console.log(counterErrors);
    }
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

  const checkMayuscula = (contrasena) => {
    var mayuscula = false;

    for (var i = 0; i < contrasena.length; i++) {
      if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
        mayuscula = true;
      }
    }
    if (mayuscula == true) {
      return true;
    }
    return false;
  };

  const checkMinuscula = (contrasena) => {
    var minuscula = false;

    for (var i = 0; i < contrasena.length; i++) {
      if (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122) {
        minuscula = true;
      }
    }
    if (minuscula == true) {
      return true;
    }
    return false;
  };

  const checkNumero = (contrasena) => {
    var numero = false;

    for (var i = 0; i < contrasena.length; i++) {
      if (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57) {
        numero = true;
      }
    }
    if (numero == true) {
      return true;
    }
    return false;
  };

  const checkChar = (contrasena) => {
    var caracter_raro = false;

    for (var i = 0; i < contrasena.length; i++) {
      var expreg = /^[A-Z][a-z]$/;
      if (expreg.test(contrasena)) {
        caracter_raro = false;
      } else {
        caracter_raro = true;
      }
    }
    if (caracter_raro == true) {
      return true;
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
            <h1 className="primary">Requisitos de contraseña</h1>
            <a className={contrasena.length >= 8 ? "success" : null}>
              8 carácteres como mínimo.
            </a>
            <a
              className={checkMinuscula(contrasena) === true ? "success" : null}
            >
              Al menos una letra minuscula.
            </a>
            <a
              className={checkMayuscula(contrasena) === true ? "success" : null}
            >
              Al menos una letra mayuscula.
            </a>
            <a className={checkChar(contrasena) === true ? "success" : null}>
              Al menos un caracter raro.
            </a>
            <a className={checkNumero(contrasena) === true ? "success" : null}>
              Al menos un número.
            </a>
          </div>
        </section>
        <section className="form-wrapper">
          <div className="form-login">
            <h2>USER LOGIN</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                {counterErrors >= 3 && (
                  <>
                    <div className="alert alert-danger" role="alert">
                      Login deshabilitado por intentos fallidos intentelo mas tarde
                    </div>
                    <Form.Control
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter email"
                      disabled
                    />
                  </>
                )}
                {counterErrors < 3 && (
                  <>
                    <Form.Control
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter email"
                    />
                  </>
                )}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {counterErrors >= 3 && (
                  <>
                    <Form.Control
                      value={contrasena}
                      onChange={(e) => {
                        setContrasena(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      disabled
                    />
                  </>
                )}
                {counterErrors < 3 && (
                  <>
                    <Form.Control
                      value={contrasena}
                      onChange={(e) => {
                        setContrasena(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                    />
                  </>
                )}
              
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
