import { Navigate, Route, Routes } from "react-router-dom"
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu"
import { TopMenu } from "./components/TopMenu/TopMenu"

import { Products } from "./pages/Products/Products"

import { Orders } from "./pages/Orders/Orders"
import { LoginForm } from "./components/Auth/LoginForm"
import { ProtectedRoute } from "./components/Auth/ProtectedRoute"

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
            <Route element={<ProtectedRoute />}>
              <Route path="/orders" element={<Orders />} />
              <Route path="/groups" element={<div>В разработке</div>} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<div>В разработке</div>} />
              <Route path="/settings" element={<div>В разработке</div>} />
              <Route path="*" element={<Navigate to="/products" />} />
            </Route>

            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
