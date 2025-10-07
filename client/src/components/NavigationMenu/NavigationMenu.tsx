import { NavLink, useNavigate } from "react-router-dom"
import photo from "../../assets/avaGirl.jpg"

export const NavigationMenu = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <>
      <div className="nav  d-flex flex-column align-items-center">
        <div className="nav__photo">
          <img className="nav__img img-thumbnail rounded-circle" src={photo} />
        </div>
        <nav aria-label="main navigation">
          <ul className="nav__list">
            <li className="nav__item nav-item">
              <NavLink to="/orders" className="nav__link nav-link">
                ПРИХОДЫ
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/products" className="nav__link nav-link">
                ПРОДУКТЫ
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/users" className="nav__link nav-link">
                ПОЛЬЗОВАТЕЛИ
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/settings" className="nav__link nav-link">
                НАСТРОЙКИ
              </NavLink>
            </li>
          </ul>
          <button className="nav__logout" onClick={handleLogout}>
            ➡️ ВЫХОД
          </button>
        </nav>
      </div>
    </>
  )
}
