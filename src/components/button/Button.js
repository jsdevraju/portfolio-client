const Button = ({text = "app btn", ...btnInfo}) => (
  <button {...btnInfo}>{text}</button>
);
export default Button;
