// // ** React Imports
// import { useState } from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Link from '@mui/material/Link'
// import Alert from '@mui/material/Alert'
// import Select from '@mui/material/Select'
// import { styled } from '@mui/material/styles'
// import MenuItem from '@mui/material/MenuItem'
// import TextField from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import InputLabel from '@mui/material/InputLabel'
// import AlertTitle from '@mui/material/AlertTitle'
// import IconButton from '@mui/material/IconButton'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import Button from '@mui/material/Button'

// // ** Icons Imports
// import Close from 'mdi-material-ui/Close'

// const ImgStyled = styled('img')(({ theme }) => ({
//   width: 120,
//   height: 120,
//   marginRight: theme.spacing(6.25),
//   borderRadius: theme.shape.borderRadius
// }))

// const ButtonStyled = styled(Button)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     textAlign: 'center'
//   }
// }))

// const ResetButtonStyled = styled(Button)(({ theme }) => ({
//   marginLeft: theme.spacing(4.5),
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     marginLeft: 0,
//     textAlign: 'center',
//     marginTop: theme.spacing(4)
//   }
// }))

// const TabAccount = () => {
//   // ** State
//   const [openAlert, setOpenAlert] = useState(true)
//   const [imgSrc, setImgSrc] = useState('/images/avatars/avatar.jpg')
// // /images/avatars/1.png
//   const onChange = file => {
//     const reader = new FileReader()
//     const { files } = file.target
//     if (files && files.length !== 0) {
//       reader.onload = () => setImgSrc(reader.result)
//       reader.readAsDataURL(files[0])
//     }
//   }

//   return (
//     <CardContent>
//       <form>
//         <Grid container spacing={7}>
//           <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <ImgStyled src={imgSrc} alt='Profile Pic' />
//               <Box>
//                 <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
//                   Upload New Photo
//                   <input
//                     hidden
//                     type='file'
//                     onChange={onChange}
//                     accept='image/png, image/jpeg, image/jpg'
//                     id='account-settings-upload-image'
//                   />
//                 </ButtonStyled>
//                 <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/avatar.jpg')}>
//                   Reset
//                 </ResetButtonStyled>
//                 <Typography variant='body2' sx={{ marginTop: 5 }}>
//                   Allowed PNG, JPEG or JPG. Max size of 800K.
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth label='Username' placeholder='your_id' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth label='Name' placeholder='Your Name' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type='email'
//               label='Email'
//               placeholder='xyz@domain.com'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Role</InputLabel>
//               <Select label='Role' defaultValue=' '>
//                 <MenuItem value='alumni'>Alumni</MenuItem>
//                 <MenuItem value='student'>Student</MenuItem>
//                 <MenuItem value='candidate'>Candidate</MenuItem>
//                 {/*<MenuItem value='maintainer'>Maintainer</MenuItem>*/}
//                 {/*<MenuItem value='subscriber'>Subscriber</MenuItem>*/}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth label='Current Company' placeholder='Your Company Name' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth label='Course Passed in Christ' placeholder='Your Course Name' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth label='Passing Out Year' placeholder='graduation_year' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Status</InputLabel>
//               <Select label='Status' defaultValue='active'>
//                 <MenuItem value='active'>Active</MenuItem>
//                 <MenuItem value='inactive'>Inactive</MenuItem>
//                 <MenuItem value='pending'>Pending</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={0/*12*/} sm={0/*6*/}>
//             {/*<TextField fullWidth label='Company' placeholder='ABC Pvt. Ltd.' defaultValue='ABC Pvt. Ltd.' />*/}
//           </Grid>

//           {/*openAlert ? (
//             <Grid item xs={12} sx={{ mb: 3 }}>
//               <Alert
//                 severity='warning'
//                 sx={{ '& a': { fontWeight: 400 } }}
//                 action={
//                   <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
//                     <Close fontSize='inherit' />
//                   </IconButton>
//                 }
//               >
//                 <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
//                 <Link href='/' onClick={e => e.preventDefault()}>
//                   Resend Confirmation
//                 </Link>
//               </Alert>
//             </Grid>
//               ) : null*/}

//           <Grid item xs={12}>
//             <Button variant='contained' sx={{ marginRight: 3.5 }}>
//               Save Changes
//             </Button>
//             <Button type='reset' variant='outlined' color='secondary'>
//               Reset
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </CardContent>
//   )
// }

// export default TabAccount

// *********************************************

