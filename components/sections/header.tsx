import { title, subtitle } from "@/components/primitives";

export function Header() {
  return (
    <div className="justify-center inline-block max-w-lg text-center">
      <h1 className={title()}>Temporary&nbsp;</h1>
      <h1 className={title()}>File Sharing&nbsp;</h1>
      <br />
      <h1 className={title()}>Share Files Across Devices</h1>
      <h2 className={subtitle({ class: "mt-4 text-gray" })}>
        Temporarily share your files between devices with ease
      </h2>
    </div>
  );
}
