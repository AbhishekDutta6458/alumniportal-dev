import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Firebase Imports
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth'
import { firebaseConfig } from '../../firebase'

const TabSecurity = () => {
  // ** States
  const [values, setValues] = useState({
    email: '',
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    showCurrentPassword: false
  })
  const [error, setError] = useState('')

  // ** Event Handlers
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = prop => () => {
    setValues({ ...values, [prop]: !values[prop] })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleReset = () => {
    setValues({
      email: '',
      newPassword: '',
      currentPassword: '',
      showNewPassword: false,
      showCurrentPassword: false
    })
  }

  const handleSaveChanges = async () => {
    try {
      const { email, currentPassword, newPassword } = values

      // Check if email is provided
      if (!email.trim()) {
        setError('Please provide your email address.')
        return
      }

      const auth = getAuth()

      // Reauthenticate the user with their current password before changing the password
      const credential = EmailAuthProvider.credential(email, currentPassword)
      await reauthenticateWithCredential(auth.currentUser, credential)

      // Update the user's password
      await updatePassword(auth.currentUser, newPassword)

      // Reset the form
      handleReset()

      // Optionally, provide feedback to the user that the password has been changed successfully
    } catch (error) {
      setError('Failed to change password. Please check your email and current password.')
    }
  }

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-email'>Email</InputLabel>
                  <OutlinedInput
                    label='Email'
                    value={values.email}
                    id='account-settings-email'
                    onChange={handleChange('email')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>Current Password</InputLabel>
                  <OutlinedInput
                    label='Current Password'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleChange('currentPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword('showCurrentPassword')}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showCurrentPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password'>New Password</InputLabel>
                  <OutlinedInput
                    label='New Password'
                    value={values.newPassword}
                    id='account-settings-new-password'
                    type={values.showNewPassword ? 'text' : 'password'}
                    onChange={handleChange('newPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowPassword('showNewPassword')}
                          aria-label='toggle password visibility'
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={300} alt='avatar' height={256} src='/images/pages/password_protected.jpg' />
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        {error && (
          <Typography variant='body2' sx={{ color: 'error', mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box sx={{ mt: 11 }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleSaveChanges}>
            Save Changes
          </Button>
          <Button type='reset' variant='outlined' color='secondary' onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </CardContent>
    </form>
  )
}

export default TabSecurity
