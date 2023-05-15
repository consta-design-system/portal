import { State } from 'router5';

type CustomParam = {
  name: string;
  type: 'STRING' | 'INT' | 'FLOAT' | 'BOOLEAN' | 'DATE';
  value: string | number | boolean;
};

export const routeToCustomParam = (state: State, namePrefix = '') => {
  const params: CustomParam[] = [
    { name: `${namePrefix}name`, type: 'STRING', value: state.name },
    { name: `${namePrefix}path`, type: 'STRING', value: state.path },
  ];
  const keys = Object.keys(state.params);
  for (let index = 0; index < keys.length; index++) {
    const value = state.params[keys[index]].toString();
    params.push({ name: `${namePrefix}${keys[index]}`, type: 'STRING', value });
  }
  return params;
};
