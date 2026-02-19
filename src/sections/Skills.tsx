import { motion } from "framer-motion"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { FiLock } from "react-icons/fi"
import { MdOutlineSync } from "react-icons/md"

/* =====================================================
   Data
===================================================== */

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Arquitectura & Otros",
    items: [
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: FiLock },
      { name: "Realtime SSE", icon: MdOutlineSync },
      { name: "GitHub", icon: SiGithub },
    ],
  },
]

/* =====================================================
   Component
===================================================== */

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Stack & Tecnologías
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 bg-primary/40 rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo actualmente para
            construir aplicaciones web modernas, escalables y orientadas
            a negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="
                group
                rounded-2xl
                bg-[hsl(var(--card))]
                border border-[hsl(var(--border))]
                p-8
                backdrop-blur-md
                transition
                hover:border-primary/40
                hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_20px_60px_rgba(59,130,246,0.15)]
              "
            >
              <h3 className="text-base font-semibold mb-6 tracking-wide">
                {group.title}
              </h3>

              <ul className="grid grid-cols-2 gap-4">
                {group.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <li
                      key={item.name}
                      className="
                        flex items-center gap-3
                        px-3
                        h-10
                        rounded-lg
                        bg-[hsl(var(--card))]
                        border border-[hsl(var(--border))]
                        text-sm text-muted-foreground
                        transition
                        hover:bg-primary/5
                        hover:text-foreground
                      "
                    >
                      <Icon className="w-4 h-4 shrink-0 text-primary" />

                      <span className="truncate">
                        {item.name}
                      </span>
                    </li>
                  )
                })}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}