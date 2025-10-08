import { NavLink, useNavigate } from "react-router-dom"
import photo from "../../assets/avaGirl.jpg"
import { useTranslation } from "react-i18next"

export const NavigationMenu = () => {
  const navigate = useNavigate()

  const { t, i18n } = useTranslation()

  const switchLang = (lng: "en" | "ru") => {
    i18n.changeLanguage(lng)
  }

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
                {t("common.sidebar.orders")}
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/groups" className="nav__link nav-link">
                {t("common.sidebar.groups")}
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/products" className="nav__link nav-link">
                {t("common.sidebar.products")}
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/users" className="nav__link nav-link">
                {t("common.sidebar.users")}
              </NavLink>
            </li>
            <li className="nav__item nav-item">
              <NavLink to="/settings" className="nav__link nav-link">
                {t("common.sidebar.settings")}
              </NavLink>
            </li>
          </ul>
          <button className="nav__logout" onClick={handleLogout}>
            ➡️ {t("common.forma.signOut")}
          </button>
        </nav>
        <div className="nav__lang">
          <button className="nav__langBtn" onClick={() => switchLang("ru")}>
            RU
          </button>
          <button className="nav__langBtn" onClick={() => switchLang("en")}>
            EN
          </button>
        </div>
      </div>
    </>
  )
}
