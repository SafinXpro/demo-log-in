import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { toast } from 'react-toastify'

const Maintenance = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [formData, setFormData] = useState({
    elevatorId: '',
    maintenanceDate: '',
    technician: '',
    maintenanceType: 'Routine Check'
  })

  // Mock maintenance data
  const [maintenanceList] = useState([
    { id: 1, elevatorId: 'ELV-001', technician: 'Bashar', type: 'Routine Check', date: '2025-11-01', status: 'Pending' },
    { id: 2, elevatorId: 'ELV-002', technician: 'Rafiqul', type: 'Repair', date: '2025-11-02', status: 'Completed' },
    { id: 3, elevatorId: 'ELV-003', technician: 'Shahin', type: 'Upgrade / Modification', date: '2025-11-05', status: 'Pending' },
    { id: 4, elevatorId: 'ELV-004', technician: 'Bashar', type: 'Routine Check', date: '2025-11-08', status: 'Completed' },
    { id: 5, elevatorId: 'ELV-005', technician: 'Rafiqul', type: 'Repair', date: '2025-11-10', status: 'Pending' },
    { id: 6, elevatorId: 'ELV-006', technician: 'Shahin', type: 'Routine Check', date: '2025-11-12', status: 'Completed' },
    { id: 7, elevatorId: 'ELV-007', technician: 'Bashar', type: 'Upgrade / Modification', date: '2025-11-15', status: 'Pending' },
    { id: 8, elevatorId: 'ELV-008', technician: 'Rafiqul', type: 'Routine Check', date: '2025-11-18', status: 'Completed' },
  ])

  // Calculate statistics
  const stats = useMemo(() => {
    const total = maintenanceList.length
    const pending = maintenanceList.filter(m => m.status === 'Pending').length
    const completed = maintenanceList.filter(m => m.status === 'Completed').length
    return { total, pending, completed }
  }, [maintenanceList])

  // Filter maintenance list
  const filteredMaintenance = useMemo(() => {
    return maintenanceList.filter(item => {
      const matchesSearch = item.elevatorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.technician.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'All Status' || item.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [maintenanceList, searchTerm, statusFilter])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.elevatorId || !formData.maintenanceDate || !formData.technician) {
      toast.error('Please fill all required fields')
      return
    }
    toast.success('Maintenance task added successfully!')
    setFormData({
      elevatorId: '',
      maintenanceDate: '',
      technician: '',
      maintenanceType: 'Routine Check'
    })
  }

  const handleUpdate = (elevatorId) => {
    toast.info(`Update maintenance for ${elevatorId}`)
  }

  const getStatusBadge = (status) => {
    const styles = status === 'Pending' 
      ? 'bg-yellow-200 text-yellow-700' 
      : 'bg-green-200 text-green-700'
    return <span className={`${styles} px-2 py-1 rounded text-sm`}>{status}</span>
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-700">Maintenance Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5 text-center border-t-4 border-orange-500">
          <p className="text-gray-600 text-sm">Total Maintenance</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{stats.total}</p>
        </Card>
        <Card className="p-5 text-center border-t-4 border-yellow-400">
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pending}</p>
        </Card>
        <Card className="p-5 text-center border-t-4 border-green-500">
          <p className="text-gray-600 text-sm">Completed</p>
          <p className="text-3xl font-bold text-green-600 mt-1">{stats.completed}</p>
        </Card>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <Input
          type="text"
          placeholder="Search by Elevator ID or Technician"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2"
        />
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-orange-400"
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Add Maintenance Task Form */}
      <Card className="p-6 max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Add Maintenance Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="elevatorId" required>Elevator ID</Label>
              <Input
                type="text"
                id="elevatorId"
                name="elevatorId"
                value={formData.elevatorId}
                onChange={handleInputChange}
                placeholder="Enter Elevator ID"
              />
            </div>
            <div>
              <Label htmlFor="maintenanceDate" required>Maintenance Date</Label>
              <Input
                type="date"
                id="maintenanceDate"
                name="maintenanceDate"
                value={formData.maintenanceDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="technician" required>Technician</Label>
              <select
                id="technician"
                name="technician"
                value={formData.technician}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Technician</option>
                <option value="Bashar">Bashar</option>
                <option value="Rafiqul">Rafiqul</option>
                <option value="Shahin">Shahin</option>
              </select>
            </div>
            <div>
              <Label htmlFor="maintenanceType">Maintenance Type</Label>
              <select
                id="maintenanceType"
                name="maintenanceType"
                value={formData.maintenanceType}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-orange-400"
              >
                <option>Routine Check</option>
                <option>Repair</option>
                <option>Upgrade / Modification</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="mt-4">Add Task</Button>
        </form>
      </Card>

      {/* Scheduled Maintenance Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Scheduled Maintenance</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">Elevator ID</th>
                <th className="py-3 px-4">Technician</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredMaintenance.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    No maintenance tasks found
                  </td>
                </tr>
              ) : (
                filteredMaintenance.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{item.elevatorId}</td>
                    <td className="py-3 px-4">{item.technician}</td>
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4">{item.date}</td>
                    <td className="py-3 px-4">{getStatusBadge(item.status)}</td>
                    <td className="py-3 px-4 text-center">
                      <Button
                        size="sm"
                        onClick={() => handleUpdate(item.elevatorId)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Update
                      </Button>
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

export default Maintenance
