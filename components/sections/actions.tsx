import { Plus } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export function Actions() {
  return (
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
  );
}
