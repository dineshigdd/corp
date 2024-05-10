import Link from 'next/link'



export default function Header() {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/performance">performance</Link>
        <Link href="/reliability">reliablity</Link>
        <Link href="/scale">scale</Link>
    </div>
  )
}
