import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

export default function ModalBtn({ email }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = async () => {
    try {
      const response = await axios.post('/api/deleteUser', { email });
      console.log(response.data.message);
      setOpen(false);
      signOut({ callbackUrl: '/pt/dashboard' });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
  <>
    <Button onClick={handleOpen} color="error" variant="outlined">Delete Account</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this account?
        </Typography>
        <div className='d-flex justify-between'>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button onClick={handleDelete}  color="error" variant="outlined">Delete Account</Button>
        </div>
      </Box>
    </Modal>
  </>
 );

}
