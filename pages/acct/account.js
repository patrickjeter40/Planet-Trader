import Header from '../../components/layout/header';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useSession } from "next-auth/react"



export default function dashboard({ exoplanets }) {
  const { data: session, status, update } = useSession()
  if (status === "authenticated") {
    return (
      <div className="main">
        <Header title="Account" />
        <Box sx={{ flexGrow: 1 }} className="grid-mt">
          <p>Signed in as {session.user.name}</p>
          <p>Signed in as {session.user.email}</p>
          <img src={session.user.image}></img>
        </Box>
        
      </div>
    );
  }
}


export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    const res = await fetch('http://localhost:3000/api/getplanets-home');
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

