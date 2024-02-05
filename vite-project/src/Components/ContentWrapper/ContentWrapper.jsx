export const ContentWrapper = ({children, title}) => {
    return(
        <div>
            <h1>{title}</h1>
            <div>
            {children}
            </div>
        </div>
    )
}