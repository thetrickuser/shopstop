/* eslint-disable react/prop-types */
const Input = (props) => {
  return (
    <input
      className={props.styles}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
