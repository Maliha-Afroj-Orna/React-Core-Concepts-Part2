import { useState } from "react"

export default function ToggleShowHide() {
    const [isActive, setIsActive] = useState(false);


  return (
    <div>
        <h2>Toggle Show/Hide Text: {isActive && (<h2>Hello, React Developers!</h2>)}</h2>
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Hide" : "Show"}
        </button>
    </div>
  )
}


