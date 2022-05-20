import { LoadingSpinner, Wrapper, Text } from "./Loading.styled";

const Loading = ({ productName }) => {
  return (
    <Wrapper>
      <LoadingSpinner />
      <Text>{`${productName} 구입 중...`}</Text>
    </Wrapper>
  );
};

export default Loading;
