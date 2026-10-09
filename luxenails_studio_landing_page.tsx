import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Star, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Heart, 
  ShieldCheck, 
  Award, 
  Coffee, 
  Scissors, 
  User, 
  Send, 
  Filter,
  Check,
  ExternalLink
} from 'lucide-react';

const SERVICES = [
  {
    id: 'gel-tip',
    title: 'Alongamento em Gel / Tip',
    category: 'Gel',
    price: 'R$ 180,00',
    duration: '2h 00min',
    description: 'Técnica de alongamento com acabamento natural, alta durabilidade e brilho intenso.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fibra-vidro',
    title: 'Fibra de Vidro Premium',
    category: 'Gel',
    price: 'R$ 210,00',
    duration: '2h 30min',
    description: 'Unhas ultrafinas, ultra-resistentes e com o aspecto 100% natural que você procura.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cutilagem-esmaltacao',
    title: 'Manicure Russa & Esmaltação em Gel',
    category: 'Tradicional',
    price: 'R$ 95,00',
    duration: '1h 15min',
    description: 'Cutilagem a seco de alta precisão e cutilagem profunda com esmaltação duradoura (até 20 dias).',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nail-art',
    title: 'Nail Art Personalizada / Minimalista',
    category: 'Nail Art',
    price: 'R$ 120,00',
    duration: '1h 45min',
    description: 'Design exclusivo feito à mão, incluindo francesinha moderna, degradê, pedrarias ou folha de ouro.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'spa-pes-maos',
    title: 'Spa Luxo dos Pés & Mãos',
    category: 'Spa',
    price: 'R$ 140,00',
    duration: '1h 30min',
    description: 'Esfoliação renovadora, hidratação profunda com parafina morna e massagem relaxante.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'manutencao-gel',
    title: 'Manutenção de Alongamento',
    category: 'Gel',
    price: 'R$ 120,00',
    duration: '1h 30min',
    description: 'Reposição do gel, nivelamento do crescimento e nova esmaltação completa.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop'
  }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Nude Minimalista com Folha de Ouro',
    category: 'Delicadas',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    likes: 248
  },
  {
    id: 2,
    title: 'Francesinha Moderna com Curvatura C',
    category: 'Gel',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    likes: 312
  },
  {
    id: 3,
    title: 'Nail Art Floral Pintada à Mão',
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    likes: 195
  },
  {
    id: 4,
    title: 'Esmaltação Vermelho Clássico & Brilho High-Gloss',
    category: 'Todas',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop',
    likes: 420
  },
  {
    id: 5,
    title: 'Efeito Ombré Babyboomer',
    category: 'Delicadas',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop',
    likes: 512
  },
  {
    id: 6,
    title: 'Design Geométrico & Pedrarias Swarowski',
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
    likes: 184
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Camila Rodriguez',
    role: 'Cliente há 2 anos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    comment: 'Ambiente simplesmente espetacular! Faço meu gel na LuxeNails desde o ano passado e minhas unhas duram intactas quase um mês inteiro. O café gourmet é um mimo à parte!',
    rating: 5,
    service: 'Alongamento em Gel'
  },
  {
    id: 2,
    name: 'Mariana Duarte',
    role: 'Empresária',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    comment: 'A precisão da cutilagem russa é inacreditável. O atendimento é extremamente pontual e profissional. Não troco por nada em São Paulo!',
    rating: 5,
    service: 'Manicure Russa'
  },
  {
    id: 3,
    name: 'Beatriz Lima',
    role: 'Designer de Interiores',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    comment: 'As meninas são verdadeiras artistas! Pedi uma Nail Art super complexa para o meu casamento e o resultado superou todas as referências do Pinterest.',
    rating: 5,
    service: 'Nail Art Personalizada'
  }
];

