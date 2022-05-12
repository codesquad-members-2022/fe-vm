import { ICON_TYPE } from 'constants';
import { PlusIcon, MinusIcon } from 'components/icons';

const IconButton = ({ type, handleClick }) => {
  return <button onClick={handleClick}>{getIcon(type)}</button>;
};

const getIcon = type => {
  if (type === ICON_TYPE.PLUS) return <PlusIcon />;
  if (type === ICON_TYPE.MINUS) return <MinusIcon />;
};

export default IconButton;
