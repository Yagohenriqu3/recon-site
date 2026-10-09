import React, { useState } from 'react';
import { 
  Smartphone, 
  Battery, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  CheckCircle2, 
  Calculator, 
  Truck, 
  Check, 
  Cpu, 
  Flame, 
  Sparkles,
  Droplets
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Estado do Simulador de Conserto
  const [phoneBrand, setPhoneBrand] = useState('apple');
  const [serviceNeeded, setServiceNeeded] = useState('tela');
  const [deliveryOption, setDeliveryOption] = useState('loja');

  const brands = [
    { id: 'apple', label: 'iPhone / Apple', basePrice: 160 },
    { id: 'samsung', label: 'Samsung Galaxy', basePrice: 120 },
    { id: 'xiaomi', label: 'Xiaomi / Redmi', basePrice: 100 },
    { id: 'motorola', label: 'Motorola', basePrice: 90 },
  ];

  const servicePrices = [
    { id: 'tela', label: 'Troca de Tela / Vidro Quebrado', price: 120 },
    { id: 'bateria', label: 'Troca de Bateria (Saúde 100%)', price: 80 },
    { id: 'conector', label: 'Conector de Carga / Entrada Type-C', price: 60 },
    { id: 'camera', label: 'Câmera Traseira ou Frontal', price: 110 },
    { id: 'desoxidacao', label: 'Banho Químico (Celular Molhado)', price: 90 },
  ];

  const calculateEstimate = () => {
    const brandObj = brands.find(b => b.id === phoneBrand);
    const serviceObj = servicePrices.find(s => s.id === serviceNeeded);
    let total = (brandObj ? brandObj.basePrice : 100) + (serviceObj ? serviceObj.price : 80);
    if (deliveryOption === 'motoboy') total += 30;
    return total;
  };

  const services = [
    {
      id: 1,
      category: 'telas',
      title: 'Troca de Vidro & Display OLED/Incell',
      description: 'Preservamos o touch original do seu celular. Troca rápida realizada na hora na frente do cliente.',
      price: 'A partir de R$ 130',
      time: '30 a 45 min',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      category: 'baterias',
      title: 'Troca de Bateria Premium (100% Saúde)',
      description: 'Baterias homologadas pela Anatel com garantia de alta duração e sem aviso de peça desconhecida.',
      price: 'A partir de R$ 90',
      time: '20 min',
      icon: Battery,
      image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'placa',
      title: 'Reparo em Placa Mãe / Face ID',
      description: 'Microsoldagem de precisão para aparelhos que não ligam, não carregam ou perderam o reconhecimento facial.',
      price: 'A partir de R$ 180',
      time: '24h a 48h',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      category: 'molhados',
      title: 'Desoxidação Ultrassônica (Molhado)',
      description: 'Tratamento imediato em cuba ultrassônica para remover corrosão e água dos componentes internos.',
      price: 'A partir de R$ 100',
      time: '2h a 5h',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      category: 'conectores',
      title: 'Troca de Conector de Carga',
      description: 'Substituição do dock de carga tipo C ou Lightning para celulares com mau contato ao carregar.',
      price: 'A partir de R$ 80',
      time: '30 min',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      category: 'telas',
      title: 'Troca de Tampa Traseira a Laser',
      description: 'Remoção do vidro traseiro de iPhones e Galaxies com máquina a laser, sem abrir o aparelho.',
      price: 'A partir de R$ 150',
      time: '1h 30m',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredServices = activeCategory === 'todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleOpenModal = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-400 selection:text-slate-950">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-teal-400 to-emerald-500 p-2.5 rounded-xl text-slate-950 font-bold shadow-lg shadow-teal-500/20">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white uppercase block leading-none">
                  MobileFix <span className="text-teal-400">Express</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase block mt-1">
                  Especialistas em Celulares
                </span>
              </div>
            </div>

            {/* Links Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
              <a href="#servicos" className="hover:text-teal-400 transition-colors">Serviços</a>
              <a href="#simulador" className="hover:text-teal-400 transition-colors">Simulador</a>
              <a href="#diferenciais" className="hover:text-teal-400 transition-colors">Garantia</a>
              <a href="#depoimentos" className="hover:text-teal-400 transition-colors">Avaliações</a>
              <a href="#contato" className="hover:text-teal-400 transition-colors">Lojas</a>
            </nav>

            {/* CTA Header */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">WhatsApp Rápido</span>
                <a href="tel:11999999999" className="text-sm font-black text-teal-400 hover:underline">
                  (11) 97777-8888
                </a>
              </div>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-teal-500/20 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                Consertar Agora
              </button>
            </div>

            {/* Mobile Hamburguer */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#servicos" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 font-medium text-sm"
            >
              Serviços
            </a>
            <a 
              href="#simulador" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 font-medium text-sm"
            >
              Simulador
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 font-medium text-sm"
            >
              Garantia
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-teal-400 font-medium text-sm"
            >
              Avaliações
            </a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleOpenModal(); }}
              className="w-full bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-center mt-2 text-xs uppercase tracking-wider"
            >
              Consertar Agora
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold uppercase tracking-widest">
                <Flame className="w-4 h-4 text-teal-400" /> Reparo de Tela na Sua Frente em 30 Minutos
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                Seu celular novo de novo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-green-400">sem complicação.</span>
              </h1>
              
              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Trocamos tela, bateria e conectores de todas as marcas. Peças originais com até 1 ano de garantia. Levamos e trazemos seu celular via Motoboy!
              </p>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 group"
                >
                  Orçamento Rápido no WhatsApp
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#simulador"
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-teal-400" />
                  Simular Conserto
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">+35 mil</span>
                  <span className="text-xs text-slate-400">Celulares Salvos</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-teal-400 block">1 Ano</span>
                  <span className="text-xs text-slate-400">Garantia em Peças</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">30 min</span>
                  <span className="text-xs text-slate-400">Tempo Médio de Troca</span>
                </div>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400/30 to-emerald-500/30 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800" 
                    alt="Conserto de Celular em Bancada" 
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-400/20 text-teal-400 p-2.5 rounded-xl border border-teal-400/30">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Serviço Leva e Traz via Motoboy</p>
                        <p className="text-slate-400 text-xs">Buscamos o celular no seu trabalho ou residência</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRIP DE INFORMAÇÕES */}
      <section className="bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 py-5 font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Horário de Atendimento</p>
                <p className="text-sm font-black">Seg a Sex: 08:30h às 19:00h | Sáb: 09h às 14h</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Endereço Principal</p>
                <p className="text-sm font-black">Rua dos Smartphones, 500 - Paulista, SP</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Diagnóstico Presencial</p>
                <p className="text-sm font-black">Avaliação e Testes 100% Gratuitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Especialidades</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Serviços para Todas as Marcas</p>
            <p className="text-slate-400 mt-3 text-sm">Apple iPhone, Samsung, Xiaomi, Motorola, ASUS, Realme e mais.</p>
          </div>

          {/* Filtros */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: 'todos', label: 'Todos os Reparos' },
              { id: 'telas', label: 'Telas & Vidros' },
              { id: 'baterias', label: 'Baterias' },
              { id: 'placa', label: 'Placa Mãe' },
              { id: 'molhados', label: 'Celulares Molhados' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/20' 
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-teal-400/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/90 text-teal-400 p-2 rounded-xl border border-slate-800">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Pronto em: {service.time}</span>
                      <span className="text-sm font-bold text-teal-400">{service.price}</span>
                    </div>
                    <button 
                      onClick={() => handleOpenModal(service.title)}
                      className="bg-slate-800 hover:bg-teal-400 hover:text-slate-950 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SIMULADOR DE CONSERTO */}
      <section id="simulador" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-widest">
                <Calculator className="w-4 h-4" /> Calculadora de Reparo
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">Simule o Valor do seu Conserto</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Escolha a marca do seu celular, o reparo necessário e o método de envio para obter uma estimativa de preço instantânea.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                <Truck className="w-6 h-6 text-teal-400 shrink-0" />
                <span>Atendemos também via Motoboy Leva e Traz para toda a região metropolitana.</span>
              </div>
            </div>

            {/* Painel Interativo */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              
              {/* Etapa 1: Marca */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  1. Qual é a Marca do seu Celular?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {brands.map(b => (
                    <button
                      key={b.id}
                      onClick={() => setPhoneBrand(b.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        phoneBrand === b.id 
                          ? 'border-teal-400 bg-teal-400/10 text-teal-300 font-bold' 
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs">{b.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Etapa 2: Reparo */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  2. Qual Serviço você precisa?
                </label>
                <div className="space-y-2">
                  {servicePrices.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setServiceNeeded(s.id)}
                      className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${
                        serviceNeeded === s.id 
                          ? 'border-teal-400 bg-teal-400/10 text-white font-semibold' 
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{s.label}</span>
                      {serviceNeeded === s.id && <Check className="w-4 h-4 text-teal-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Etapa 3: Entrega */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  3. Como prefere a Entrega?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'loja', label: 'Vou Levar na Loja (Grátis)' },
                    { id: 'motoboy', label: 'Motoboy Leva e Traz (+ R$ 30)' }
                  ].map(d => (
                    <button
                      key={d.id}
                      onClick={() => setDeliveryOption(d.id)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                        deliveryOption === d.id 
                          ? 'border-teal-400 bg-teal-400/10 text-teal-300' 
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Totalizador */}
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Estimativa Aproximada</span>
                  <span className="text-3xl font-black text-teal-400">R$ {calculateEstimate()},00</span>
                </div>
                <button 
                  onClick={() => handleOpenModal(`Simulação: ${phoneBrand.toUpperCase()} (${serviceNeeded}) - R$ ${calculateEstimate()}`)}
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Agendar com Esta Estimativa
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Por que a MobileFix?</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Sua Segurança em Primeiro Lugar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Até 1 Ano de Garantia',
                desc: 'Todas as trocas de tela e bateria acompanham termo assinado com cobertura total contra defeitos de fabricação.'
              },
              {
                icon: Clock,
                title: 'Conserto no Mesmo Dia',
                desc: '90% dos reparos são entregues em até 45 minutos. Você não precisa deixar o celular parado por dias.'
              },
              {
                icon: CheckCircle2,
                title: 'Dados 100% Preservados',
                desc: 'Não formatamos o seu aparelho durante trocas de tela ou bateria. Suas fotos e WhatsApp ficam intactos.'
              }
            ].map((diff, idx) => {
              const IconComp = diff.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-teal-400/40 transition-all">
                  <div className="bg-teal-400/10 text-teal-400 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-400/20">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{diff.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Clientes Satisfeitos</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Avaliações Reais no Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Matheus Garcia',
                device: 'iPhone 12 Pro',
                comment: 'Trocaram a tela do meu iPhone na minha frente em 25 minutos! Atendimento atencioso e a tela ficou com as cores perfeitas.',
                stars: 5
              },
              {
                name: 'Carla Menezes',
                device: 'Samsung Galaxy S22',
                comment: 'Usei o serviço de Motoboy Leva e Traz. Buscaram no meu trabalho de manhã e devolveram o celular com bateria nova à tarde!',
                stars: 5
              },
              {
                name: 'Thiago Nogueira',
                device: 'Xiaomi Poco X3',
                comment: 'O celular não ligava mais por causa de água. Fiz a desoxidação e voltou a funcionar perfeitamente com todos os meus arquivos salvo!',
                stars: 5
              }
            ].map((dep, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-teal-400 mb-4">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-teal-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs italic leading-relaxed mb-6">
                    "{dep.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-900">
                  <p className="text-white font-bold text-sm">{dep.name}</p>
                  <p className="text-teal-400 text-xs">{dep.device}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer id="contato" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-teal-400 p-2 rounded-lg text-slate-950 font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-lg font-black text-white uppercase tracking-wider">
                  MobileFix <span className="text-teal-400">Express</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assistência técnica especializada em smartphones e celulares de todas as marcas com diagnóstico rápido e peças de alta qualidade.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Serviços de Conserto</a></li>
                <li><a href="#simulador" className="hover:text-teal-400 transition-colors">Simulador de Valores</a></li>
                <li><a href="#diferenciais" className="hover:text-teal-400 transition-colors">Garantia & Peças</a></li>
                <li><a href="#depoimentos" className="hover:text-teal-400 transition-colors">Avaliações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Funcionamento</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-slate-200 font-semibold">08:30 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-slate-200 font-semibold">09:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-teal-400">
                  <span>Domingo:</span>
                  <span className="font-semibold">Fechado</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Endereço & Contato</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Rua dos Smartphones, 500 - Paulista, São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>(11) 97777-8888 / (11) 3333-9999</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} MobileFix Express. Todos os direitos reservados. Projeto criado para portfólio.
          </div>
        </div>
      </footer>

      {/* MODAL DE AGENDAMENTO / ORÇAMENTO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-400/10 text-teal-400 p-3 rounded-xl border border-teal-400/20">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Solicitar Orçamento de Celular</h3>
                <p className="text-xs text-slate-400">Resposta em até 10 minutos pelo WhatsApp</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Orçamento enviado! Entraremos em contato via WhatsApp.'); setIsModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ex: Roberto Silva"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Modelo do Celular</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: iPhone 13 / Moto G60"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Problema no Aparelho</label>
                <input 
                  type="text" 
                  defaultValue={selectedService}
                  placeholder="Ex: Tela quebrada, bateria viciada, não carrega..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Modalidade</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400">
                    <option>Vou Levar na Loja</option>
                    <option>Motoboy Leva e Traz</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Data Desejada</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-teal-500/20 mt-2"
              >
                Enviar Orçamento no WhatsApp
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}