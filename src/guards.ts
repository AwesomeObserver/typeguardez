import { Nullable, Maybe, NonArray, NonPrimitive, Empty, Bottom } from './types';

export const isBlank = <T>(value: T): value is Nullable<T> => value == null;

export const isPresent = <T>(value: T): value is NonNullable<T> => value != null;

export const isFunction = (value: any): value is Function => typeof value === 'function';

export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

export const isString = (value: any): value is string => typeof value === 'string';

export const isNumber = (value: any): value is number => typeof value === 'number';

export const isArray = <T>(value: any): value is Array<T> => Array.isArray(value);

/**
 *
 * @example
 *
 * ```ts
 * type MyMap = { who: string; age: number }
 * declare const someObj: MyMap | string | number
 *
 * if (isObject(someObj)) {
 *  // $ExpectType MyMap
 *  someObj
 * } else {
 *  // $ExpectType string | number
 *  someObj
 * }
 * ```
 */
export const isObject = <T extends Maybe<{}>>(
  value: T,
): value is NonArray<NonPrimitive<NonNullable<T>>> =>
  value != null && !Array.isArray(value) && typeof value === 'object';

/**
 *
 * Return true if value is Date.
 */
export const isDate = (value: any): value is Date =>
  value instanceof Date && !isNaN(+value);

/**
 *
 * Return true if value is PromiseLike.
 */
export const isPromise = (value: any): value is PromiseLike<any> =>
  value && typeof value.subscribe !== 'function' && typeof value.then === 'function';

/**
 *
 * Checks if string OR array OR object is empty.
 * If you provide another value to check it will throw an error.
 */
export const isEmpty = <T extends string | object>(
  value: T | Empty,
): value is Bottom<T> => {
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  throw new Error(
    `checked value must be type of string | array | object. You provided ${
      // tslint:disable-next-line:strict-type-predicates
      value === null ? 'null' : typeof value
    }`,
  );
};