// import { useState } from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Link from '@mui/material/Link'
// import Alert from '@mui/material/Alert'
// import Select from '@mui/material/Select'
// import { styled } from '@mui/material/styles'
// import MenuItem from '@mui/material/MenuItem'
// import TextField from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import InputLabel from '@mui/material/InputLabel'
// import AlertTitle from '@mui/material/AlertTitle'
// import IconButton from '@mui/material/IconButton'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import FormControl from '@mui/material/FormControl' // Import FormControl here

// // ** Icons Imports
// import Close from 'mdi-material-ui/Close'

// // ** Firebase Imports
// import { getDatabase, ref as dbRef, push } from 'firebase/database'
// import { getAuth } from 'firebase/auth' // Import getAuth
// import { getFirestore, doc, setDoc } from 'firebase/firestore'
// import { app1 } from '../../firebase'
// import { getStorage, ref, uploadBytes } from '@firebase/storage'

// const db = getFirestore(app1)
// const storage = getStorage(app1)

// const ImgStyled = styled('img')(({ theme }) => ({
//   width: 120,
//   height: 120,
//   marginRight: theme.spacing(6.25),
//   borderRadius: theme.shape.borderRadius
// }))

// const ButtonStyled = styled(Button)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     textAlign: 'center'
//   }
// }))

// const ResetButtonStyled = styled(Button)(({ theme }) => ({
//   marginLeft: theme.spacing(4.5),
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     marginLeft: 0,
//     textAlign: 'center',
//     marginTop: theme.spacing(4)
//   }
// }))

// const TabAccount = () => {
//   // ** State
//   const [openAlert, setOpenAlert] = useState(true)
//   const [imgSrc, setImgSrc] = useState('/images/avatars/avatar.jpg')

//   const onChange = async file => {
//     const reader = new FileReader()
//     const { files } = file.target
//     if (files && files.length !== 0) {
//       reader.onload = async () => {
//         setImgSrc(reader.result)

//         // Upload the selected file to Firebase Storage
//         const storageRef = ref(storage, `profilePictures/${files[0].name}`)
//         await uploadBytes(storageRef, files[0])
//         console.log('File uploaded successfully!')
//       }
//       reader.readAsDataURL(files[0])
//     }
//   }

//   // Function to handle form submission
//   const handleSubmit = async e => {
//     e.preventDefault()

//     // Get the currently authenticated user
//     const auth = getAuth()
//     const user = auth.currentUser
//     if (!user) {
//       console.error('No user is currently logged in')
//       return
//     }

//     // Get a reference to the database
//     const database = getDatabase(app1)
//     const usersRef = dbRef(database, `users/${user.uid}`, `test`) // Path to store user data under the user's ID

//     try {
//       // Push user data to the database under the user's ID
//       await setDoc(doc(db, 'users', window.sessionStorage.getItem('login')), {
//         username: e.target.username.value,
//         name: e.target.name.value,
//         // email: e.target.email.value,//change it
//         role: e.target.role.value,
//         currentCompany: e.target.currentCompany.value,
//         course: e.target.course.value,
//         passingOutYear: e.target.passingOutYear.value,
//         status: e.target.status.value
//       })
//       console.log('User data saved successfully!')

//       await push(usersRef, {
//         username: e.target.username.value,
//         name: e.target.name.value,
//         //email: e.target.email.value,
//         role: e.target.role.value,
//         currentCompany: e.target.currentCompany.value,
//         course: e.target.course.value,
//         passingOutYear: e.target.passingOutYear.value,
//         status: e.target.status.value
//       })

//       // Clear the form after submission
//       e.target.reset()
//       alert('User data saved successfully!')
//     } catch (error) {
//       console.error('Error saving user data:', error.message)
//       alert('Failed to save user data. Please try again.')
//     }
//   }

