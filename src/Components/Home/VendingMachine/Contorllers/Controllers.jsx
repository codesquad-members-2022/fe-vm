import ControllersDiv from './Controllers.styled';
import Returning from './Returning';
import InputMoney from './InputMoney';
import Messages from './Messages';

const Controllers = () => {
	return (
		<ControllersDiv>
			<InputMoney />
			<Returning />
			<Messages />
		</ControllersDiv>
	);
};

export default Controllers;
