import React from 'react'

import { LoadingBarComponent } from 'loading-bar-pro'
import 'loading-bar-pro/dist/index.css'

const App = () => {
  return (
    <div style={{ width: '400px', margin: '200px auto' }}>
      <LoadingBarComponent time={1000} color="blue" borderRadius={5} width={500} height={20} />
    </div>
  )
}

export default App
