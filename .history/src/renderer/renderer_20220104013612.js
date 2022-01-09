import { createContext } from "./context";
import {
    line, circle, text, rect, path, ring,
  } from './shape';
  import {
    restore, save, scale, translate, rotate,
  } from './transform';

export function createRender(width, height) {
    const context = createContext(Width, height); //
}