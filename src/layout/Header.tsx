import { useTheme } from "../shared/hooks/useTheme"

/*
  Header principal.
  Sticky + blur + navegación + theme toggle.
*/

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  const logoSrc =
    theme === "dark"
      ? "/logo-light.png"
      : "/logo-dark.png"

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur
        bg-[hsl(var(--background))/0.85]
        border-b border-[hsl(var(--border))]
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <img
            src={logoSrc}
            alt="Shadow logo"
            className="
              w-12 h-12 object-contain
              transition-transform duration-300
              group-hover:scale-105
            "
          />

          <span
            className="
              font-bold text-lg tracking-tight
              text-primary
              transition-colors
              group-hover:text-primary/80
            "
          >
            Shadow.dev
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          {[
            ["#about", "Sobre mí"],
            ["#projects", "Proyectos"],
            ["#skills", "Skills"],
            ["#contact", "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="
                text-sm
                text-muted-foreground
                hover:text-foreground
                transition-colors
              "
            >
              {label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="
              ml-2
              w-9 h-9
              flex items-center justify-center
              rounded-lg
              border border-[hsl(var(--border))]
              text-foreground
              hover:bg-[hsl(var(--card))]
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