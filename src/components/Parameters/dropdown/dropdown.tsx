import React, { useState, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import classes from './dropdown.module.scss';
import { UsuallyContext } from './../../../container/main/main-context';
import { AdditionalParametersProps } from '../../../ts/store';

const menuItems: string[] = [
  'Озвучивать примеры',
  'Турбо режим',
  'Супер турбо режим',
];

interface Animation {
  item: boolean;
  key: string;
  props: any;
}

const Dropdown = ({
  additionalParameters,
  setAdditionalParameters,
}: AdditionalParametersProps): JSX.Element => {
  const { countPlayers } = useContext(UsuallyContext);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const valueObj: boolean[] = Object.values(additionalParameters);
  const handleBtnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleChangeClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    switch (id) {
      case 0:
        setAdditionalParameters({
          ...additionalParameters,
          soundPlay: !additionalParameters.soundPlay,
        });
        break;
      case 1:
        setAdditionalParameters({
          ...additionalParameters,
          turboPlay: !additionalParameters.turboPlay,
        });
        break;
      case 2:
        setAdditionalParameters({
          ...additionalParameters,
          superTurboPlay: !additionalParameters.superTurboPlay,
        });
        break;
      default:
        alert('Ошибочка');
    }
  };

  const transitions = useTransition(showDropdown, null, {
    from: { opacity: 0, transform: 'translateX(-40%)' },
    enter: { opacity: 1, transform: 'translateX(60%)' },
    leave: { opacity: 0, transform: 'translateX(90%)' },
  });

  return (
    <div className={classes.wrapper}>
      {countPlayers.countPlayers !== 1 ? (
        <del>
          {' '}
          <span className={classes.wrapper__span}>
            Дополнительные настройки
          </span>
        </del>
      ) : (
        <>
          <a href="/" onClick={handleBtnClick} className={classes.wrapper__a}>
            Дополнительные настройки{' '}
            {showDropdown ? (
              <div className={classes.wrapper__divOpen} />
            ) : (
              <div className={classes.wrapper__divClose} />
            )}
          </a>
          {transitions.map(({ item, key, props }: Animation) => {
            return (
              item && (
                <animated.div
                  style={{ ...props, position: 'absolute' }}
                  className={classes.additionalSettings}
                  key={key}
                >
                  {menuItems.map((menuItem: string, id: number) => (
                    <label
                      className={classes.additionalSettings__label}
                      key={menuItem}
                    >
                      <input
                        type="checkbox"
                        className={classes.additionalSettings__checkbox}
                        key={menuItem}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleChangeClick(event, id)}
                        checked={valueObj[id]}
                      />
                      <span className={classes.additionalSettings__span} />
                      <span>{menuItem}</span>
                    </label>
                  ))}
                </animated.div>
              )
            );
          })}
        </>
      )}
    </div>
  );
};

export default Dropdown;
