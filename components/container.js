export default function Container({ children, className }) {
  return(
    <div className={`px-5 ${className}`}>
      {children}
    </div>
  )
}