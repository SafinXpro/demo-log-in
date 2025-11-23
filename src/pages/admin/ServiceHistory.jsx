import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { toast } from 'react-toastify'
import { Download } from 'lucide-react'

const ServiceHistory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [technicianFilter, setTechnicianFilter] = useState('All Technicians')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Mock service history data
  const [serviceRecords] = useState([
    { id: 1, requestId: '#REQ1024', customer: 'Rafiq Islam', type: 'Installation', technician: 'Bashar', date: '2025-10-20', status: 'Completed' },
    { id: 2, requestId: '#REQ1023', customer: 'Nasrin Akter', type: 'Maintenance', technician: 'Rafiqul', date: '2025-10-18', status: 'Completed' },
    { id: 3, requestId: '#REQ1022', customer: 'Shahin Alam', type: 'Repair', technician: 'Shahin', date: '2025-10-17', status: 'Completed' },
    { id: 4, requestId: '#REQ1021', customer: 'Kamal Hossain', type: 'Installation', technician: 'Bashar', date: '2025-10-15', status: 'Completed' },
    { id: 5, requestId: '#REQ1020', customer: 'Rina Begum', type: 'Maintenance', technician: 'Rafiqul', date: '2025-10-12', status: 'Completed' },
    { id: 6, requestId: '#REQ1019', customer: 'Tanvir Ahmed', type: 'Repair', technician: 'Shahin', date: '2025-10-10', status: 'Completed' },
    { id: 7, requestId: '#REQ1018', customer: 'Farhana Khan', type: 'Installation', technician: 'Bashar', date: '2025-10-08', status: 'Completed' },
    { id: 8, requestId: '#REQ1017', customer: 'Masud Rana', type: 'Maintenance', technician: 'Rafiqul', date: '2025-10-05', status: 'Completed' },
    { id: 9, requestId: '#REQ1016', customer: 'Salma Khatun', type: 'Repair', technician: 'Shahin', date: '2025-10-03', status: 'Completed' },
    { id: 10, requestId: '#REQ1015', customer: 'Jahangir Kabir', type: 'Installation', technician: 'Bashar', date: '2025-10-01', status: 'Completed' },
  ])

  // Filter service records
  const filteredRecords = useMemo(() => {
    return serviceRecords.filter(record => {
      const matchesSearch = record.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           record.requestId.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === 'All Types' || record.type === typeFilter
      const matchesTechnician = technicianFilter === 'All Technicians' || record.technician === technicianFilter
      
      let matchesDate = true
      if (startDate && endDate) {
        const recordDate = new Date(record.date)
        matchesDate = recordDate >= new Date(startDate) && recordDate <= new Date(endDate)
      }
      
      return matchesSearch && matchesType && matchesTechnician && matchesDate
    })
  }, [serviceRecords, searchTerm, typeFilter, technicianFilter, startDate, endDate])

  const handleFilter = () => {
    if (startDate && endDate) {
      toast.success(`Filtered ${filteredRecords.length} records`)
    } else {
      toast.info('Please select both start and end dates')
    }
  }

  const handleDownloadReport = () => {
    toast.success('Report download started!')
  }

  const handleViewDetails = (requestId) => {
    toast.info(`Viewing details for ${requestId}`)
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-700">Service History</h1>

      {/* Search and Filter Section */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 items-center flex-wrap">
            <Input
              type="text"
              placeholder="Search by customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option>All Types</option>
              <option>Installation</option>
              <option>Maintenance</option>
              <option>Repair</option>
            </select>
            <select 
              value={technicianFilter}
              onChange={(e) => setTechnicianFilter(e.target.value)}
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option>All Technicians</option>
              <option>Bashar</option>
              <option>Rafiqul</option>
              <option>Shahin</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            />
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
            />
            <Button onClick={handleFilter}>Filter</Button>
          </div>
        </div>
      </Card>

      {/* Service History Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Completed Service Records ({filteredRecords.length})
          </h2>
          <Button onClick={handleDownloadReport} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">Request ID</th>
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Technician</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-gray-500">
                    No service records found
                  </td>
                </tr>
              ) : (
                filteredRecords.map((record) => (
                  <tr key={record.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{record.requestId}</td>
                    <td className="py-3 px-4">{record.customer}</td>
                    <td className="py-3 px-4">{record.type}</td>
                    <td className="py-3 px-4">{record.technician}</td>
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-sm">
                        {record.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleViewDetails(record.requestId)}
                        className="text-orange-500 font-medium hover:underline"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  )
}

export default ServiceHistory
