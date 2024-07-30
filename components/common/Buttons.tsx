import Loading  from '@/components/loading/Loading'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  isRounded?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  //? Props
  const {
    type = 'button',
    isLoading = false,
    children,
    className = '',
    isRounded = false,
    ...restPropps
  } = props

  //? Render
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`button ${isRounded ? 'rounded-3xl' : ''} ${className}
      `}
      {...restPropps}
    >
      {isLoading ? <Loading /> : children}
    </button>
  )
}
