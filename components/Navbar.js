import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav className='navbar'>
        <h1>UbiNext</h1>
        <div className="links">
        <Link href="/"><a className='anchors'>Home</a></Link>
        <Link href="/about"><a className='anchors'>About</a></Link>
        </div>
        </nav>
     );
}
 
export default Navbar;