import Link from "next/link";
import HeaderDropdown from "./HeaderDropdown";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => (
  <header className={className}>
    <Link
      className="w-1/3 text-xl font-bold text-violet-500 md:text-2xl"
      href="/"
    >
      Sneak.
    </Link>
    <div className="w-2/3 grow">
      <div className="hidden items-center justify-between sm:flex">
        <div className="w-1/2">
          <SearchBar />
        </div>
        <div className="flex w-1/2 items-center justify-end gap-6">
          <ModeToggle
            variant="none"
            className="flex w-full cursor-pointer select-none justify-start rounded-sm text-sm sm:w-auto sm:text-base"
          />
          <div>Sign in</div>
        </div>
      </div>
      <HeaderDropdown className="flex justify-end sm:hidden" />
    </div>
  </header>
);

export default Header;
