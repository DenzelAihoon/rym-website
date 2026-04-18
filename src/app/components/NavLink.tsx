import { Link, useLocation } from 'react-router';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export default function NavLink({ to, children, mobile, onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  if (mobile) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md hover:bg-[#0d5a5a] transition-colors ${
          isActive ? 'bg-[#0d5a5a] font-semibold' : ''
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`hover:text-[#fbbf24] transition-colors ${
        isActive ? 'text-[#fbbf24] font-semibold' : ''
      }`}
    >
      {children}
    </Link>
  );
}
