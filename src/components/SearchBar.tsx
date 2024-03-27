import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => (
  <div className={cn(className, "flex items-center space-x-2")}>
    <Input placeholder="Search" type="search" />
    <Button variant="outline" type="submit">
      <Search />
    </Button>
  </div>
);

export default SearchBar;
