// // ** MUI Imports
// import Paper from '@mui/material/Paper'
// import Table from '@mui/material/Table'
// import { styled } from '@mui/material/styles'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableContainer from '@mui/material/TableContainer'
// import TableRow from '@mui/material/TableRow'
// import TableCell, { tableCellClasses } from '@mui/material/TableCell'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     color: theme.palette.common.white,
//     backgroundColor: theme.palette.common.black
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14
//   }
// }))

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },

//   // hide last border
//   '&:last-of-type td, &:last-of-type th': {
//     border: 0
//   }
// }))

// const createData = (name,user,date) => { {/*(name, calories, fat, carbs, protein)*/}
//   return { name,user,date }
// }
// {/*name, calories, fat, carbs, protein*/ }
// const rows = [
//   createData('Abhishek Dutta', 'Student','15th Jan, 2024'),
//   createData('Oishi Halder', 'Student','10th Dec, 2023'),
//   createData('Rahul Singh', 'Alumni','9th Dec, 2023'),
//   createData('Shreya Dey', 'Alumni','15th Oct, 2023'),
//   createData('Sayani Ghosh', 'Student','10th Jan, 2023')
// ]

// const TableCustomized = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label='customized table'>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Contact{/*Dessert (100g serving)*/}</StyledTableCell>
//             <StyledTableCell align='right'>Type{/*Calories*/}</StyledTableCell>
//             <StyledTableCell align='right'>Date{/*Fat (g)*/}</StyledTableCell>
//                 {/*<StyledTableCell align='right'>*/}
//                   {/*Carbs (g)*/}
//                   {/*</StyledTableCell>*/}
//                 {/*<StyledTableCell align='right'>*/}
//                   {/*Protein (g)*/}
//                   {/*</StyledTableCell>*/}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component='th' scope='row'>
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align='right'>{row.user}</StyledTableCell>
//               <StyledTableCell align='right'>{row.date}</StyledTableCell>
//               {/*<StyledTableCell align='right'>*/}
//                 {/*row.carbs*/}
//                 {/*</StyledTableCell>*/}
//               {/*<StyledTableCell align='right'>*/}
//                 {/*row.protein*/}
//                 {/*</StyledTableCell>*/}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default TableCustomized

// ***************************************************
// import React, { useState, useEffect } from 'react'
// import {
//   Paper,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   TextField,
//   Button,
//   MenuItem,
//   Grid
// } from '@mui/material'
// import { styled } from '@mui/material/styles'
// import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { app1 } from '../../firebase'

// const StyledTableCell = styled(TableCell)({
//   color: 'white',
//   backgroundColor: 'purple'
// })

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },
//   '&:last-of-type td, &:last-of-type th': {
//     border: 0
//   }
// }))

// const MessageTableCell = styled(TableCell)({})

// const db = getFirestore(app1)
// const auth = getAuth(app1)

// const TableCustomized = () => {
//   const [messages, setMessages] = useState([])
//   const [newMessage, setNewMessage] = useState('')
//   const [recipient, setRecipient] = useState('')
//   const currentUser = auth.currentUser
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     if (!currentUser) return

//     const unsubscribe = onSnapshot(
//       query(
//         collection(db, 'messages'),
//         orderBy('timestamp', 'asc'),
//         where('recipientId', 'in', [currentUser.uid, recipient]),
//         where('senderId', 'in', [currentUser.uid, recipient])
//       ),
//       snapshot => {
//         const messageList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setMessages(messageList)
//       },
//       error => {
//         console.error('Error fetching messages:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [currentUser, db, recipient])

//   useEffect(() => {
//     const unsubscribe = onSnapshot(
//       collection(db, 'users'),
//       snapshot => {
//         const userList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setUsers(userList)
//       },
//       error => {
//         console.error('Error fetching users:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [db])

