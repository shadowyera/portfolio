export default function Footer() {
  return (
    <footer className="
      border-t border-white/10
      mt-32
    ">
      <div className="
        max-w-6xl mx-auto
        px-6 py-12
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
      ">

        {/* Brand */}
        <a
          href="#hero"
          className="
            font-semibold text-primary
            tracking-tight
            hover:opacity-80
            transition
          "
        >
          Shadow.dev
        </a>

        {/* Links */}
        <nav className="
          flex flex-wrap justify-center
          gap-6
          text-sm text-muted-foreground
        ">

          <a href="#hero" className="hover:text-foreground transition">
            Inicio
          </a>

          <a href="#projects" className="hover:text-foreground transition">
            Proyectos
          </a>

          <a href="#skills" className="hover:text-foreground transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-foreground transition">
            Contacto
          </a>

        </nav>

        {/* Copyright */}
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Matías Vallejos
        </span>

      </div>
    </footer>
  )
}