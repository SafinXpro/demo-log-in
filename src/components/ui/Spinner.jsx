import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/helpers'

const Spinner = ({ className, size = 'default' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <Loader2 className={cn('animate-spin text-orange-500', sizes[size], className)} />
  )
}

const LoadingScreen = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Spinner size="lg" />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  )
}

export { Spinner, LoadingScreen }
