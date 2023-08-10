import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Plus, QrCode } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import FileTable from "@/components/table";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* heading section */}
      <div className="justify-center inline-block max-w-lg text-center">
        <h1 className={title()}>Temporary&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>File Sharing&nbsp;</h1>
        <br />
        <h1 className={title()}>Share Files Across Devices</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Temporarily share your files between devices with ease
        </h2>
      </div>

      {/* buttons */}
      <div className="flex gap-3">
        <Button color="primary" radius="full" variant="shadow">
          New Session
          <Plus size={20} />
        </Button>
        <div className="flex gap-3">
          <Input type="text" placeholder="000-000" radius="full" />
          <Button variant="bordered" className="px-6" radius="full">
            Join Session
          </Button>
        </div>
      </div>

      {/* information tab */}
      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span className="flex items-center gap-4 px-2">
            Create or Join a session{" "}
            <Code color="primary">
              <QrCode size={20} />
            </Code>
          </span>
        </Snippet>
      </div>

      {/* file drag and drop box */}
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
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div>
        <FileTable />
      </div>
    </section>
  );
}
