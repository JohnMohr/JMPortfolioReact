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
        <Layout id="layout">
          <Header className="header-color">
            <Navigation className="navigation">
              <a href="/">
                <button onClick={clickMe}>Home</button>
              </a>
              <a href="/aboutme">
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
              <a href="https://docs.google.com/document/d/13XTHa6004-Zgm-seQ-SCTWuZibD4xC8kHrIyO86-0b4/edit?usp=sharing">
                <button>Chef Resume</button>
            </a>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation className="sidenav">
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
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/aboutme" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
              </Switch>

            </Router>


          </Content>


        </Layout>
      </div>



    );
  }
}


export default App;
