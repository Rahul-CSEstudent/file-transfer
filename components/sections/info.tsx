"use client";

import { Snippet } from "@nextui-org/snippet";

interface InfoProps {
  content?: string;
}
export function Info(props: InfoProps) {
  return (
    <div className="mt-8">
      <Snippet hideSymbol hideCopyButton variant="flat">
        <span className="flex items-center gap-4 px-2">
          {/* {props.content ?? "Create or Join a session"}{" "} */}
          {props.content ? (
            <div className="flex gap-2 items-center">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg bg-default-100"
                >
                  {props.content?.charAt(index)}
                </div>
              ))}
              <div> - </div>
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index + 3}
                  className="px-3 py-2 rounded-lg bg-default-100"
                >
                  {props.content?.charAt(3 + index)}
                </div>
              ))}
            </div>
          ) : (
            "Creating a session for you ..."
          )}
          {/* <Code color="primary">
            <QrCode size={20} />
          </Code> */}
        </span>
      </Snippet>
    </div>
  );
}
