function typeOf(obj) {
  const toString = Object.prototype.toString;
  const typeEnum = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };

  return typeEnum[toString.call(obj)];
}

function deepClone(data) {
  const t = typeOf(data);
  const len = data.length;
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < len; i++) {
      o.push(deepClone(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepClone(data[i]);
    }
  }

  return o;
}

export { deepClone };
