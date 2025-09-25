import { NavLink } from "react-router-dom"

export const NavigationMenu = () => {
  return (
    <div className="sidebar">
      <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
        Orders
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
        Products
      </NavLink>
    </div>
  )
}
