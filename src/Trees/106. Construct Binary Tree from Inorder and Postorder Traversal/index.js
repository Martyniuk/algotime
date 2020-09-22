/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 22.09
function arrayToMap(array) {
  return array.reduce((acc, curr, i) => {
    acc[curr] = i;

    return acc;
  }, {});
}

var buildTree = function (inorder, postorder) {
  if (!inorder.length && !postorder.length) {
    return null;
  }

  const inMap = arrayToMap(inorder);
  let postEnd = postorder.length - 1;

  function helper(inStart, inEnd) {
    if (inStart > inEnd) return null;

    const postEndVal = postorder[postEnd]; // 3
    const inIndex = inMap[postEndVal]; // 3
    const node = new TreeNode(postEndVal);
    postEnd -= 1;

    node.right = helper(inIndex + 1, inEnd);
    node.left = helper(inStart, inIndex - 1);

    return node;
  }

  return helper(0, inorder.length - 1);
};

// 19.09
// function toMap(array) {
//     return array.reduce((acc, v, i) => {
//         acc[v] = i;

//         return acc;
//     }, {});
// }

// var buildTree = function(inorder, postorder) {
//     const mapInorder = toMap(inorder);
//     let postEnd = postorder.length - 1; // LRN

//     function helper(inLeft, inRight) {
//         if (inLeft > inRight) {
//             return null;
//         }

//         let postendVal = postorder[postEnd];
//         let node = new TreeNode(postendVal);
//         let inIndex = mapInorder[postendVal];

//         postEnd -= 1;

//         node.right = helper(inIndex + 1, inRight);
//         node.left = helper(inLeft, inIndex - 1);

//         return node;
//     }

//     return helper(0, inorder.length - 1);
// }

// 17.09
// function toMap(array) {
//     return array.reduce((acc, v, i) => {
//         acc[v] = i;
//         return acc;
//     },{})
// }

// var buildTree = function(inorder, postorder) {
//     const inMap = toMap(inorder);
//     let postEnd = postorder.length - 1;

//     function helper(inLeft, inRight) {
//         if (inLeft > inRight) {
//             return null;
//         }

//         let postEndVal = postorder[postEnd];
//         let node = new TreeNode(postEndVal);

//         let inIndex = inMap[postEndVal];
//         postEnd--;

//         node.right = helper(inIndex + 1, inRight);
//         node.left = helper(inLeft, inIndex - 1);

//         return node;
//     }

//     return helper(0, inorder.length - 1);
// }

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// function helper(inorder, postorder, postEnd, inStart, inEnd) {
//     if (inStart > inEnd || postEnd < 0) {
//         return null;
//     }

//     const nodeVal = postorder[postEnd];
//     const node = new TreeNode(nodeVal);

//     const inIndex = inorder.indexOf(nodeVal);
//     const rightNodeIndex = inEnd - inIndex;
//     const leftNodeIndex = postEnd - rightNodeIndex - 1;

//     node.right = helper(inorder, postorder, postEnd - 1, inIndex + 1, inEnd);
//     node.left = helper(inorder, postorder, leftNodeIndex, inStart, inIndex - 1);

//     return node;
// }

// var buildTree = function(inorder, postorder) {
//     if (inorder.length === 0 && postorder.length === 0) {
//         return null;
//     }

//     return helper(inorder, postorder, postorder.length - 1, 0, inorder.length - 1);
// }

// LNR - inorder = [9,3,15,20,7] - 9 - left branch, 15,20,7 - right branch
// LRN - postorder = [9,15,7,20,3] -

// var buildTree = function(inorder, postorder) {
//     if (inorder.length === 0 && postorder.length === 0) {
//         return null;
//     }

//     return helper(postorder.length - 1, 0, inorder.length - 1, inorder, postorder);
// };

// var helper = function(postEnd, inStart, inEnd, inorder, postorder) {
//     if (inStart > inEnd || postEnd < 0) {
//         return null;
//     }

//     const element = postorder[postEnd];
//     const root = new TreeNode(element);
//     // ! - possible - optimisation
//     const inIndex = inorder.indexOf(element);
//     const rightSideBranch = inEnd - inIndex;

//     root.right = helper(postEnd - 1, inIndex + 1, inEnd, inorder, postorder);
//     root.left = helper(postEnd - rightSideBranch - 1, inStart, inIndex - 1, inorder, postorder);

//     return root;
// }

// 1 - working one - NOT SAM
// class Node {
//     constructor(value) {
//         this.val = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// var buildTree = function(inorder, postorder) {
//     if (inorder.length === 0 && postorder.length === 0) {
//         return null;
//     }

//     return helper(postorder.length - 1, 0, inorder.length - 1, inorder, postorder);
// };

// var helper = function(postEnd, inStart, inEnd, inorder, postorder) {
//     if (inStart > inEnd || postEnd < 0) {
//         return null;
//     }

//     const element = postorder[postEnd]; // 3
//     const node = new Node(element);
//     const inIndex = inorder.indexOf(element);

//     // LNR inorder = [9,3,15,20,7]
//     // LRN postorder = [9,15,7,20,3]

//     // inIndex - InStart
//     // nodeIndex_postorder-(EndPoint-nodeIndex_inorder)-1
//     // postEnd - (inEnd - inIndex) - 1

//     node.left = helper(postEnd - (inEnd - inIndex) - 1, inStart, inIndex - 1, inorder, postorder);
//     node.right = helper(postEnd - 1, inIndex + 1, inEnd, inorder, postorder)

//     return node;
// }
