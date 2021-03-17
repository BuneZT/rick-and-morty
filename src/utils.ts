import { Route } from 'vue-router';
import { Filter } from './interfaces/filter';

/**
 * Parsuje kolejne wartości, zwracając pierwszą, której można przypisać wartość typu bool
 *
 * @export
 * @param {...any[]} values
 * @returns {boolean}
 */
export function tryParseBoolean(...values: any[]): boolean | undefined {
  for (const value of values) {
    if (value === true || value === 'true' || value === 1 || value === '1') {
      return true;
    }
    if (value === false || value === 'false' || value === 0 || value === '0') {
      return false;
    }
  }
  return undefined;
}

/**
 * Parsuje kolejne wartości, zwracając pierwszą, której można przypisać wartość typu int
 *
 * @export
 * @param {...any[]} values
 * @returns {number}
 */
export function tryParseInt(...values: any[]): number | undefined {
  for (const value of values) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue.toString() === value.toString().replace(/^0+/, '')) {
      return parsedValue;
    }
  }
}

/**
 * Próbuje odczytać datę
 *
 * @export
 * @param {...any[]} values
 * @returns {(Date | undefined)}
 */
export function tryParseDate(...values: any[]): Date | undefined {
  for (const value of values) {
    if (!value) {
      continue;
    }
    if (!isNaN(Date.parse(value))) {
      return new Date(value);
    }
  }
}

/**
 * Bazowe filtry na podstawie query
 *
 * @export
 * @param {Route} route
 * @returns {Filter}
 */
export function baseFilters(route: Route): Filter {
  const filters: Filter = {};

  filters.count = tryParseInt(route.query.count) || 10;

  if (route.query.search) {
    filters.search = route.query.search as string;
  }

  if (route.query.page) {
    const page = (tryParseInt(route.query.page) as number) - 1;
    filters.start = page * filters.count;
  }

  if (route.query.order) {
    filters.order = route.query.order as string;
    filters.desc = tryParseBoolean(route.query.desc);
  }

  return filters;
}