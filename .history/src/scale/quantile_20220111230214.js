import { createThreshold } from './threshold';

export function createQuantile({ domain, range, ...rest }) {
  const n = range.length - 1;
  const sortedDomain = domain.sort((a, b) => a - b);
  const step = (sortedDomain.length - 1) / (n + 1);
  const quantileDomian = new Array(n).fill(0).map((_, index) => {
    const i = (index + 1) * step;
    const i0 = Math.floor(i)
  });
}
