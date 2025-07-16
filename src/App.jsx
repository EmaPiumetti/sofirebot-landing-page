import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Star, ArrowRight, Dumbbell, Heart, Target, Users, Clock, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    experience: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se integraría con el sistema de gestión de leads
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu interés! Te contactaremos pronto para agendar tu sesión estratégica gratuita.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Sofi Rebot</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-pink-600 transition-colors">Sobre Mí</a>
            <a href="#program" className="text-gray-600 hover:text-pink-600 transition-colors">Programa</a>
            <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">Testimonios</a>
            <a href="#apply" className="text-gray-600 hover:text-pink-600 transition-colors">Aplicar</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200">
              ✨ Nutrición Integral para Atletas de Alto Rendimiento
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Desbloquea tu
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Máximo Potencial</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforma tu rendimiento en CrossFit y tu bienestar general con un enfoque integral de nutrición, 
              suplementación inteligente y hábitos sostenibles. Soy mi propio caso de éxito y quiero ser tu guía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })}
              >
                Agenda tu Sesión Estratégica Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-pink-600 text-pink-600 hover:bg-pink-50">
                Ver Video de Presentación
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">25K+</div>
              <div className="text-gray-600">Seguidores en Instagram</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Atletas Transformados</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">5+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción de Clientes</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Soy Sofi Rebot, tu Nutricionista Integral
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mi historia comenzó como la tuya: entrenando duro, comiendo "sano", pero sin ver los resultados que esperaba. 
                Inicié mis estudios en medicina, pero después de 2 años me di cuenta de que esa carrera estaba enfocada en la enfermedad y no en la salud, 
                que es lo que realmente me apasiona.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Por eso decidí cambiar mi rumbo y me convertí en Licenciada en Nutrición. Desarrollé un sistema integral que combina nutrición personalizada, 
                suplementación inteligente y optimización de hábitos. No solo transformé mi propio cuerpo y rendimiento, sino que ahora ayudo 
                a atletas como tú a alcanzar su máximo potencial, enfocándome siempre en la salud y el bienestar integral.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">Licenciada en Nutrición</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">Especialista en CrossFit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">Experta en Suplementación</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">Mi Propio Caso de Éxito</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Mi Transformación</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-6 h-6" />
                    <span>De frustración a ser mi mejor versión</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6" />
                    <span>Optimicé mi rendimiento en un 300%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6" />
                    <span>Mejoré mi relación con la comida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6" />
                    <span>Ahora ayudo a otros a lograr lo mismo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              El Código Sofi Rebot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un programa de transformación integral de 3-6 meses que combina nutrición personalizada, 
              suplementación inteligente y optimización de hábitos para atletas de alto rendimiento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Nutrición Personalizada</CardTitle>
                  <CardDescription>
                    Plan nutricional adaptado a tus objetivos, preferencias y estilo de vida
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Evaluación inicial profunda</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Plan evolutivo y ajustable</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Recetas y ejemplos de comidas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Dumbbell className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Suplementación Inteligente</CardTitle>
                  <CardDescription>
                    Protocolo de suplementos basado en evidencia científica y necesidades individuales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Análisis de necesidades específicas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Recomendaciones de productos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Timing y dosificación óptima</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Acompañamiento Continuo</CardTitle>
                  <CardDescription>
                    Soporte personalizado y seguimiento constante para garantizar tu éxito
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Sesiones individuales semanales</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Acceso directo vía WhatsApp</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Comunidad privada exclusiva</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Historias de Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a algunos de los atletas que han transformado su rendimiento y bienestar con El Código Sofi Rebot
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "En 4 meses con Sofi Rebot mejoré mis marcas en un 40% y finalmente entendí cómo nutrir mi cuerpo correctamente. 
                    Su enfoque integral cambió mi vida."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      M
                    </div>
                    <div>
                      <div className="font-semibold">María González</div>
                      <div className="text-sm text-gray-500">Atleta de CrossFit</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Después de años de dietas yo-yo, Sofi Rebot me enseñó a tener una relación saludable con la comida. 
                    Perdí 15kg y gané músculo sin restricciones extremas."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      C
                    </div>
                    <div>
                      <div className="font-semibold">Carlos Rodríguez</div>
                      <div className="text-sm text-gray-500">Empresario y Atleta</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "La suplementación inteligente que me recomendó Sofi Rebot fue un game-changer. Mi recuperación mejoró 
                    drasticamente y mi energía está en otro nivel."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      A
                    </div>
                    <div>
                      <div className="font-semibold">Ana Martínez</div>
                      <div className="text-sm text-gray-500">Competidora de CrossFit</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ¿Listo para tu Transformación?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Agenda tu sesión estratégica gratuita de 15 minutos. Analizaremos tus objetivos, 
                identificaremos los obstáculos que te frenan y diseñaremos un plan de acción personalizado.
              </p>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-lg px-4 py-2">
                🔥 Solo 5 espacios disponibles este mes
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-emerald-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Formulario de Aplicación</CardTitle>
                  <CardDescription className="text-lg">
                    Completa este formulario para calificar para una sesión estratégica gratuita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          required
                          className="border-emerald-200 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                          className="border-emerald-200 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+54 9 11 1234-5678"
                        required
                        className="border-emerald-200 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Cuáles son tus principales objetivos? *
                      </label>
                      <Textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        placeholder="Ej: Mejorar mi rendimiento en CrossFit, perder grasa, ganar músculo, optimizar mi energía..."
                        required
                        className="border-emerald-200 focus:border-emerald-500"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Cuál es tu experiencia actual con nutrición y entrenamiento? *
                      </label>
                      <Textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Cuéntame sobre tu experiencia actual, qué has probado antes, cuáles son tus principales desafíos..."
                        required
                        className="border-emerald-200 focus:border-emerald-500"
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3"
                      onClick={handleSubmit}
                    >
                      Enviar Aplicación y Agendar Sesión Gratuita
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Sofi Rebot</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas a través de la nutrición integral y el entrenamiento inteligente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
              <div className="space-y-2">
                <a href="https://www.instagram.com/sofirebot" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-pink-400 transition-colors">
                  Instagram: @sofirebot
                </a>
                <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">
                  WhatsApp: +54 9 11 1234-5678
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">
                ¿Tienes preguntas? Envíame un mensaje directo en Instagram o WhatsApp.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sofi Rebot. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

