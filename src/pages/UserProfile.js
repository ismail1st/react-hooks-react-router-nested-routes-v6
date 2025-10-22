// UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();

  const user = users.find((u) => u.id === parseInt(params.id));

  if (!user) return <h1>Loading...</h1>;

  return (
    <aside>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </aside>
  );
}

export default UserProfile;
