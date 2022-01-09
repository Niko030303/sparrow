import { applyTransform, createSVGElement, mount} from './utils';

export function transform(type, context, ...params) {
  // type是希望的变换种类：scale，translate，rotate等
  const { group } = context;
  applyTransform(group, `${type}(${params.join(', ')})`);
}

export function translate(context, tx, ty) {
transform('translate', context, tx, ty);
}
  
  export function rotate(context, theta) {
    transform('rotate', context, theta);
  }
  
  export function scale(context, sx, sy) {
    transform('scale', context, sx, sy);
  }