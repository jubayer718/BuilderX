import { auth } from "@/auth";
import { redirect } from "next/navigation";
const BuilderPage = () => {
  const session = auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      
      <h1>Builder Page</h1>
    </div>
  );
};

export default BuilderPage;