'use client';

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { title, subtitle } from "@/components/primitives";
import { Download, Plus, QrCode } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState, useEffect } from "react";
import FileGrid from "@/components/filelist";
import {S3Client, PutObjectCommand, GetObjectCommand , DeleteObjectCommand} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default function Home() {

  function handleFileUpload() {

      // fileUploadRef.current?.click();
      // console.log(fileUploadRef.current?.files);
    
      const fileUploadRef = document.getElementById('fileUpload') as HTMLInputElement;
      fileUploadRef.click();
      console.log(fileUploadRef.files);
  }

  const [loading, setLoading] = useState(null);
  const [fileurl, setfileurl] = useState();

  const s3Client = new S3Client({
      credentials : {
          accessKeyId: "jv3j5knynfdpnosrulnx752zjf4a",
          secretAccessKey: "j254xq46dn3pgtp5hss2r5hq3zcbnwgurky5e6qf2xxaxxrxoel76",
      },
      region: "us-1",
      endpoint: "https://gateway.storjshare.io",
  })


  const post = async(event:any ) => {
      event.preventDefault()
      const file = event.target[0].files[0]
      
      
      const params = {
          Bucket: "filery",
          Key: file.name,
          Body: file,
      }

      const command = new PutObjectCommand(params)
      const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
      // console.log(signedUrl)
      const response = await fetch(signedUrl, {
          method: "PUT",
          body: file,
      })
      // console.log(response.url)

      // write a logic to genreate a url to download the file from storj
      const params1 = {
          Bucket: "filery",
          Key: file.name,
      }

      const command1 = new GetObjectCommand(params1)
      const signedUrl1 = await getSignedUrl(s3Client, command1, { expiresIn: 3600 })
      // console.log(signedUrl1)
      const response1 = await fetch(signedUrl1, {
          method: "GET",
      })
      console.log(response1.url)
      // setfileurl(response1.url)
      setfileurl(response1.url as any)


      // const params2 = {
      //     Bucket: "filery",
      //     Key: file.name,
      // }

      // //delete the file after 10min
      // setTimeout(async () => {
      //     const command2 = new DeleteObjectCommand(params2)
      //     const signedUrl2 = await getSignedUrl(s3Client, command2, { expiresIn: 3600 })
      //     console.log(signedUrl2)
      //     const response2 = await fetch(signedUrl2, {
      //         method: "DELETE",
      //     })
      //     console.log(response2.url)
      // }, 6000)

  }

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
      <div className="mt-8 mb-5">
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
      {/* <div className="gap-4 p-4 mt-8 bg-default-50 rounded-2xl">
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
          </p> */}
          <form onSubmit={post}>
            <input type="file"/>
              <button className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700">
                Add file
              </button>
          </form>
          
        {/* </label>
      </div> */}

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat" fullWidth={true}>
          <span className="flex items-center gap-4 px-2 py-2 font-sans">
            Download all the files{" "}
            <Button color="primary" radius="full" size="sm" variant="solid">
              Download All <Download size={20} />
            </Button>
          </span>
        </Snippet>
      </div>

      <div className="flex justify-center content-center mt-8">
        <FileGrid />
      </div>
    </section>
  );
}
