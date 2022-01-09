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
