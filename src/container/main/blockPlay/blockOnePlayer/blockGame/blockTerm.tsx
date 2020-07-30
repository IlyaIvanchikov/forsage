import React from 'react';
import { useState, useEffect } from 'react';
// import { ParametersContext } from '../../../main-context';
import { voiceActing } from '../../../../../components/voiceActing/voiceActing';

type blockTermOpt = {
  term: any;
  numOfTerms: number;
  timing: number;
};

const BlockTerm = ({ term, numOfTerms, timing }: blockTermOpt) => {
  // const { state } = useContext(ParametersContext);
  // console.log(term[0], numOfTerms - 1);

  const [style, setStyle] = useState({
    opacity: '1',
  });
  const delayTermApear = 200;
  const isQuiet = style.opacity === '1' ? false : true;
  if (Number(term[1]) && term[0] <= numOfTerms - 1) {
    voiceActing(term[1], isQuiet);
  }
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
