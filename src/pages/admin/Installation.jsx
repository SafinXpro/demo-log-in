import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Installation = () => {
  const installations = [
    { id: 1, project: 'Residential Building A', location: 'Uttara, Dhaka', status: 'In Progress', progress: 60 },
    { id: 2, project: 'Shopping Mall B', location: 'Banani, Dhaka', status: 'Planning', progress: 20 },
    { id: 3, project: 'Office Complex C', location: 'Gulshan, Dhaka', status: 'Completed', progress: 100 },
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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Installation Projects</h2>
          <p className="text-gray-600">Manage all elevator installation projects</p>
        </div>
        <Button>+ New Installation</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Installations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {installations.map((installation) => (
              <div key={installation.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{installation.project}</h3>
                    <p className="text-sm text-gray-600">{installation.location}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      installation.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : installation.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {installation.status}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">{installation.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all"
                      style={{ width: `${installation.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Installation
