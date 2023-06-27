import Header from '../../components/layout/header';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useSession } from "next-auth/react"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LabelValSpaced from '../../components/common/label-value-spaced';
import Footer from '../../components/layout/footer';
import ModalBtn from '../../components/common/modalBtn';

export default function account({ exoplanets }) {
  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const { data: session, status, update } = useSession()
  

  if (status === "authenticated") {
    return (
      <div className='main-parent'>
        <Header title="Account" />
          <div className="main">
            
            <Box className="grid-mt">
              <Box sx={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Stack spacing={4}>
                  <Item>
                    <LabelValSpaced 
                    label='Name:'
                    value={session.user.name}
                    />
                  </Item>
                  <Item>
                  <LabelValSpaced 
                      label='Email:'
                      value={session.user.email}
                  />
                  </Item>
                  <ModalBtn email={session.user.email} />
                </Stack>
              </Box>
            </Box>
          </div>
        <Footer />
      </div>
    );
  } else {
    return <div>Loading...</div>; 
  }
}


