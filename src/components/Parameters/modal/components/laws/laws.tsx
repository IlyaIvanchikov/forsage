import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
    { value: 'ocean', label: 'Любой', id: 0 },
    { value: 'ocea2n', label: '-4 (-5 + 1)', id: 1 },
    { value: 'blue', label: '-3 (-5 + 2)', id: 2 },
    { value: 'purple', label: '-2 (-5 + 3)', id: 3 },
    { value: 'red', label: '-1 (-5 + 4)', id: 4 },
    { value: 'orange', label: '1 (-4 + 5)', id: 5 },
    { value: 'yellow', label: '2 (-3 + 5)', id: 6 },
    { value: 'green', label: '3 (-2 + 5)', id: 7 },
    { value: 'forest', label: '4 (-1 + 5)', id: 8 },
  ],
};

const LawsSelectTen: LawsSelect = {
  items: [
    { value: 'ocean', label: 'Любой', id: 0 },
    { value: 'ocea2n', label: '1 (-9 + 10)', id: 1 },
    { value: 'blue', label: '2 (-8 + 10)', id: 2 },
    { value: 'purple', label: '3 (-7 + 10)', id: 3 },
    { value: 'red', label: '4 (-6 + 10)', id: 4 },
    { value: 'orange', label: '5 (-5 + 10)', id: 5 },
    { value: 'yellow', label: '6 (-4 + 10)', id: 6 },
    { value: 'green', label: '7 (-3 + 10)', id: 7 },
    { value: 'forest', label: '8 (-2 + 10)', id: 8 },
    { value: 'ocean', label: '9 (-1 + 10)', id: 9 },
    { value: 'ocea2n', label: '-9 (-10 + 1)', id: 10 },
    { value: 'blue', label: '-8 (-10 + 2)', id: 11 },
    { value: 'purple', label: '-7 (-10 + 3)', id: 12 },
    { value: 'red', label: '-6 (-10 + 4)', id: 13 },
    { value: 'orange', label: '-5 (-10 + 5)', id: 14 },
    { value: 'yellow', label: '-4 (-10 + 6)', id: 15 },
    { value: 'green', label: '-3 (-10 + 7)', id: 16 },
    { value: 'forest', label: '-2 (-10 + 8)', id: 17 },
    { value: 'forest', label: '-1 (-10 + 9)', id: 18 },
  ],
};
const customStyles = {
  option: (provided: any, { isFocused }: any) => ({
    ...provided,
    borderBottom: '3px solid white',
    padding: 10,
    backgroundColor: isFocused ? '#9dbd2c' : '#e7a343',
    color: 'white',
  }),
  multiValue: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#e7a343',
    color: 'green',
    borderRadius: '10px',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    padding: 10,
    border: 'solid #9dbd2c 2px',
    margin: 10,
  }),
  multiValueLabel: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided: any, state: any) => ({
    ...provided,
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '10px',
    },
  }),
};
export const Laws = (): JSX.Element => {
  return (
    <>
      <h4>Законы на 5:</h4>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={LawsSelectFive.items[0]}
        isMulti={true}
        options={LawsSelectFive.items}
        styles={customStyles}
      />
      <h4>Законы на 10:</h4>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={LawsSelectTen.items[0]}
        isMulti={true}
        options={LawsSelectTen.items}
        styles={customStyles}
      />
    </>
  );
};
