import React from 'react'
import { Goback } from './Buttons'

export const PlansHeader = (text, step, setStep) => {
  return (
    <div className="text-center relative">
        <div className="absolute h-full">
            {Goback(step, setStep)}
        </div>
        <h1 className="flex-1" style={{fontSize: 30, marginBottom: 20, paddingRight: 40, paddingLeft: 40, textAlign: 'center'}}> 
            {text}
        </h1>
    </div>
  )
}