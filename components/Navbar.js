import Link from 'next/link'
export function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link href="/"><a><img src="/looogo.png" width="150" alt="Olive ui"/></a></Link></h1>
      <div>
        <ul>
          <li>
            <Link href="/docs"><button class="btn btn-outline">Docs</button></Link>
          </li>
          <li>Github</li>
        </ul>
      </div>
    </nav>
  );
}
