import { useState } from 'react'
 import Title from "./Title"
 import Namelength from "./Namelength"

import './styles.css'
import Namereversed from './Namereversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title userName={name} />
      < Namelength NameLength= {name} />
      <Namereversed name={name} />
    </div>
  )
}
