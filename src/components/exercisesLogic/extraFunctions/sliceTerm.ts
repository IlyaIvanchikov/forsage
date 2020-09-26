const sliceTerm = (term: number, digits: number) => {
  let rezTerm = term.toString(),
    plus = 1;
  if (term < 0) {
    rezTerm = rezTerm.slice(1);
    plus = -1;
  }
  rezTerm = rezTerm.slice(0, digits);
  return +rezTerm * plus;
};
export default sliceTerm;
