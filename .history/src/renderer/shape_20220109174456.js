import { applyAttributes, createSVGElement, mount } from './utils'

export function shape(type, context, attriburtes) {
  const { group } = context; // 挂载元素
  const el = createSVGElement(type); // 创建对应的元素
  applyAttributes(el, attriburtes); // 设置属性

  mount(group, el); // 挂载
  return el; // 返回该元素
}

export function line(context, attributes) {
  return shape('line', context, attributes);
}

// rect 不支持 width 和 height 是负数，下面这种情况将绘制不出来
// <rect width="-60" height="-60" x="100" y="100" /> ❌
// 为了使其支持负数的 width 和 height，我们转换成如下的形式
// <rect width="60" height="60" x="40" y="40" /> ✅
export function rect(context, attributes) {
  const {
    width, height, x ,y,
  } = attributes;

  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    
  });
}

