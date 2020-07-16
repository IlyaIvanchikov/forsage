import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import classes from './modal.module.scss';

interface EventHandlerProps {
  showModal: boolean;
  handleCloseModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChooseModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  children: React.ReactNode;
}

const ModalComponent = ({
  showModal,
  handleCloseModalClick,
  handleChooseModalClick,
  title,
  children,
}: EventHandlerProps) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModalClick}
        centered={true}
        className={classes.modal}
      >
        <Modal.Header
          className="justify-content-center"
          style={{ borderBottom: 'none' }}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer className={classes.footer}>
          <Button
            className={classes.footer__btn}
            onClick={handleChooseModalClick}
          >
            Выбрать
          </Button>
          {title === 'Законы' ? null : (
            <Button
              className={classes.footer__btn}
              onClick={handleCloseModalClick}
            >
              Отмена
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
