import itemsApi from 'Service/itemsApi';
import { getPriceType } from 'Util/util';
import { useEffect, useState } from 'react';
import { ItemsDiv, ItemDiv, ItemNameDiv, ItmePriceDiv } from './Items.styled';

const Items = () => {
	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const itemsData = await itemsApi.getItems();
		setItems(itemsData);
	};

	const getList = (array) => {
		const list = array.map((item) => (
			<ItemDiv key={item.id}>
				<ItemNameDiv>{item.name}</ItemNameDiv>
				<ItmePriceDiv>{getPriceType(item.price, true)}</ItmePriceDiv>
			</ItemDiv>
		));

		if (list.length % 2) list.push(<ItemDiv key={array.length} empty={true} />);

		return list;
	};

	const list = items.length ? getList(items) : null;

	useEffect(() => {
		fetchItems();
	}, []);

	return <ItemsDiv>{list}</ItemsDiv>;
};

export default Items;
