import { Link } from "@remix-run/react"
export default function Navigation() {
  return (
    <ul className="text-red-500">
      <li>
        <Link to="test">Go to test!</Link>
      </li>
      <li>
        <Link to="/">Go bacc!</Link>
      </li>
    </ul>
  )
}
