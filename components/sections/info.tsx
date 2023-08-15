"use client";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { QrCode } from "lucide-react";

interface InfoProps {
  content?: string;
}
export function Info(props: InfoProps) {
  return (
    <div className="mt-8">
      <Snippet hideSymbol hideCopyButton variant="flat">
        <span className="flex items-center gap-4 px-2">
          {props.content ?? "Create or Join a session"}{" "}
          <Code color="primary">
            <QrCode size={20} />
          </Code>
        </span>
      </Snippet>
    </div>
  );
}
