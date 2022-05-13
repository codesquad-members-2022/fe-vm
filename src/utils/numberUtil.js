const COMMA = ",";

const numberUtil = {
  seperateThousands: (originalNumber) => {
    return originalNumber
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, COMMA);
  },
};

export default numberUtil;
