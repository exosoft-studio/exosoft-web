
interface ButtonProps {
    className?: string
    children?: React.ReactNode
    href?: string
  }
  
  export default function Button({ className, children, href }: ButtonProps) {
    return (
      <a className="inline-block" href={href}>
        <div className={`${className ? className : ''} 
          inline-block p-4 cursor-pointer rounded-md font-medium`}>
          {children}
  
        </div>
      </a>
    )
  }