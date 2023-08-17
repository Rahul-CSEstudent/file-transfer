"use client";

import { Actions } from "@/components/sections/actions";
import { DownloadActions } from "@/components/sections/downloadactions";
import { FileGrid } from "@/components/sections/filegrid";
import {
  FileInputBox,
  type FileType,
} from "@/components/sections/fileinputbox";
import { Header } from "@/components/sections/header";
import { Info } from "@/components/sections/info";

import { DataConnection, Peer } from "peerjs";
import { useEffect, useState } from "react";

export default function Home() {
  const [peer, setPeer] = useState<Peer>();
  const [files, setFiles] = useState<FileType[]>([]);
  const [queue, setQueue] = useState<FileType[]>([]);
  const [connection, setConnection] = useState<DataConnection>();
  const [userId, setUserId] = useState<string>();

  // initializes current user
  useEffect(() => {
    const peer = new Peer(
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")
    );
    peer.on("open", (id) => {
      setUserId(id);
    });

    peer.on("connection", (conn) => {
      console.log("got a connection from ", conn.peer);
      setConnection(conn);
    });

    setPeer(peer);
    console.log(peer);
  }, []);

  // runs when the connection changes to update the event listeners
  useEffect(() => {
    if (connection) {
      connection.on("data", (data) => {
        console.log("we got a data");
        console.log(data);
        setFiles((prevFiles) => [...prevFiles, data as FileType]);
      });
    }
  }, [connection]);

  // send the files to the other user whenever new files is uploaded
  useEffect(() => {
    console.log("file updated: ", queue);
    if (connection && queue.length > 0) {
      connection.send(queue[0]);
      setQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [queue]);

  function connectToPeer(id: string) {
    const conn = peer?.connect(id);
    conn?.on("open", () => {
      console.log("connected to", id);
      setConnection(conn);
    });
  }

  function sendFiles(file: FileType) {
    if (!files.includes(file)) {
      setFiles((prevFiles) => [...prevFiles, file]);
      setQueue((prevQueue) => [...prevQueue, file]);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* heading section */}
      <Header />

      {/* buttons */}
      <Actions joinSession={connectToPeer} />

      {/* information tab */}
      <Info content={userId} />
      <FileInputBox sendFiles={sendFiles} />

      {files.length > 0 && <DownloadActions />}

      <div className="flex content-center justify-center mt-8">
        <FileGrid files={files} />
      </div>
    </section>
  );
}
