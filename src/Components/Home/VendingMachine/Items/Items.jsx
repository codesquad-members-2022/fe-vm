import { useState, useEffect, useContext } from 'react';

import { IsTakingOutContext } from 'Components/Contexts';
import { TAKINGOUT, lineCount } from 'Components/Common/constant';
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

	const getList = (itemsArray) => {
		const list = itemsArray.map((item) => <Item key={item.id} item={item} />);
		if (list.length % lineCount) {
			list.push(<ItemDiv key={itemsArray.length} empty={true} />);
		}
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
