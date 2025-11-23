import { useState } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { toast } from 'react-toastify'

const Settings = () => {

  const [adminInfo, setAdminInfo] = useState({
    name: 'Safin Ahmed',
    email: 'admin@example.com',
    phone: '017xxxxxxxx',
    role: 'Administrator',
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    systemNotifications: false,
  })

  const handleUpdateInfo = (e) => {
    e.preventDefault()
    toast.success('Admin details updated successfully!')
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match!')
      return
    }
    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters!')
      return
    }
    toast.success('Password changed successfully!')
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  const handleSaveNotifications = () => {
    toast.success('Notification settings saved!')
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Settings Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Admin Information - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-orange-500">👤</span> Admin Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateInfo} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Admin Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={adminInfo.name}
                    onChange={(e) => setAdminInfo({ ...adminInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={adminInfo.email}
                    onChange={(e) => setAdminInfo({ ...adminInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={adminInfo.phone}
                    onChange={(e) => setAdminInfo({ ...adminInfo, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    type="text"
                    value={adminInfo.role}
                    disabled
                    className="bg-gray-100"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <Button type="submit">Update Info</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right Side Panels */}
        <div className="flex flex-col gap-6">
          {/* Change Password */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                🔒 Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-sm font-semibold">
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Enter current password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, currentPassword: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword" className="text-sm font-semibold">
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, newPassword: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-semibold">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full">
                  Save Password
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                🔔 Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Email Notifications</span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-orange-500 rounded focus:ring-2 focus:ring-orange-400"
                    checked={notifications.emailNotifications}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        emailNotifications: e.target.checked,
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">System Notifications</span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-orange-500 rounded focus:ring-2 focus:ring-orange-400"
                    checked={notifications.systemNotifications}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        systemNotifications: e.target.checked,
                      })
                    }
                  />
                </div>
                <Button onClick={handleSaveNotifications} className="w-full mt-2">
                  Save Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

export default Settings
