// // ** MUI Imports
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import InputAdornment from '@mui/material/InputAdornment'

// // ** Icons Imports
// import Phone from 'mdi-material-ui/Phone'
// import EmailOutline from 'mdi-material-ui/EmailOutline'
// import AccountOutline from 'mdi-material-ui/AccountOutline'
// import MessageOutline from 'mdi-material-ui/MessageOutline'

// const FormLayoutsIcons = () => {
//   return (
//     <Card>
//       <CardHeader title='User Feedback' titleTypographyProps={{ variant: 'h6' }} />
//       <CardContent>
//         <form onSubmit={e => e.preventDefault()}>
//           <Grid container spacing={5}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label='Full Name'
//                 placeholder='Your name'
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position='start'>
//                       <AccountOutline />
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type='email'
//                 label='Email'
//                 placeholder='xyz@domain.com'
//                 /*helperText='You can use letters, numbers & periods'*/
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position='start'>
//                       <EmailOutline />
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             </Grid>
//             <Grid item xs={1/*12*/}>
//               {/*<TextField
//                 fullWidth
//                 type='number'
//                 label='Phone No.'
//                 placeholder='+1-123-456-8790'
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position='start'>
//                       <Phone />
//                     </InputAdornment>
//                   )
//                 }}
//               />*/}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 multiline
//                 minRows={3}
//                 label='Describe the issue you are facing:- '
//                 placeholder='write here'
//                 sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position='start'>
//                       <MessageOutline />
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type='submit' variant='contained' size='large'>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

// export default FormLayoutsIcons

// *****************************************

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Firebase Imports
import firebase from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'
import { app1 } from '../../firebase'

// Initialize Firebase if not already initialized
if (!app1) {
  firebase.initializeApp(firebaseConfig)
}

const FormLayoutsIcons = () => {
  const handleSubmit = async e => {
    e.preventDefault()

    const database = getDatabase(app1)
    const feedbackRef = ref(database, 'feedback') // Path to store feedback data in the database

    try {
      // Push feedback data to the database
      await push(feedbackRef, {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        issue: e.target.issue.value
      })

      // Clear the form after submission
      e.target.reset()
      alert('Feedback submitted successfully!')
    } catch (error) {
      console.error('Error submitting feedback:', error.message)
      alert('Failed to submit feedback. Please try again.')
    }
  }

  return (
    <Card>
      <CardHeader title='User Feedback' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='fullName'
                label='Full Name'
                placeholder='Your name'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='email'
                name='email'
                label='Email'
                placeholder='xyz@domain.com'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            {/* Phone number field */}
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                name='issue'
                label='Describe the issue you are facing:- '
                placeholder='write here'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MessageOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
