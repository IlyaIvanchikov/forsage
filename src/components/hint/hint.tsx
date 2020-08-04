import React from 'react';
import classes from './hint.module.scss';
import { animated, useTransition } from 'react-spring';
import { Animation } from './../Parameters/dropdown/dropdown';

interface HintProps {
  title: string;
  showHint: boolean;
}

const Hint = ({ title, showHint }: HintProps) => {
  const transitions = useTransition(showHint, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateX(-10%)',
    },
    enter: { opacity: 1, transform: 'translateX(20%)' },
    leave: { opacity: 0, transform: 'translateX(60%)' },
  });

  return (
    <>
      {transitions.map(({ item, key, props }: Animation) => {
        return (
          item && (
            <animated.div style={props} key={key} className={classes.hint}>
              <span>{title}</span>
            </animated.div>
          )
        );
      })}
    </>
  );
};

export default Hint;
