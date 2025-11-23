import { motion } from 'framer-motion'
import { TrendingUp, Users, Wrench, CheckCircle } from 'lucide-react'
import { ANIMATION_VARIANTS, COMPANY_STATS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const Dashboard = () => {
  const stats = [
    { label: 'Total Projects', value: COMPANY_STATS.PROJECTS, icon: <TrendingUp size={24} />, color: 'bg-blue-500' },
    { label: 'Active Technicians', value: COMPANY_STATS.TECHNICIANS, icon: <Users size={24} />, color: 'bg-green-500' },
    { label: 'Pending Services', value: '12', icon: <Wrench size={24} />, color: 'bg-orange-500' },
    { label: 'Completed This Month', value: '28', icon: <CheckCircle size={24} />, color: 'bg-purple-500' },
  ]

  const recentActivities = [
    { id: 1, type: 'Installation', client: 'ABC Corp', status: 'In Progress', date: '2025-11-18' },
    { id: 2, type: 'Maintenance', client: 'XYZ Building', status: 'Completed', date: '2025-11-17' },
    { id: 3, type: 'Repair', client: 'Star Hotel', status: 'Pending', date: '2025-11-16' },
  ]

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Monitor your business performance and activities</p>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={ANIMATION_VARIANTS.staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Client</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity) => (
                  <tr key={activity.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{activity.type}</td>
                    <td className="py-3 px-4">{activity.client}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          activity.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : activity.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{activity.date}</td>
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

export default Dashboard
