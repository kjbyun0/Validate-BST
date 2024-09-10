class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// function isValidBST(root) {
//   // type your code here
//   if (root === null)
//     return true;

//   let res = true;
//   if (root.left) {
//     res = res && isValidBST(root.left);
//     const farRight = getFarRightVal(root.left);
//     res = res && (root.val > farRight);
//   }
//   if (root.right) {
//     res = res && isValidBST(root.right);
//     const farLeft = getFarLeftVal(root.right);
//     res = res && (root.val <= farLeft);
//   }

//   return res;
// }

// function getFarRightVal(root) {
//   if (root === null)
//     return null;

//   if (root.right === null)
//     return root.val;

//   return getFarRightVal(root.right);
// }

// function getFarLeftVal(root) {
//   if (root === null)
//     return null;

//   if (root.left === null)
//     return root.val;

//   return getFarLeftVal(root.left);
// }

function isValidBST(root, low = -Infinity, high = Infinity) {
  // type your code here
  if (root === null)
    return true;

  if (root.val <= low || root.val >= high)
    return false;

  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);

}

if (require.main === module) {

  // add your own tests in here
  const T = (v, l, r) => new Node(v, l, r)

  console.log("Expecting: true");
  console.log("=>", isValidBST(T(2, T(1), T(3))));

  const n1 = new Node(1);
  const n2 = new Node(2);
  const n3 = new Node(3);
  const n4 = new Node(4);
  const n5 = new Node(5);
  const n6 = new Node(6);
  const n7 = new Node(7);
  const n8 = new Node(8);

  console.log("Expecting: true");
  console.log("=>", isValidBST(n5));

  n5.left = n7;
  console.log("Expecting: false");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.left = n3;
  console.log("Expecting: true");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.right = n3;
  console.log("Expecting: false");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.right = n7;
  console.log("Expecting: true");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.left = n3;
  n5.right = n7;
  n3.left = n1;
  n3.right = n4;
  n1.right = n2;
  n7.left = n6;
  n7.right = n8;
  // console.log("getFarRightVal(n5): ", getFarRightVal(n5));
  // console.log("getFarLeftVal(n5): ", getFarLeftVal(n5));
  console.log("Expecting: true");
  console.log("=>", isValidBST(n5));


  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.left = n4;
  n5.right = n6;
  n4.left = n2;
  n2.left = n1;
  n2.right = n3
  n6.right = n8;
  n8.left = n7
  // console.log("getFarRightVal(n5): ", getFarRightVal(n5));
  // console.log("getFarLeftVal(n5): ", getFarLeftVal(n5));
  console.log("Expecting: true");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.left = n3;
  n5.right = n7;
  n3.left = n1;
  n3.right = n4;
  n4.right = n2;
  n7.left = n6;
  n7.right = n8;
  // console.log("getFarRightVal(n5): ", getFarRightVal(n5));
  // console.log("getFarLeftVal(n5): ", getFarLeftVal(n5));
  console.log("Expecting: false");
  console.log("=>", isValidBST(n5));

  n1.left = n1.right = null;
  n2.left = n2.right = null;
  n3.left = n3.right = null;
  n4.left = n4.right = null;
  n5.left = n5.right = null;
  n6.left = n6.right = null;
  n7.left = n7.right = null;
  n8.left = n8.right = null;
  n5.left = n4;
  n5.right = n6;
  n4.left = n2;
  n2.left = n1;
  n2.right = n3
  n6.right = n8;
  n6.left = n7
  // console.log("getFarRightVal(n5): ", getFarRightVal(n5));
  // console.log("getFarLeftVal(n5): ", getFarLeftVal(n5));
  console.log("Expecting: false");
  console.log("=>", isValidBST(n5));

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution