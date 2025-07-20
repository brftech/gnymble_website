
export default function Layout({ children }) {
  return (
    <div className="font-sans text-secondary bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-primary">Percy</span>
            <span className="text-secondary">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-secondary hover:text-primary transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <span className="text-secondary hover:text-primary cursor-pointer transition-colors relative">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
              <div className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 border border-primary/20">
                <a href="https://percymd.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-primary/10 text-secondary hover:text-primary transition-colors">PercyMD</a>
                <a href="https://cigar.gnymble.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-primary/10 text-secondary hover:text-primary transition-colors">Gnymble</a>
                <a href="https://percytext.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-primary/10 text-secondary hover:text-primary transition-colors">PercyText</a>
              </div>
            </div>
            <a href="/pricing" className="text-secondary hover:text-primary transition-colors relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-secondary hover:text-primary transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-secondary hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <a href="/demo" className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">Get a Demo</a>
        </div>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="bg-black/40 backdrop-blur-sm text-secondary text-center py-6 border-t border-primary/20">
        <p>&copy; 2025 Percentric Technologies, LLC (PercyTech). All rights reserved.</p>
      </footer>
    </div>
  );
}
