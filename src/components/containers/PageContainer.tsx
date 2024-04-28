import React from "react"

type TPageContainer = {
  title: string
  subtitle?: string
  children: React.ReactNode
  actions?: React.ReactNode
}
const PageContainer = ({
  title,
  subtitle,
  children,
  actions
}: TPageContainer) => {
  return (
    <div className="p-3 mt-4 bg-white rounded-xl">
      <header className="pb-2 border-b flex justify-between">
        <div>
          <h2 className="text-lg">{title}</h2>
          {subtitle && (
            <p className="text-xs text-slate-600">{subtitle}</p>
          )}
        </div>
        {
          actions && (
            <div>{actions}</div>
          )
        }
      </header>
      <>
        {children}
      </>
    </div>
  )
}

export default PageContainer