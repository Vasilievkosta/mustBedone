import { NavLink } from "react-router-dom"
import photo from "../../assets/avaGirl.jpg"

export const NavigationMenu = () => {
  return (
    <div className="sidebar">
      <img style={{ width: "100px" }} src={photo} />
      <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
        Orders
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
        Products
      </NavLink>
    </div>
  )
}
