import React from 'react';
import classes from './parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropdown from './dropdown/dropdown';
import FormButton from './formButton/formButton';
import FormRange from './formRange/formRange';
// import ModalComponent from '../modal-component/modal-component';
interface EventHandlerProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Parameters = ({ handleSubmit }: EventHandlerProps) => {
  // const [valueRange, setValueRange] = useState<string>('0.3');
  // const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValueRange(e.target.value);
  // };
  return (
    <Form className={classes.form} onSubmit={handleSubmit}>
      <h2 className="text-center">Выберите параметры:</h2>
      <FormButton title="Количество игроков:" />
      <FormRange title="Скорость:" />
      <FormButton title="Количество знаков:" />
      <FormRange title="Количество примеров:" />
      <FormRange title="Количество цифр в примере:" />
      <FormButton title="Законы:" />
      <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
        <Form.Label column={true} sm="7">
          <Dropdown />
        </Form.Label>
        <Col
          sm="5"
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            type="submit"
            className={classes.formControlButton}
            style={{
              width: '80%',
              height: '50%',
              minHeight: '40px',
              marginBottom: '2%',
            }}
          >
            Начать
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Parameters;
