/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/** N叉树的前序遍历 https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return []
  const res = []
  function helper(node, res) {
    if (!node) return
    res.push(node.val)
    for (let i = 0, l = node.children.length; i < l; i++) {
      helper(node.children[i], res)
    }
  }
  helper(root, res)
  return res
};
//遍历法
var preorder = function (root) {
  if (!root) return []
  const res = [], stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    for (let i = cur.children.length - 1; i >= 0; i--) {
      stack.push(cur.children[i])
    }
  }
  return res
}

var a = {
  "$id": "1",
  "children": [
    {
      "$id": "2",
      "children": [
        { "$id": "5", "children": [], "val": 5 }, { "$id": "6", "children": [], "val": 6 }
      ],
      "val": 3
    },
    { "$id": "3", "children": [], "val": 2 },
    { "$id": "4", "children": [], "val": 4 }
  ],
  "val": 1
}