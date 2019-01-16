// 向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent ? parent.$options.name : '';

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}
// 向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  const parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}
// 向下找到最近的指定组件
function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
      }
    }
  }

  return children;
}

// 向下找到所有的指定组件
function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    return components.concat(findComponentsDownward(child, componentName));
  }, []);
}

// 找到指定的兄弟组件
// exceptSelf 是否剔除自身
function findBrothersComponents(context, componentName, exceptSelf = true) {
  const brothers = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });

  // vue.js 在渲染组件时，都会给每个组件加一个内置的属性_uid，这个_uid 是不会重复的，借此我们可以从一系列兄弟组件中把自己排除掉
  const index = brothers.findIndex(item => item._uid === context._uid);
  if (exceptSelf) brothers.splice(index, 1);

  return brothers;
}

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents
};
