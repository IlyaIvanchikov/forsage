import React from 'react';
import classes from './tableofplayerresults.module.scss';
import { Table, Row } from 'react-bootstrap';

const TableOfPlayerResults: React.FC = () => {
  return (
    <Row className={classes.table}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Пример</th>
            <th>Ответ</th>
            <th>V</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>7+200+56/85</td>
            <td>40</td>
            <td>55</td>
          </tr>
          <tr>
            <td>2</td>
            <td>70-32+14</td>
            <td>40</td>
            <td>43</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default TableOfPlayerResults;
