import createElement from "../../util/createElement";

import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

import logo from "../../images/logo.svg";
import "./login-form.css";

const LoginForm = () => {
  const form = Form({
    children: [
      Input({
        name: "login",
        id: "login",
        placeholder: "example@mail.com"
      }),
      Input({
        name: "password",
        id: "password",
        type: "password",
        placeholder: "Password"
      }),
      Button({
        type: "submit",
        color: "red",
        children: "Submit"
      })
    ]
  });

  const loginForm__form = createElement(
    "div",
    { className: "login-form__form" },
    form
  );

  const loginForm__logo = createElement(
    "div",
    { className: "login-form__logo" },
    createElement("img", { src: logo.src, alt: "Rollup logo" })
  );

  return createElement(
    "div",
    { className: "login-form" },
    loginForm__logo,
    loginForm__form
  );
};

export default LoginForm;
