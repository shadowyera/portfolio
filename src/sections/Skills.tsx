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
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold">
            Stack & Tecnologías
          </h2>

          <div className="mt-3 h-px w-24 bg-primary/40" />

          <p className="mt-6 text-muted-foreground max-w-2xl">
            Tecnologías y herramientas que utilizo actualmente para
            construir aplicaciones web modernas, escalables y orientadas
            a negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {skills.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
              "
            >
              <h3 className="text-base font-semibold mb-6">
                {group.title}
              </h3>

              <ul className="grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <li
                      key={item.name}
                      className="
                        flex items-center gap-2
                        px-3
                        h-9
                        rounded-lg
                        bg-white/5
                        text-sm text-muted-foreground
                        overflow-hidden
                      "
                    >
                      <Icon className="w-4 h-4 shrink-0" />

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