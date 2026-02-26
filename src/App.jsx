import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  Flame,
  ThumbsUp,
  Zap,
  Heart,
  Utensils
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
    "Plaza Cafetalón",
    "Plaza Mundo Soyapango",
    "Plaza Mundo Usulután"
  ];

  const menuHighlights = [
    {
      name: "El Freakie Clásico",
      description: "Salchicha premium, tocino crocante, lluvia de papas y nuestra salsa secreta.",
      price: "$4.50",
      tag: "¡El Jefe!",
      emoji: "🌭"
    },
    {
      name: "Double Burger Freak",
      description: "Doble carne a la parrilla, queso derretido y aros de cebolla.",
      price: "$6.50",
      tag: "¡Mega Grande!",
      emoji: "🍔"
    },
    {
      name: "Loaded Fries",
      description: "Papas fritas bañadas en cheddar, bacon y jalapeños.",
      price: "$3.99",
      tag: "Para Picotear",
      emoji: "🍟"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans text-slate-900 overflow-x-hidden selection:bg-yellow-400 selection:text-red-600">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-110">
            <div className="w-14 h-14 bg-red-600 rounded-2xl rotate-3 flex items-center justify-center overflow-hidden border-4 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               <img src="../src/assets/freakie_logo.jpg" alt="" />
            </div>
            <span className="font-black text-3xl tracking-tighter text-red-600 uppercase italic">FreakieDogs</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-black text-sm uppercase italic tracking-widest">
            <a href="#menu" className="hover:text-red-600 transition-all hover:-translate-y-1">El Menú</a>
            <a href="#locations" className="hover:text-red-600 transition-all hover:-translate-y-1">¿Dónde Estamos?</a>
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-black transition-all transform hover:scale-105 hover:rotate-2 shadow-[4px_4px_0px_0px_rgba(254,202,27,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              ¡PEDIR AHORA!
            </button>
          </div>

          <button className="md:hidden p-2 bg-yellow-400 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <MenuIcon size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-yellow-400 z-40 flex flex-col items-center justify-center text-black space-y-8 text-4xl font-black uppercase italic">
          <a href="#menu" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>El Menú</a>
          <a href="#locations" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Sucursales</a>
          <button className="bg-red-600 text-white px-10 py-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Pide Ya</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              <Zap size={18} fill="currentColor" />
              ¡Más de 40 millones de antojos!
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm">
              HAMBRE <br />
              <span className="text-red-600 relative">
                FREAKIE
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-400/50 -z-10 -rotate-1"></span>
              </span> <br />
              SABOR ÉPICO.
            </h1>
            
            <p className="text-2xl text-slate-700 max-w-md font-bold leading-tight">
              Los hot dogs que rompieron el internet. No somos una dieta, somos un <span className="bg-red-600 text-white px-2 py-1 rotate-1 inline-block">estilo de vida</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-red-600 text-white px-12 py-6 rounded-2xl font-black text-2xl uppercase italic hover:bg-black transition-all shadow-[8px_8px_0px_0px_rgba(254,202,27,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-3 group">
                TENGO HAMBRE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-4 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border-2 border-dashed border-slate-300">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-red-100 shadow-md">
                      <img src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${i+20}`} alt="Lover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                   <p className="font-black text-red-600 uppercase italic">¡72k Seguidores!</p>
                   <p className="font-bold text-slate-500">Únete a la locura</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-0 mt-16 flex justify-center">
            {/* Elementos flotantes */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-4xl animate-bounce shadow-xl z-20">🌭</div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-red-600 rounded-xl flex items-center justify-center text-3xl rotate-12 animate-pulse shadow-xl z-20 text-white">🔥</div>
            
            <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-[4rem] border-8 border-white shadow-[20px_20px_0px_0px_rgba(254,202,27,1)] overflow-hidden -rotate-6 transition-transform hover:rotate-0 duration-500 flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-0"></div>
               <div className="text-center z-10 p-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-[120px] leading-none mb-4 block drop-shadow-xl">🌭</span>
                  <h3 className="font-black text-5xl uppercase italic text-red-600 leading-none">FREAKIE<br/>DOGS</h3>
               </div>
               {/* Sticker de precio */}
               <div className="absolute bottom-10 right-10 bg-black text-yellow-400 p-6 rounded-full font-black rotate-12 shadow-2xl scale-110 border-4 border-yellow-400">
                  DESDE <br/> $3.50
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee de diversión */}
      <div className="bg-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-yellow-400">
        <div className="flex animate-marquee font-black text-yellow-400 uppercase italic text-2xl gap-20">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="flex items-center gap-4">
              EL MEJOR HOT DOG DEL PAÍS <Star fill="currentColor" /> SIN DIETAS <Star fill="currentColor" /> SABOR FREAKIE <Star fill="currentColor" />
            </span>
          ))}
        </div>
      </div>

      {/* Featured Menu */}
      <section id="menu" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter">
              NUESTROS <br /> <span className="text-red-600">FAVORITOS 🔥</span>
            </h2>
            <p className="text-xl font-bold text-slate-500 max-w-xs text-center md:text-right">
              Si no te manchas los dedos, no es un Freakie Dog de verdad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {menuHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-[3rem] p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-4 border-black hover:-translate-y-4 hover:-translate-x-2 hover:shadow-[20px_20px_0px_0px_rgba(252,165,165,1)] transition-all duration-300 relative group">
                <div className="absolute -top-4 -right-4 bg-yellow-400 px-4 py-2 rounded-xl font-black uppercase italic border-2 border-black rotate-12 z-20 shadow-md">
                  {item.tag}
                </div>
                
                <div className="w-full h-56 bg-red-50 rounded-2xl mb-6 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                   {item.emoji}
                </div>

                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-3xl font-black uppercase italic leading-none tracking-tighter">{item.name}</h3>
                  <span className="text-3xl font-black text-red-600 italic leading-none">{item.price}</span>
                </div>

                <p className="text-slate-600 font-bold mb-8 leading-tight">
                  {item.description}
                </p>

                <button className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black uppercase italic tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group/btn active:scale-95">
                  <ShoppingBag size={24} /> ¡LO QUIERO YA!
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations - Visual & Fun */}
      <section id="locations" className="py-24 bg-red-600 px-6 text-white relative overflow-hidden">
        {/* Patrón de puntos de fondo */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter">
              ¿DÓNDE ESTÁ <br /> <span className="text-yellow-400">LA LOCURA?</span>
            </h2>
            <div className="space-y-6">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(254,202,27,1)] group hover:scale-105 transition-transform cursor-pointer">
                  <div className="bg-red-600 p-5 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform text-white shadow-md">
                    <MapPin size={32} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl uppercase italic tracking-tighter leading-none mb-1">{loc}</h4>
                    <p className="font-bold text-slate-500">El Salvador, tu lugar favorito.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black p-10 rounded-[4rem] border-8 border-yellow-400 rotate-2 relative">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black text-5xl animate-bounce">
                🛵
              </div>
              <h3 className="text-4xl font-black uppercase italic leading-none">¡LLEGAMOS A <br/> TU CASA!</h3>
              <p className="text-xl font-bold text-slate-400">¿No quieres salir? Estamos en PedidosYa listo para volar.</p>
              <button className="bg-white text-red-600 w-full py-6 rounded-3xl font-black text-2xl uppercase italic hover:bg-yellow-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                PEDIR POR WHATSAPP
              </button>
              <p className="text-xs uppercase font-black tracking-widest text-slate-500 opacity-50">Más de 200k pedidos entregados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Wall */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-2 w-12 bg-red-600 hidden md:block"></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-center leading-none tracking-tighter">
              POSTEA TU <span className="text-red-600">#FREAKIEDOG</span>
            </h2>
            <div className="h-2 w-12 bg-red-600 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className={`aspect-square bg-slate-100 rounded-3xl overflow-hidden relative group cursor-pointer border-4 border-transparent hover:border-red-600 transition-all ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                  <Heart size={30} fill="white" className="animate-pulse" />
                  <span className="font-black italic uppercase text-sm">¡Qué delicia!</span>
                </div>
                <div className="w-full h-full flex items-center justify-center bg-yellow-50 text-slate-300">
                   {i % 2 === 0 ? <Utensils size={40} /> : <Star size={40} />}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <a href="https://instagram.com/freakiedogs" target="_blank" className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase italic hover:scale-110 hover:-rotate-2 transition-all shadow-xl">
               <Instagram size={28} /> SÍGUENOS @FREAKIEDOGS
             </a>
          </div>
        </div>
      </section>

      {/* Footer Freakie */}
      <footer className="bg-black text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center relative z-10">
          <div className="space-y-4">
             <h3 className="text-6xl font-black italic tracking-tighter uppercase leading-none">FREAKIE<br/><span className="text-red-600">DOGS</span></h3>
             <p className="text-yellow-400 font-black uppercase text-xl">¡Comer sano es aburrido!</p>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="p-4 bg-white/10 rounded-2xl hover:bg-red-600 hover:-translate-y-2 transition-all"><Instagram size={32}/></a>
            <a href="#" className="p-4 bg-white/10 rounded-2xl hover:bg-red-600 hover:-translate-y-2 transition-all"><Instagram size={32}/></a>
            <a href="#" className="p-3 bg-white/10 rounded-2xl hover:bg-red-600 hover:-translate-y-2 transition-all flex items-center justify-center w-[64px] h-[64px] font-black italic text-xl">f</a>
          </div>

          <div className="w-full border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-bold text-slate-500 italic">© 2024 Freakie Dogs. Todo el sabor, cero remordimientos.</p>
            <div className="flex gap-8 font-black uppercase italic text-xs tracking-widest text-slate-500">
              <a href="#" className="hover:text-yellow-400">Políticas</a>
              <a href="#" className="hover:text-yellow-400">Privacidad</a>
              <a href="#" className="hover:text-yellow-400">Contacto</a>
            </div>
          </div>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;