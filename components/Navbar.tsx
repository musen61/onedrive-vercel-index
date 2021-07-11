import Link from 'next/link'
import siteConfig from '../config/site.json'

const Navbar = () => {
  return (
    <div className="text-left bg-white p-3 sticky top-0 bg-opacity-80 backdrop-blur-md shadow-sm z-[100]">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl">{siteConfig.title}</h1>
        <Link href="/">
        <a>📂</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
