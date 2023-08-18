"use client";

import { Dispatch, SetStateAction, useRef } from "react";

export interface FileType {
  name: string;
  type: string;
  data: Blob;
}
interface FileInputBoxProps {
  sendFiles: (file: FileType) => void;
}
export function FileInputBox(props: FileInputBoxProps) {
  const inputBoxRef = useRef<HTMLInputElement | null>(null);

  function handleInputChange() {
    const fileUploadRef = inputBoxRef.current;

    if (fileUploadRef && fileUploadRef.files) {
      for (let i = 0; i < fileUploadRef.files.length; i++) {
        const file = fileUploadRef.files[i];
        let blob = new Blob([file], { type: file.type });

        props.sendFiles({
          name: file.name,
          type: file.type,
          data: blob,
        });
      }
    }
  }

  return (
    <div className="gap-4 p-4 mt-8 bg-default-50 rounded-2xl">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center w-full max-w-lg p-6 text-center border-2 border-dashed cursor-pointer rounded-xl border-primary-400 bg-default-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <h2 className="mt-4 text-xl font-medium tracking-wide text-default-700">
          Upload Files
        </h2>
        <p className="mt-2 tracking-wide text-default-500">
          Upload or darg &amp; drop your file here.{" "}
        </p>
        <input
          ref={inputBoxRef}
          onChange={handleInputChange}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
}
