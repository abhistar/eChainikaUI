import { Key, ReactNode, useState } from "react";
import type { CandidateData } from "@/lib/types";
import DetailView from "./DetailView";
import { Button } from "@/components/ui/button";

const View = () => {
  const candidate: CandidateData = {
    registationNumber: "2024/M/0",
    name: "Abhinav Jain",
    details: "view details",
  };
  const candidate1: CandidateData = {
    registationNumber: "2024/M/1",
    name: "Abhinav Jain",
    details: "view details",
  };
  const candidateDataList: CandidateData[] = [candidate, candidate1];
  const candidateRows = () => {
    const rows: ReactNode[] = [
      <div key={"HeaderRow" as Key} className="flex flex-row bg-gray-200">
        <div className="w-48">Registation Number</div>
        <div className="w-48">Name</div>
        <div className="w-48">Details</div>
      </div>,
    ];
    let bgGray = false;
    candidateDataList.forEach((c) => {
      const [showDetail, setShowDetail] = useState(false);
      const toggleDetail = () => setShowDetail(!showDetail);

      const row = (
        <div
          key={c.registationNumber as Key}
          className={"flex flex-row".concat(
            +(bgGray === true) ? " bg-gray-100" : ""
          )}
        >
          <div className="w-48">{c.registationNumber}</div>
          <div className="w-48">{c.name}</div>
          <div className="w-48">
            <Button onClick={toggleDetail}>{c.details}</Button>
            <DetailView
              isVisible={showDetail}
              onClose={toggleDetail}
              candidate={c}
            />
          </div>
        </div>
      );
      rows.push(row);
      bgGray = !bgGray;
    });
    return rows;
  };
  return <>{candidateRows()}</>;
};

export default View;
