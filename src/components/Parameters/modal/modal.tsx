import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import classes from './modal.module.scss';

interface EventHandlerProps {
  showModal: boolean;
  handleCloseModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChooseModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nameButton?: string;
  title: string;
  children: React.ReactNode;
  modalParams: boolean;
  size: 'sm' | 'lg' | 'xl';
}

const ModalComponent = ({
  showModal,
  handleCloseModalClick,
  handleChooseModalClick,
  title,
  children,
  modalParams,
  nameButton,
  size,
}: EventHandlerProps) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModalClick}
        centered={true}
        size={size}
        className={classes.modal}
      >
        {modalParams === true && (
          <Modal.Header
            className="justify-content-center"
            style={{ borderBottom: 'none', paddingBottom: '0' }}
          >
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {modalParams === true && (
          <Modal.Footer className={classes.footer}>
            <Button
              className={classes.footer__btn}
              onClick={handleChooseModalClick}
            >
              {nameButton ? nameButton : 'Выбрать'}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ModalComponent;
