import React from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import CloseIcon from '../../../../../resources/images/Close.png';

const BlockResults: React.FC = () => {
  return (
    <Col className={classes.resultsBlock}>
      <Row>
        <Col className={classes.threePoints}>0</Col>
        <Col className={classes.resultsTitle}>Результаты</Col>
        <Col className={classes.iconClose}>
          <button title="Закрыть" onClick={() => alert('Close')}>
            <img className={classes.resultsIcon} alt="Close" src={CloseIcon} />
          </button>
        </Col>
      </Row>
      <Row>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ex veritatis incidunt suscipit voluptatum officia cumque soluta deleniti optio nesciunt sit blanditiis quaerat molestias pariatur saepe, at animi perspiciatis exercitationem, corporis perferendis praesentium minus placeat, ea tempore. Incidunt aspernatur quidem est veniam ab beatae nisi nostrum! Dolores totam vitae delectus expedita, laudantium vero minima quis consectetur odit, distinctio nam quasi enim. Corrupti repellat sed nemo molestias eos soluta, est repudiandae odit provident aut at possimus beatae temporibus! Optio asperiores exercitationem laborum ut nihil illo eaque officia voluptatibus incidunt inventore debitis, quas commodi ipsum ipsa? Rem odit nostrum quo tempora earum, doloribus eligendi explicabo repellendus obcaecati excepturi itaque placeat impedit optio, accusamus mollitia nobis aliquid temporibus blanditiis qui facere officiis vitae. Unde consectetur blanditiis inventore, odit pariatur ad dolores facere sed eveniet non maxime quis! Quaerat aliquam, quisquam commodi vel suscipit doloribus. Ab quasi dignissimos, quae vitae laborum enim rerum eius saepe odit magnam, explicabo veniam cumque laudantium iure nemo similique sapiente ad nesciunt debitis? Error asperiores consequuntur sed id. Repellendus sequi consectetur nesciunt cumque vero placeat reprehenderit commodi tenetur officiis dolore earum ea voluptate provident laboriosam est, aliquid dolorem deserunt veniam, doloribus modi omnis illum quae obcaecati. Assumenda, quisquam aspernatur!
      </Row>
    </Col>
  );
};

export default BlockResults;
