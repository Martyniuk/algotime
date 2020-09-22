/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function toMap(array = []) {
  return array.reduce((acc, curr, i) => {
    acc[curr] = i;

    return acc;
  }, {});
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length && !inorder.length) {
    return null;
  }
  const inMap = toMap(inorder);
  let preorderIndex = 0;

  function helper(inStart, inEnd) {
    if (inStart > inEnd) {
      return null;
    }
    const preorderValue = preorder[preorderIndex];
    const node = new TreeNode(preorderValue);
    const inIndex = inMap[preorderValue];

    preorderIndex += 1;

    node.left = helper(inStart, inIndex - 1);
    node.right = helper(inIndex + 1, inEnd);

    return node;
  }

  return helper(0, inorder.length - 1);
};

// var buildTree = function(preorder, inorder) {
//     // p - [3,9,20,15,7] - NLR
//     // i - [9,3,15,20,7] - LNR
//     //      0,1,2, 3, 4

//     return helper(0, 0, inorder.length - 1, inorder, preorder);
//     // 2 - return helper(0, 0, inorder.length - 1 , preorder, inorder);
//     // 1 -  return helper(0, preorder, inorder);
// };

// var helper = function(preStart, inStart, inEnd, inorder, preorder) {
//     if (inStart > inEnd || preStart > preorder.length - 1) {
//         return null;
//     }

//     const element = preorder[preStart];
//     const root = new TreeNode(element);
//     const inIndex = inorder.indexOf(element);

//     const leftBranch = inIndex - inStart;

//     root.left = helper(preStart + 1, inStart, inIndex - 1, inorder, preorder);
//     root.right = helper(preStart + leftBranch + 1, inIndex + 1, inEnd, inorder, preorder);

//     return root;
// }

// 2 - not sam - working
// var buildTree = function(preorder, inorder) {
//     // p - [3,9,20,15,7] - NLR
//     // i - [9,3,15,20,7] - LNR
//     //      0,1,2, 3, 4

//     return helper(0, 0, inorder.length - 1 , preorder, inorder);
//     // 1 -  return helper(0, preorder, inorder);
// };

// var helper = function (preStart, inStart, inEnd, preorder, inorder) {
//     // exit recustrion conditions
//     if (inStart > inEnd || preStart > preorder.length - 1) {
//         return null;
//     }

//     const element = preorder[preStart]; // element value = 3
//     const inIndex = inorder.indexOf(element); // index of element in inorder
//     const root = new TreeNode(element);
//     const rightNodesLength = inEnd - inIndex;

//     root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
//     root.right = helper(preStart + rightNodesLength + 1, inIndex + 1, inEnd, preorder, inorder);

//     return root;
// }

// 1 - nOT sam working
// var buildTree = function(preorder, inorder) {
//     // p - [3,9,20,15,7] - NLR
//     // i - [9,3,15,20,7] - LNR
//     //      0,1, 2, 3,4

//     return helper(0, 0, inorder.length - 1, preorder, inorder);
//     // 1 -  return helper(0, preorder, inorder);
// };

// var helper = function(preStart, inStart, inEnd, preorder, inorder) {
//     if (inStart > inEnd || preStart > preorder.length - 1) {
//         return null;
//     }
//     const element = preorder[preStart];
//     const root = new TreeNode(element);

//     let inIndex = inorder.indexOf(element);
//     // let leftBranch = inorder.length - inIndex;
//     let leftBranch = inIndex - inStart;

//     root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
//     root.right = helper(preStart + leftBranch + 1, inIndex + 1, inEnd, preorder, inorder);

//     return root;
// }

// 1 - First Try - not working
// var helper = function(index, preorder, inorder){
//     const root = new TreeNode(preorder[index]); // 0

//     let inIndex = inorder.indexOf(root.val); // 1
//     let rightSideLength = inorder.length - inIndex;
//     let leftSideLength = inorder.length - rightSideLength;

//     root.left = helper(index + 1, preorder, inorder);
//     root.right = helper(leftSideLength + index + 1, preorder, inorder);

//     return root;
// };
