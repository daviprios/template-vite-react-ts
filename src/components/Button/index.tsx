import { HTMLAttributes } from "react"

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>Button</button>
  )
}

export default Button