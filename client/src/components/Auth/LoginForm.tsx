import { useForm } from "react-hook-form"
import "./login.css"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../services/api/api"
import { Loader } from "../Loader/Loader"
import { useTranslation } from "react-i18next"

type LoginFormValues = {
  username: string
  password: string
}

export function LoginForm() {
  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<LoginFormValues>({ mode: "onSubmit" })

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const res = await login(values).unwrap()
      localStorage.setItem("token", res.token)
      navigate("/products")
    } catch {
      // серверная ошибка логина
      setError("root.serverError", {
        type: "server",
        message: t("common.forma.wrongCredentials"),
      })
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="auth-form__title">{t("common.forma.signIn")}</h2>

      {/* Username */}
      <div className="auth-form__field">
        <label htmlFor="username" className="auth-form__label">
          {t("common.forma.username")}
        </label>
        <input
          id="username"
          type="text"
          className={`auth-form__input ${errors.username ? "is-invalid" : ""}`}
          placeholder={t("common.forma.enterUsername")}
          {...register("username", {
            onChange: () => clearErrors("root.serverError"), // очищаем серверную ошибку
            required: {
              value: true,
              message: t("common.forma.usernameRequired"),
            },
            minLength: { value: 3, message: t("common.forma.characters3") },
          })}
        />
        {errors.username && <span className="auth-form__error">{errors.username.message}</span>}
      </div>

      {/* Password */}
      <div className="auth-form__field">
        <label htmlFor="password" className="auth-form__label">
          {t("common.forma.password")}
        </label>
        <input
          id="password"
          type="password"
          className={`auth-form__input ${errors.password ? "is-invalid" : ""}`}
          placeholder={t("common.forma.enterPassword")}
          {...register("password", {
            onChange: () => clearErrors("root.serverError"),
            required: {
              value: true,
              message: t("common.forma.passwordRequired"),
            },
            minLength: { value: 6, message: t("common.forma.characters6") },
          })}
        />
        {errors.password && <span className="auth-form__error">{errors.password.message}</span>}
      </div>

      {/* Серверная ошибка */}
      <div className="auth-form__error-container">
        {errors.root?.serverError && (
          <div className="auth-form__error auth-form__error--server">{errors.root.serverError.message}</div>
        )}
      </div>

      <button className="auth-form__submit" type="submit" disabled={isSubmitting || isLoading}>
        {t("common.forma.signIn")}
      </button>

      {isLoading && (
        <div className="auth-form__overlay loader">
          <Loader />
        </div>
      )}
    </form>
  )
}
