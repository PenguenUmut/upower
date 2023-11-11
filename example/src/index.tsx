import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter4 } from 'upower'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

console.log('MyCounter4', MyCounter4)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <>{MyCounter4 && <MyCounter4 />}</>
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      {/* <MyCounter value={5} /> */}
    </div>
  </React.StrictMode>,
)
