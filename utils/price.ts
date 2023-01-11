const getLocalNumber = (number: number) => {
  if (number !== null) {
    return number.toLocaleString('ko-KR');
  }
};

export { getLocalNumber };
