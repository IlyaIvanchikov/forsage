import React from 'react';
import classes from './tableofplayerresults.module.scss';
import { Table, Row } from 'react-bootstrap';
import OneRowOfTable from '../oneRowOfResultsTable/oneRowOfResultsTable';

type TableResProps = {
  results: any[];
};

const TableOfPlayerResults = ({ results }: TableResProps) => {
  return (
    <Row className={classes.table}>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Пример</th>
            <th>Ваш ответ</th>
            <th>Правильный</th>
          </tr>
        </thead>
        <tbody>
          {results.length ? (
            results.map((item, index) => (
              <OneRowOfTable exercises={item} number={index + 1} key={index} />
            ))
          ) : (
            <tr>
              <td></td>
              <td>Нет результатов</td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  );
};

export default TableOfPlayerResults;
