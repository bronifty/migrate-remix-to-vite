import { Link } from "@remix-run/react"
export default function Navigation() {
  return (
    <ul className="text-red-500">
      <li>
        <Link to="blah">Go to blah!</Link>
      </li>
      <li>
        <Link to="/">Go bacc!</Link>
      </li>
    </ul>
  )
}
