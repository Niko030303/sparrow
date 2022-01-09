import { createSVGElement, mount } from "./utils";

export function createContext(width, height) {
  // 创建画布svg节点，并且设置宽高
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width)
  svg.setAttribute('height', width)
  svg.setAttribute('width', width)
}