'use client';

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavItems: React.FC = () => {
	const pathname = usePathname();


  return (
	<nav className="md:flex-between flex w-full flex-col items-start gap-5 md-flex-row">
		{headerLinks.map((link) => {
			const isActive = pathname === link.route;
			return (
				<li
				key={link.route}
				className={`${
					isActive ? 'text-primary-500' : 'text-gray-500'
				} flex-center p-medium-16 whitespace-nowrap`}
				>
					<Link href={link.route}>{link.label}</Link>
				</li>
			)
		}
		)}
	</nav>
  );
};

export default NavItems;