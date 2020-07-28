import React from 'react';
import { useState, useEffect } from 'react';
import classes from './blockgame.module.scss';
// import { ParametersContext } from '../../../main-context';

type blockTermOpt = {
  term: any;
  numOfTerms: number;
  timing: number;
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
};

const BlockTerm = ({ term, numOfTerms, timing, additional }: blockTermOpt) => {
  console.log(additional);
  const turbo = additional.turboPlay;

  const randomOfPlace = {
    left: `${Math.random() * (80 - 20) + 20}%`,
    top: `${Math.random() * (80 - 20) + 20}%`,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    fontSize: '6rem',
  };

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

  return (
    <>
      {/* {turbo && (
        <p className={classes.turboP} style={randomOfPlace}>
          {term[1]}
        </p>
      )} */}
      {!turbo || term[1] === '???' ? (
        <p style={style}>{term[1]}</p>
      ) : (
        <p className={classes.turboP} style={{ ...style, ...randomOfPlace }}>
          {term[1]}
        </p>
      )}
    </>
  );
};

export default BlockTerm;
