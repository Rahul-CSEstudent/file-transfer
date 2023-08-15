"use client";

import { Plus } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { MouseEventHandler, useState } from "react";

interface ActionsProps {
  createSession: () => void;
  joinSession: (id: string) => void;
}
export function Actions(props: ActionsProps) {
  const [userId, setUserId] = useState<string>(""); // used id of the peer to connect to

  const handleCreateSession = () => {
    props.createSession();
  };

  const handleJoinSession = () => {
    if (userId) {
      props.joinSession(userId);
    }
  };

  return (
    <div className="flex gap-3">
      <Button
        onClick={handleCreateSession}
        color="primary"
        radius="full"
        variant="shadow"
      >
        New Session
        <Plus size={20} />
      </Button>
      <div className="flex gap-3">
        <Input
          onChange={(e) => setUserId(e.target.value)}
          type="text"
          placeholder="000-000"
          radius="full"
        />
        <Button
          onClick={handleJoinSession}
          variant="bordered"
          className="px-6"
          radius="full"
        >
          Join Session
        </Button>
      </div>
    </div>
  );
}
