import { useState } from "react";
import Authentication from "./Authentication";
import { Button } from "@/components/ui/button";

const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (!isAuthenticated) {
    return <Authentication handleSubmit={setIsAuthenticated} />;
  }

  return (
    <div>
      Welcome to admin!
      <Button onClick={() => setIsAuthenticated(false)}>Remove auth</Button>
    </div>
  );
};

export default AdminApp;
