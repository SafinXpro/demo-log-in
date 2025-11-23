import { forwardRef } from 'react'
import { cn } from '@/utils/helpers'

const Button = forwardRef(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      default: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400',
      outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-400',
      ghost: 'text-orange-500 hover:bg-orange-50 focus:ring-orange-400',
      destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400',
    }
    
    const sizes = {
      default: 'px-4 py-2',
      sm: 'px-3 py-1.5 text-sm',
      lg: 'px-6 py-3 text-lg',
      icon: 'p-2',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
