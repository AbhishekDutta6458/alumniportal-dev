// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Button from '@mui/material/Button'
// //import Avatar from '@mui/material/Avatar'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import AvatarGroup from '@mui/material/AvatarGroup'
// {/*This is specifically for the Robert Meyer card*/}
// const CardUser = () => {
//   return (
//     <>
//     <Card sx={{ position: 'relative' }}>
//       <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
//       {/*<Avatar
//         alt='Robert Meyer'
//         src='/images/avatars/1.png'//This is the small circle box storing the avatar
//         sx={{
//           width: 75,
//           height: 75,
//           left: '1.313rem',
//           top: '10.28125rem',
//           position: 'absolute',
//           border: theme => `0.25rem solid ${theme.palette.common.white}`
//         }}
//       />*/}
//       <CardContent>
//         <Box
//           sx={{
//             mt: 5.75,
//             mb: 8.75,
//             display: 'flex',
//             flexWrap: 'wrap',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
//             <Typography variant='h6'>Abhishek Dutta</Typography>
//             <Typography variant='caption'>Salesforce,UK</Typography>
//             <Typography variant='caption'>MCA'17 Christ University Bangalore</Typography>
//             <Typography variant='caption'>BCA'15 Sri Govinda College, Assam</Typography>
//             <br/>
//           </Box>
//           <Button variant='contained'>Send Request</Button>
//         </Box>
//         <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
//             {/*18 mutual friends*/}
//           </Typography>
//           <AvatarGroup max={4}>

//            {/* <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />*/}
//            {/* <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
//             <Avatar src='/images/avatars/3.png' alt='Howard Lloyd' />
//             <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
//             <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
//             <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
//         <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />*/}
//           </AvatarGroup>
//         </Box>
//       </CardContent>
//     </Card>

//     </>
//   )
// }

// export default CardUser

// ***********************************
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardContent from '@mui/material/CardContent';
// import AvatarGroup from '@mui/material/AvatarGroup';

// const CardUser = ({ name = 'Abhishek Dutta', currentCompany, role, passingYear }) => {
//   const [state, setState] = useState(null);

//   useEffect(() => {
//     // Fetch additional data or perform any other side effect if needed
//   }, []);

//   return (
//     <>
//       <Card sx={{ position: 'relative' }}>
//         <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
//         <CardContent>
//           <Box
//             sx={{
//               mt: 5.75,
//               mb: 8.75,
//               display: 'flex',
//               flexWrap: 'wrap',
//               alignItems: 'center',
//               justifyContent: 'space-between'
//             }}
//           >
//             <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
//               <Typography variant='h6'>{name}</Typography>
//               <Typography variant='caption'>{currentCompany}</Typography>
//               <Typography variant='caption'>{role}</Typography>
//               <Typography variant='caption'>{passingYear}</Typography>
//               <br />
//             </Box>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Button variant='contained'>Send Message</Button>
//           </Box>
//           <Box
//             sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}
//           >
//             <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
//               {/* 18 mutual friends */}
//             </Typography>
//             <AvatarGroup max={4}>
//               {/* Add avatar elements if needed */}
//             </AvatarGroup>
//           </Box>
//         </CardContent>
//       </Card>
//       <Typography>{state}</Typography> {/* Display the delayed state */}
//     </>
//   );
// };

// export default CardUser;
// ****************final changes***********************
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardUser = ({ name, currentCompany, role, passingYear, profilePicture, onSendMessage }) => {
  console.log('Profile Picture URL:', profilePicture)

  const handleClickSendMessage = () => {
    if (onSendMessage) {
      onSendMessage(name)
    }
  }

  return (
    <Card sx={{ position: 'relative', maxWidth: 300 }}>
      {' '}
      {/* Adjust the maxWidth as needed */}
      <CardMedia
        component='img'
        sx={{ maxHeight: 300, width: '100%', objectFit: 'contain' }} // Adjust the maxHeight as needed
        image={profilePicture}
        alt={name}
      />
      <CardContent>
        <Box
          sx={{
            mt: 2,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant='h6'>{name}</Typography>
          <Typography variant='caption'>{currentCompany}</Typography>
          <Typography variant='caption'>{role}</Typography>
          <Typography variant='caption'>{passingYear}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' onClick={handleClickSendMessage}>
            Send Message
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
