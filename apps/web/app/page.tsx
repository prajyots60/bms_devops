
import {client} from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div >
      <h1>Welcome, {user?.username}</h1>
      
      <h2>Your password is</h2>
      {user?.password}
    </div>
  );
}
