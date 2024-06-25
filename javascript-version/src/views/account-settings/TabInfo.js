// // ** React Imports
// import { forwardRef, useState } from 'react'

// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Radio from '@mui/material/Radio'
// import Select from '@mui/material/Select'
// import Button from '@mui/material/Button'
// import MenuItem from '@mui/material/MenuItem'
// import TextField from '@mui/material/TextField'
// import FormLabel from '@mui/material/FormLabel'
// import InputLabel from '@mui/material/InputLabel'
// import RadioGroup from '@mui/material/RadioGroup'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import FormControlLabel from '@mui/material/FormControlLabel'

// // ** Third Party Imports
// import DatePicker from 'react-datepicker'

// // ** Styled Components
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// const CustomInput = forwardRef((props, ref) => {
//   return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
// })

// const TabInfo = () => {
//   // ** State
//   const [date, setDate] = useState(null)

//   return (
//     <CardContent>
//       <form>
//         <Grid container spacing={7}>
//           <Grid item xs={12} sx={{ marginTop: 4.8 }}>
//             <TextField
//               fullWidth
//               multiline
//               label='Bio'
//               minRows={2}
//               placeholder='Bio'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DatePickerWrapper>
//               <DatePicker
//                 selected={date}
//                 showYearDropdown
//                 showMonthDropdown
//                 id='account-settings-date'
//                 placeholderText='MM-DD-YYYY'
//                 customInput={<CustomInput />}
//                 onChange={date => setDate(date)}
//               />
//             </DatePickerWrapper>
//           </Grid>
//           <Grid item xs={0/*12*/} sm={0/*6*/}>
//             {/*<TextField fullWidth type='number' label='Phone' placeholder='(123) 456-7890' />*/}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label='Job Role'
//               placeholder='your_post'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Country</InputLabel>
//               <Select label='Country' defaultValue=' '>
//                 <MenuItem value='USA'>USA</MenuItem>
//                 <MenuItem value='UK'>UK</MenuItem>
//                 <MenuItem value='Australia'>Australia</MenuItem>
//                 <MenuItem value='Germany'>Germany</MenuItem>
//                 <MenuItem value='Germany'>India</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id='form-layouts-separator-multiple-select-label'>Languages</InputLabel>
//               <Select
//                 multiple
//                 defaultValue={['English']}
//                 id='account-settings-multiple-select'
//                 labelId='account-settings-multiple-select-label'
//                 input={<OutlinedInput label='Languages' id='select-multiple-language' />}
//               >
//                 <MenuItem value='English'>English</MenuItem>
//                 <MenuItem value='French'>French</MenuItem>
//                 <MenuItem value='Spanish'>Spanish</MenuItem>
//                 <MenuItem value='Portuguese'>Portuguese</MenuItem>
//                 <MenuItem value='Italian'>Italian</MenuItem>
//                 <MenuItem value='German'>German</MenuItem>
//                 <MenuItem value='Arabic'>Arabic</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl>
//               <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
//               <RadioGroup row defaultValue=' ' aria-label='gender' name='account-settings-info-radio'>
//                 <FormControlLabel value='male' label='Male' control={<Radio />} />
//                 <FormControlLabel value='female' label='Female' control={<Radio />} />
//                 <FormControlLabel value='other' label='Other' control={<Radio />} />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant='contained' sx={{ marginRight: 3.5 }}>
//               Save Changes
//             </Button>
//             <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
//               Reset
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </CardContent>
//   )
// }

// export default TabInfo

// *************************************

import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Firebase Imports
import firebase from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'
import { app1 } from '../../firebase'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault()

    // Get a reference to the database
    const database = getDatabase(app1)
    const usersRef = ref(database, 'users') // Path to store user data in the database

    try {
      // Push user data to the database
      await push(usersRef, {
        bio: e.target.bio.value,
        birthDate: date ? date.toISOString() : null,
        jobRole: e.target.jobRole.value,
        country: e.target.country.value,
        languages: e.target.languages.value,
        gender: e.target.gender.value
      })

      // Clear the form after submission
      e.target.reset()
      setDate(null)
      alert('User data saved successfully!')
    } catch (error) {
      console.error('Error saving user data:', error.message)
      alert('Failed to save user data. Please try again.')
    }
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
            <TextField fullWidth multiline name='bio' label='Bio' minRows={2} placeholder='Bio' defaultValue=' ' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='jobRole' label='Job Role' placeholder='your_post' defaultValue=' ' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select name='country' label='Country' defaultValue=' '>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
                <MenuItem value='Germany'>India</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-multiple-select-label'>Languages</InputLabel>
              <Select
                multiple
                defaultValue={['English']}
                name='languages'
                id='account-settings-multiple-select'
                labelId='account-settings-multiple-select-label'
                input={<OutlinedInput label='Languages' id='select-multiple-language' />}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup row defaultValue=' ' aria-label='gender' name='gender'>
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
                <FormControlLabel value='other' label='Other' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
