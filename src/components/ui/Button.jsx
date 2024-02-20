/* eslint-disable react/prop-types */

const Button = (props) => {
  return <button className={props.styles}>{props.content}</button>;
};

export default Button;
