import React from 'react';
import Select, { ValueType, OptionTypeBase, ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';
import { ModalSelect } from '../../../../../ts/store';

interface LawsItem {
  value: string;
  label: string;
  id: number;
}

interface LawsSelect {
  items: LawsItem[];
}

const animatedComponents = makeAnimated();

const LawsSelectFive: LawsSelect = {
  items: [
    { value: 'Любой', label: 'Любой', id: 1 },
    { value: '-1 (-5 + 4)', label: '-1 (-5 + 4)', id: 2 },
    { value: '-2 (-5 + 3)', label: '-2 (-5 + 3)', id: 3 },
    { value: '-3 (-5 + 2)', label: '-3 (-5 + 2)', id: 4 },
    { value: '-4 (-5 + 1)', label: '-4 (-5 + 1)', id: 5 },
    { value: '+1 (-4 + 5)', label: '+1 (-4 + 5)', id: 6 },
    { value: '+2 (-3 + 5)', label: '+2 (-3 + 5)', id: 7 },
    { value: '+3 (-2 + 5)', label: '+3 (-2 + 5)', id: 8 },
    { value: '+4 (-1 + 5)', label: '+4 (-1 + 5)', id: 9 },
  ],
};

const LawsSelectTen: LawsSelect = {
  items: [
    { value: 'Любой', label: 'Любой', id: 0 },
    { value: '+1 (-9 + 10)', label: '+1 (-9 + 10)', id: 1 },
    { value: '+2 (-8 + 10)', label: '+2 (-8 + 10)', id: 2 },
    { value: '+3 (-7 + 10)', label: '+3 (-7 + 10)', id: 3 },
    { value: '+4 (-6 + 10)', label: '+4 (-6 + 10)', id: 4 },
    { value: '+5 (-5 + 10)', label: '+5 (-5 + 10)', id: 5 },
    { value: '+6 (-4 + 10)', label: '+6 (-4 + 10)', id: 6 },
    { value: '+6 (+10 - 5 + 1)', label: '+6 (+10 - 5 + 1)', id: 7 },
    { value: '+7 (-3 + 10)', label: '+7 (-3 + 10)', id: 8 },
    { value: '+7 (+10 - 5 + 2)', label: '+7 (+10 - 5 + 2)', id: 9 },
    { value: '+8 (-2 + 10)', label: '+8 (-2 + 10)', id: 10 },
    { value: '+8 (+10 - 5 + 3)', label: '+8 (+10 - 5 + 3)', id: 11 },
    { value: '+9 (-1 + 10)', label: '+9 (-1 + 10)', id: 12 },
    { value: '+9 (+10 - 5 + 4)', label: '+9 (+10 - 5 + 4)', id: 13 },
    { value: '-1 (-10 + 9)', label: '-1 (-10 + 9)', id: 14 },
    { value: '-2 (-10 + 8)', label: '-2 (-10 + 8)', id: 15 },
    { value: '-3 (-10 + 7)', label: '-3 (-10 + 7)', id: 16 },
    { value: '-4 (-10 + 6)', label: '-4 (-10 + 6)', id: 17 },
    { value: '-5 (-10 + 5)', label: '-5 (-10 + 5)', id: 18 },
    { value: '-6 (-10 + 4)', label: '-6 (-10 + 4)', id: 19 },
    { value: '-6 (-10 + 5 - 1)', label: '-6 (-10 + 5 - 1)', id: 20 },
    { value: '-7 (-10 + 3)', label: '-7 (-10 + 3)', id: 21 },
    { value: '-7 (-10 + 5 - 2)', label: '-7 (-10 + 5 - 2)', id: 22 },
    { value: '-8 (-10 + 2)', label: '-8 (-10 + 2)', id: 23 },
    { value: '-8 (-10 + 5 - 3)', label: '-8 (-10 + 5 - 3)', id: 24 },
    { value: '-9 (-10 + 1)', label: '-9 (-10 + 1)', id: 25 },
    { value: '-9 (-10 + 5 - 4)', label: '-9 (-10 + 5 - 4)', id: 26 },
  ],
};

const customStyles = {
  option: (provided: any, { isFocused, isSelected }: any) => ({
    ...provided,
    borderBottom: '3px solid white',
    padding: 10,
    backgroundColor: isFocused ? '#9dbd2c' : '#e7a343',
    color: 'white',
    ':active': {
      ...provided[':active'],
      backgroundColor: isSelected ? 'red' : 'rgb(67, 241, 14)',
    },
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: '#e7a343',
    color: 'green',
    borderRadius: '10px',
  }),
  control: (provided: any) => ({
    ...provided,
    padding: 10,
    border: 'solid #9dbd2c 2px',
    margin: 10,
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '10px',
    },
  }),
};

