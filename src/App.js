import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Landing from './Component/Landing';
import About from './Component/About';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Resume from './Component/Resume';
import Main from './Component/Main'
import styled from 'styled-components';

const Button = styled.button``;

function clickMe() {
  console.log('clicked');
}

class App extends Component {
  render() {
    return (
      <div className="big-content">
        <Layout>
          <Header className="header-color">
            <Navigation>
              <a href="/">
              <button onClick={clickMe}>About Me</button>
              </a>
              <a href="/contact">
              <button onClick={clickMe}>Contact</button>
              </a>
              <a href="/projects">
              <button onClick={clickMe}>Projects</button>
              </a>
              <a href="/resume">
              <button onClick={clickMe}>Resume</button>
              </a>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
            <a href="/">
              <button onClick={clickMe}>About Me</button>
              </a>
              <a href="/contact">
              <button onClick={clickMe}>Contact</button>
              </a>
              <a href="/projects">
              <button onClick={clickMe}>Projects</button>
              </a>
              <a href="/resume">
              <button onClick={clickMe}>Resume</button>
              </a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Router>
              <Main />

            </Router>


          </Content>
          

        </Layout>
      </div>



    );
  }
}


export default App;
