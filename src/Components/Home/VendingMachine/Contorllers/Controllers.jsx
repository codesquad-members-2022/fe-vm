import ControllersDiv from './Controllers.styled';
import InsertMoney from './InsertMoney/InsertMoney';
import Messages from './Messages';

const Controllers = () => {
	return (
		<ControllersDiv>
			<InsertMoney />
			<Messages />
		</ControllersDiv>
	);
};

export default Controllers;
