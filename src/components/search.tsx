import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";
const Seach = () => {
  return (
    <div className="flex gap-2">
      <Input className="border-none" />
      <Button size="icon">
        <FiSearch size={18} />
      </Button>
    </div>
  );
};

export default Seach;
