import StyledButton from "./Button.styled";

const Button = ({ data, style, className }) => {
  return (
    <StyledButton style={style} className={className}>
      {data.name}
    </StyledButton>
  );
};

export default Button;
