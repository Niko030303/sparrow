import { createBand } from './band';

export function createpoint(options) {
  return createBand({...options, padding: 1})
}