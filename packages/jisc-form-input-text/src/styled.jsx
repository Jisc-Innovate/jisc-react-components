import styled from "styled-components"

export const LabelAbove = styled.div`
  float: none;
  width: 100%;
  text-align: left;
`

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`

export const ClearIconInner = styled.span`
  margin-left: 0;
  opacity: 1;
  position: absolute;
  top: 7px;
  right: 10px;
`

export const ClearIconOuter = styled.span`
  opacity: 0;
  margin-left: 5px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
const Input = styled.input`
  &:hover + span.icon.icon--outer.icon-close,
  &:focus + span.icon.icon--outer.icon-close {
    opacity: 1;
    cursor: pointer;
  }
`

const inputLabelAbove = `
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
`

const inputClearIcon = `
  padding-right: 33px;
`

export const InputLabelAbove = styled(Input)`${inputLabelAbove}`
export const InputClearIcon = styled(Input)`${inputClearIcon}`
export const InputLabeAboveClearIcon = styled(Input)`
  ${inputLabelAbove}
  ${inputClearIcon}
`
