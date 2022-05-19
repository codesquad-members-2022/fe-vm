export const fetchData = async (url, { method, bodyData } = {}) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  const body = JSON.stringify(bodyData);
  const fetchParams = { method, headers, body };
  try {
    const data = await fetch(url, fetchParams);
    return data.json();
  } catch (error) {
    console.log(error);
    return error;
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

export const composeProvider = (providers) => {
  return providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));
};

function getFlexTemplate({ justify, align, direction, wrap }) {
  justify = justify || "start";
  align = align || "stretch";
  direction = direction || "row";
  wrap = wrap || "nowrap";
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex-wrap:${wrap}
  `;
}

export const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start) + start);
