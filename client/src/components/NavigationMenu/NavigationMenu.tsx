import { NavLink } from "react-router-dom"
import photo from "../../assets/avaGirl.jpg"

export const NavigationMenu = () => {
  return (
    <div className="nav">
      <div className="nav__photo">
        <img className="nav__img" src={photo} />
      </div>
      <nav aria-label="main navigation">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/orders" className="nav__link">
              ПРИХОДЫ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/products" className="nav__link">
              ПРОДУКТЫ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/users" className="nav__link">
              ПОЛЬЗОВАТЕЛИ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/settings" className="nav__link">
              НАСТРОЙКИ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
