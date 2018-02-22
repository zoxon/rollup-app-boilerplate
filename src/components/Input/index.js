import createElement from "../../util/createElement";
import "./input.css";

const Input = (props = {}) => {
  const {
    id = "id",
    name = "name",
    type = "text",
    className,
    ...otherProps
  } = props;

  const input = createElement("input", {
    className: "input__control " + className,
    type,
    name,
    id,
    ...otherProps
  });

  return createElement("div", { className: "input" }, input);
};

export default Input;
