import StyledButton from "./Button.styled";

const Button = ({
  data,
  styles,
  className,
  isClickable = true,
  onClick,
  type,
}) => {
  return (
    <StyledButton
      styles={styles}
      className={className}
      disabled={!isClickable}
      onClick={onClick}
      type={type || "button"}
    >
      {data.name}
    </StyledButton>
  );
};

export default Button;
