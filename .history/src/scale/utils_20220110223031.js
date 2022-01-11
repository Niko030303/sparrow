export function normalize(value, start, stop) {
  return (value - start) / (stop - start);
}

// step0 是生成指定数量的刻度的间隔
// step1 是最后生成的刻度的间隔
// 
