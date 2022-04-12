export const convertTimestampToLocalTime = (timeStamp: number) => {
  const date = new Date(timeStamp);
  console.log(date.toString());
  return date.toString();
};
