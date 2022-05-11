import StyledButton from "./Button.styled";

const Button = ({ data, styles, className }) => {
  return (
    <StyledButton styles={styles} className={className}>
      {data.name}
    </StyledButton>
  );
};

export default Button;
