import Image from "next/image";

import Logo from "../../public/logo (2).svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Image src={Logo} alt="food hub" height={300} width={100} />

      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <HiOutlineMenuAlt3 size={20} />
      </Button>
    </header>
  );
};

export default Header;
