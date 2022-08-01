import React, { useState } from 'react'
//  import the component :
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForn'

function App(){
    let [colors, setColor] = useState ( [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })
     const addColor = (newColor) => {
      setColor([...colors, newColor])
     }
    return (
        <div className="App">
            {colorMap}
          <ColorForm addColor={addColor}/>
        </div>
    )
    
}

export default App;