//   const sendMessage = async () => {
//     if (!currentUser || !newMessage.trim() || !recipient) return
//     try {
//       await addDoc(collection(db, 'messages'), {
//         senderId: currentUser.uid,
//         senderName: currentUser.displayName,
//         recipientId: recipient,
//         text: newMessage.trim(),
//         timestamp: new Date()
//       })
//       setNewMessage('')
//     } catch (error) {
//       console.error('Error sending message:', error)
//     }
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label='customized table'>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Contact</StyledTableCell>
//             <StyledTableCell align='right'>Type</StyledTableCell>
//             <StyledTableCell align='right'>Date</StyledTableCell>
//             <StyledTableCell align='right'>Message</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {messages.map(message => (
//             <StyledTableRow key={message.id}>
//               <MessageTableCell>
//                 {message.senderId === currentUser.uid ? 'You' : users.find(user => user.id === message.senderId)?.name}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {message.senderId === currentUser.uid ? 'Sent' : 'Received'}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {new Date(message.timestamp?.toDate()).toLocaleString()}
//               </MessageTableCell>
//               <MessageTableCell align='right'>{message.text}</MessageTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {currentUser && (
//         <Grid container spacing={5} justifyContent='space-evenly'>
//           <Grid item xs={4}>
//             <TextField
//               select
//               label='Select recipient'
//               value={recipient}
//               onChange={e => setRecipient(e.target.value)}
//               variant='outlined'
//               fullWidth
//               style={{ width: '100%' }}
//             >
//               {users.map(user => (
//                 <MenuItem key={user.id} value={user.id}>
//                   {user.name}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               label='Type your message'
//               variant='outlined'
//               value={newMessage}
//               onChange={e => setNewMessage(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item alignSelf='center'>
//             <Button variant='contained' color='primary' onClick={sendMessage}>
//               Send
//             </Button>
//           </Grid>
//         </Grid>
//       )}
//     </TableContainer>
//   )
// }

// export default TableCustomized

// *************messages with delete feature*********************
// import React, { useState, useEffect } from 'react'
// import {
//   Paper,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   TextField,
//   Button,
//   MenuItem,
//   Grid
// } from '@mui/material'
// import { styled } from '@mui/material/styles'
// import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where, deleteDoc, doc } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { app1 } from '../../firebase'

// const StyledTableCell = styled(TableCell)({
//   color: 'white',
//   backgroundColor: 'purple'
// })

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },
//   '&:last-of-type td, &:last-of-type th': {
//     border: 0
//   }
// }))

// const MessageTableCell = styled(TableCell)({})

// const db = getFirestore(app1)
// const auth = getAuth(app1)

// const TableCustomized = () => {
//   const [messages, setMessages] = useState([])
//   const [newMessage, setNewMessage] = useState('')
//   const [recipient, setRecipient] = useState('')
//   const currentUser = auth.currentUser
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     if (!currentUser) return

//     const unsubscribe = onSnapshot(
//       query(
//         collection(db, 'messages'),
//         orderBy('timestamp', 'asc'),
//         where('recipientId', 'in', [currentUser.uid, recipient]),
//         where('senderId', 'in', [currentUser.uid, recipient])
//       ),
//       snapshot => {
//         const messageList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setMessages(messageList)
//       },
//       error => {
//         console.error('Error fetching messages:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [currentUser, db, recipient])

//   useEffect(() => {
//     const unsubscribe = onSnapshot(
//       collection(db, 'users'),
//       snapshot => {
//         const userList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setUsers(userList)
//       },
//       error => {
//         console.error('Error fetching users:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [db])

//   const sendMessage = async () => {
//     if (!currentUser || !newMessage.trim() || !recipient) return
//     try {
//       await addDoc(collection(db, 'messages'), {
//         senderId: currentUser.uid,
//         senderName: currentUser.displayName,
//         recipientId: recipient,
//         text: newMessage.trim(),
//         timestamp: new Date()
//       })
//       setNewMessage('')
//     } catch (error) {
//       console.error('Error sending message:', error)
//     }
//   }

//   const deleteMessage = async messageId => {
//     try {
//       await deleteDoc(doc(db, 'messages', messageId))
//     } catch (error) {
//       console.error('Error deleting message:', error)
//     }
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label='customized table'>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Contact</StyledTableCell>
//             <StyledTableCell align='right'>Type</StyledTableCell>
//             <StyledTableCell align='right'>Date</StyledTableCell>
//             <StyledTableCell align='right'>Message</StyledTableCell>
//             {currentUser && <StyledTableCell align='right'>Actions</StyledTableCell>}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {messages.map(message => (
//             <StyledTableRow key={message.id}>
//               <MessageTableCell>
//                 {message.senderId === currentUser.uid ? 'You' : users.find(user => user.id === message.senderId)?.name}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {message.senderId === currentUser.uid ? 'Sent' : 'Received'}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {new Date(message.timestamp?.toDate()).toLocaleString()}
//               </MessageTableCell>
//               <MessageTableCell align='right'>{message.text}</MessageTableCell>
//               {currentUser && message.senderId === currentUser.uid && (
//                 <MessageTableCell align='right'>
//                   <Button variant='contained' color='error' onClick={() => deleteMessage(message.id)}>
//                     Delete
//                   </Button>
//                 </MessageTableCell>
//               )}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {currentUser && (
//         <Grid container spacing={5} justifyContent='space-evenly'>
//           <Grid item xs={4}>
//             <TextField
//               select
//               label='Select recipient'
//               value={recipient}
//               onChange={e => setRecipient(e.target.value)}
//               variant='outlined'
//               fullWidth
//               style={{ width: '100%' }}
//             >
//               {users.map(user => (
//                 <MenuItem key={user.id} value={user.id}>
//                   {user.name}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               label='Type your message'
//               variant='outlined'
//               value={newMessage}
//               onChange={e => setNewMessage(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item alignSelf='center'>
//             <Button variant='contained' color='primary' onClick={sendMessage}>
//               Send
//             </Button>
//           </Grid>
//         </Grid>
//       )}
//     </TableContainer>
//   )
// }

