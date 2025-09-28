import { Routes, Route } from "react-router-dom"
import { TopMenu } from "./components/TopMenu/TopMenu"
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu"
import { Orders } from "./views/Orders/Orders"
import { Products } from "./views/Products/Products"

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <div className="main-layout">
        <NavigationMenu />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<h2>Home</h2>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<h2>NotFound 404</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
