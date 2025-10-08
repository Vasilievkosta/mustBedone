import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

import App from "./App"
import "./locales/config.ts"

import { BrowserRouter } from "react-router-dom"
import { store } from "./app/store"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
