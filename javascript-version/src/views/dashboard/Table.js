// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 100,
    status: 'completed',
    date: '01/21/2024',
    name: 'Sally Quinn',
    salary: '₹400',
    email: 'sallyquinn@sbwire.com',
    designation: 'International Conference on Learning and Administration in Higher Education (ICLAHE)'
  },
  {
    age: 150,
    date: '01/24/2024',
    salary: '₹500',
    status: 'current',
    name: 'Margaret Bowers',
    email: 'browns.com.uk',
    designation: 'International Conference on Educational Environment and Distance Education'
  },
  {
    age: 80,
    date: '01/30/2024',
    name: 'Minnie Roy',
    status: 'postponed',
    salary: '₹450',
    email: 'ediehn6@163.com',
    designation: 'International Conference on Global Studies (IC-GS-2024)'
  },
  {
    age: 75,
    date: '02/11/2024',
    status: 'current',
    salary: '₹600',
    name: 'Ralph Leonard',
    email: 'leonard@ifeng.com',
    designation: 'International Conference on Language, Innovation, Culture, and Education'
  },
  {
    age: 60,
    status: 'completed',
    date: '03/19/2024',
    salary: '₹800',
    name: 'Annie Martin',
    designation: 'International Conference on Social Science, Language, Literature and Education',
    email: 'martin@gmail.com'
  },
  {
    age: 50,
    date: '04/03/2024',
    salary: '₹650',
    name: 'Adeline Day',
    status: 'postponed',
    email: 'adeline@gnu.org',
    designation: 'International Conference on Mathematics, Statistics, Education & Law (ICMSEL)'
  },
  {
    age: 100,
    status: 'completed',
    date: '04/17/2024',
    salary: '₹400',
    name: 'Laura Jackson',
    designation: 'World Conference on Teacher Education (WCTE)',
    email: 'jackson@yahoo.com'
  },
  {
    age: 90,
    date: '05/04/2024',
    salary: '₹700',
    name: 'Rodney Sharp',
    status: 'current',
    designation: 'Power BI Online Class',
    email: 'srodney@gmail.com'
  }
]

const statusObj = {
  applied: { color: 'info' },
  postponed: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  completed: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Event Names</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Fees</TableCell>
              <TableCell>Seats Available</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  
                  
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
