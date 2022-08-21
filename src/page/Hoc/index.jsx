import React from 'react'

const Hoc = (Component) => {
    const getRandomColor=()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      const color = getRandomColor()
  return (props)=>(
    <div style={{color: color}}>
        <Component {...props} />
    </div>
  )
}

export default Hoc