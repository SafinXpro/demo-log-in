import { COMPANY_INFO } from '@/utils/constants'

const CustomerFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-center">
          <p>
            &copy; {currentYear} {COMPANY_INFO.NAME}. All rights reserved.
          </p>
          <p className="text-gray-500">
            Need help? Contact: {COMPANY_INFO.PHONE[0]}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default CustomerFooter
