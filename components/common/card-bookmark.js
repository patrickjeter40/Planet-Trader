import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

export default function CardBookmark({ exoplanet }) {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const response = await axios.post(
            'https://planet-trader.vercel.app/api/checkIfBookmarked',
            {
              userEmail: session.user.email,
              exoplanetName: exoplanet.pl_name,
            }
          );

          const isBookmarked = response.data;
          setIsSaveClicked(isBookmarked);
          console.log('Bookmark status:', isBookmarked);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [exoplanet._id, session]);

  const handleSaveClick = async () => {
    if (session) {
      try {
        let endpoint;

        if (isSaveClicked) {
          endpoint = 'removeBookmark';
          setIsSaveClicked(false);
        } else {
          endpoint = 'applyBookmark';
          setIsSaveClicked(true);
        }

        await axios.post(
          `https://planet-trader.vercel.app/api/${endpoint}`,
          {
            userEmail: session.user.email,
            exoplanetName: exoplanet.pl_name,
          }
        );

        console.log(`Bookmark ${endpoint}d successfully!`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CardActions>
      {session && (
        <Button size="small" onClick={handleSaveClick}>
          {isSaveClicked ? 'Saved' : 'Save'}
        </Button>
      )}
      {!session && (
        <Button size="small" onClick={() => signIn()}>
          Login to Save
        </Button>
      )}
      <Button
        size="small"
        href={`https://planet-trader.vercel.app/pt/details?id=${exoplanet._id}`}
        onClick={() => setSelectedExoplanetId(exoplanet._id)}
      >
        Learn More
      </Button>
    </CardActions>
  );
}
