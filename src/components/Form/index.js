import classNames from "classnames";

import createElement from "../../util/createElement";

import "./form.css";

const Form = (props = {}) => {
  const {
    method = "post",
    action = "#",
    children,
    className,
    ...otherProps
  } = props;

  const items = children.map(item =>
    createElement("div", { className: "form__item" }, item)
  );

  return createElement(
    "form",
    {
      method,
      action,
      className: classNames("form", className),
      ...otherProps
    },
    ...items
  );
};

export default Form;
