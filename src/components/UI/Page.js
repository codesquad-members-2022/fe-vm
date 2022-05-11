import styled from 'styled-components';
import Container from './container';

const PageContainer = styled(Container)`
  margin: 0 auto;
  width: 95%;
  height: 75vh;
`;

const Page = ({ children, ...rest }) => {
  return <PageContainer {...rest}>{children}</PageContainer>;
};

export default Page;
