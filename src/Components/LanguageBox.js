import React from 'react'
import { ChangeLang } from './Functions'

function LanguageBox() {

    const langs = [
        {
            "title":"English",
            "sub":"en"
        },
        {
            "title":"Français",
            "sub":"fr"
        },
        {
            "title":"اللغة العربية",
            "sub":"ar"
        },
    ]

  return (
    <div style={{display: "flex", marginTop: 40, marginBottom: 40, justifyContent: "space-evenly"}}>
        {langs.map((item,key)=>(
            <button key={key} onClick={()=> ChangeLang(item.sub)}>
                {item.title}
            </button>
        ))}
    </div>
  )
}

export default LanguageBox