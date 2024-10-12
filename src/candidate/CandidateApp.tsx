import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CandidateApp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <div>CandidateApp</div>
      <Button onClick={handleClick}>Go to Admin</Button>
    </>
  );
};

export default CandidateApp;
