import { motion } from 'framer-motion'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const CustomerPanel = () => {
  const { user } = useAuth()

  const myRequests = [
    { id: 1, service: 'Maintenance', status: 'Pending', date: '2025-11-20', priority: 'Normal' },
    { id: 2, service: 'Installation', status: 'In Progress', date: '2025-11-15', priority: 'High' },
    { id: 3, service: 'Repair', status: 'Completed', date: '2025-11-10', priority: 'Normal' },
  ]

  const stats = [
    { label: 'Active Requests', value: '2', icon: <Clock size={24} />, color: 'bg-blue-500' },
    { label: 'Completed', value: '1', icon: <CheckCircle size={24} />, color: 'bg-green-500' },
    { label: 'Pending', value: '1', icon: <AlertCircle size={24} />, color: 'bg-orange-500' },
  ]

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name || 'User'}!
          </h2>
          <p className="text-gray-600">Manage your service requests and account</p>
        </div>
        <Link to="/customer/service">
          <Button>+ New Service Request</Button>
        </Link>
      </div>

      {/* Stats */}
      <motion.div
        variants={ANIMATION_VARIANTS.staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={ANIMATION_VARIANTS.scaleIn}>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-lg`}>{stat.icon}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* My Service Requests */}
      <Card>
        <CardHeader>
          <CardTitle>My Service Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Service</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Priority</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {myRequests.map((request) => (
                  <tr key={request.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{request.service}</td>
                    <td className="py-3 px-4">{request.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          request.priority === 'High'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {request.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          request.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : request.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CustomerPanel
