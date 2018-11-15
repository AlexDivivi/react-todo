import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Config from './Config'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 70px;
  height: 100vh;
`
const Cookie = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`
const CookieBox = styled.div`
  height: 100%;
  background: whitesmoke;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/config/" component={Config} />
          </div>
          <Cookie>
            <CookieBox>
              <Link to="/">Home</Link>
            </CookieBox>
            <CookieBox>
              <Link to="/Config/">Config</Link>
            </CookieBox>
          </Cookie>
        </Grid>
      </Router>
    )
  }
}
