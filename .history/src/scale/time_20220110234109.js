import { createLinear } from "./linear";

export function createTime({ domain, ...rest}) {
  const transform = (x) => x.getTime();
  const transformDomain = domain.map(transform);
  const linear = create
}