// DFS 

function dfs(root_node, target) {
  let stack = [root_node]
  while (stack.length > 0) {
    let check = stack.pop();
    if (!check.left.visited) {
      stack.push(check.left);
    }
    if (!check.right.visited) {
      stack.push(check.right);
    }
    check.visited = true;
    if (target === check.value) {
      return target
    }
  }
} 

// BFS 

function bfs(root_node, target) {
  let queue = [root_node]
  while (queue.length > 0) {
    let check = queue.shift();
    if (!check.left.visited) {
      queue.push(check.left);
    } 
    if (!check.right.visited) {
      queue.push(check.right);
    }
    check.visited = true; 
    if (target === check.value) {
      return target
    }
  }
} 