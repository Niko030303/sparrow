import { createThreshold } from './threshold';

export function createQuantile({ domain, range, ...rest }) {
  const n = range.length - 1;
  const sortedDomain = domain.sort((a, b) => a - b);
}
