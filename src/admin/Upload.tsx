import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Upload = () => {
  const [response, setResponse] = useState("");
  const [file, setFile] = useState<HTMLInputElement["files"][]>([]);

  const handleSubmit = () => {
    if (file.length > 0) {
      setResponse("All row processed successfully");
    }
  };

  return (
    <div className="flex flex-col gap-y-2 items-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="file">Sheet in xlsx format</Label>
        <Input
          id="Excel Sheet"
          type="file"
          accept=".xls, .xlsx"
          onChange={(e) => {
            const file = e.target.files;
            setFile((f) => [...f, file]);
          }}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
      <div>{response !== "" && response}</div>
    </div>
  );
};

export default Upload;
