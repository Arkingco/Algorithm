function solution(s, n) {
  let str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
  return s
    .split('')
    .map((word) => str[str.indexOf(word) + n])
    .join('');
}