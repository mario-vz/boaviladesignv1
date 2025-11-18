import { Instagram, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-2xl font-light tracking-wide text-gray-800">
            BOA VILA DESIGN
          </span>
        </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-emerald-500 transition-colors font-light"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-700 hover:text-emerald-500 transition-colors font-light"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-700 hover:text-emerald-500 transition-colors font-light"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-emerald-500 transition-colors font-light"
            >
              Contacto
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4 px-6">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-emerald-500 transition-colors font-light text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-gray-700 hover:text-emerald-500 transition-colors font-light text-left"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-gray-700 hover:text-emerald-500 transition-colors font-light text-left"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-emerald-500 transition-colors font-light text-left"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-20">
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-128 h-128 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Diseño artesanal hecho a mano en Galicia
            </h1>

            <p className="text-lg text-gray-600 mb-12 font-light">
              Accesorios únicos creados uno a uno
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('productos')}
                className="px-8 py-4 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors font-light"
              >
                Ver productos
              </button>
              <a
                href="#"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-emerald-400 hover:text-emerald-500 transition-colors font-light inline-block"
              >
                Pedir por Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="productos" className="py-20 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
              Productos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[ SUBIR FOTO: Pendientes Azules ]</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-gray-800 mb-2">
                    Pendientes Azul Artesanal
                  </h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    Pendientes únicos elaborados a mano con arcilla polimérica. Diseño exclusivo con tonos azules que aportan elegancia y frescura.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-6 py-3 border-2 border-emerald-400 text-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors font-light"
                  >
                    Pedir por Instagram
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[ SUBIR FOTO: Pendientes Verdes con Lazo Rojo ]</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-gray-800 mb-2">
                    Pendientes Verde Navidad
                  </h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    Pendientes festivos perfectos para la temporada navideña. Combinación de verde suave con detalles en lazo rojo. Hechos con amor y dedicación.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-6 py-3 border-2 border-emerald-400 text-emerald-500 rounded-full hover:bg-emerald-400 hover:text-white transition-colors font-light"
                  >
                    Pedir por Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
              Sobre mí
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="aspect-square bg-stone-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm text-center px-4">[ SUBIR FOTO: Tu foto personal ]</p>
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                  Boa Vila Design nace del amor por la artesanía gallega. Cada pieza está hecha a mano con dedicación y materiales cuidadosamente seleccionados.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Diseño único, cuidado y con historia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 px-6 bg-stone-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-800 mb-16">
              Contacto
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-700 hover:text-emerald-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-emerald-50 transition-colors shadow-sm">
                  <Instagram size={24} />
                </div>
                <span className="font-light">@boaviladesign</span>
              </a>

              <a
                href="mailto:contacto@boaviladesign.com"
                className="flex items-center gap-3 text-gray-700 hover:text-emerald-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-emerald-50 transition-colors shadow-sm">
                  <Mail size={24} />
                </div>
                <span className="font-light">contacto@boaviladesign.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 font-light mb-2">
            © {new Date().getFullYear()} Boa Vila Design
          </p>
          <a
            href="#"
            className="text-emerald-500 hover:text-emerald-600 transition-colors font-light"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
