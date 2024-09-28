import './style.css'
import ReactDOM from './lib/teact/teact-dom'
import React, { useState, FC, VirtualElement } from './lib/teact/teact'

const app = document.querySelector<HTMLDivElement>('#app')!
const e = React.createElement

const LikeButton: FC = () => {
  const [count, setCount] = useState(0);

  return e(
    'button',
    { onClick: () => setCount(count + 1) },
    'Count: ' + count
  );
}

ReactDOM.render(e(LikeButton, {}) as VirtualElement, app)
