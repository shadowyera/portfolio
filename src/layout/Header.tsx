import { useTheme } from "../shared/hooks/useTheme"

/*
  Header principal.
  Sticky + blur + navegación + theme toggle.
*/

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="
      sticky top-0 z-50
      backdrop-blur
      bg-background/80
      border-b border-white/10
    ">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.png"
            alt="Shadow logo"
            className="
              w-12 h-12 object-contain
              transition-transform duration-300
              group-hover:scale-105
            "
          />

          <span
            className="
              font-bold text-lg tracking-tight text-primary
              transition-colors
              group-hover:text-primary/80
            "
          >
            Shadow.dev
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          <a
            href="#about"
            className="
              text-sm
              text-muted-foreground
              hover:text-foreground
              transition-colors
            "
          >
            Sobre mí
          </a>

          <a
            href="#projects"
            className="
              text-sm
              text-muted-foreground
              hover:text-foreground
              transition-colors
            "
          >
            Proyectos
          </a>

          <a
            href="#skills"
            className="
              text-sm
              text-muted-foreground
              hover:text-foreground
              transition-colors
            "
          >
            Skills
          </a>

          <a
            href="#contact"
            className="
              text-sm
              text-muted-foreground
              hover:text-foreground
              transition-colors
            "
          >
            Contacto
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="
              ml-2
              w-9 h-9
              flex items-center justify-center
              rounded-lg
              border border-white/10
              hover:bg-white/10
              transition
            "
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

        </nav>

      </div>
    </header>
  )
}