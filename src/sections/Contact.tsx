import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiUser } from "react-icons/fi"

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold">
            Contacto
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 bg-primary/40 rounded-full" />

          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            ¿Te interesa trabajar conmigo o tienes un proyecto en mente?
            Escríbeme y conversemos.
          </p>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name */}
            <div className="
              flex items-center gap-4
              rounded-2xl
              bg-white/4
              border border-white/10
              p-6
              backdrop-blur-md
            ">
              <FiUser className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Nombre</p>
                <p className="font-medium">Matías Vallejos Hidalgo</p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:maatiasf97@gmail.com"
              className="
                flex items-center gap-4
                rounded-2xl
                bg-white/4
                border border-white/10
                p-6
                backdrop-blur-md
                hover:border-white/20
                transition
              "
            >
              <FiMail className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">maatiasf97@gmail.com</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shadowyera"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                rounded-2xl
                bg-white/4
                border border-white/10
                p-6
                backdrop-blur-md
                hover:border-white/20
                transition
              "
            >
              <FiGithub className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium">github.com/shadowyera</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mfvallejos/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                rounded-2xl
                bg-white/4
                border border-white/10
                p-6
                backdrop-blur-md
                hover:border-white/20
                transition
              "
            >
              <FiLinkedin className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/mfvallejos</p>
              </div>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}