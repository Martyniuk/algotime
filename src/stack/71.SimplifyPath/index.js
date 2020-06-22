/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  if (!path) {
    return path;
  }

  const stack = []; // path
  const pathArr = path.split("/"); // []
  let result = "";

  for (let i = 0; i < pathArr.length; i++) {
    const char = pathArr[i];

    if (char === "" || char === ".") {
      continue;
    } else if (char === "..") {
      if (stack.length === 0) {
        continue;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    result += `/${stack[i]}`;
  }

  return stack.length ? result : "/";
};

const a = "/home/";
const b = "/../";
const c = "/a/./b/../../c/";
const d = "/a/../../b/../c//.//";
const e = "/a//b////c/d//././/..";

simplifyPath(a); // -> /home
simplifyPath(b); // -> /
simplifyPath(c); // -> /c
simplifyPath(d); // -> /c
simplifyPath(e); // -> /a/b/c
