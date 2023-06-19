import Header from '../../components/layout/header';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useSession } from "next-auth/react"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LabelValSpaced from '../../components/common/label-value-spaced';
import Footer from '../../components/layout/footer';

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
      <div className="main">
        <Header title="Account" />
        <Box sx={{ flexGrow: 1 }} className="grid-mt">
          <Box sx={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Stack spacing={2}>
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
            </Stack>
          </Box>
        </Box>
        <Footer />
      </div>
    );
  } else {
    return <div>Loading...</div>; 
  }
}


export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    const res = await fetch('https://planet-trader.vercel.app/api/getplanets-home');
    const exoplanets = await res.json();

    // Return the data as props
    return {
      props: { exoplanets },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { exoplanets: [] },
    };
  }
}

