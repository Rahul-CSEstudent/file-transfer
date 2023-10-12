"use client";

import { SendToBack} from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { MouseEventHandler, useState } from "react";

interface ActionsProps {
  joinSession: (id: string) => void;
  disconnect: () => void;
  status: string;
}
export function Actions(props: ActionsProps) {
  const [userId, setUserId] = useState<string>(""); // used id of the peer to connect to
  const state = props.status;

  const handleJoinSession = () => {
    if (userId) {
      props.joinSession(userId);
    }
  };

  const disconnectSession = () => {
    props.disconnect();
  };

  // write function to disconnect the peer
  


  return (
    <div className="flex gap-3">
      <Input
        onChange={(e) => setUserId(e.target.value)}
        placeholder="000000"
        disabled={state === "Connecting..." ? true : false}
        className=" bg-white"
      />

      <div className="flex gap-3">
        <Button
          onClick={handleJoinSession}
          color="primary"
          radius="full"
          variant="shadow"
        >
          {state}
          <SendToBack size={18} />
        </Button>
        <Button onClick={disconnectSession} color="primary" className="p-5" radius='full' variant="shadow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg></Button>
      </div>
    </div>
  );
}
