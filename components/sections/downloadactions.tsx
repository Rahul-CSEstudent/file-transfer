import { Snippet } from "@nextui-org/snippet";
import { Download } from "lucide-react";
import { Button } from "@nextui-org/button";
import { FileType } from "./fileinputbox";
import fileDownload from "js-file-download";

interface DownloadActionsProps {
  files: FileType[];
}
export function DownloadActions(props: DownloadActionsProps) {
  const handleDownloadAll = () => {
    props.files.forEach((file) => {
      fileDownload(file.data, file.name, file.type);
    });
  };

  return (
    <div className="mt-8">
      <Snippet hideSymbol hideCopyButton variant="flat" fullWidth={true}>
        <span className="flex items-center gap-4 px-2 py-2 font-sans">
          Download all the files{" "}
          <Button
            onClick={handleDownloadAll}
            color="primary"
            radius="full"
            size="sm"
            variant="solid"
          >
            Download All <Download size={20} />
          </Button>
        </span>
      </Snippet>
    </div>
  );
}
