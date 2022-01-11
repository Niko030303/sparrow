import { createLinear } from './linear';

export function createTime({ domain, ...rest c}) {
  const transform = (x) => x.getTime();
  const transformDomain = domain.map(transform);
  const linear = createLinear({ domain: transformDomain, ...rest });
  const scale = (x) => linear(transform(x));

  scale.nice = (tickCount) => linear.nice(tickCount);
  scale.ticks = (tickCount) => linear.ticks(tickCount).map((d) => new Date(d));

  return scale;
}
