import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { MyCounter } from 'upower'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div style={{ width: '600px', margin: '20px auto' }}>
      <div>
        <h3>Default counter</h3>
        <MyCounter />
      </div>
      <hr />
      <div>
        <h3>Counter with predefined value</h3>
        <MyCounter value={5} />
      </div>
    </div>
  </React.StrictMode>,
)
