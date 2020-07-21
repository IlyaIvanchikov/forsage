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
  const delayTermApear = 200;

  useEffect(() => {
    if (term[0] < numOfTerms - 1) {
      setTimeout(() => {
        setStyle({
          opacity: '0',
        });
      }, timing);
      setTimeout(() => {
        setStyle({
          opacity: '1',
        });
      }, timing + delayTermApear);
    }
  }, [term, numOfTerms, timing, delayTermApear]);

  return <p style={style}>{term[1]}</p>;
};

export default BlockTerm;
