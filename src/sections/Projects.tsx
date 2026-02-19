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
      "Sistema Punto de Venta web desarrollado con arquitectura full stack, enfocado en mantenibilidad y rendimiento. Implementa ventas con atajos de teclado, gestión de caja y sincronización en tiempo real mediante SSE. Actualmente en uso en entorno real.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Arquitectura modular frontend/backend",
      "Sincronización en tiempo real con SSE",
      "Autenticación con JWT",
    ],
    demoUrl: "https://bersa-app-frontend.vercel.app",
    repoUrl: "https://github.com/shadowyera/bersa-app-frontend",
    status: "production",
  },
]

/* =====================================================
   Component
===================================================== */

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      {/* Soft background depth */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold">
            Proyectos
          </h2>

          <div className="mt-3 h-px w-24 bg-primary/40" />

          <p className="mt-6 text-muted-foreground max-w-2xl">
            Proyectos donde aplico arquitectura, buenas prácticas y
            soluciones orientadas a problemas reales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                transition
                hover:bg-white/10
                hover:border-white/20
              "
            >

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                {project.status === "production" && (
                  <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                    En producción
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-1 text-sm text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-4">

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2 rounded-lg
                      bg-primary text-primary-foreground
                      text-sm font-medium
                      hover:opacity-90
                      transition
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
                      px-4 py-2 rounded-lg
                      border border-white/10
                      text-sm
                      hover:bg-white/10
                      transition
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