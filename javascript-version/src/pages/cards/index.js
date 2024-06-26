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



