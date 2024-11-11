import { Button } from "@/components/ui/button";
import type { CandidateData } from "@/lib/types";

type Props = {
  candidate: CandidateData;
  isVisible: Boolean;
  onClose: () => void;
};

const DetailView = ({ candidate, isVisible, onClose }: Props) => {
  return (
    isVisible && (
      <div className="bg-white flex flex-col fixed w-96 z-10">
        <div>
          <div>{candidate.registationNumber}</div>
          <div>{candidate.name}</div>
        </div>
        <Button onClick={onClose}>Close</Button>
      </div>
    )
  );
};

export default DetailView;
