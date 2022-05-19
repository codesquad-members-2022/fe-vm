import StyledButton from "./Button.styled";

const Button = ({
  data,
  styles,
  className,
  isAvailableClick = true,
  onClick,
  type,
}) => {
  return (
    <StyledButton
      styles={styles}
      className={className}
      disabled={!isAvailableClick}
      onClick={onClick}
      type={type || "button"}
    >
      {data.name}
    </StyledButton>
  );
};

export default Button;
