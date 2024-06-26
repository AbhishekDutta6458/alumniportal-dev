import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CogOutline from 'mdi-material-ui/CogOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
import { getFirestore, doc, collection, getDoc } from 'firebase/firestore'
import { app1 } from '../../../../firebase'
import { getStorage, ref as storageRef, getDownloadURL } from '@firebase/storage'

if (!app1) {
  firebase.initializeApp(firebaseConfig)
}

const db = getFirestore(app1)
const storage = getStorage(app1)

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [userData, setUserData] = useState(null)
  const [adarsh1, setAdarsh1] = useState({}) // Data fetched from firestore
  const [profilePicture, setProfilePicture] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const auth = getAuth(app1)
    const database = getDatabase(app1)
    const db = getFirestore(app1)
    const getData = async () => {
      try {
        const docRef = doc(db, 'users', window.sessionStorage.getItem('login'))
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setAdarsh1(docSnap.data())
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error getting document:', error)
      }
    }

    const fetchProfilePicture = async () => {
      try {
        const docRef = doc(db, 'users', window.sessionStorage.getItem('login'))
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const userData = docSnap.data()
          const profilePictureUrl = userData.picUrl || null
          setProfilePicture(profilePictureUrl)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error getting document:', error)
      }
    }

    onAuthStateChanged(auth, user => {
      getData()
      if (user) {
        const userRef1 = ref(database, `users/${user.uid}/-NrM1WDcijd51U23u9fY`)
        onValue(userRef1, snapshot => {
          const data = snapshot.val()
          setUserData(data)
        })
      } else {
        setUserData(null)
      }
    })

    fetchProfilePicture()
  }, [])

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar
          alt='User Avatar'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src={profilePicture || '/images/avatars/avatar.jpg'}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt='User Avatar'
              src={adarsh1.picUrl || '/images/avatars/avatar.jpg'}
              sx={{ width: '2.5rem', height: '2.5rem' }}
            />
            <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600 }}>{adarsh1.name || 'User Name'}</Typography>
              <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                {adarsh1.role || 'Role'}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('account-settings')}>
          <Box sx={styles}>
            <AccountOutline sx={{ marginRight: 2 }} />
            Profile
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('tables')}>
          <Box sx={styles}>
            <EmailOutline sx={{ marginRight: 2 }} />
            Inbox
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('tables')}>
          <Box sx={styles}>
            <MessageOutline sx={{ marginRight: 2 }} />
            Chat
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('account-settings')}>
          <Box sx={styles}>
            <CogOutline sx={{ marginRight: 2 }} />
            Settings
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('form-layouts')}>
          <Box sx={styles}>
            <HelpCircleOutline sx={{ marginRight: 2 }} />
            Feedback
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ py: 2 }} onClick={() => handleDropdownClose('/pages/login')}>
          <LogoutVariant sx={{ marginRight: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
