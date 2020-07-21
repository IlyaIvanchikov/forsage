import React from 'react';
import classes from './tableofplayerresults.module.scss';
import { Table, Row } from 'react-bootstrap';
import OneRowOfTable from '../oneRowOfResultsTable/oneRowOfResultsTable';

type TableResProps = {
  results: any[];
};

const TableOfPlayerResults = ({ results }: TableResProps) => {
  console.log(results);

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
              <OneRowOfTable
                exercises={item}
                number={index + 1}
                key={item.exercise.join('')}
              />
            ))
          ) : (
            <p>Нет результатов</p>
          )}
        </tbody>
      </Table>
    </Row>
  );
};

export default TableOfPlayerResults;
