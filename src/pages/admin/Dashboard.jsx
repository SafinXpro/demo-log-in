import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  // Sample data - 57 requests
  const generateRequests = () => {
    const types = ['Installation', 'Maintenance', 'Repair', 'Modification']
    const statuses = ['Pending', 'In Progress', 'Completed']
    const names = ['Rafiq Islam', 'Nasrin Akter', 'Shahin Alam', 'Md. Rahim', 'Mr. Karim', 'Mrs. Laila', 'Sadia', 'Tania', 'Hasan', 'Karim', 'Bashar', 'Rana', 'Monir', 'Farah', 'Nazmul', 'Anika', 'Sabbir', 'Jahid', 'Arman', 'Sohana']
    const list = []
    const start = new Date(2025, 6, 1)
    
    for (let i = 1; i <= 57; i++) {
      const id = `REQ-${1000 + i}`
      const name = names[i % names.length]
      const type = types[i % types.length]
      const status = statuses[i % statuses.length]
      const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000)
      const date = d.toISOString().slice(0, 10)
      list.push({ id, customer: name, type, status, date })
    }
    return list
  }

  const allRequests = useMemo(() => generateRequests(), [])

  // Filtered data
  const filteredRequests = useMemo(() => {
    let result = allRequests

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (req) =>
          req.id.toLowerCase().includes(query) ||
          req.customer.toLowerCase().includes(query) ||
          req.type.toLowerCase().includes(query) ||
          req.status.toLowerCase().includes(query) ||
          req.date.includes(query)
      )
    }

    if (statusFilter) {
      result = result.filter((req) => req.status === statusFilter)
    }

    return result
  }, [allRequests, searchQuery, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / pageSize))
  const currentData = filteredRequests.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const statusBadge = (status) => {
    if (status === 'Pending')
      return <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-sm">Pending</span>
    if (status === 'In Progress')
      return <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm">In Progress</span>
    if (status === 'Completed')
      return <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-sm">Completed</span>
    return <span className="px-2 py-1 rounded text-sm">{status}</span>
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-gray-600">Total Installations</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">128</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-gray-600">Pending Requests</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">23</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-gray-600">Active Technicians</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">12</p>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Requests</h2>

        {/* Top bar: Pagination Left + Search Right */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          {/* Pagination Left */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              size="sm"
              variant="outline"
            >
              Prev
            </Button>
            <span className="text-gray-700 font-medium">
              Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
            </span>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              size="sm"
              variant="outline"
            >
              Next
            </Button>
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-gray-700"
            >
              {[...Array(totalPages)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Page {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar Right */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search requests (ID, name, type, status, date)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="border border-gray-300 rounded px-3 py-2 w-80 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
              }}
              className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-orange-400"
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">Request ID</th>
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {currentData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-6 px-4 text-center text-gray-500">
                    No records found.
                  </td>
                </tr>
              ) : (
                currentData.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono">{row.id}</td>
                    <td className="py-3 px-4">{row.customer}</td>
                    <td className="py-3 px-4">{row.type}</td>
                    <td className="py-3 px-4">{statusBadge(row.status)}</td>
                    <td className="py-3 px-4">{row.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashboard
