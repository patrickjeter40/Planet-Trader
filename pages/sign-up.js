
import * as React from 'react';
import clientPromise from "../lib/mongodb";
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp() {
    
  return (
    
    <>
        <div class="main">
            <Box 
            className="test"
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                ml: 2,
                },
            }}
            
            >
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="#">
                        About
                    </Link>
                    <Link href="/posts/sign_up" >
                        Sign Up
                    </Link>
                </nav>
            
            </Box>
            <div>
                <TextField id="standard-basic" label="First Name" variant="standard" />
                <TextField id="standard-basic" label="Last Name" variant="standard" />
            </div>
            <div>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Phone" variant="standard" />
            </div>

            <Button variant="contained">Submit</Button>

        </div>
    </>
  );
  
}


export async function getServerSideProps() {
  try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");

      const movies = await db
          .collection("movies")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();

      return {
          props: { movies: JSON.parse(JSON.stringify(movies)) },
      };
  } catch (e) {
      console.error(e);
  }
}
