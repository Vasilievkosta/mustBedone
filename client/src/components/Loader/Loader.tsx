import type { JSX } from "react"
import "./loader.css"

export function Loader(): JSX.Element {
  return (
    <div className="lds-center">
      <div className="lds-wrapper">
        <div className="lds-roller">
          <div></div> <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div> <div></div>
        </div>
      </div>
    </div>
  )
}
