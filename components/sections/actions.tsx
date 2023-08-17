"use client";

import { SendToBack } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { MouseEventHandler, useState } from "react";

interface ActionsProps {
  joinSession: (id: string) => void;
}
export function Actions(props: ActionsProps) {
  const [userId, setUserId] = useState<string>(""); // used id of the peer to connect to

  const handleJoinSession = () => {
    if (userId) {
      props.joinSession(userId);
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        onChange={(e) => setUserId(e.target.value)}
        type="text"
        placeholder="000000"
        radius="full"
      />
      <div>
        <Button
          onClick={handleJoinSession}
          color="primary"
          radius="full"
          variant="shadow"
        >
          Connect
          <SendToBack size={18} />
        </Button>
      </div>
    </div>
  );
}
