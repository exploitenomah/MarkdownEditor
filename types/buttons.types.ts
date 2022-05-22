import React, { MouseEventHandler } from 'react'

export type BtnProps = {
  children:JSX.Element,
  extraClasses?: string,
  onClick: MouseEventHandler,
  innerRef?: any
}

export interface toggleBtnProps {
  checked: boolean,
  handleChange: Function 
  extraClasses?: string,
  id: string 
}