// export default TableCustomized

// **************testing1****************
// import React, { useState, useEffect } from 'react'
// import {
//   Paper,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   TextField,
//   Button,
//   MenuItem,
//   Grid
// } from '@mui/material'
// import { styled } from '@mui/material/styles'
// import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where, deleteDoc, doc } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
// import { app1 } from '../../firebase'

// const StyledTableCell = styled(TableCell)({
//   color: 'white',
//   backgroundColor: 'purple'
// })

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },
//   '&:last-of-type td, &:last-of-type th': {
//     border: 0
//   }
// }))

// const MessageTableCell = styled(TableCell)({})

// const db = getFirestore(app1)
// const auth = getAuth(app1)

// const TableCustomized = () => {
//   const [messages, setMessages] = useState([])
//   const [newMessage, setNewMessage] = useState('')
//   const [recipient, setRecipient] = useState('')
//   const currentUser = auth.currentUser
//   const [users, setUsers] = useState([])
//   useEffect(() => {
//     if (!currentUser) return

//     console.log('Current User ID:', currentUser.uid) // Log current user ID

//     const unsubscribe = onSnapshot(
//       query(
//         collection(db, 'messages'),
//         orderBy('timestamp', 'asc'),
//         where('recipientId', '==', currentUser.email) // Change recipientId to currentUser.email
//       ),
//       snapshot => {
//         console.log('Messages Snapshot:', snapshot.docs) // Log snapshot for debugging
//         const messageList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setMessages(messageList)
//       },
//       error => {
//         console.error('Error fetching messages:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [currentUser, db])

//   useEffect(() => {
//     const unsubscribe = onSnapshot(
//       collection(db, 'users'),
//       snapshot => {
//         const userList = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setUsers(userList)
//       },
//       error => {
//         console.error('Error fetching users:', error)
//       }
//     )

//     return () => unsubscribe()
//   }, [db])

//   const sendMessage = async () => {
//     if (!currentUser || !newMessage.trim() || !recipient) return
//     try {
//       await addDoc(collection(db, 'messages'), {
//         senderId: currentUser.uid,
//         senderName: currentUser.displayName,
//         recipientId: recipient, // Ensure recipient ID is set correctly
//         text: newMessage.trim(),
//         timestamp: new Date()
//       })
//       setNewMessage('')
//     } catch (error) {
//       console.error('Error sending message:', error)
//     }
//   }

//   const deleteMessage = async messageId => {
//     try {
//       await deleteDoc(doc(db, 'messages', messageId))
//     } catch (error) {
//       console.error('Error deleting message:', error)
//     }
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label='customized table'>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Contact</StyledTableCell>
//             <StyledTableCell align='right'>Type</StyledTableCell>
//             <StyledTableCell align='right'>Date</StyledTableCell>
//             <StyledTableCell align='right'>Message</StyledTableCell>
//             {currentUser && <StyledTableCell align='right'>Actions</StyledTableCell>}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {messages.map(message => (
//             <StyledTableRow key={message.id}>
//               <MessageTableCell>
//                 {message.senderId === currentUser.uid ? 'You' : users.find(user => user.id === message.senderId)?.name}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {message.senderId === currentUser.uid ? 'Sent' : 'Received'}
//               </MessageTableCell>
//               <MessageTableCell align='right'>
//                 {new Date(message.timestamp?.toDate()).toLocaleString()}
//               </MessageTableCell>
//               <MessageTableCell align='right'>{message.text}</MessageTableCell>
//               {currentUser && message.senderId === currentUser.uid && (
//                 <MessageTableCell align='right'>
//                   <Button variant='contained' color='error' onClick={() => deleteMessage(message.id)}>
//                     Delete
//                   </Button>
//                 </MessageTableCell>
//               )}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {currentUser && (
//         <Grid container spacing={5} justifyContent='space-evenly'>
//           <Grid item xs={4}>
//             <TextField
//               select
//               label='Select recipient'
//               value={recipient}
//               onChange={e => setRecipient(e.target.value)}
//               variant='outlined'
//               fullWidth
//               style={{ width: '100%' }}
//             >
//               {users.map(user => (
//                 <MenuItem key={user.id} value={user.id}>
//                   {user.name}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               label='Type your message'
//               variant='outlined'
//               value={newMessage}
//               onChange={e => setNewMessage(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item alignSelf='center'>
//             <Button variant='contained' color='primary' onClick={sendMessage}>
//               Send
//             </Button>
//           </Grid>
//         </Grid>
//       )}
//     </TableContainer>
//   )
// }

