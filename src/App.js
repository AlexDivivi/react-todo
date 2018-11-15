import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Config from './Config'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 55px;
  height: 100vh;
`
const Cookie = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`
const CookieBox = styled.div`
  height: 100%;
  background: hotpink;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    color: whitesmoke;
  }
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
              <NavLink activeClassName="active" exact to="/">
                Home
              </NavLink>
            </CookieBox>
            <CookieBox>
              <NavLink activeClassName="active" to="/Config/">
                Config
              </NavLink>
            </CookieBox>
          </Cookie>
        </Grid>
      </Router>
    )
  }
}
