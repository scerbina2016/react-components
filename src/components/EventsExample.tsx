import React, {FC, useState} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')

    const changleHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setValue(e.target.value)

    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>)=> {
        console.log(value);

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>)=> {
        console.log('DRAG')

    }

  return (
    <div>
      <input value={value} onChange={changleHandler} type='text'/>
      <button onClick={clickHandler}>Knopka</button>
      <div onDrag = {dragHandler} draggable style={{width:200, height:200, background:'green' }}></div>
      <div style={{width:200, height:200, background:'green', marginTop:'15px' }}></div>

    </div>
  )
}

export default EventsExample
