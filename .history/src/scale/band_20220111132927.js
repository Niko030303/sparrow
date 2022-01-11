import { createOrdinal } from '/ordinal';
import { band } from './utils';

export function createBand(options) {
  const { bandRange, bandWidth, step } = band(options);
  const scale = createOrdinal({...options, range: bandRange })
}