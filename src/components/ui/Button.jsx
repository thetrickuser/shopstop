/* eslint-disable react/prop-types */

const Button = (props) => {
    return (
      <button className={props.styles}>
        {props.icon && <span className={props.styles.icon}>{props.icon}</span>}
        {props.content}
      </button>
    );
  };

export default Button;
