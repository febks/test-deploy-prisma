'use client'

import React from 'react'

const Add = () => {
  const [name, setName] = React.useState('')
  
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => fetch('/api/posts', { method: 'POST', body: JSON.stringify({ name }) })}>Add</button>
    </div>
  )
}

export default Add