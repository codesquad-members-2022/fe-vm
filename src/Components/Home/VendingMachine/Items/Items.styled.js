import styled, { css } from 'styled-components';

const ItemsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 10px;
	flex: 1 1 0;
	${({ theme: { colors } }) => css`
		border-right: 2px solid ${colors.black};
	`}
`;

const ItemDiv = styled.div`
	align-content: flex-start;
	flex-basis: 35%;
	margin: 10px;
	padding: 10px;
	${({ theme: { colors }, empty }) =>
		!empty &&
		css`
			border: 2px solid ${colors.black};
			border-radius: 10px;
		`};
`;

const ItemNameDiv = styled.div`
	margin: 2px;
`;

const ItmePriceDiv = styled.div`
	padding: 2px;
`;

export { ItemsDiv, ItemDiv, ItemNameDiv, ItmePriceDiv };
