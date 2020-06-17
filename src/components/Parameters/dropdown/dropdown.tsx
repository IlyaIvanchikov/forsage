import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import classes from './dropdown.module.scss';
// import { Form } from 'react-bootstrap';
const menuItems = ['Озвучивать примеры', 'Турбо режим', 'Супер турбо режим'];

const Dropdown: React.FC = () => {
  const [showDropdown, setShowDropdow] = useState<boolean>(false);

  const handleBtnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowDropdow(!showDropdown);
  };
  const transitions = useTransition(showDropdown, null, {
    from: { opacity: 0, transform: 'translateX(-50%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(80%)' },
  });

  return (
    <div className={classes.wrapper}>
      <a href="/" onClick={handleBtnClick} className={classes.wrapper__a}>
        Дополнительные настройки:{' '}
        {showDropdown ? (
          <div className={classes.wrapper__divOpen} />
        ) : (
          <div className={classes.wrapper__divClose} />
        )}
      </a>
      {transitions.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div
              style={{ ...props, position: 'absolute' }}
              className={classes.additionalSettings}
              key={key}
            >
              {menuItems.map((menuItem) => (
                // <Form.Check
                //   type="checkbox"
                //   label={menuItem}
                //   key={menuItem}
                //   className={classes.checkbox}
                // />
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
