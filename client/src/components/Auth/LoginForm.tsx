import { useForm } from "react-hook-form"
import "./login.css"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../services/api/api"
import { Loader } from "../Loader/Loader"

type LoginFormValues = {
  username: string
  password: string
}

export function LoginForm() {
  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ mode: "onSubmit" })

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values)
    try {
      const res = await login(values).unwrap()

      localStorage.setItem("token", res.token)
      navigate("/products")
    } catch (err) {
      console.error("Ошибка входа:", err)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="auth-form__title">Вход</h2>

      <div className="auth-form__field">
        <label htmlFor="username" className="auth-form__label">
          Логин
        </label>
        <input
          id="username"
          type="text"
          className={`auth-form__input ${errors.username ? "is-invalid" : ""}`}
          placeholder="Введите логин"
          {...register("username", {
            required: "Логин обязателен",
            minLength: { value: 3, message: "Минимум 3 символа" },
          })}
        />
        {errors.username && <span className="auth-form__error">{errors.username.message}</span>}
      </div>

      <div className="auth-form__field">
        <label htmlFor="password" className="auth-form__label">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          className={`auth-form__input ${errors.password ? "is-invalid" : ""}`}
          placeholder="Введите пароль"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: { value: 6, message: "Минимум 6 символов" },
          })}
        />
        {errors.password && <span className="auth-form__error">{errors.password.message}</span>}
      </div>
      {error && <div className="auth-form__error auth-form__error--server">Неверный логин или пароль</div>}

      <button className="auth-form__submit" type="submit" disabled={isSubmitting || isLoading}>
        Войти
      </button>
      {isLoading && (
        <div className="auth-form__overlay loader">
          <Loader />
        </div>
      )}
    </form>
  )
}
