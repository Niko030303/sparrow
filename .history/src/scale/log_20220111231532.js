import { createLinear } from './linear';
import { ticks, nice, log } from './utils';

export function createLog({ domain, base, ...rest }) {
  const transform = (x) => Math.log(x);
  let linear = createLinear({ domain: domain.map(transform), ...rest })
}