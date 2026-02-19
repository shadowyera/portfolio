import type { FC } from "react"
import { motion } from "framer-motion"

/* =====================================================
   Animations
===================================================== */

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

/* =====================================================
   Component
===================================================== */

const Hero: FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="
        relative overflow-hidden
        min-h-[90vh]
        flex items-center
        bg-background
      "
    >
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-125 h-125 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-100 h-100 rounded-full bg-primary/5 blur-[120px]" />
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        className="relative z-10 max-w-3xl"
      >
        {/* Greeting */}
        <span className="text-primary font-semibold tracking-wide">
          👋 Hola, soy Shadow
        </span>

        {/* Subtle line */}
        <div className="mt-3 h-px w-24 bg-primary/40" />

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="block text-foreground">
            Ingeniero en Informática
          </span>

          <span className="block text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]">
            Full Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Desarrollo aplicaciones web modernas, escalables y con foco en
          arquitectura, rendimiento y experiencia de usuario.
        </p>

        {/* Actions */}
        <nav className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            aria-label="Ver proyectos"
            className="
              px-6 py-3 rounded-xl
              bg-primary text-primary-foreground
              font-medium
              hover:opacity-90
              transition
            "
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            aria-label="Ir a contacto"
            className="
              px-6 py-3 rounded-xl
              border border-white/10
              hover:bg-white/10
              transition
            "
          >
            Contacto
          </a>
        </nav>
      </motion.div>
    </section>
  )
}

export default Hero