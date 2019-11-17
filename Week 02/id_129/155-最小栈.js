/**
 * 最小栈 https://leetcode-cn.com/problems/min-stack/
 * initialize your data structure here.
 * 1.Minimum value is always followed by the second minimum value (duplicate value of the second minimum value, to ensure that when pop function removes the 2nd min, it does not disrupt the stack order).
 * 2.And while popping you pop min and 2nd min so that, you get the correct min value for the remaining stack and the remaining stack top also points to the right place.
 * 1.最小值始终跟随第二最小值（第二最小值的重复值，以确保当pop函数删除第二最小值时，不会破坏堆栈顺序）。
 * 2.然后在弹出时弹出min和2nd min，以便为其余堆栈获取正确的min值，并且其余堆栈顶部也指向正确的位置。
 */
var MinStack = function () {
  this.min = Number.MAX_SAFE_INTEGER
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (x <= this.min) {
    this.stack.push(this.min)
    this.min = x
  }
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.min === this.stack.pop()) {
    this.min = this.stack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */