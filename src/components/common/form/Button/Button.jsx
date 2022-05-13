import StyledButton from "./Button.styled";

const Button = ({ data, styles, className, isDisabled }) => {
  return (
    <StyledButton styles={styles} className={className} disabled={isDisabled}>
      {data.name}
    </StyledButton>
  );
};

export default Button;
