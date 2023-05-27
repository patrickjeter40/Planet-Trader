import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';

export default function CardBookmark({ exoplanet }) {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const response = await axios.post('/api/checkIfBookmarked', {
            exoplanetId: exoplanet._id,
            userEmail: session.user.email,
          });

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
        const response = await axios.post('/api/checkIfBookmarked', {
          exoplanetId: exoplanet._id,
          userEmail: session.user.email,
        });
  
        if (response.data === false) {
          // Send the exoplanet id and user email to the applyBookmark endpoint
          await axios.post('/api/applyBookmark', {
            exoplanetId: exoplanet._id,
            userEmail: session.user.email,
          });
          console.log('Bookmark applied successfully!');
          setIsSaveClicked(true);
        } else {
          await axios.post('/api/removeBookmark', {
            exoplanetId: exoplanet._id,
            userEmail: session.user.email,
          });
          console.log('Bookmark removed successfully!');
          setIsSaveClicked(false);
        }
  
        console.log(response.data); // optional: handle response
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  return (
    <CardActions>
      {session && (
        <Button size="small" onClick={handleSaveClick}>
          {isSaveClicked ? "Saved" : "Save"}
        </Button>
      )}
      {!session && (
        <Button size="small" onClick={() => signIn()}>
          Login to Save
        </Button>
      )}
      <Button
        size="small"
        href={`/pt/details?id=${exoplanet._id}`}
        onClick={() => setSelectedExoplanetId(exoplanet._id)}
      >
        Learn More
      </Button>
    </CardActions>
  );
}