//   return (
//     <CardContent>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={7}>
//           <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <ImgStyled src={imgSrc} alt='Profile Pic' />
//               <Box>
//                 <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
//                   Upload New Photo
//                   <input
//                     hidden
//                     type='file'
//                     onChange={onChange}
//                     accept='image/png, image/jpeg, image/jpg'
//                     id='account-settings-upload-image'
//                   />
//                 </ButtonStyled>
//                 <ResetButtonStyled
//                   color='error'
//                   variant='outlined'
//                   onClick={() => setImgSrc('/images/avatars/avatar.jpg')}
//                 >
//                   Reset
//                 </ResetButtonStyled>
//                 <Typography variant='body2' sx={{ marginTop: 5 }}>
//                   Allowed PNG, JPEG or JPG. Max size of 800K.
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth name='username' label='Username' placeholder='your_id' defaultValue=' ' />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth name='name' label='Name' placeholder='Your Name' defaultValue=' ' />
//           </Grid>
//           {/*<Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type='email'
//               name='email'
//               label='Email'
//               placeholder='xyz@domain.com'
//               defaultValue=' '
//             />
//   </Grid>*/}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Role</InputLabel>
//               <Select label='Role' name='role' defaultValue='alumni'>
//                 <MenuItem value='alumni'>Alumni</MenuItem>
//                 <MenuItem value='student'>Student</MenuItem>
//                 <MenuItem value='candidate'>Candidate</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name='currentCompany'
//               label='Current Company'
//               placeholder='Your Company Name'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name='course'
//               label='Course Passed in Christ'
//               placeholder='Your Course Name'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               name='passingOutYear'
//               label='Passing Out Year'
//               placeholder='graduation_year'
//               defaultValue=' '
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Status</InputLabel>
//               <Select label='Status' name='status' defaultValue='active'>
//                 <MenuItem value='active'>Active</MenuItem>
//                 <MenuItem value='inactive'>Inactive</MenuItem>
//                 <MenuItem value='pending'>Pending</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <Button type='submit' variant='contained' sx={{ marginRight: 3.5 }}>
//               Save Changes
//             </Button>
//             <Button type='reset' variant='outlined' color='secondary'>
//               Reset
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </CardContent>
//   )
// }

// export default TabAccount

// ***************final change made********************

import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'; // Import FormControl here

// ** Icons Imports
import Close from 'mdi-material-ui/Close';

// ** Firebase Imports
import { getDatabase, ref as dbRef, push } from 'firebase/database';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app1 } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';

const db = getFirestore(app1);
const storage = getStorage(app1);

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}));

const TabAccount = () => {
  const [picUrl, setPicUrl] = useState('');
  // ** State
  const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState('/images/avatars/avatar.jpg');

  const onChange = async file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = async () => {
        setImgSrc(reader.result);

        // Upload the selected file to Firebase Storage
        const storageRef = ref(storage, `profilePictures/${files[0].name}`);
        await uploadBytes(storageRef, files[0]);
        await downloadUrl(files);
        console.log('File uploaded successfully!');
      };
      reader.readAsDataURL(files[0]);
    }
  };
  const downloadUrl = async files => {
    const picRef = await getDownloadURL(ref(storage, `profilePictures/${files[0].name}`));
    console.log(picRef);
    setPicUrl(`${picRef}`);
  };

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    // Get the currently authenticated user
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      console.error('No user is currently logged in');
      return;
    }

    // Get a reference to the database
    const database = getDatabase(app1);
    const usersRef = dbRef(database, `users/${user.uid}`, `test`); // Path to store user data under the user's ID

    try {
      // Construct user data object with existing details and updated profile picture
      const userData = {
        username: e.target.username.value,
        name: e.target.name.value,
        // email: e.target.email.value,//change it
        picUrl: picUrl || '/images/avatars/avatar.jpg', // Use existing profile picture if new one not selected
        role: e.target.role.value,
        currentCompany: e.target.currentCompany.value,
        course: e.target.course.value,
        passingOutYear: e.target.passingOutYear.value,
        status: e.target.status.value
      };

      // Push user data to the database under the user's ID
      await setDoc(doc(db, 'users', window.sessionStorage.getItem('login')), userData);
      console.log('User data saved successfully!');

      await push(usersRef, userData);

      // Clear the form after submission
      e.target.reset();
      alert('User data saved successfully!');
    } catch (error) {
      console.error('Error saving user data:', error.message);
      alert('Failed to save user data. Please try again.');
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg, image/jpg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled
                  color='error'
                  variant='outlined'
                  onClick={() => setImgSrc('/images/avatars/avatar.jpg')}
                >
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG, JPEG or JPG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='username' label='Username' placeholder='your_id' defaultValue=' ' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='name' label='Name' placeholder='Your Name' defaultValue=' ' />
          </Grid>
          {/*<Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              name='email'
              label='Email'
              placeholder='xyz@domain.com'
              defaultValue=' '
            />
  </Grid>*/}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label='Role' name='role' defaultValue='alumni'>
                <MenuItem value='Alumni'>Alumni</MenuItem>
                <MenuItem value='Student'>Student</MenuItem>
                <MenuItem value='Candidate'>Candidate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name='currentCompany'
              label='Current Company'
              placeholder='Your Company Name'
              defaultValue=' '
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name='course'
              label='Course Passed in Christ'
              placeholder='Your Course Name'
              defaultValue=' '
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name='passingOutYear'
              label='Passing Out Year'
              placeholder='graduation_year'
              defaultValue=' '
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Status' name='status' defaultValue='active'>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type='submit' variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabAccount;
