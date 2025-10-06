import { type ReactNode } from "react"
import "./modal.css"

interface ModalProps {
  active: boolean
  setActive: (value: boolean) => void
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__buttons">
          <button className="modal__btn" onClick={() => setActive(false)}>
            &#10006;
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
