import React from 'react'

const ContainerComponent = ({children,className}) => {
  return (
    <div className={`lg:w-[1000px] md:w-[720px] w-full mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default ContainerComponent