const FEATURES = [
  {
    icon: Award,
    title: 'Especialistas Certificadas',
    desc: 'Nossa equipe possui certificações internacionais em técnicas modernas de nail design e cutilagem russa.'
  },
  {
    icon: ShieldCheck,
    title: '100% Esterilização Autoclave',
    desc: 'Segurança e higiene rigorosas em primeiro lugar. Materiais embalados e esterilizados a cada atendimento.'
  },
  {
    icon: Sparkles,
    title: 'Produtos Importados Premium',
    desc: 'Utilizamos apenas géis, primers e esmaltes de marcas líderes mundiais, livres de componentes tóxicos.'
  },
  {
    icon: Coffee,
    title: 'Experiência & Café Gourmet',
    desc: 'Desfrute de um ambiente climatizado, música relaxante, cappuccinos especiais e espumante cortesia.'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('Todas');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  
  // Modal Booking State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '10:00',
    notes: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = (serviceTitle = '') => {
    if (serviceTitle) {
      setFormData(prev => ({ ...prev, service: serviceTitle }));
    }
    setIsBookingOpen(true);
    setBookingSubmitted(false);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const filteredGallery = galleryFilter === 'Todas' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2A26] font-sans antialiased selection:bg-[#E8B4B8] selection:text-white">
      
      {}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-[#F3E8E8]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A373] to-[#E8B4B8] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D2A26] block leading-none">
                Luxe<span className="text-[#B5838D]">Nails</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#A08A8A] font-medium block">
                Studio & Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E5452]">
            <a href="#inicio" className="hover:text-[#B5838D] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#B5838D] transition-colors">Serviços</a>
            <a href="#galeria" className="hover:text-[#B5838D] transition-colors">Galeria</a>
            <a href="#diferenciais" className="hover:text-[#B5838D] transition-colors">Sobre Nós</a>
            <a href="#depoimentos" className="hover:text-[#B5838D] transition-colors">Depoimentos</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => openBookingModal()}
              className="bg-[#2D2A26] hover:bg-[#B5838D] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#E8B4B8] group-hover:text-white transition-colors" />
              <span>Agendar Horário</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2D2A26] hover:text-[#B5838D] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-[#F3E8E8] px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-4 text-base font-medium text-[#5E5452]">
              <a 
                href="#inicio" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5838D] transition-colors py-1"
              >
                Início
              </a>
              <a 
                href="#servicos" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5838D] transition-colors py-1"
              >
                Serviços
              </a>
              <a 
                href="#galeria" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5838D] transition-colors py-1"
              >
                Galeria
              </a>
              <a 
                href="#diferenciais" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5838D] transition-colors py-1"
              >
                Sobre Nós
              </a>
              <a 
                href="#depoimentos" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5838D] transition-colors py-1"
              >
                Depoimentos
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="mt-2 w-full bg-[#B5838D] text-white py-3 rounded-full text-center font-medium shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Horário
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Decorative Gradient Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F5D0C5]/40 via-[#E8B4B8]/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8E8] text-[#B5838D] text-xs font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Studio de Manicure de Alto Padrão
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2A26] leading-[1.15] tracking-tight">
                Realce a <span className="italic text-[#B5838D] font-normal">elegância</span> e beleza das suas unhas.
              </h1>

              <p className="text-base sm:text-lg text-[#6C6361] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Técnicas exclusivas de alongamento em gel, cutilagem russa de alta precisão e nail art personalizada num ambiente luxuoso feito sob medida para o seu bem-estar.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => openBookingModal()}
                  className="w-full sm:w-auto px-8 py-4 bg-[#B5838D] hover:bg-[#9E6B75] text-white font-medium rounded-full shadow-lg shadow-[#B5838D]/30 hover:shadow-xl hover:shadow-[#B5838D]/40 transition-all duration-300 flex items-center justify-center gap-3 text-base group"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agende seu Horário</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a 
                  href="#servicos" 
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E5D7D7] hover:border-[#B5838D] text-[#2D2A26] hover:text-[#B5838D] font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  Ver Nossos Serviços
                </a>
              </div>

              {/* Quick Proof Badges */}
              <div className="pt-8 border-t border-[#EFE5E5] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#2D2A26]">1.2k+</p>
                  <p className="text-xs text-[#8C807D] font-medium">Clientes Felizes</p>
                </div>
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#2D2A26]">4.9 ★</p>
                  <p className="text-xs text-[#8C807D] font-medium">Avaliação Google</p>
                </div>
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#2D2A26]">100%</p>
                  <p className="text-xs text-[#8C807D] font-medium">Esterilizado</p>
                </div>
              </div>

            </div>

            {/* Right Column Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Featured Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop" 
                    alt="Manicure e Nail Art de Luxo" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Overlay Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#F5D0C5]">Luxe Experience</p>
                    <p className="font-serif text-xl font-medium">Acabamento Impecável & Duradouro</p>
                  </div>
                </div>

                {/* Floating Card 1: Review Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-[#F3E8E8] max-w-[220px] hidden sm:flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-[#F5D0C5]/40 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-[#D4A373] fill-[#D4A373]" />
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-xs mb-0.5">★★★★★</div>
                    <p className="text-xs font-bold text-[#2D2A26]">Atendimento Nota 10</p>
                    <p className="text-[10px] text-gray-500">Mais de 500 reviews 5 estrelas</p>
                  </div>
                </div>

                {/* Floating Card 2: Certificate Badge */}
                <div className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#F3E8E8] hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#B5838D] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2D2A26]">Master Nail Designers</p>
                    <p className="text-[10px] text-[#8C807D]">Certificação Internacional</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="diferenciais" className="py-16 bg-[#F8F3F0] border-y border-[#EFE5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
              Por que escolher o <span className="text-[#B5838D]">LuxeNails</span>?
            </h2>
            <p className="text-[#6C6361] mt-3 text-sm sm:text-base">
              Combinamos inovação técnica, estética impecável e biossegurança rigorosa para proporcionar um momento único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#EFE5E5] flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5D0C5]/30 group-hover:bg-[#B5838D] group-hover:text-white text-[#B5838D] flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2A26] mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[#7D7371] leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section id="servicos" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#B5838D] text-xs font-bold uppercase tracking-widest block mb-2">
                Cardápio de Cuidados
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
                Serviços Exclusivos
              </h2>
            </div>
            <p className="text-[#6C6361] max-w-md text-sm sm:text-base">
              Tratamentos personalizados com produtos dermatologicamente testados e técnicas avançadas.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F3E8E8] flex flex-col group"
              >
                {/* Card Header Image */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-[#B5838D] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Mais Pedido
                    </span>
                  )}

                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#2D2A26] font-serif font-bold text-sm px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#8C807D] text-xs mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#2D2A26] mb-2 group-hover:text-[#B5838D] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6C6361] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button 
                    onClick={() => openBookingModal(service.title)}
                    className="w-full py-3 bg-[#F8F3F0] hover:bg-[#B5838D] text-[#2D2A26] hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Agendar Este Serviço</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="galeria" className="py-20 bg-[#FDFBF7] border-t border-[#EFE5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#B5838D] text-xs font-bold uppercase tracking-widest block mb-2">
              Inspiração & Portfólio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
              Galeria de Trabalhos
            </h2>
            <p className="text-[#6C6361] text-sm sm:text-base mt-2">
              Confira os detalhes e o acabamento dos nossos atendimentos mais recentes.
            </p>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {['Todas', 'Gel', 'Nail Art', 'Delicadas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  galleryFilter === tab
                    ? 'bg-[#B5838D] text-white shadow-md'
                    : 'bg-white text-[#6C6361] hover:bg-[#F5D0C5]/30 border border-[#EFE5E5]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#EFE5E5] aspect-square"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-semibold text-[#F5D0C5] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-3 text-xs text-white/80">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    <span>{item.likes} curtidas no Instagram</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="depoimentos" className="py-20 sm:py-28 bg-[#F8F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#B5838D] text-xs font-bold uppercase tracking-widest block mb-2">
              Opinião das Clientes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
              O que dizem sobre nós
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div 
                key={review.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-[#EFE5E5] flex flex-col justify-between relative"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex text-amber-400 gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E5452] italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#F5EBEB]">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E8B4B8]"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2D2A26]">{review.name}</h4>
                    <p className="text-[11px] text-[#A08A8A]">{review.role}</p>
                    <span className="inline-block text-[10px] bg-[#F5D0C5]/30 text-[#B5838D] px-2 py-0.5 rounded mt-1 font-medium">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-gradient-to-r from-[#2D2A26] to-[#423C39] text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#B5838D]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pronta para ter unhas incríveis?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Reserve seu horário em menos de 1 minuto e desfrute de um atendimento VIP exclusivo.
          </p>
          <button 
            onClick={() => openBookingModal()}
            className="px-8 py-4 bg-[#B5838D] hover:bg-[#A3727C] text-white font-medium rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Agora Pela Web</span>
          </button>
        </div>
      </section>

      {}
      <footer className="bg-[#23201E] text-[#D1C7C5] pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#B5838D] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  Luxe<span className="text-[#E8B4B8]">Nails</span>
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Studio especializado em saúde, estética e beleza das unhas. Experiência premium, biossegurança e alto padrão de acabamento.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#B5838D] hover:text-white flex items-center justify-center text-stone-300 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#B5838D] hover:text-white flex items-center justify-center text-stone-300 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços & Preços</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Galeria de Fotos</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Avaliações das Clientes</a></li>
                <li><button onClick={() => openBookingModal()} className="hover:text-white text-[#E8B4B8] transition-colors">Agendamento Online</button></li>
              </ul>
            </div>

            {/* Col 3: Hours */}
            <div>
              <h3 className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="text-white font-medium">09:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white font-medium">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-stone-500">
                  <span>Domingo & Feriados:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h3 className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-4">Localização & Contato</h3>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E8B4B8] shrink-0 mt-0.5" />
                  <span>Av. Paulista, 1500 - Conj. 82, Bela Vista - São Paulo / SP</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                  <span>(11) 99876-5432</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                  <span>atendimento@luxenails.com.br</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© {new Date().getFullYear()} LuxeNails Studio. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
              Desenvolvido para demonstração de <span className="text-stone-300 font-medium">Portfólio Web</span>
            </p>
          </div>
        </div>
      </footer>

      {}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#F3E8E8] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={closeBookingModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-[#F5D0C5]/40 text-[#B5838D] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">Agendar Atendimento</h3>
                  <p className="text-xs text-[#7D7371] mt-1">Preencha os dados abaixo para reservar sua sessão</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Ana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] mb-1">Serviço Desejado</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-sm bg-white"
                    >
                      <option value="">Selecione um serviço...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2A26] mb-1">Data</label>
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2A26] mb-1">Horário</label>
                      <select 
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-xs sm:text-sm bg-white"
                      >
                        <option value="09:00">09:00</option>
                        <option value="10:30">10:30</option>
                        <option value="13:00">13:00</option>
                        <option value="15:00">15:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] mb-1">Observações (Opcional)</label>
                    <textarea 
                      rows="2"
                      placeholder="Ex: Quero nail art no dedo anelar..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-[#B5838D] text-xs"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[#B5838D] hover:bg-[#A3727C] text-white font-semibold rounded-xl shadow-md transition-colors text-sm mt-2 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirmar Agendamento</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Success Booking Screen */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">Solicitação Enviada!</h3>
                <p className="text-xs sm:text-sm text-[#6C6361] leading-relaxed">
                  Obrigado, <strong className="text-[#2D2A26]">{formData.name}</strong>! Recebemos seu pedido para <strong className="text-[#B5838D]">{formData.service || 'Serviço Manicure'}</strong>.
                </p>
                <div className="bg-[#F8F3F0] p-4 rounded-2xl text-left text-xs space-y-2 border border-[#EFE5E5]">
                  <p>📅 <strong>Data:</strong> {formData.date || 'A confirmar'}</p>
                  <p>⏰ <strong>Horário:</strong> {formData.time}</p>
                  <p>📞 <strong>Contato:</strong> {formData.phone}</p>
                </div>
                <p className="text-[11px] text-stone-400">
                  Entraremos em contato via WhatsApp em breve para confirmar a sua reserva.
                </p>
                <button 
                  onClick={closeBookingModal}
                  className="w-full py-3 bg-[#2D2A26] text-white rounded-xl text-xs font-semibold hover:bg-black transition-colors mt-4"
                >
                  Fechar Janela
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}