import { motion } from "framer-motion"

/* =====================================================
   Types
===================================================== */

interface Project {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  demoUrl?: string
  repoUrl?: string
  status?: "production" | "development"
}

/* =====================================================
   Data
===================================================== */

const projects: Project[] = [
  {
    title: "Bersa POS",
    description:
      "Sistema Punto de Venta web que estoy desarrollando actualmente, enfocado en ser rápido, estable y cómodo para el uso diario. Incluye ventas con atajos de teclado, gestión de caja y sincronización en tiempo real entre clientes.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Sincronización en tiempo real con SSE",
      "Flujo de ventas optimizado con atajos (UX)",
      "Autenticación segura con JWT",
      "Arquitectura modular frontend/backend",
    ],
    demoUrl: "https://bersa-app-frontend.vercel.app",
    repoUrl: "https://github.com/shadowyera/bersa-app-frontend",
    status: "development",
  },
  {
    title: "Decants Loncoche",
    description:
      "E-commerce de perfumes en producción, con catálogo dinámico, carrito de compras y panel administrativo completo para gestionar productos, stock y pedidos.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Panel admin con gestión de stock y precios en tiempo real",
      "Arquitectura modular (DDD en frontend)",
      "Consumo de APIs con React Query",
      "Sistema completo de carrito y checkout",
    ],
    demoUrl: "https://www.decantsloncoche.cl",
    repoUrl: "https://github.com/shadowyera/decants-loncoche-frontend",
    status: "production",
  },
]

/* =====================================================
   Component
===================================================== */

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Proyectos
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-20 sm:w-24 bg-primary/40 rounded-full" />

          <p className="mt-6 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Proyectos reales donde aplico arquitectura, buenas prácticas y soluciones
            pensadas para uso en producción.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                group flex flex-col h-full
                rounded-2xl
                bg-[hsl(var(--card))]
                border border-[hsl(var(--border))]
                p-6 sm:p-8
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]
              "
            >

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">

                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>

                {project.status === "production" && (
                  <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                    En producción
                  </span>
                )}

                {project.status === "development" && (
                  <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
                    En desarrollo
                  </span>
                )}

              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="
                      text-[10px] sm:text-xs px-2.5 py-1 rounded-full
                      bg-[hsl(var(--card))]
                      border border-[hsl(var(--border))]
                    "
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-3 mt-auto flex-wrap">

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 sm:flex-none text-center
                      px-4 py-2.5 rounded-xl
                      bg-primary text-primary-foreground
                      text-sm font-medium
                      transition
                      hover:opacity-90
                      hover:scale-[1.02]
                    "
                  >
                    Ver app
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 sm:flex-none text-center
                      px-4 py-2.5 rounded-xl
                      border border-[hsl(var(--border))]
                      text-sm
                      text-foreground
                      transition
                      hover:bg-[hsl(var(--card))]
                      hover:scale-[1.02]
                    "
                  >
                    Código
                  </a>
                )}

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  )
}