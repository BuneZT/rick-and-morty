import { VariableType } from 'json-to-graphql-query';

export const FilterArgs = {
  page: new VariableType('page'),
  filter: new VariableType('filter')
};
