"use client";

import React from "react";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import { Download } from "lucide-react";
import { type FileType } from "@/components/sections/fileinputbox";

import { Button } from "@nextui-org/button";
import fileDownload from "js-file-download";

interface FileGridProps {
  files: FileType[];
}
export function FileGrid({ files }: FileGridProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {files.map((file, index) => (
        <FileCard key={index} file={file} />
      ))}
    </div>
  );
}

interface FileCardProps {
  file: FileType;
}
export function FileCard(props: FileCardProps) {
  const handleDownload = () => {
    fileDownload(props.file.data, props.file.name, props.file.type);
  };

  return (
    <Card className="w-full sm:w-[280px]">
      <CardHeader className="justify-between">
        <div className="flex w-7/12 gap-5">
          <h4 className="font-semibold leading-none text-small text-default-600">
            {props.file.name.length > 12
              ? `${props.file.name.slice(0, 12)}....${props.file.name
                  .split(".")
                  .pop()}`
              : props.file.name}
          </h4>
        </div>
        <Button
          onClick={handleDownload}
          color="primary"
          radius="full"
          size="sm"
          variant="bordered"
        >
          Download <Download size={20} />
        </Button>
      </CardHeader>
      <CardBody>
        <Chip color="default">{props.file.type}</Chip>
        {/* <h5 className="mt-4 tracking-tight text-small text-default-400">
          uploaded from {props.file.uploadedFrom} device
        </h5> */}
      </CardBody>
    </Card>
  );
}
