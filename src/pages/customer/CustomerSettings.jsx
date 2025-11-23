import { useState } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { toast } from 'react-toastify'

const CustomerSettings = () => {
  const [profileInfo, setProfileInfo] = useState({
    fullName: 'Safin Ahmed',
    email: 'safin@example.com',
    phone: '+880 1712 345678',
    location: 'Dhaka, Bangladesh',
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  })

  const [preferences, setPreferences] = useState({
    enableNotifications: false,
  })

  const handleSaveChanges = (e) => {
    e.preventDefault()
    toast.success('Settings saved successfully!')
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">User Settings</h2>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSaveChanges} className="space-y-6">
              {/* Profile Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={profileInfo.fullName}
                      onChange={(e) =>
                        setProfileInfo({ ...profileInfo, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileInfo.email}
                      onChange={(e) =>
                        setProfileInfo({ ...profileInfo, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="text"
                      value={profileInfo.phone}
                      onChange={(e) =>
                        setProfileInfo({ ...profileInfo, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      type="text"
                      value={profileInfo.location}
                      onChange={(e) =>
                        setProfileInfo({ ...profileInfo, location: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Change Password */}
              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Current Password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, currentPassword: e.target.value })
                    }
                  />
                  <Input
                    type="password"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, newPassword: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Preferences</h3>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-700 font-medium">Enable Notifications</label>
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-orange-500 accent-orange-500 rounded focus:ring-2 focus:ring-orange-400"
                    checked={preferences.enableNotifications}
                    onChange={(e) =>
                      setPreferences({ ...preferences, enableNotifications: e.target.checked })
                    }
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6 border-t text-center">
                <Button type="submit" size="lg">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export default CustomerSettings
