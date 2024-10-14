import { useState } from "react";
import Authentication from "./Authentication";
import { Button } from "@/components/ui/button";
import Upload from "./Upload";

const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [screen, setScreen] = useState("upload");

  if (!isAuthenticated) {
    return <Authentication handleSubmit={setIsAuthenticated} />;
  }

  const getScreen = (screen: string) => {
    if (screen === "upload") return <Upload />;
    if (screen === "view") return <div>To the view panel</div>;
    if (screen === "delete") return <div>To the delete panel</div>;
    return <div>This is default view</div>;
  };

  const header = (
    <header>
      <nav
        aria-label="Global"
        className="w-full bg-gray-200 p-4 fixed top-0 left-0 z-50"
      >
        <div className="mx-auto flex items-center justify-around">
          <Button
            className="bg-green-400 hover:bg-green-500"
            onClick={() => setScreen("upload")}
          >
            Upload Data
          </Button>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500"
            onClick={() => setScreen("view")}
          >
            View Data
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setScreen("delete")}
          >
            Delete Data
          </Button>
        </div>
      </nav>
    </header>
  );

  return (
    <>
      <div>{header}</div>
      <div>{getScreen(screen)}</div>
    </>
  );
};

export default AdminApp;
