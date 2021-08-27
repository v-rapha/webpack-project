import { useState } from 'react';

const someObj = {
  foo: 'bar',
  bar() {
    return null;
  },
};

const anotherObj = {
  ...someObj,
  hello: true,
};

console.log(someObj);
console.log(anotherObj);

function RandomObjects() {
  const [obj, setObj] = useState({});

  return (
    <div>
      <h3>Very cool objects: </h3>
      <button onClick={() => setObj(someObj)}>1º Object</button>
      <button onClick={() => setObj(anotherObj)}>2º Object</button>

      <ul>
        {Object.keys(obj).map((o, i) => (
          <li key={i}>
            {o}: {obj[o]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomObjects;
