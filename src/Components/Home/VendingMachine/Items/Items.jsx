import { useContext } from 'react';

import { IsTakingOutContext, ItemsContext } from 'Components/Contexts';
import Item from './Item';
import {
	ItemsWrapper,
	ItemsDiv,
	ItemDiv,
	TakingOutDiv,
	Loading,
} from './Items.styled';

const Items = () => {
	const LINE_COUNT = 2;
	const TAKINGOUT = '상품이 나오는 중';

	const { items } = useContext(ItemsContext);
	const { isTakingOut } = useContext(IsTakingOutContext);

	const getList = (itemsArray) => {
		const list = itemsArray.map((item) => <Item key={item.id} item={item} />);

		if (list.length % LINE_COUNT) {
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
