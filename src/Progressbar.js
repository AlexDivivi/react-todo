import styled from 'styled-components'

export const WrapperProgress = styled.div`
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

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 30px;
  width: ${props => props.progress || 0}%;
  background: hotpink;
  border-radius: 20px 4px;
`
