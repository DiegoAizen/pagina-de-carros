// app/page.tsx
import { Car, Shield, Clock, TrendingUp, Phone, MapPin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">AutoElite</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Inicio</a>
              <a href="#vehiculos" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Vehículos</a>
              <a href="#servicios" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Servicios</a>
              <a href="#financiamiento" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Financiamiento</a>
              <a href="#contacto" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Contacto</a>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Cotizar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-0" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Encuentra Tu
                <span className="text-blue-600 block">Vehículo Ideal</span>
              </h1>
              <p className="text-lg text-slate-600 mt-6 mb-8 max-w-lg">
                Más de 500 vehículos certificados listos para entregar. 
                Garantía extendida y financiamiento flexible disponible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  Explorar Inventario
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Solicitar Prueba de Manejo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="aspect-video bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <Car className="h-32 w-32 text-blue-600" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-slate-600">Vehículos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-slate-600">Entrega</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Por Qué Elegir AutoElite?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos la mejor experiencia en compra de vehículos con garantía de calidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Garantía Extendida</h3>
              <p className="text-slate-600">
                Todos nuestros vehículos incluyen garantía de 12 meses o 20,000 km
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Entrega Rápida</h3>
              <p className="text-slate-600">
                Proceso de compra simplificado con entrega en 24 horas
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Valor Garantizado</h3>
              <p className="text-slate-600">
                Mejor precio garantizado o te devolvemos la diferencia
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Inspección 360°</h3>
              <p className="text-slate-600">
                Revisión completa de 150 puntos en cada vehículo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Encontrar Tu Próximo Vehículo?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Agenda una cita con nuestro equipo de expertos y recibe asesoría personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                <Phone className="inline-block h-5 w-5 mr-2" />
                Llamar Ahora
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg">
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AutoElite</span>
              </div>
              <p className="text-slate-400">
                Tu concesionario de confianza con más de 15 años de experiencia en la venta de vehículos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#vehiculos" className="text-slate-400 hover:text-white transition-colors">Vehículos</a></li>
                <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#financiamiento" className="text-slate-400 hover:text-white transition-colors">Financiamiento</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-slate-400">
                  <Mail className="h-4 w-4 mr-2" />
                  info@autoelite.com
                </li>
                <li className="flex items-center text-slate-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  Av. Principal 123, Ciudad
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Horario</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Lunes - Viernes: 9:00 AM - 7:00 PM</li>
                <li>Sábado: 10:00 AM - 5:00 PM</li>
                <li>Domingo: 11:00 AM - 4:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} AutoElite. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}