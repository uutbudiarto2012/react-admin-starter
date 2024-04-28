import React from "react"

const CardContainer = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-white p-3 rounded-2xl">
      {children}
    </div>
  )
}

export default CardContainer