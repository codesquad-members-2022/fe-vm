import StyledButton from "./Button.styled";

const Button = ({ data, styles, className, isDisabled, onClick, type }) => {
  return (
    <StyledButton
      styles={styles}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type || "button"}
    >
      {data.name}
    </StyledButton>
  );
};

export default Button;
