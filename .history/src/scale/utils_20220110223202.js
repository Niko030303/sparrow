export function normalize(value, start, stop) {
  return (value - start) / (stop - start);
}

// step0 是生成指定数量的刻度的间隔
// step1 是最后生成的刻度的间隔
// 我们希望 step1 满足两个条件：
// 1. step1 = 10 ^ n * b（其中 b=1, 2 5）
// 2. step0 和 step1 的误差尽量的小
export function 
