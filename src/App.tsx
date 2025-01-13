import React, { useState, FC } from './lib/teact/teact'

const App: FC = () => {
  const [count, setCount] = useState(0);

  // return e(
  //   'button',
  //   { onClick: () => {
  //     toast.success('Hello, world!')
  //   } },
  //   'Count: ' + count
  // );
  // return <React.Fragment>
  // <button onClick={() => {
  //   toast.success('Hello, world!')
  // }}>Count: {count}</button>

  // <Toaster />
  // </React.Fragment>
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Count: {count}</button>
  </div>;
}

export default App;
