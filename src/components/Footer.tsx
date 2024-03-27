import { Copyright } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className}>
      <p className="flex items-center text-sm">
        <Copyright className="inline h-4 antialiased" />
        2024 Sneak. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
