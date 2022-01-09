// 创建SVG元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

// 将child节点挂载到parent节点上面
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function applyAttributes(element, attributes) {
    for (const [key, value] of Object.entries(attributes)) {

    }
}