// export default TableCustomized

// ************testing 2************************

import React, { useState, useEffect } from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
  Button,
  MenuItem,
  Grid
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where, deleteDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { app1 } from '../../firebase'

const StyledTableCell = styled(TableCell)({
  color: 'white',
  backgroundColor: 'purple'
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const MessageTableCell = styled(TableCell)({})

const db = getFirestore(app1)
const auth = getAuth(app1)

const TableCustomized = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [recipient, setRecipient] = useState('')
  const currentUser = auth.currentUser
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!currentUser) return

    const unsubscribe = onSnapshot(
      query(collection(db, 'messages'), orderBy('timestamp', 'asc'), where('recipientId', '==', currentUser.email)),
      snapshot => {
        const messageList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setMessages(messageList)
      },
      error => {
        console.error('Error fetching messages:', error)
      }
    )

    return () => unsubscribe()
  }, [currentUser, db])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'users'),
      snapshot => {
        const userList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setUsers(userList)
      },
      error => {
        console.error('Error fetching users:', error)
      }
    )

    return () => unsubscribe()
  }, [db])

  const sendMessage = async () => {
    if (!currentUser || !newMessage.trim() || !recipient) return
    try {
      await addDoc(collection(db, 'messages'), {
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email,
        recipientId: recipient,
        text: newMessage.trim(),
        timestamp: new Date()
      })
      setNewMessage('')
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const deleteMessage = async messageId => {
    try {
      await deleteDoc(doc(db, 'messages', messageId))
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }
  const getSenderName = senderId => {
    console.log('Sender ID:', senderId)
    console.log('Users:', users)

    const sender = users.find(user => user.id === senderId)
    console.log('Sender Object:', sender)

    if (sender) {
      console.log(sender)
      if (sender.name) {
        console.log('Using sender name:', sender.name)
        return sender.name
      }
      if (sender.username) {
        console.log('Using sender username:', sender.username)
        return sender.username
      }
    }

    console.log('Sender name not found, returning Unknown')
    return 'Unknown'
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Contact</StyledTableCell>
            <StyledTableCell align='right'>Type</StyledTableCell>
            <StyledTableCell align='right'>Date</StyledTableCell>
            <StyledTableCell align='right'>Message</StyledTableCell>
            {currentUser && <StyledTableCell align='right'>Actions</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map(message => (
            <StyledTableRow key={message.id}>
              <MessageTableCell>{getSenderName(message.senderName)}</MessageTableCell>
              <MessageTableCell align='right'>
                {message.senderId === currentUser.uid ? 'Sent' : 'Received'}
              </MessageTableCell>
              <MessageTableCell align='right'>
                {new Date(message.timestamp?.toDate()).toLocaleString()}
              </MessageTableCell>
              <MessageTableCell align='right'>{message.text}</MessageTableCell>
              {currentUser && message.senderId === currentUser.uid && (
                <MessageTableCell align='right'>
                  <Button variant='contained' color='error' onClick={() => deleteMessage(message.id)}>
                    Delete
                  </Button>
                </MessageTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {currentUser && (
        <Grid container spacing={5} justifyContent='space-evenly'>
          <Grid item xs={4}>
            <TextField
              select
              label='Select recipient'
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              variant='outlined'
              fullWidth
              style={{ width: '100%' }}
            >
              {users.map(user => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Type your message'
              variant='outlined'
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item alignSelf='center'>
            <Button variant='contained' color='primary' onClick={sendMessage}>
              Send
            </Button>
          </Grid>
        </Grid>
      )}
    </TableContainer>
  )
}

export default TableCustomized

// ********testing 3*****************

