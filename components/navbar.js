import Link from "next/link"
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image src="/mwd.svg" alt="mwd logo" width="60" height="60" className="d-inline-block align-text-top" />
            <h1 className="fl-r blandname">Matsushita Web Design</h1>
            <h1 className="blandname-mobile mt-3">M.W.D</h1>
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="link-aria"><a>Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/service"><a>Service</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/posts"><a>Blog</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/about"><a>About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a>Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}