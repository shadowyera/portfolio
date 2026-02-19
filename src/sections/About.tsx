import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold">
            Sobre mí
          </h2>

          <div className="mt-3 h-px w-24 bg-primary/40" />

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Soy Ingeniero en Informática con un fuerte interés en el desarrollo
            de aplicaciones web modernas y en la construcción de productos
            bien diseñados, estables y fáciles de mantener. Me importa tanto
            cómo se ve una aplicación como cómo está construida por dentro.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Actualmente trabajo en un área distinta a la programación, pero
            desarrollo software de forma constante porque realmente me gusta
            hacerlo. Programar es algo que disfruto y practico por iniciativa
            propia.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            He construido sistemas reales en uso, incluyendo un sistema POS
            web con sincronización en tiempo real, aplicando buenas prácticas,
            tipado estricto y una arquitectura clara entre frontend y backend.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Me gusta usar la tecnología para resolver problemas reales y crear
            soluciones que aporten valor. Me motiva especialmente hacerlo como
            parte de un equipo de desarrollo y seguir creciendo profesionalmente.
          </p>

        </motion.div>

      </div>
    </section>
  )
}