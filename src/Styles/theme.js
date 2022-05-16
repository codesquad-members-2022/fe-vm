const colors = {
	black: '#181818',
	green: '#5e895e',
	lightGreen: '#86B98A',
	yellow: '#FFD366',
	red: '#DB6050',
	lightRed: '#FA786A',
	white: '#FFFEF4',
	offWhite: '#FFFFFF',
};

const distance = {
	small: '10px',
	large: '20px',
	xLarge: '50px',
};

const border = {
	main: 'solid 2px',
	large: 'solid 5px',
	xLarge: 'solid 10px',
	radius: { small: '10px', main: '20px', sub: '50px' },
};

const width = {
	app: '1000px',
	navigator: '200px',
	vm: '900px',
	'vm-child': '400px',
	coin: '100px',
};

const height = {
	vm: '710px',
	messages: '80px',
	coin: '75px',
};

const font = {
	main: {
		'font-family': '"IBM Plex Sans KR", sans-serif',
		'font-weight': 500,
	},

	small: {
		'font-size': '18px',
	},

	medium: {
		'font-size': '20px',
	},

	xLarge: {
		'font-size': '50px',
		'font-weight': '900',
	},
};

const getBorder = (type, color, radius) => {
	return {
		border: `${border[type]} ${colors[color]}`,
		'border-radius': border.radius[radius],
	};
};

const getStyledButtonColor = (
	color,
	borderSize,
	isHover = false,
	isReversed = false
) => {
	const mainColor = !isReversed ? color : 'offWhite';
	const subColor = !isReversed ? 'offWhite' : color;

	return {
		'background-color': colors[mainColor],
		color: colors[subColor],
		border: `${border[borderSize]} ${colors[subColor]}`,
		':hover': isHover && {
			color: colors[mainColor],
			'background-color': colors[subColor],
			border: `${border[borderSize]} ${colors[mainColor]}`,
		},
	};
};

const theme = {
	colors,
	distance,
	border,
	width,
	height,
	font,
	getBorder,
	getStyledButtonColor,
};

export default theme;
