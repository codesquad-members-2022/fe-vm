import PropTypes from 'prop-types';
import {
	INSERT,
	WITHDRAW,
	GREEN,
	LIGHTGREEN,
	RED,
	LIGHTRED,
} from 'Components/Common/constant';

import { ControllerBtn, ControllerBtnsDiv } from './InsertMoney.styled';

const ControllerBtns = ({ isTakingOut, calculateAndReportMoney }) => {
	const btnsInfo = [
		{ id: 0, name: INSERT, color: { main: LIGHTGREEN, sub: GREEN } },
		{
			id: 1,
			isZero: true,
			name: WITHDRAW,
			color: { main: LIGHTRED, sub: RED },
		},
	];

	const controllerBtns = btnsInfo.map((info) => {
		const { id, name, color, isZero } = info;

		return (
			<ControllerBtn
				key={id}
				onClick={() => calculateAndReportMoney(isZero)}
				isTakingOut={isTakingOut}
				disabled={isTakingOut}
				color={color}
			>
				{!isTakingOut && name}
				<div />
			</ControllerBtn>
		);
	});

	return <ControllerBtnsDiv>{controllerBtns}</ControllerBtnsDiv>;
};

ControllerBtns.propTypes = {
	isTakingOut: PropTypes.bool.isRequired,
	calculateAndReportMoney: PropTypes.func.isRequired,
}.isRequired;

export default ControllerBtns;
