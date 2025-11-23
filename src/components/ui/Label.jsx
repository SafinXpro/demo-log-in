import { forwardRef } from 'react'
import { cn } from '@/utils/helpers'

const Label = forwardRef(({ className, children, required, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn('block text-gray-700 font-medium mb-1', className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
})

Label.displayName = 'Label'

export default Label
