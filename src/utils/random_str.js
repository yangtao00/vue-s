// 生成随机字符串
export default function (len = 3) {
  return Number(Math.random().toString().substr(3, len) + Date.now()).toString(36);
}