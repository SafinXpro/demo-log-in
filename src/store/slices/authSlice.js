import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  role: localStorage.getItem('role') || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload
      state.user = user
      state.token = token
      state.role = role
      state.isAuthenticated = true
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.role = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
  },
})

export const { setCredentials, logout, updateUser } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectUserRole = (state) => state.auth.role
export const selectToken = (state) => state.auth.token
