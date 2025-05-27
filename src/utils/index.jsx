import React from "react"
import "./style.css"

const LoadingSuspense = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-primary-lighter-bg">
            <div className="loader"></div>
        </div>
    )
}

const Suspense = ({ children }) => {
    return (
        <React.Suspense fallback={<LoadingSuspense />}>
            {children}
        </React.Suspense>
    )
}
export default React.memo(Suspense);