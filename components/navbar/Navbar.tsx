import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    { path: '/about',text: 'About'},
    { path: '/pricing',text: 'Pricing'},
    { path: '/contact',text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'}>
            <span>Home</span>
        </Link>

        <div className='flex-1'></div>

        {
            navItems.map(x => (
                <ActiveLink key={x.path} {...x} />
            ))
        }

    </nav>
  )
}
