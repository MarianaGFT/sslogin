import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route,  } from "react-router-dom";

const Home = lazy(() => import("../components/home"));
const Login = lazy(() => import("../components/Login"));

export default function index() {
  return (
    <>
      <Suspense fallback="">
        <BrowserRouter>
          <Switch>
            {/* {token === null || undefined ? (
            <Route exact path="/" component={Login} />
            ) : (
              <Switch>
              <Route exact path="/test" component={TestComponents} />
              </Switch>
            )} */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
