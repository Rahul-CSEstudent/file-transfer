import { Actions } from "@/components/sections/actions";
import { DownloadActions } from "@/components/sections/downloadactions";
import { FileGrid } from "@/components/sections/filegrid";
import { FileInputBox } from "@/components/sections/fileinputbox";
import { Header } from "@/components/sections/header";
import { Info } from "@/components/sections/info";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* heading section */}
      <Header />

      {/* buttons */}
      <Actions />

      {/* information tab */}
      <Info />

      {/* file drag and drop box */}
      <FileInputBox />

      <DownloadActions />

      <div className="flex justify-center content-center mt-8">
        <FileGrid />
      </div>
    </section>
  );
}
