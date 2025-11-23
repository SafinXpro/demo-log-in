import { forwardRef } from 'react'
import { cn } from '@/utils/helpers'

const Card = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-3xl shadow-lg p-6 transition-shadow hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-xl font-bold text-orange-600', className)}
      {...props}
    >
      {children}
    </h3>
  )
})

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn('text-gray-700 text-sm', className)} {...props}>
      {children}
    </p>
  )
})

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('mt-4', className)} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
