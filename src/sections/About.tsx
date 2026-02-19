import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre mí
            </h2>

            <div className="mx-auto mt-4 h-0.5 w-24 bg-primary/40 rounded-full" />

            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Me especializo en construir software sólido, claro y fácil de mantener.
            </p>
          </div>

          {/* Card */}
          <div
            className="
              mt-10
              rounded-2xl
              bg-white/4
              border border-white/10
              p-7 md:p-8
              backdrop-blur-md
            "
          >
            <div className="space-y-6 text-left">

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Soy Ingeniero en Informática con un fuerte interés en el desarrollo
                de aplicaciones web modernas y en la construcción de productos
                bien diseñados, estables y fáciles de mantener. Me importa tanto
                cómo se ve una aplicación como cómo está construida por dentro.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Actualmente trabajo en un área distinta a la programación, pero
                desarrollo software de forma constante porque realmente me gusta
                hacerlo. Programar es algo que disfruto y practico por iniciativa
                propia.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                He construido sistemas reales en uso, incluyendo un sistema POS
                web con sincronización en tiempo real, aplicando buenas prácticas,
                tipado estricto y una arquitectura clara entre frontend y backend.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Me gusta usar la tecnología para resolver problemas reales y crear
                soluciones que aporten valor. Me motiva especialmente hacerlo como
                parte de un equipo de desarrollo y seguir creciendo profesionalmente.
              </p>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}