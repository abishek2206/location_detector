// StaffLocatorPage.js
import React, { useState } from 'react';
import { TextField, Grid, Container, Card, CardContent, Typography, Box } from '@mui/material';
import Navbar from './Navbar';

const staffData = [
  { name: 'Dr. John Doe', department: 'Computer Science', location: 'Room A-101' },
  { name: 'Prof. Jane Smith', department: 'Mathematics', location: 'Room B-202' },
  { name: 'Mr. Alex Johnson', department: 'Physics', location: 'Lab C-303' },
  { name: 'Ms. Emily Clark', department: 'Biology', location: 'Room D-102' },
  { name: 'Dr. Michael Brown', department: 'Chemistry', location: 'Lab E-203' },
  { name: 'Mr. David Lee', department: 'Engineering', location: 'Workshop F-104' },
  { name: 'Prof. Susan Wilson', department: 'Psychology', location: 'Room G-205' },
  { name: 'Ms. Olivia Martin', department: 'English', location: 'Room H-106' },
  { name: 'Dr. Thomas Harris', department: 'History', location: 'Room I-307' },
  { name: 'Prof. Sophia Green', department: 'Art and Design', location: 'Studio J-108' },
  { name: 'Dr. Ayesha Khan', department: 'Computer Science', location: 'Room A-101' },
  { name: 'Prof. Rakesh Sharma', department: 'Mathematics', location: 'Room B-202' },
  { name: 'Mr. Arjun Iyer', department: 'Physics', location: 'Lab C-303' },
  { name: 'Ms. Priya Mehta', department: 'Biology', location: 'Room D-102' },
  { name: 'Dr. Neha Gupta', department: 'Chemistry', location: 'Lab E-203' },
  { name: 'Mr. Vivek Patel', department: 'Engineering', location: 'Workshop F-104' },
  { name: 'Prof. Sushmita Rao', department: 'Psychology', location: 'Room G-205' },
  { name: 'Ms. Anjali Singh', department: 'English', location: 'Room H-106' },
  { name: 'Dr. Rajesh Nair', department: 'History', location: 'Room I-307' },
  { name: 'Prof. Kavita Verma', department: 'Art and Design', location: 'Studio J-108' },
  { name: 'Mr. Manish Desai', department: 'Economics', location: 'Room K-109' },
  { name: 'Ms. Shruti Sharma', department: 'Political Science', location: 'Room L-110' },
  { name: 'Dr. Anil Kulkarni', department: 'Environmental Science', location: 'Lab M-111' },
];

function StaffLocatorPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
    
    <Container sx={{ mt: 4, color:"black"}}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search staff by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={3}>
        {filteredStaff.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: 2, borderRadius: 2, backgroundColor:"#bbf7d0" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {staff.name}
                </Typography>
                <Typography color="textSecondary">{staff.department}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Location: {staff.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default StaffLocatorPage;
