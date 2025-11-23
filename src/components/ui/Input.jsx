import { forwardRef } from 'react'
import { cn } from '@/utils/helpers'

const Input = forwardRef(({ className, type = 'text', error, ...props }, ref) => {
  return (
    <div className="w-full">
      <input
        type={type}
        ref={ref}
        className={cn(
          'w-full px-4 py-2 border rounded-lg transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent',
          error ? 'border-red-500' : 'border-gray-300',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
