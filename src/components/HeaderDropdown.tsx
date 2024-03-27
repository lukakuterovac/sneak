import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";

interface HeaderDropdownProps {
  className?: string;
}

const HeaderDropdown = ({ className }: HeaderDropdownProps) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <SearchBar className="p-2" />
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <ModeToggle
              variant="dropdownButton"
              className="flex h-8 w-full select-none justify-start rounded-sm text-sm"
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div>Sign in</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropdown;
