import Link from 'next/link'

function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <Link href="/" passhref>
        <a className=" text-xl font-bold">Next.js Blog</a>
      </Link>
      <div>
        <Link
          href="https://twitter.com/MarkSShenouda"
          passhref
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className="mr-4">Twitter</a>
        </Link>
        <Link
          href="https://github.com/markshenouda"
          target="_blank"
          rel="noopener noreferrer"
          passhref
        >
          <a>Github</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
