import StyledButton from "./Button.styled";

const Button = ({ data, styles, className, isDisabled, onClick }) => {
  return (
    <StyledButton
      styles={styles}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
    >
      {data.name}
    </StyledButton>
  );
};

export default Button;
