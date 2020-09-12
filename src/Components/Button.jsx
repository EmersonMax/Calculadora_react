import React from 'react'
import './Button.css'

export default props =>
    <button className=
    {`
    button
    ${props.fontred ? 'fontred' : ''}
    ${props.fontgreen ? 'fontgreen' : ''}
    ${props.bg ? 'bg' : ''}
    ${props.double ? 'double' : ''} 
    ${props.triple ? 'triple' : ''}
    `} 
    onClick={e => props.click && props.click(props.label)} >
         
         {props.label}
    
    </button>