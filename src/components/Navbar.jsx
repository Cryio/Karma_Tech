import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Maa Karma Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Maa Karma</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 