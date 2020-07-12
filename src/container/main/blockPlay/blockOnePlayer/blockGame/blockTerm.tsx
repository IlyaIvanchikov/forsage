import React from 'react';

type blockTermOpt = {
  term: [number, string];
};

const BlockTerm = ({ term }: blockTermOpt) => {
  return <p>{term}</p>;
};

export default BlockTerm;
