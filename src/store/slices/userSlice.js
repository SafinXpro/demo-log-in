import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: null,
  preferences: {
    theme: 'light',
    notifications: true,
  },
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload }
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { setProfile, updatePreferences, setLoading, setError, clearError } =
  userSlice.actions

export default userSlice.reducer

export const selectUserProfile = (state) => state.user.profile
export const selectUserPreferences = (state) => state.user.preferences
export const selectUserLoading = (state) => state.user.loading
export const selectUserError = (state) => state.user.error
