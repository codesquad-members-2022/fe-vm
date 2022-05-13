import { useContext } from 'react';

import { IsTakingOutContext, ItemsContext } from 'Components/Contexts';
import { TAKINGOUT, lineCount } from 'Components/Common/constant';
import Item from './Item';
import {
	ItemsWrapper,
	ItemsDiv,
	ItemDiv,
	TakingOutDiv,
	Loading,
} from './Items.styled';

const Items = () => {
	const { items } = useContext(ItemsContext);
	const { isTakingOut } = useContext(IsTakingOutContext);

	const getList = (itemsArray) => {
		const list = itemsArray.map((item) => <Item key={item.id} item={item} />);

		if (list.length % lineCount) {
			list.push(<ItemDiv key={itemsArray.length} empty={true} />);
		}
		return list;
	};

	const list = items.length ? getList(items) : null;

	return (
		<ItemsWrapper>
			<TakingOutDiv isTakingOut={isTakingOut}>
				<div>
					{TAKINGOUT}
					<Loading>
						<div />
					</Loading>
				</div>
			</TakingOutDiv>
			<ItemsDiv>{list}</ItemsDiv>
		</ItemsWrapper>
	);
};

export default Items;
