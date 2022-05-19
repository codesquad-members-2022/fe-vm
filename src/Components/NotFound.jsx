import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundDiv = styled.div`
	${({ theme: { font, border, distance, getStyledButtonColor } }) => css`
		${font.xLarge};
		${getStyledButtonColor('red', 'xLarge')}
		text-align: center;
		border-radius: ${border.radius.sub};
		margin: ${distance.xLarge};
		padding: ${distance.xLarge};
	`}
`;

const BackDiv = styled.div`
	${({ theme: { font, border, distance, getStyledButtonColor } }) => css`
		${font.xLarge};
		${getStyledButtonColor('green', 'xLarge', true)};
		text-align: center;
		border-radius: ${border.radius.sub};
		margin: ${distance.xLarge};
		padding: ${distance.xLarge};
	`}
`;

const NotFound = () => {
	const NOT_FOUND = 'NOT FOUND';
	const BACK = 'BACK TO HOME';

	return (
		<>
			<NotFoundDiv>{NOT_FOUND}</NotFoundDiv>
			<Link to="/">
				<BackDiv>{BACK}</BackDiv>
			</Link>
		</>
	);
};

export default NotFound;
