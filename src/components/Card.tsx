import React,{FC} from 'react'

interface CardProps {
    width?: string;
    height?: string;
     onClick?: () => void;// for function
    children?: React.ReactNode;//for JSX element
   
}


const Card: FC<CardProps> = ({width, height, onClick, children}) => {
  return (
    <div style={{width, height, border:'1vh solid green'}} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
