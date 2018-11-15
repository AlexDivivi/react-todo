import styled from 'styled-components'
import React, { Component } from 'react'

const WrapperProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  box-shadow: 3px 3px 10px hotpink;
  border-radius: 20px 4px;
  overflow: hidden;
`

export default class Progressbar extends Component {
  render() {
    const progress = this.props.progress
    const ProgressBar = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      height: 30px;
      width: ${progress < 3 ? progress + 1.5 : progress || 0}%;
      background: hotpink;
      border-radius: 20px 4px;
    `
    return (
      <WrapperProgress>
        <ProgressBar>{progress}%</ProgressBar>
      </WrapperProgress>
    )
  }
}
