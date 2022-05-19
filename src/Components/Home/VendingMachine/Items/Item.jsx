import { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { BUY } from 'Util/constant';
import {
	MoneyContext,
	IsTakingOutContext,
	MessagesDispatchContext,
} from 'Components/Contexts';
import { getPriceType } from 'Util/util';
import {
	ItemDiv,
	ItemNameDiv,
	ItmePriceDiv,
	ItemWrapper,
} from './Items.styled';

const Item = ({ item }) => {
	const TAKING_OUT_TIME = 2000;

	const targetItem = item;
	const { name, price, count } = targetItem;
	const { setIsTakingOut } = useContext(IsTakingOutContext);
	const { money, setMoneyStates } = useContext(MoneyContext);
	const messagesDispatch = useContext(MessagesDispatchContext);
	const difference = money - price;
	const isSelectable = difference >= 0 && count;

	const handleClick = useCallback(() => {
		if (!isSelectable) return;
		setMoneyStates(difference);
		setIsTakingOut(false);
		messagesDispatch({ type: BUY, contents: name });

		targetItem.count -= 1;
	}, [
		difference,
		isSelectable,
		targetItem,
		setMoneyStates,
		setIsTakingOut,
		messagesDispatch,
		name,
	]);

	const debouncedHandleClick = useMemo(
		() => debounce(handleClick, TAKING_OUT_TIME),
		[handleClick]
	);

	const handleClickTakingOut = () => {
		if (!isSelectable) return;
		setIsTakingOut(true);
	};

	return (
		<ItemDiv
			onClick={debouncedHandleClick}
			isSelectable={isSelectable}
			count={targetItem.count}
		>
			<ItemWrapper onClick={handleClickTakingOut}>
				<ItemNameDiv>{name}</ItemNameDiv>
				<ItmePriceDiv>{getPriceType(price, true)}</ItmePriceDiv>
			</ItemWrapper>
		</ItemDiv>
	);
};

Item.propTypes = {
	item: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
};

export default Item;
