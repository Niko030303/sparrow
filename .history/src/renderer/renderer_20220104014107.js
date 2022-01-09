import { createContext } from "./context";
import {
    line, circle, text, rect, path, ring,
  } from './shape';
  import {
    restore, save, scale, translate, rotate,
  } from './transform';

export function createRenderer(width, height) {
  const context = createContext(width, height); // 创建上下文信息
    return {
        line: (options) => line(context, options),
    }
}