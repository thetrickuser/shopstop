/* eslint-disable react/prop-types */
const Input = (props) => {
  return (
    <input
      className={props.styles}
      type={props.type || "text"}
      placeholder={props.placeholder || "Search for products"}
    />
  );
};

export default Input;
