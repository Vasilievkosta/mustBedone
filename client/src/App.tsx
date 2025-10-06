import { Routes, Route } from "react-router-dom"
import { TopMenu } from "./components/TopMenu/TopMenu"
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu"

import { Products } from "./pages/Products/Products"

import { Orders } from "./pages/Orders/Orders"

function App() {
  return (
    <div className="page">
      <TopMenu />
      <div className="page__body">
        <aside className="sidebar">
          <NavigationMenu />
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<h2>Home</h2>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<h2>NotFound 404</h2>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
