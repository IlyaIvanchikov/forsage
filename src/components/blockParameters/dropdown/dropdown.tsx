import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import classes from './dropdown.module.scss';
import { Button } from 'react-bootstrap';
const menuItems = ['Home', 'Profile', 'Order History', 'Sign out'];
// import ModalComponent from '../modal-component/modal-component';
// import { Row, Col, Container } from 'react-bootstrap';
const Dropdown: React.FC = () => {
  const [showDropdown, setShowDropdow] = useState<boolean>(false);

  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowDropdow(!showDropdown);
  };
  const transitions = useTransition(showDropdown, null, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(80%)' },
  });
  //   const [valueRange, setValueRange] = useState<string>('0.3');
  //   const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValueRange(e.target.value);
  //   };
  return (
    <>
      <Button onClick={handleBtnClick}>Дополнительные настройки:</Button>
      {transitions.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div
              style={{ ...props, position: 'relative' }}
              className={classes.additionalSettings}
              key={key}
            >
              {menuItems.map((menuItem) => (
                <div className="menuItem" key={menuItem}>
                  {menuItem}
                </div>
              ))}
            </animated.div>
          )
        );
      })}
    </>
  );
};

export default Dropdown;
