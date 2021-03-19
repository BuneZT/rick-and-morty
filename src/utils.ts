import { SessionStorage } from './enums/sessionStorage.enum';

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
 * Pobiera listę ulubionych bohaterów
 *
 * @export
 * @return {*}
 */
export function getFavorites(): number[] | undefined {
  return localStorage
    .getItem(SessionStorage.FAVORITE_CHARACTERS)
    ?.split(',')
    .map(item => tryParseInt(item) as number);
}

/**
 * Usuwa z listy ulubionych
 *
 * @export
 * @param {number} id
 */
export function removeFromFavorites(id: number) {
  const favorites = localStorage.getItem(SessionStorage.FAVORITE_CHARACTERS)?.split(',') || [];
  favorites.splice(favorites.indexOf(id.toString()), 1);
  localStorage.setItem(SessionStorage.FAVORITE_CHARACTERS, [...new Set(favorites)].join(','));
}
