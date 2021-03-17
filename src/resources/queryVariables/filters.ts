import { VariableType } from 'json-to-graphql-query';

export const StateFilterVariables = {
  start: 'Int',
  count: 'Int',
  order: 'String',
  desc: 'Boolean',
  search: 'String'
};
export const StateFilterArgs = {
  filters: {
    start: new VariableType('start'),
    count: new VariableType('count'),
    order: new VariableType('order'),
    desc: new VariableType('desc'),
    search: new VariableType('search')
  }
};

export const FilterVariables = {
  start: 'Int',
  count: 'Int',
  order: 'String',
  desc: 'Boolean',
  search: 'String'
};
export const FilterArgs = {
  filters: {
    start: new VariableType('start'),
    count: new VariableType('count'),
    order: new VariableType('order'),
    desc: new VariableType('desc'),
    search: new VariableType('search')
  }
};