export const Laws = ({
  setValueModalSelect,
  laws,
}: ModalSelect): JSX.Element => {
  const handleChangeFive = (
    value: ValueType<OptionTypeBase>,
    actionMeta: ActionMeta<OptionTypeBase>
  ): void => {
    if (actionMeta.action === 'select-option') {
      if (laws.five[0] === 'Любой') {
        setValueModalSelect({
          ...laws,
          five: [actionMeta.option?.value],
        });
      } else if (
        laws.five[0] !== 'Любой' &&
        actionMeta.option?.value === 'Любой'
      ) {
        setValueModalSelect({
          ...laws,
          five: [actionMeta.option?.value],
        });
      } else if (
        laws.five[0] !== 'Любой' &&
        actionMeta.option?.value !== 'Любой'
      ) {
        setValueModalSelect({
          ...laws,
          five: [...laws.five, actionMeta.option?.value],
        });
      }
    } else if (actionMeta.action === 'remove-value') {
      setValueModalSelect({
        ...laws,
        five: laws.five.filter((item: string) => {
          return item !== actionMeta.removedValue?.value;
        }),
      });
    } else if (actionMeta.action === 'clear') {
      setValueModalSelect({
        ...laws,
        five: [],
      });
    }
  };
  const handleChangeTen = (
    value: ValueType<OptionTypeBase>,
    actionMeta: ActionMeta<OptionTypeBase>
  ): void => {
    if (actionMeta.action === 'select-option') {
      if (laws.ten[0] === 'Любой') {
        setValueModalSelect({
          ...laws,
          ten: [actionMeta.option?.value],
        });
      } else if (
        laws.ten[0] !== 'Любой' &&
        actionMeta.option?.value === 'Любой'
      ) {
        setValueModalSelect({
          ...laws,
          ten: [actionMeta.option?.value],
        });
      } else if (
        laws.ten[0] !== 'Любой' &&
        actionMeta.option?.value !== 'Любой'
      ) {
        setValueModalSelect({
          ...laws,
          ten: [...laws.ten, actionMeta.option?.value],
        });
      }
    } else if (actionMeta.action === 'remove-value') {
      setValueModalSelect({
        ...laws,
        ten: laws.ten.filter((item: string) => {
          return item !== actionMeta.removedValue?.value;
        }),
      });
    } else if (actionMeta.action === 'clear') {
      setValueModalSelect({
        ...laws,
        ten: [],
      });
    }
  };
  const currentValue = (arr: string[]) =>
    arr.map((item: string, id: number) => {
      return {
        value: item,
        label: item,
        id,
      };
    });

  return (
    <>
      <h4>Законы на 5:</h4>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        value={currentValue(laws.five)}
        onChange={handleChangeFive}
        isMulti={true}
        options={LawsSelectFive.items}
        styles={customStyles}
        placeholder={'Выберите законы'}
        id="select5"
      />
      <h4>Законы на 10:</h4>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        value={currentValue(laws.ten)}
        isMulti={true}
        onChange={handleChangeTen}
        options={LawsSelectTen.items}
        styles={customStyles}
        placeholder={'Выберите законы'}
        id="select10"
      />
    </>
  );
};
