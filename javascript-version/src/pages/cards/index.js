// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'

// // ** Demo Components Imports
// import CardUser from 'src/views/cards/CardUser'
// /*import CardImgTop from 'src/views/cards/CardImgTop'
// import CardMobile from 'src/views/cards/CardMobile'
// import CardSupport from 'src/views/cards/CardSupport'
// import CardTwitter from 'src/views/cards/CardTwitter'
// import CardFacebook from 'src/views/cards/CardFacebook'
// import CardLinkedIn from 'src/views/cards/CardLinkedIn'
// import CardAppleWatch from 'src/views/cards/CardAppleWatch'
// import CardMembership from 'src/views/cards/CardMembership'
// import CardInfluencer from 'src/views/cards/CardInfluencer'
// import CardNavigation from 'src/views/cards/CardNavigation'
// import CardWithCollapse from 'src/views/cards/CardWithCollapse'
// import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
// import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
// import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'*/

// const CardBasic = () => {
//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12} sx={{ paddingBottom: 4 }}>
//         <Typography variant='h5'>Our Alumni{/*Basic Cards*/}</Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardImgTop />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardWithCollapse />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardMobile />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardHorizontalRatings />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardAppleWatch />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardMembership />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardInfluencer />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardVerticalRatings />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardSupport />*/}
//         <CardUser />
//       </Grid>
//       <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
//         {/*<Typography variant='h5'>Navigation Cards</Typography>*/}
//   </Grid>
//       <Grid item xs={12} md={6}>
//         {/*<CardNavigation />*/}
//       </Grid>
//       <Grid item xs={12} md={6}>
//         {/*<CardNavigationCenter />*/}
//       </Grid>
//       <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
//         {/*<Typography variant='h5'>Solid Cards</Typography>*/}
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardTwitter />*/}
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardFacebook />*/}
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         {/*<CardLinkedIn />*/}
//       </Grid>
//   </Grid>
//   )
// }

// export default CardBasic

// *************************************
// import React, { useState, useEffect } from 'react'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import CardUser from 'src/views/cards/CardUser'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
// import { app1 } from '../../firebase'

// const CardBasic = () => {
//   const db = getFirestore(app1)
//   const [alumni, setAlumni] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'))
//         const alumniData = []
//         querySnapshot.forEach(doc => {
//           // Exclude the current user from being displayed in cards
//           if (doc.id !== window.sessionStorage.getItem('login')) {
//             const userData = doc.data()
//             const { name, email, currentCompany, role, passingYear } = userData
//             alumniData.push({ id: doc.id, name, email, currentCompany, role, passingYear })
//           }
//         })
//         setAlumni(alumniData)
//       } catch (error) {
//         console.error('Error fetching alumni:', error)
//       }
//     }

//     fetchData()
//   }, [db])

//   return (
//     <>
//       <Grid container spacing={6}>
//         <Grid item xs={12} sx={{ paddingBottom: 4 }}>
//           <Typography variant='h5'>Our Alumni</Typography>
//         </Grid>
//         {alumni.map(user => (
//           <Grid item key={user.id} xs={12} sm={6} md={4}>
//             <CardUser
//               name={user.name}
//               email={user.email}
//               currentCompany={user.currentCompany}
//               role={user.role}
//               passingYear={user.passingYear}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   )
// }

// export default CardBasic
// *************final changes************************
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardUser from 'src/views/cards/CardUser';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app1 } from '../../firebase';

const CardBasic = () => {
  const db = getFirestore(app1);
  const [alumni, setAlumni] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, 'users'));
  //       const alumniData = [];
  //       querySnapshot.forEach(doc => {
  //         const userData = doc.data();
  //         const { name, currentCompany, role, passingYear, picUrl } = userData;
  //         alumniData.push({ id: doc.id, name, currentCompany, role, passingYear, picUrl });
  //       });
  //       setAlumni(alumniData);
  //     } catch (error) {
  //       console.error('Error fetching alumni:', error);
  //     }
  //   };

  //   fetchData();
  // }, [db]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const alumniData = [];
        querySnapshot.forEach(doc => {
          const userData = doc.data();
          const { name, currentCompany, role, passingYear, picUrl } = userData;
          console.log('Fetched data for user:', name, picUrl); // Add this line to check fetched data
          alumniData.push({ id: doc.id, name, currentCompany, role, passingYear, picUrl });
        });
        console.log('Alumni data:', alumniData); // Add this line to check alumni data
        setAlumni(alumniData);
      } catch (error) {
        console.error('Error fetching alumni:', error);
      }
    };
  
    fetchData();
  }, [db]);
  

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Typography variant='h5'>Our Alumni</Typography>
        </Grid>
        {alumni.map(user => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <CardUser
              name={user.name}
              currentCompany={user.currentCompany}
              role={user.role}
              passingYear={user.passingYear}
              profilePicture={user.picUrl} // Pass profile picture URL to CardUser
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardBasic;



