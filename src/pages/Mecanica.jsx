import React, { useState } from 'react';
import { 
  Wrench, 
  Car, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Gauge, 
  Disc, 
  Cpu, 
  Settings, 
  Calculator 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  // Estado para o simulador de orçamento
  const [calcVehicle, setCalcVehicle] = useState('hatch');
  const [calcServices, setCalcServices] = useState({
    oleo: true,
    freios: false,
    suspensao: false,
    diagnostico: false
  });

  const services = [
    {
      id: 1,
      category: 'revisao',
      title: 'Revisão Geral Preventiva',
      description: 'Inspeção completa de mais de 50 itens de segurança, incluindo fluidos, filtros e correias.',
      price: 'A partir de R$ 290',
      icon: CheckCircle,
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      category: 'diagnostico',
      title: 'Diagnóstico Computadorizado',
      description: 'Análise avançada de injeção eletrônica e módulos do veículo com scanners de última geração.',
      price: 'A partir de R$ 150',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'mecanica',
      title: 'Sistema de Freios',
      description: 'Manutenção e troca de pastilhas, discos, fluído de freio e alinhamento de pinças.',
      price: 'A partir de R$ 180',
      icon: Disc,
      image: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      category: 'mecanica',
      title: 'Suspensão e Amortecedores',
      description: 'Substituição de amortecedores, buchas, pivôs e pivô com teste dinâmico de rodagem.',
      price: 'A partir de R$ 220',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      category: 'revisao',
      title: 'Alinhamento 3D e Balanceamento',
      description: 'Ajuste de precisão milimétrica com tecnologia a laser para maior durabilidade dos pneus.',
      price: 'A partir de R$ 120',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      category: 'mecanica',
      title: 'Câmbio Automático e Manual',
      description: 'Troca de óleo de câmbio por máquina de diálise e reparos estruturais mecânicos.',
      price: 'Sob Consulta',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredServices = activeCategory === 'todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // Cálculo da estimativa do simulador
  const calculateTotal = () => {
    let base = calcVehicle === 'suv' ? 1.3 : calcVehicle === 'sedan' ? 1.15 : 1.0;
    let total = 0;
    if (calcServices.oleo) total += 220;
    if (calcServices.freios) total += 180;
    if (calcServices.suspensao) total += 350;
    if (calcServices.diagnostico) total += 150;
    return Math.round(total * base);
  };

  const handleOpenModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white uppercase block leading-none">
                  AutoTech <span className="text-amber-500">Master</span>
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                  Centro Automotivo
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
              <a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços</a>
              <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a>
              <a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador</a>
              <a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a>
            </nav>

            {/* CTA Header */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Emergência / WhatsApp</span>
                <a href="tel:11999999999" className="text-sm font-bold text-amber-400 hover:underline">
                  (11) 99999-8888
                </a>
              </div>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-amber-500/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Horário
              </button>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#servicos" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 font-medium"
            >
              Serviços
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 font-medium"
            >
              Diferenciais
            </a>
            <a 
              href="#simulador" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 font-medium"
            >
              Simulador
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 font-medium"
            >
              Depoimentos
            </a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleOpenModal(); }}
              className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg text-center mt-2"
            >
              Agendar Horário
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Centro de Excelência Automotiva
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Seu veículo em mãos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">especializadas.</span>
              </h1>
              
              <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Manutenção preventiva e corretiva com tecnologia computadorizada de ponta, peças originais e garantia total em todos os serviços.
              </p>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/10 flex items-center justify-center gap-2 group"
                >
                  Agendar Orçamento Gratuito
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#simulador"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5 text-amber-400" />
                  Simular Custos
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">+15 mil</span>
                  <span className="text-xs text-slate-400">Veículos Atendidos</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 block">1 Ano</span>
                  <span className="text-xs text-slate-400">Garantia em Serviços</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">4.9 ★</span>
                  <span className="text-xs text-slate-400">Avaliação no Google</span>
                </div>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 opacity-30 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800" 
                    alt="Oficina Mecânica AutoTech Master" 
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg border border-emerald-500/30">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Oficina Certificada ISO 9001</p>
                        <p className="text-slate-400 text-xs">Equipe técnica treinada pelas montadoras</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BARRA DE INFORMAÇÕES RÁPIDAS */}
      <section className="bg-amber-500 text-slate-950 py-6 font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider font-bold">Horário de Atendimento</p>
                <p className="text-sm font-black">Seg a Sex: 08h às 18h | Sáb: 08h às 12h</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider font-bold">Localização Próxima</p>
                <p className="text-sm font-black">Av. dos Autombilistas, 1500 - SP</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider font-bold">Socorro Mecânico 24h</p>
                <p className="text-sm font-black">0800 777 9999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Especialidades</h2>
            <p className="text-3xl sm:text-4xl font-black text-white">Nossos Serviços de Manutenção</p>
            <p className="text-slate-400 mt-3">Soluções completas para veículos nacionais e importados com equipamentos de alta tecnologia.</p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: 'todos', label: 'Todos os Serviços' },
              { id: 'revisao', label: 'Revisões & Preventiva' },
              { id: 'mecanica', label: 'Mecânica Geral' },
              { id: 'diagnostico', label: 'Injeção Eletrônica' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
                  className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-slate-900/90 p-2 rounded-xl text-amber-400 border border-slate-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-700/50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 block">Estimativa</span>
                      <span className="text-sm font-bold text-amber-400">{service.price}</span>
                    </div>
                    <button 
                      onClick={() => handleOpenModal(service.title)}
                      className="bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-lg transition-all"
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

      {/* SIMULADOR DE ORÇAMENTO RÁPIDO */}
      <section id="simulador" className="py-20 bg-slate-850 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest">
                <Calculator className="w-4 h-4" /> Ferramenta Exclusiva
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Simule a Estimativa de Manutenção</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Monte uma prévia dos serviços necessários para o seu automóvel em poucos cliques e tenha transparência desde o primeiro instante.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400">
                * Os valores calculados são estimativas baseadas na média do tipo do veículo. O orçamento definitivo é emitido após inspeção presencial.
              </div>
            </div>

            {/* Painel da Calculadora */}
            <div className="lg:col-span-7 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
              
              {/* Etapa 1: Veículo */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  1. Selecione a Categoria do Veículo
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'hatch', label: 'Hatch / Compacto' },
                    { id: 'sedan', label: 'Sedan / Perua' },
                    { id: 'suv', label: 'SUV / Pick-up' }
                  ].map(v => (
                    <button
                      key={v.id}
                      onClick={() => setCalcVehicle(v.id)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${
                        calcVehicle === v.id 
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400' 
                          : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Etapa 2: Serviços */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  2. Selecione os Serviços Desejados
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { id: 'oleo', label: 'Troca de Óleo + Filtros', price: '~ R$ 220' },
                    { id: 'freios', label: 'Revisão de Pastilhas de Freio', price: '~ R$ 180' },
                    { id: 'suspensao', label: 'Checkup de Suspensão', price: '~ R$ 350' },
                    { id: 'diagnostico', label: 'Scanner de Injeção Eletrônica', price: '~ R$ 150' }
                  ].map(item => (
                    <label 
                      key={item.id} 
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        calcServices[item.id] 
                          ? 'border-amber-500/60 bg-amber-500/5 text-white' 
                          : 'border-slate-700 bg-slate-900/30 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={calcServices[item.id]} 
                          onChange={(e) => setCalcServices({...calcServices, [item.id]: e.target.checked})}
                          className="w-4 h-4 accent-amber-500 rounded"
                        />
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-500">{item.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Resultado do Simulador */}
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">Estimativa Total Aproximada</span>
                  <span className="text-3xl font-black text-amber-400">R$ {calculateTotal()},00</span>
                </div>
                <button 
                  onClick={() => handleOpenModal(`Simulação: R$ ${calculateTotal()}`)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-all"
                >
                  Agendar com Esta Estimativa
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Por que nos escolher</h2>
            <p className="text-3xl sm:text-4xl font-black text-white">O Padrão de Qualidade AutoTech</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Garantia de 1 Ano',
                desc: 'Garantia estendida em mão de obra e peças substituídas com nota fiscal.'
              },
              {
                icon: Cpu,
                title: 'Scanners Atualizados',
                desc: 'Tecnologia compatível com veículos de todas as marcas, inclusive importados premium.'
              },
              {
                icon: Clock,
                title: 'Agilidade no Diagnóstico',
                desc: 'Entrega do relatório mecânico e orçamento detalhado em até 2 horas.'
              },
              {
                icon: Award,
                title: 'Mecânicos Certificados',
                desc: 'Profissionais em constantes treinamentos pelas principais fabricantes automotivas.'
              }
            ].map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <div key={index} className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-2xl hover:border-amber-500/40 transition-all">
                  <div className="bg-amber-500/10 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-amber-500/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS DE CLIENTES */}
      <section id="depoimentos" className="py-20 bg-slate-850 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Opinião dos Clientes</h2>
            <p className="text-3xl sm:text-4xl font-black text-white">Quem Confia, Recomenda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Eduardo',
                car: 'Honda Civic 2020',
                comment: 'Excelente atendimento! Identificaram um problema na suspensão que duas outras oficinas não encontraram. Transparência total no orçamento.',
                stars: 5
              },
              {
                name: 'Mariana Silva',
                car: 'Jeep Compass 2022',
                comment: 'Adorei a facilidade de agendamento e a recepção. Me enviaram vídeos do carro na rampa explicando o que precisava ser trocado.',
                stars: 5
              },
              {
                name: 'Roberto Mendes',
                car: 'Volkswagen Jetta',
                comment: 'Serviço de alinhamento 3D impecável e troca do óleo de câmbio feita com perfeição. Virou minha oficina de confiança.',
                stars: 5
              }
            ].map((dep, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
                    "{dep.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700/60">
                  <p className="text-white font-bold text-sm">{dep.name}</p>
                  <p className="text-slate-500 text-xs">{dep.car}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER / RODAPÉ */}
      <footer id="contato" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Coluna 1: Sobre */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-amber-500 p-2 rounded-lg text-slate-950 font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-lg font-black text-white uppercase tracking-wider">
                  AutoTech <span className="text-amber-500">Master</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Referência em manutenção automotiva preventiva e corretiva com mais de 12 anos de atuação no mercado.
              </p>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a></li>
                <li><a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador de Orçamento</a></li>
                <li><a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Funcionamento</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-slate-200 font-semibold">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-slate-200 font-semibold">08:00 - 12:00</span>
                </li>
                <li className="flex justify-between text-amber-500">
                  <span>Domingo e Feriados:</span>
                  <span className="font-semibold">Fechado</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Endereço & Contato</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Av. dos Automobilistas, 1500 - Bairro Industrial, São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>(11) 3333-4444 / (11) 99999-8888</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} AutoTech Master. Todos os direitos reservados. Projeto criado para portfólio.
          </div>
        </div>
      </footer>

      {/* MODAL DE AGENDAMENTO / CONTATO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-500/10 text-amber-400 p-3 rounded-xl border border-amber-500/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Agendar Atendimento</h3>
                <p className="text-xs text-slate-400">Preencha os dados para confirmar a disponibilidade</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Agendamento enviado com sucesso!'); setIsModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Seu nome"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Modelo / Ano Veículo</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Civic 2020"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Serviço Principal</label>
                <input 
                  type="text" 
                  defaultValue={selectedService}
                  placeholder="Ex: Revisão Geral, Freios, Barulho na Suspensão..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Data Pretendida</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Período</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
                    <option>Manhã (08h - 12h)</option>
                    <option>Tarde (13h - 18h)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 mt-2"
              >
                Confirmar Agendamento
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}