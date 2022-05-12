import { useState, useEffect, useContext } from 'react';

import { IsTakingOutContext } from 'Components/Contexts';
import itemsApi from 'Service/itemsApi';
import Item from './Item';
import {
	ItemsWrapper,
	ItemsDiv,
	ItemDiv,
	TakingOutDiv,
	Loading,
} from './Items.styled';

const Items = () => {
	const [items, setItems] = useState([]);
	const { isTakingOut } = useContext(IsTakingOutContext);

	const fetchItems = async () => {
		const itemsData = await itemsApi.getItems();
		setItems(itemsData);
	};

	const getList = (array) => {
		const list = array.map((item) => <Item key={item.id} item={item} />);
		if (list.length % 2) list.push(<ItemDiv key={array.length} empty={true} />);
		return list;
	};

	const list = items.length ? getList(items) : null;

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<ItemsWrapper>
			<TakingOutDiv isTakingOut={isTakingOut}>
				<div>
					상품이 나오는 중
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
