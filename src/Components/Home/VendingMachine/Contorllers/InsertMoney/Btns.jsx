import PropTypes from 'prop-types';
import {
	INSERT,
	WITHDRAW,
	GREEN,
	LIGHTGREEN,
	RED,
	LIGHTRED,
} from 'Components/Common/constant';

import { BtnDiv, BtnsDiv } from './InsertMoney.styled';

const Btns = ({ isTakingOut, withdrawAll }) => {
	const btnsInfo = [
		{ id: 0, name: INSERT, color: { main: LIGHTGREEN, sub: GREEN } },
		{
			id: 1,
			isEmpty: true,
			name: WITHDRAW,
			color: { main: LIGHTRED, sub: RED },
		},
	];

	const btns = btnsInfo.map((info) => {
		const { id, name, color, isEmpty } = info;

		return (
			<BtnDiv
				key={id}
				onClick={() => withdrawAll(isEmpty)}
				isTakingOut={isTakingOut}
				color={color}
			>
				{!isTakingOut && name}
				<div />
			</BtnDiv>
		);
	});

	return <BtnsDiv>{btns}</BtnsDiv>;
};

Btns.propTypes = {
	isTakingOut: PropTypes.bool.isRequired,
	withdrawAll: PropTypes.func.isRequired,
}.isRequired;

export default Btns;
