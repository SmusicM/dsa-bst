class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.insertRecursively(val);
    }
    //const newNode = new Node(val)
    ////if no existing node , make new node with the val the root
    //if(this.root===null){
    // this.root = newNode
    // return
    //}
    ////initialize variable with this.root so we can use it for pointers
    //let currNode = this.root
    ////while curr node exist
    //while(currNode!==null){
    // //if val is less  than the curr node, left is for values with less than node it comes from
    // if(val<=currNode.val){
    //   //and node left is not null
    //   if(currNode.left===null){
    //     //assign the left node to  be current node if its null
    //     currNode.left=newNode;
    //     return
    //   }
    //   //if the if loop is true , val is less than curr node, apply currNode to left
    //   currNode =currNode.left
    // }else{
    //   if(currNode.right===null){
    //     currNode.right=newNode;
    //     return
    //   }
    //   currNode = currNode.right
    // }
    //}
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertNode = (currNode) => {
      if (!currNode) {
        return new Node(val);
      }
      if (val < currNode.val) {
        currNode.left = insertNode(currNode.left);
      } else {
        currNode.right = insertNode(currNode.right);
      }
      return currNode;
    };

    this.root = insertNode(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while (currNode) {
      if (val === currNode.val) {
        return currNode;
      }
      if (val < currNode.val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findNode = (currNode) => {
      if (!currNode) {
        return undefined;
      }
      if (currNode.val === val) {
        return currNode;
      }
      if (val < currNode.val) {
        return findNode(currNode.left);
      } else {
        return findNode(currNode.right);
      }
    };
    return findNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedArr = [];
    if (this.root === null) {
      return [];
    }
    const traverse = (node) => {
      if (!node) {
        return;
      }
      visitedArr.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    console.log(visitedArr);
    return visitedArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedArr = [];
    if (this.root === null) {
      return [];
    }
    const traverse = (node) => {
      if (!node) {
        return;
      }

      traverse(node.left);
      visitedArr.push(node.val);
      traverse(node.right);
    };
    traverse(this.root);
    console.log(visitedArr);
    return visitedArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedArr = [];
    if (this.root === null) {
      return [];
    }
    const traverse = (node) => {
      if (!node) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      visitedArr.push(node.val);
    };
    traverse(this.root);
    console.log(visitedArr);
    return visitedArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(this.root===null){
      return []
    }
    const queue = []
    const visitedArr = [];
    queue.push(this.root)
    while(queue.length>0){
      const currNode = queue.shift()
      console.log("currentNode.val at bfs() ",currNode.val)
      visitedArr.push(currNode.val)
      if(currNode.left!==null){
        queue.push(currNode.left)
      }
      if(currNode.right!==null){
        queue.push(currNode.right)
      }
    }
    console.log("visitedArr at bfs() ",visitedArr)
    return visitedArr
  }
//
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
