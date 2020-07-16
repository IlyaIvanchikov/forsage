import React from 'react';
import { useState, useEffect } from 'react';

type blockTermOpt = {
  term: any;
  numOfTerms: number;
  timing: number;
};

const BlockTerm = ({ term, numOfTerms, timing }: blockTermOpt) => {
  const [style, setStyle] = useState({
    opacity: '1',
  });

  useEffect(() => {
    if (term[0] < numOfTerms) {
      setTimeout(() => {
        setStyle({
          opacity: '0',
        });
      }, timing - 200);
      setTimeout(() => {
        setStyle({
          opacity: '1',
        });
      }, timing + 100);
    }
  }, [term, numOfTerms, timing]);

  return <p style={style}>{term[1]}</p>;
};

export default BlockTerm;
