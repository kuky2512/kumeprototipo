"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Clock,
  Heart,
  Target,
  Eye,
  Mail,
  Phone,
  Instagram,
  ChevronRight,
  Store,
  Search,
  Filter,
} from "lucide-react"
import Image from "next/image"

// Tipos de datos
interface Feria {
  id: string
  nombre: string
  ubicacion: string
  horario: string
  descripcion: string
  productos: string[]
  imagen: string
}

interface Emprendedor {
  id: string
  nombre: string
  emprendimiento: string
  descripcion: string
  ferias: string[]
  horario: string
  productos: string[]
  email: string
  telefono: string
  imagen: string
}

export default function KumeWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [favorites, setFavorites] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProductFilter, setSelectedProductFilter] = useState("")

  // Categorías de productos
  const productCategories = [
    "comida",
    "indumentaria",
    "ropa",
    "artesanías",
    "productos regionales",
    "libros",
    "antigüedades",
    "juguetes",
    "tejidos",
    "cuchillos",
    "joyería",
    "herramientas",
    "utensilios",
    "vintage",
    "familiar",
    "ocio",
    "orgánico",
    "sustentable",
    "diseño",
  ]

  // Datos de ferias con etiquetas y imágenes
  const ferias: Feria[] = [
    {
      id: "feria-1",
      nombre: "Feria de los Artesanos",
      ubicacion: "Plaza Independencia de Tandil",
      horario: "Sábados y domingos de 10 a 21hs",
      descripcion: "Espacio dedicado a la artesanía local y productos únicos de la región.",
      productos: ["artesanías", "tejidos", "joyería", "diseño", "sustentable"],
      imagen: "https://placehold.co/600x400/4FD1C7/FFFFFF?text=FERIA+ARTESANOS",
    },
    {
      id: "feria-2",
      nombre: "Feria de las Pulgas",
      ubicacion: "Plaza San Martín",
      horario: "Fines de semana",
      descripcion: "Ofrece artesanías, antigüedades, objetos vintage y comidas típicas regionales.",
      productos: ["antigüedades", "vintage", "libros", "comida", "productos regionales"],
      imagen: "https://placehold.co/600x400/4FD1C7/FFFFFF?text=FERIA+PULGAS",
    },
    {
      id: "feria-3",
      nombre: "Feria Mujeres Emprendedoras",
      ubicacion: "Plaza Moreno (Av. Illia), Tandil",
      horario: "Fines de semana y feriados (horarios variables)",
      descripcion:
        "Programa municipal para exhibir y comercializar creaciones de mujeres, promoviendo el autoempleo y economías equitativas.",
      productos: ["indumentaria", "artesanías", "comida", "joyería", "familiar", "orgánico"],
      imagen: "https://placehold.co/600x400/4FD1C7/FFFFFF?text=MUJERES+EMPRENDEDORAS",
    },
  ]

  // Datos de emprendedores con etiquetas actualizadas
  const emprendedores: Emprendedor[] = [
    {
      id: "emp-1",
      nombre: "María Elena Rodríguez",
      emprendimiento: "Tejidos Serranos",
      descripcion:
        "Especialista en tejidos artesanales con lana de oveja local. Crea ponchos, bufandas, gorros y mantas con diseños únicos inspirados en la naturaleza serrana.",
      ferias: ["Feria de los Artesanos", "Feria Mujeres Emprendedoras"],
      horario: "Sábados 10-18hs, Domingos 11-17hs",
      productos: ["tejidos", "artesanías", "indumentaria", "sustentable", "diseño"],
      email: "maria.tejidos@example.com",
      telefono: "+5492494567890",
      imagen: "https://placehold.co/150x150/4FD1C7/FFFFFF?text=MER",
    },
    {
      id: "emp-2",
      nombre: "Carlos Mendoza",
      emprendimiento: "Sabores de la Sierra",
      descripcion:
        "Productor de dulces regionales, mermeladas caseras y conservas. Utiliza frutas locales como membrillo, durazno y ciruela para crear productos gourmet.",
      ferias: ["Feria de los Artesanos", "Feria de las Pulgas"],
      horario: "Fines de semana 9-19hs",
      productos: ["comida", "productos regionales", "orgánico", "familiar"],
      email: "carlos.sabores@example.com",
      telefono: "+5492494567891",
      imagen: "https://placehold.co/150x150/4FD1C7/FFFFFF?text=CM",
    },
    {
      id: "emp-3",
      nombre: "Ana Sofía Gutierrez",
      emprendimiento: "Eco Creaciones",
      descripcion:
        "Diseñadora de accesorios sustentables y objetos decorativos reciclados. Transforma materiales en desuso en piezas únicas de arte funcional.",
      ferias: ["Feria Mujeres Emprendedoras", "Feria de las Pulgas"],
      horario: "Domingos 10-16hs",
      productos: ["artesanías", "utensilios", "joyería", "sustentable", "diseño", "vintage"],
      email: "ana.ecocreaciones@example.com",
      telefono: "+5492494567892",
      imagen: "https://placehold.co/150x150/4FD1C7/FFFFFF?text=ASG",
    },
  ]

  // Preguntas frecuentes
  const faqs = [
    {
      pregunta: "¿Cómo puedo encontrar información sobre las ferias de Tandil?",
      respuesta:
        "En nuestra plataforma puedes explorar todas las ferias activas, filtrar por tipo de productos y ver horarios, ubicaciones y emprendedores participantes.",
    },
    {
      pregunta: "¿Puedo contactar directamente a los emprendedores?",
      respuesta:
        "Sí, cada emprendedor tiene su información de contacto disponible en su perfil, incluyendo email y teléfono para consultas directas.",
    },
    {
      pregunta: "¿Cómo funciona el sistema de favoritos?",
      respuesta:
        "Puedes marcar ferias y emprendedores como favoritos haciendo clic en el corazón. Esto te ayuda a recordar los que más te interesan durante tu visita.",
    },
    {
      pregunta: "¿Las ferias tienen horarios fijos?",
      respuesta:
        "La mayoría de las ferias tienen horarios regulares los fines de semana, pero algunos pueden variar según la época del año o eventos especiales.",
    },
    {
      pregunta: "¿Qué tipos de productos puedo encontrar?",
      respuesta:
        "Encontrarás una gran variedad: desde artesanías y tejidos hasta comida regional, antigüedades, libros y productos sustentables.",
    },
  ]

  // Función para manejar favoritos
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  // Función para filtrar elementos
  const filterItems = (items: any[]) => {
    return items.filter((item) => {
      const matchesSearch =
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.emprendimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesProduct = !selectedProductFilter || item.productos.includes(selectedProductFilter)

      return matchesSearch && matchesProduct
    })
  }

  // Componente de navegación
  const renderNavigation = () => (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image src="/images/kume-logo.png" alt="Küme Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-teal-600">küme</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Inicio" },
              { id: "about", label: "Quiénes Somos" },
              { id: "fairs", label: "Ferias y Emprendimientos" },
              { id: "entrepreneurs", label: "Nuestros Emprendedores" },
              { id: "faq", label: "Preguntas Frecuentes" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  activeSection === item.id ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="home">Inicio</option>
              <option value="about">Quiénes Somos</option>
              <option value="fairs">Ferias y Emprendimientos</option>
              <option value="entrepreneurs">Nuestros Emprendedores</option>
              <option value="faq">Preguntas Frecuentes</option>
              <option value="contact">Contacto</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )

  // Componente de búsqueda y filtros
  const renderSearchAndFilters = () => (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Select value={selectedProductFilter} onValueChange={setSelectedProductFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar por producto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los productos</SelectItem>
              {productCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedProductFilter("")
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Limpiar
          </Button>
        </div>
      </div>
    </div>
  )

  // Página de inicio
  const renderHome = () => (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Conectamos comunidades,
              <span className="text-teal-600"> fortalecemos territorios</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubre ferias, emprendimientos y productos regionales de Tandil. Una plataforma digital que visibiliza y
              conecta a emprendedores locales con su comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={() => setActiveSection("fairs")}>
                Explora Ferias Ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => setActiveSection("entrepreneurs")}
              >
                Conoce Emprendedores
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desarrollamos soluciones digitales con impacto territorial
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Desde Küme, desarrollamos soluciones digitales con impacto territorial. Nuestro primer producto es una
              plataforma web que organiza y visibiliza ferias y emprendimientos de productos regionales de Tandil,
              conectando actores locales y promoviendo el consumo y turismo responsable. Esta herramienta funciona como
              un catálogo digital centralizado, donde los usuarios pueden descubrir y explorar la oferta local según sus
              intereses.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Características Principales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Catálogo digital centralizado de ferias y emprendimientos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Filtros por tipo de productos y categorías
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Información detallada con ubicación y horarios
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sistema de favoritos para planificar visitas
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Disponible</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Perfiles completos de emprendedores
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Productos y servicios ofrecidos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Horarios y días de participación
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Información de contacto directa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  // Sección Quiénes Somos
  const renderAbout = () => (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiénes Somos</h1>
          <p className="text-lg text-gray-600">Conoce nuestra misión, visión y los valores que nos guían</p>
        </div>

        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mission" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Misión
            </TabsTrigger>
            <TabsTrigger value="vision" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Visión
            </TabsTrigger>
            <TabsTrigger value="values" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Valores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-600">
                  <Target className="h-5 w-5" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Diseñamos y desarrollamos soluciones digitales accesibles que conectan comunidades, emprendedores y
                  turistas, fortaleciendo las economías locales. Trabajamos desde lo territorial, promoviendo inclusión
                  digital real y herramientas contextualizadas al desarrollo regional.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-600">
                  <Eye className="h-5 w-5" />
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Impulsar una transformación digital centralizada con sentido comunitario, donde cada ciudad cuente con
                  herramientas tecnológicas que valoren su identidad, fortalezcan su economía local y mejoren la
                  experiencia de quienes la habitan y visitan.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="values">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-600">
                  <Heart className="h-5 w-5" />
                  Nuestros Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Compromiso territorial</h3>
                      <p className="text-gray-700">
                        Creemos en el potencial de las economías regionales y trabajamos para visibilizar, conectar y
                        fortalecer a quienes las sostienen.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Inclusión digital</h3>
                      <p className="text-gray-700">
                        Diseñamos tecnología accesible y útil para todos, especialmente para aquellos que suelen quedar
                        fuera del mundo digital: pequeños productores, feriantes y emprendedores locales.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Innovación con propósito</h3>
                      <p className="text-gray-700">
                        No desarrollamos soluciones tecnológicas por moda, sino herramientas concretas que respondan a
                        necesidades reales y generen impacto positivo.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Trabajo colaborativo</h3>
                      <p className="text-gray-700">
                        Creemos en la co-creación y que las mejores soluciones nacen del intercambio entre diferentes
                        actores del territorio.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Transparencia y confianza</h3>
                      <p className="text-gray-700">
                        Fomentamos relaciones claras y honestas, respetando los valores de las comunidades con las que
                        trabajamos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  // Sección Ferias y Emprendimientos
  const renderFairs = () => {
    const filteredFerias = filterItems(ferias)

    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ferias y Emprendimientos</h1>
            <p className="text-lg text-gray-600">Descubre las principales ferias de Tandil y sus emprendedores</p>
          </div>

          {renderSearchAndFilters()}

          <div className="grid gap-8">
            {filteredFerias.map((feria) => (
              <Card key={feria.id} className="hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={feria.imagen || "/placeholder.svg"}
                      alt={`Imagen de ${feria.nombre}`}
                      className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-teal-600">{feria.nombre}</CardTitle>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => toggleFavorite(feria.id)}
                              className={favorites.includes(feria.id) ? "text-red-500" : "text-gray-400"}
                            >
                              <Heart className={`h-4 w-4 ${favorites.includes(feria.id) ? "fill-current" : ""}`} />
                            </Button>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-2" />
                            {feria.ubicacion}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {feria.horario}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                          <Store className="h-3 w-3 mr-1" />
                          Feria
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{feria.descripcion}</p>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Productos disponibles:</h4>
                        <div className="flex flex-wrap gap-2">
                          {feria.productos.map((producto, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-teal-100 text-teal-800">
                              {producto}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredFerias.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No se encontraron ferias que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Sección Nuestros Emprendedores
  const renderEntrepreneurs = () => {
    const filteredEmprendedores = filterItems(emprendedores)

    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Emprendedores</h1>
            <p className="text-lg text-gray-600">
              Conoce a los emprendedores que hacen única la experiencia de las ferias tandilenses
            </p>
          </div>

          {renderSearchAndFilters()}

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEmprendedores.map((emprendedor) => (
              <Card key={emprendedor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <img
                      src={emprendedor.imagen || "/placeholder.svg"}
                      alt={`Foto de perfil de ${emprendedor.nombre}`}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-teal-100"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleFavorite(emprendedor.id)}
                      className={`absolute -top-2 -right-2 ${favorites.includes(emprendedor.id) ? "text-red-500" : "text-gray-400"}`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(emprendedor.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{emprendedor.nombre}</CardTitle>
                  <CardDescription className="text-teal-600 font-medium">{emprendedor.emprendimiento}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm">{emprendedor.descripcion}</p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Participa en:</h4>
                    <div className="flex flex-wrap gap-2">
                      {emprendedor.ferias.map((feria, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feria}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {emprendedor.horario}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Productos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {emprendedor.productos.map((producto, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-teal-100 text-teal-800">
                          {producto}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Contacto:</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 mr-2" />
                        {emprendedor.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-2" />
                        {emprendedor.telefono}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEmprendedores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No se encontraron emprendedores que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Sección FAQ
  const renderFAQ = () => (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-gray-600">Encuentra respuestas a las consultas más comunes sobre Küme</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.pregunta}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <Button
            onClick={() => setActiveSection("contact")}
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  )

  // Sección Contacto
  const renderContact = () => (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">Estamos aquí para ayudarte. Ponte en contacto con nosotros</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email de soporte</p>
                  <p className="text-gray-600">kumesoporte@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+5492494123456</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Instagram</p>
                  <p className="text-gray-600">@kume</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" placeholder="Tu nombre completo" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

  // Footer
  const renderFooter = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/kume-logo.png" alt="Küme Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold">küme</span>
            </div>
            <p className="text-gray-400">
              Conectamos comunidades, emprendedores y turistas, fortaleciendo las economías locales a través de
              soluciones digitales accesibles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => setActiveSection("about")} className="hover:text-white transition-colors">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection("fairs")} className="hover:text-white transition-colors">
                  Ferias
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("entrepreneurs")}
                  className="hover:text-white transition-colors"
                >
                  Emprendedores
                </button>
              </li>
              <li>
                <button onClick={() => setActiveSection("contact")} className="hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>kumesoporte@gmail.com</li>
              <li>+5492494123456</li>
              <li>@kume</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Küme. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}

      <main>
        {activeSection === "home" && renderHome()}
        {activeSection === "about" && renderAbout()}
        {activeSection === "fairs" && renderFairs()}
        {activeSection === "entrepreneurs" && renderEntrepreneurs()}
        {activeSection === "faq" && renderFAQ()}
        {activeSection === "contact" && renderContact()}
      </main>

      {renderFooter()}
    </div>
  )
}
