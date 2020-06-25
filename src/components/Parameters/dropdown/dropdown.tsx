import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import classes from './dropdown.module.scss';

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
const Dropdown: React.FC = () => {
  const [showDropdown, setShowDropdow] = useState<boolean>(false);

  const handleBtnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowDropdow(!showDropdown);
  };
  const transitions = useTransition(showDropdown, null, {
    from: { opacity: 0, transform: 'translateX(-40%)' },
    enter: { opacity: 1, transform: 'translateX(60%)' },
    leave: { opacity: 0, transform: 'translateX(90%)' },
  });

  return (
    <div className={classes.wrapper}>
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
              {menuItems.map((menuItem: string) => (
                <label
                  className={classes.additionalSettings__label}
                  key={menuItem}
                >
                  <input
                    type="checkbox"
                    className={classes.additionalSettings__checkbox}
                    key={menuItem}
                  />
                  <span className={classes.additionalSettings__span} />
                  <span>{menuItem}</span>
                </label>
              ))}
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default Dropdown;
