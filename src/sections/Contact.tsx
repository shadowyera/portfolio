import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold">
            Contacto
          </h2>

          <p className="mt-4 text-muted-foreground">
            ¿Te interesa trabajar conmigo o tienes un proyecto en mente?
            Escríbeme y conversemos.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Nombre:</span>
              <span className="font-medium">Matías Vallejos Hidalgo</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Email:</span>
              <a
                href="mailto:maatiasf97@gmail.com"
                className="text-primary hover:underline"
              >
                maatiasf97@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">GitHub:</span>
              <a
                href="https://github.com/shadowyera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/shadowyera
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/mfvallejos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/mfvallejos
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}