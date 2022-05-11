export const fetchData = async (url) => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export function applyFlex({ flex, justify, align, direction, wrap }) {
  return (
    flex &&
    `${getFlexTemplate({ justify, align, direction, wrap })}
    `
  );
}

export function getWonTemplate(number) {
  return `${number.toLocaleString()}원`;
}

function getFlexTemplate({ justify, align, direction, wrap }) {
  justify = justify || 'start';
  align = align || 'stretch';
  direction = direction || 'row';
  wrap = wrap || 'nowrap';
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex-wrap:${wrap}
  `;
}
