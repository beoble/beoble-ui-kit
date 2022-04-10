// need tests
export const multiplyStringCssProperty = (
  strCssProperty: string,
  multiplyFacotor = 2
) => {
  if (!hasNumber(strCssProperty)) return strCssProperty;
  const splitedArr = strCssProperty.match(/[0-9]+[a-zA]+/g);
  const modifiedArr = splitedArr?.map((elem) => {
    return typeof elem === "number" ? elem * multiplyFacotor : elem;
  });
  return modifiedArr?.join("");
};

export const hasNumber = (str: string) => {
  return /\d/.test(str);
};
