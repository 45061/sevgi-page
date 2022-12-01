"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/components/Login.module.scss";

export default function Login() {
  async function login({ email, password }) {
    try {
      // const cookies = new Cookies();

      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("esto es data", data);
      const { token } = data;

      if (response.status === 403) {
        return console.log("error");
      }
      console.log("ëste es token", token);
      // cookies.set("token", token, { path: "/", maxAge: 3600 * 1000 * 24 });
      // dispatch(hiddeLoginForm());
      // toast.success("Usuario ha realizado login con exito");
      // dispatch({ type: AUTH_SUCCESS, payload: data.user });
    } catch (error) {
      console.log("hay un gran error");
      // dispatch({ type: AUTH_ERROR, payload: error });
      // toast.error("Usuario o contraseña errada");
    }
  }

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const dispatch = useDispatch();

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("este es el formulario", loginData);
    // dispatch(
    login({
      email: loginData.email,
      password: loginData.password,
    });
    // );
  };

  return (
    <form className={styles.login}>
      <header className={styles.login__header}>
        <div className={styles.login__brand}>
          <Image src="/Sevgi.png" alt="Sevgi Logo" width={150} height={80} />
        </div>

        <h3 className={styles.login__title}> Iniciar Sesión </h3>
      </header>
      <div className={styles.login__content}>
        {/* Email */}
        <input
          name="email"
          type="email"
          value={loginData.name}
          onChange={onChange}
          className={styles.login__input}
          placeholder="email"
          errormessage="EL correo es requerido."
          required
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          value={loginData.name}
          onChange={onChange}
          className={styles.login__input}
          placeholder="Contraseña"
          errormessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />

        {/* Recover */}
        <button
          type="button"
          className={styles.login__link}
          onClick={() => dispatch(showRecoverPassword())}
        >
          ¿Olvidaste la contraseña?
        </button>
      </div>
      <div className={styles.login__footer}>
        <button
          type="button"
          className={styles.login__link}
          onClick={() => dispatch(showRegisterForm())}
        >
          Registrarse
        </button>
        <button
          className={styles.btn_action}
          type="submit"
          onClick={handleSubmit}
        >
          Acceder
        </button>
      </div>
    </form>
  );
}
