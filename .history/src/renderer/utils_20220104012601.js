// 创建SVG元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}