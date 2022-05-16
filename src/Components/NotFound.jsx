import styled, { css } from 'styled-components';

const NotFoundDiv = styled.div`
	${({ theme: { colors } }) => css`
		text-align: center;
		font-size: 50px;
		font-weight: 900;
		font-family: 'IBM Plex Sans KR', sans-serif;
		color: ${colors.white};
		background-color: ${colors.green};
		border-radius: 20px;
		margin: 50px;
		padding: 50px;
	`}
`;

const NotFound = () => {
	return <NotFoundDiv>NOT FOUND</NotFoundDiv>;
};

export default NotFound;
