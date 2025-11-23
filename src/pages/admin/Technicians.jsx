import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Technicians = () => {
  const technicians = [
    { id: 1, name: 'Ahmed Khan', expertise: 'Installation', status: 'Available', phone: '01711111111' },
    { id: 2, name: 'Rafiq Ahmed', expertise: 'Maintenance', status: 'On Duty', phone: '01722222222' },
    { id: 3, name: 'Karim Hassan', expertise: 'Repair', status: 'Available', phone: '01733333333' },
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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Technicians</h2>
          <p className="text-gray-600">Manage your team of technicians</p>
        </div>
        <Button>+ Add Technician</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Technicians</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Expertise</th>
                  <th className="text-left py-3 px-4">Phone</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {technicians.map((tech) => (
                  <tr key={tech.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{tech.name}</td>
                    <td className="py-3 px-4">{tech.expertise}</td>
                    <td className="py-3 px-4">{tech.phone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tech.status === 'Available'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech.status}
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

export default Technicians
