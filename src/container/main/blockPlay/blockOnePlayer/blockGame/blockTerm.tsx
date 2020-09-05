import React from 'react';
import { useState, useEffect } from 'react';
import classes from './blockgame.module.scss';

type blockTermOpt = {
  term: any;
  numOfTerms: number;
  timing: number;
  additional: {
    soundPlay: boolean;
    turboPlay: boolean;
    superTurboPlay: boolean;
  };
  randomNumber: number;
};

const BlockTerm = ({
  term,
  numOfTerms,
  timing,
  additional,
  randomNumber,
}: blockTermOpt) => {
  const turbo = additional.turboPlay;
  const superTyrboPlay = additional.superTurboPlay;
  const colour = ['red', 'green', ' brown', 'black', 'blue', 'orange'];
  const rand = Math.floor(Math.random() * colour.length);

  const supertTurboPlayNumber = () => {
    if (randomNumber === 0 && !turbo) {
      return (
        <>
          <p style={style}>{term[1]}</p>
        </>
      );
    } else if (randomNumber === 1 && !turbo) {
      return (
        <p
          style={{
            ...style,
            color: colour[rand],
          }}
        >
          {term[1]}
        </p>
      );
    }
    return;
  };
  const turboPlayNumber = () => {
    if (turbo && !superTyrboPlay) {
      return (
        <p className={classes.turboP} style={{ ...style, ...randomOfPlace }}>
          {term[1]}
        </p>
      );
    }
    return;
  };
  const randomOfPlace = {
    left: `${Math.random() * (80 - 20) + 20}%`,
    top: `${Math.random() * (80 - 20) + 20}%`,
    color: colour[rand],
  };

  const [style, setStyle] = useState({
    opacity: '1',
  });

  const delayTermApear = 200;

  useEffect(() => {
    if (term[0] < numOfTerms) {
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
      {superTyrboPlay && term[1] !== '???' && supertTurboPlayNumber()}
      {(!turbo && !superTyrboPlay) || term[1] === '???' ? (
        <p style={style}>{term[1]}</p>
      ) : (
        turboPlayNumber()
      )}
    </>
  );
};

export default BlockTerm;
