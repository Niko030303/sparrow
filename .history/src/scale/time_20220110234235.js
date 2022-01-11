import { createLinear } from "./linear";

export function createTime({ domain, ...rest}) {
  const transform = (x) => x.getTime();
  const transformDomain = domain.map(transform);
  const linear = createLinear({ domain: transformDomain, ...rest});
  const scale = (X) => linear(transform(x));

  scale.nice = (tickCount) => linear.nice(tickCount);
  scale.ticks = (tickCount) => linear.ticks(tickCount).map((d));
}