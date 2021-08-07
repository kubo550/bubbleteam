import type { FC } from "react"

export const Layout: FC = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen overflow-x-hidden">
            {children}
        </div>
    )
}
