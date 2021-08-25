const someObj = {
  foo: 'bar',
  bar() {
    return null;
  }
}

const anotherObj = {
  ...someObj,
  hello: true
}

console.log(someObj);
console.log(anotherObj);
