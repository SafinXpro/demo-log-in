import { Outlet } from 'react-router-dom'
import CustomerSidebar from '@/components/customer/CustomerSidebar'
import CustomerHeader from '@/components/customer/CustomerHeader'
import CustomerFooter from '@/components/customer/CustomerFooter'

const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CustomerHeader />
      <div className="flex flex-1">
        <CustomerSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <CustomerFooter />
    </div>
  )
}

export default CustomerLayout
