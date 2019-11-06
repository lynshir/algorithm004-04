/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 * 方法1-暴力：递归 - 测试超时
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (n > 2) {
    return climbStairs(n - 1) + climbStairs(n - 2)
  }
};
//方法二：迭代
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  const temp = [1, 1, 2]
  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      temp[i] = temp[i - 1] + temp[i - 2]
    }
    return temp[n]
  }
};
//方法三：迭代写法优化
var climbStairs = function (n) {
  const temp = [1, 1]
  for (let i = 2; i <= n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2]
  }
  return temp.pop()
};
//方法四：迭代优化
var climbStairs = function (n) {
  let a = 1, b = 2, next
  for (let i = 3; i <= n; i++) {
    next = a + b
    a = b
    b = next
  }
  return n === 1 ? a : b
};
//方法五：光头哥
/**
let tmp;
tmp = a +b;
a = b;
b = tmp; */
var climbStairs = function (n) {
  a = b = 1
  while (n--)
    // a = (b += a) - a
    a = (b = b + a) - a
  return a
};
//方法六：
//fn = 1/√5*[((1+√5)/2)º - ((1-√5)/2)º]
//º表示n次方 ，打不出n哈哈哈 ,这里是n+1次方
var climbStairs = function (n) {
  const sqrt5 = Math.sqrt(5)
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)
  return Math.round(fibn / sqrt5)
};