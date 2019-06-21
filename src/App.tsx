import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './shared/components/Container';
import Header from './shared/components/Header';
import GoogleMapBlock from './shared/components/GoogleMapBlock';
import LoginForm from './shared/components/LoginForm';

const MainPage = () => {
  const [id, setID] = useState(0);
  const selectedMarker = (e: number) => {
    setID(e);
  };
  return (
    <Container>
      <GoogleMapBlock selectedMarker={selectedMarker} />
    </Container>
  );
};

const Login = () => <LoginForm />;
const About = () => <p>Test task By AleXoiD</p>;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/Authorization" component={Login} />
          <Route path="/about-author" component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
