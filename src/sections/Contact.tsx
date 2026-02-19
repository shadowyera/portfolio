import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
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

          <div className="mt-3 h-px w-24 bg-linear-to-r from-primary/60 to-transparent" />

          <p className="mt-6 text-muted-foreground max-w-xl">
            Si te interesa conversar sobre una oportunidad laboral,
            colaboración o simplemente intercambiar ideas sobre desarrollo,
            puedes contactarme directamente.
          </p>

          {/* Card */}
          <div className="
            mt-10
            rounded-2xl
            border border-white/10
            bg-linear-to-b from-white/5 to-white/2
            p-8
            space-y-6
          ">

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">
                Nombre
              </span>
              <span className="font-medium">
                Matías Vallejos Hidalgo
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">
                Email
              </span>
              <a
                href="mailto:maatiasf97@gmail.com"
                className="text-primary hover:underline"
              >
                maatiasf97@gmail.com
              </a>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">
                GitHub
              </span>
              <a
                href="https://github.com/shadowyera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/shadowyera
              </a>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">
                LinkedIn
              </span>
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

          <p className="mt-8 text-sm text-muted-foreground">
            Actualmente abierto a nuevas oportunidades en desarrollo
            frontend, backend o full stack.
          </p>

        </motion.div>

      </div>
    </section>
  )
}