import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';

export default function CardBookmark({ exoplanet }) {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  const { data: session } = useSession();

  const handleSaveClick = async () => {
    if (session) {
      setIsSaveClicked(true);
      try {
        const response = await axios.post('/api/save-exoplanet', {
          exoplanetId: exoplanet._id,
        });
        console.log(response.data); // optional: handle response
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CardActions>
      {session && (
        <Button size="small" onClick={handleSaveClick} disabled={isSaveClicked}>
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
