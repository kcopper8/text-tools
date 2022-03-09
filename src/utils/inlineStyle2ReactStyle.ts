import { camelCase } from 'lodash';

export default function inlineStyle2ReactStyle(text: string) {
  const obj = text
    .split(';')
    .map((eachStyle) => eachStyle.trim())
    .filter((eachStyle) => eachStyle)
    .map((eachStyle) => eachStyle.split(':'))
    .map((splitEachStyle) => splitEachStyle.map((token) => token.trim()))
    .map(([key, ...values]) => ({
      [camelCase(key)]: values.join(':'),
    }))
    .reduce((previousObj, attr) => ({ ...previousObj, ...attr }), {});
  return JSON.stringify(obj);
}
