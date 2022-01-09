import { applyTransform, createSVGElement, mount} from './utils';

export function transform(type, context, ...params) {
  // type是希望的变换种类：scale，translate，rotate等
  const { group } = context;
  applyTransform(group, `${type}(${params.join()})`)
}