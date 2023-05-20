import { useSession } from "next-auth/react";
import Avatar from '@mui/material/Avatar';

export default function AvatarPic() {
  const { data: session, status, update } = useSession();

  if (status === "authenticated") {
    return (
      <>
        
        <Avatar 
          src={session.user.image}
          alt='User Avatar'
        />
      </>
    );
  }
  return null;
}
