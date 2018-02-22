import classNames from "classnames";

import createElement from "../../util/createElement";
import "./button.css";

const Button = (props = {}) => {
  const {
    size = "normal",
    style,
    color,
    block,
    baseClassName = "button",
    className,
    type = "button",
    children,
    ...otherProps
  } = props;

  const classes = classNames(
    baseClassName,
    {
      [`${baseClassName}_size_${size}`]: size,
      [`${baseClassName}_style_${style}`]: style,
      [`${baseClassName}_color_${color}`]: color,
      [`${baseClassName}_block`]: block
    },
    className
  );

  return createElement(
    "button",
    {
      type,
      className: classes,
      ...otherProps
    },
    ...children
  );
};

export default Button;
