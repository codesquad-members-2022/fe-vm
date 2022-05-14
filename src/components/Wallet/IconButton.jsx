import { ICON_TYPE } from 'constants';
import { PlusIcon, MinusIcon } from 'components/icons';

const getIcon = type => {
  if (type === ICON_TYPE.PLUS) return <PlusIcon />;
  if (type === ICON_TYPE.MINUS) return <MinusIcon />;
};

const IconButton = ({ type, handleClick }) => {
  return <button onClick={handleClick}>{getIcon(type)}</button>;
};

export default IconButton;
