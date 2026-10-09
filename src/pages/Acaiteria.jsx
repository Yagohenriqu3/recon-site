import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Heart, 
  Plus, 
  Check, 
  Calculator, 
  Flame, 
  Utensils 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState('');

  // Estado para o simulador "Monte seu Copo"
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [selectedBase, setSelectedBase] = useState('Açaí Tradicional Premium');
  const [selectedToppings, setSelectedToppings] = useState(['Granola Crocante', 'Leite em Pó', 'Banana fatiada']);

  const sizes = [
    { id: '300ml', label: '300 ml', price: 16 },
    { id: '500ml', label: '500 ml', price: 22 },
    { id: '700ml', label: '700 ml', price: 28 },
    { id: '1000ml', label: '1 Litro', price: 38 },
  ];

  const bases = [
    'Açaí Tradicional Premium',
    'Açaí Zero Açúcar (Com Xylitol)',
    'Açaí Batido com Banana',
    'Creme de Cupuaçu Regional',
    'Casadinho (Açaí + Cupuaçu)'
  ];

  const availableToppings = [
    'Granola Crocante',
    'Leite em Pó',
    'Leite Condensado',
    'Banana fatiada',
    'Morango fresco',
    'Paçoca rolha',
    'Nutella pura',
    'Creme de Ninho',
    'Kiwi fatiado',
    'Confete de Chocolate',
    'Chocoball',
    'Mel Puro'
  ];

  const toggleTopping = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    } else {
      if (selectedToppings.length < 5) {
        setSelectedToppings([...selectedToppings, topping]);
      } else {
        alert('Você pode selecionar até 5 acompanhamentos na simulação!');
      }
    }
  };

  const calculateCustomPrice = () => {
    const sizeObj = sizes.find(s => s.id === selectedSize);
    let total = sizeObj ? sizeObj.price : 22;
    if (selectedToppings.includes('Nutella pura')) total += 4;
    if (selectedToppings.includes('Creme de Ninho')) total += 3;
    return total;
  };

  const products = [
    {
      id: 1,
      category: 'copos',
      title: 'Tropical Nutella Royale',
      desc: 'Açaí premium de 500ml, banana, morango, leite em pó, bastante Nutella pura e granola crocante.',
      price: 'R$ 26,00',
      badge: 'Mais Vendido',
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      category: 'copos',
      title: 'Copão Ninho com Morango',
      desc: 'Açaí 500ml montado em camadas com generoso creme de Ninho, morangos frescos e leite condensado.',
      price: 'R$ 24,00',
      badge: 'Favorito',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'fit',
      title: 'Açaí Fitness Energy',
      desc: 'Açaí Zero açúcar, pasta de amendoim integral, banana, aveia em flocos e Whey Protein isolado.',
      price: 'R$ 25,00',
      badge: 'Zero Açúcar',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      category: 'especiais',
      title: 'Casadinho Amazônico',
      desc: 'Metade açaí artesanal e metade creme de cupuaçu com pedaços de castanha-do-pará e mel regional.',
      price: 'R$ 27,00',
      badge: 'Exótico',
      image: 'https://images.unsplash.com/photo-1502741126161-b048400d085d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      category: 'especiais',
      title: 'Barca Tropical (800ml)',
      desc: 'Barca recheada com açaí e 6 acompanhamentos à sua escolha: Nutella, kitkat, frutas e caldas à vontade.',
      price: 'R$ 45,00',
      badge: 'Para Compartilhar',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      category: 'fit',
      title: 'Smoothie Frutas Vermelhas',
      desc: 'Batido gelado de açaí com amora, mirtilo, morango e água de coco natural.',
      price: 'R$ 18,00',
      badge: 'Refrescante',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleOpenModal = (itemName = '') => {
    setModalItem(itemName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-purple-950 text-purple-100 font-sans selection:bg-fuchsia-500 selection:text-purple-950">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-purple-950/90 backdrop-blur-md border-b border-purple-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-fuchsia-500 to-purple-500 p-2.5 rounded-2xl text-white font-bold shadow-lg shadow-fuchsia-500/20">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-wider text-white uppercase block leading-none">
                  Tropical <span className="text-fuchsia-400">Açaí</span>
                </span>
                <span className="text-[10px] text-purple-300 font-medium tracking-widest uppercase block mt-0.5">
                  Açaí & Smoothie Bar
                </span>
              </div>
            </div>

            {/* Links Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-purple-200">
              <a href="#cardapio" className="hover:text-fuchsia-400 transition-colors">Cardápio</a>
              <a href="#monte-seu-copo" className="hover:text-fuchsia-400 transition-colors">Monte seu Copo</a>
              <a href="#diferenciais" className="hover:text-fuchsia-400 transition-colors">Qualidade</a>
              <a href="#depoimentos" className="hover:text-fuchsia-400 transition-colors">Avaliações</a>
              <a href="#contato" className="hover:text-fuchsia-400 transition-colors">Lojas</a>
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => handleOpenModal()}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-fuchsia-500/20 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Pedir Delivery
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-purple-200 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-900 border-b border-purple-800 px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#cardapio" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-purple-100 hover:text-fuchsia-400 font-medium text-sm"
            >
              Cardápio
            </a>
            <a 
              href="#monte-seu-copo" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-purple-100 hover:text-fuchsia-400 font-medium text-sm"
            >
              Monte seu Copo
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-purple-100 hover:text-fuchsia-400 font-medium text-sm"
            >
              Qualidade
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-purple-100 hover:text-fuchsia-400 font-medium text-sm"
            >
              Avaliações
            </a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleOpenModal(); }}
              className="w-full bg-fuchsia-500 text-white font-bold py-3 rounded-xl text-center mt-2 text-xs uppercase tracking-wider"
            >
              Pedir Delivery
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/30 px-3.5 py-1.5 rounded-full text-fuchsia-300 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-fuchsia-400" /> Açaí 100% Puro e Artesanal
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                O sabor <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-300">irresistível</span> da verdadeira fruta.
              </h1>
              
              <p className="text-purple-200 text-base sm:text-lg max-w-xl leading-relaxed">
                Açaí cremoso batido na hora, zero xarope artificial, opções fit e mais de 30 acompanhamentos selecionados para você montar seu copo perfeito.
              </p>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all shadow-xl shadow-fuchsia-500/20 flex items-center justify-center gap-2 group"
                >
                  Fazer Pedido Agora
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#monte-seu-copo"
                  className="bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-700/60 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-fuchsia-400" />
                  Simular Copo
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="pt-8 border-t border-purple-800/80 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">+50k</span>
                  <span className="text-xs text-purple-300">Copos Entregues</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-fuchsia-400 block">4.9 ★</span>
                  <span className="text-xs text-purple-300">Nota no iFood</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block">35 min</span>
                  <span className="text-xs text-purple-300">Entrega Média</span>
                </div>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500 to-purple-600 blur-xl opacity-40"></div>
                <div className="relative rounded-3xl overflow-hidden border border-purple-700/60 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800" 
                    alt="Copo de Açaí Tropical" 
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-fuchsia-500/20 text-fuchsia-300 p-2.5 rounded-xl border border-fuchsia-500/30">
                        <Heart className="w-6 h-6 fill-fuchsia-500" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Cremosidade Sem Igual</p>
                        <p className="text-purple-300 text-xs">Açaí nativo do Pará colhido de forma sustentável</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRIP INFORMATIVO */}
      <section className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-5 font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Horário do Delivery</p>
                <p className="text-sm font-black">Todos os dias: 11h às 23h</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Endereço Principal</p>
                <p className="text-sm font-black">Av. das Palmeiras, 800 - Jardins</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">WhatsApp / Pedidos</p>
                <p className="text-sm font-black">(11) 97777-6666</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CARDÁPIO DE PRODUTOS */}
      <section id="cardapio" className="py-24 bg-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-2">Nosso Cardápio</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Combinações Campeãs</p>
            <p className="text-purple-300 mt-3 text-sm">Opções prontas preparadas com o equilíbrio perfeito de sabores e coberturas.</p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: 'todos', label: 'Todos os Prontos' },
              { id: 'copos', label: 'Copos Clássicos' },
              { id: 'fit', label: 'Linha Fit & Zero' },
              { id: 'especiais', label: 'Especiais & Barcas' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/20' 
                    : 'bg-purple-900/60 text-purple-300 hover:bg-purple-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Produtos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-purple-900/50 rounded-3xl border border-purple-800/80 overflow-hidden hover:border-fuchsia-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-fuchsia-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-purple-300 text-xs leading-relaxed mb-4">
                      {product.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-purple-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase block font-bold">Preço</span>
                    <span className="text-lg font-black text-fuchsia-400">{product.price}</span>
                  </div>
                  <button 
                    onClick={() => handleOpenModal(product.title)}
                    className="bg-purple-800 hover:bg-fuchsia-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Quero Este
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SIMULADOR MONTE SEU COPO */}
      <section id="monte-seu-copo" className="py-20 bg-purple-900/60 border-y border-purple-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-fuchsia-400 font-bold text-xs uppercase tracking-widest">
                <Calculator className="w-4 h-4" /> Monte Seu Açaí
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">Simulador de Copo Personalizado</h2>
              <p className="text-purple-200 text-sm leading-relaxed">
                Monte a sua combinação ideal escolhendo o tamanho do copo, a base perfeita e seus acompanhamentos favoritos em tempo real.
              </p>
              <div className="bg-purple-950/80 p-4 rounded-2xl border border-purple-800 text-xs text-purple-300 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-fuchsia-400 shrink-0" />
                <span>Os primeiros 3 acompanhamentos são grátis em qualquer tamanho!</span>
              </div>
            </div>

            {/* Painel Interativo */}
            <div className="lg:col-span-7 bg-purple-950 rounded-3xl p-6 sm:p-8 border border-purple-800 shadow-2xl">
              
              {/* Passo 1: Tamanho */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">
                  1. Escolha o Tamanho do Copo
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {sizes.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSize(s.id)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        selectedSize === s.id 
                          ? 'border-fuchsia-500 bg-fuchsia-500/20 text-white font-bold' 
                          : 'border-purple-800 bg-purple-900/40 text-purple-300 hover:border-purple-700'
                      }`}
                    >
                      <span className="text-sm block">{s.label}</span>
                      <span className="text-xs text-fuchsia-400 font-bold">R$ {s.price},00</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Passo 2: Base */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">
                  2. Escolha o Sabor da Base
                </label>
                <select 
                  value={selectedBase}
                  onChange={(e) => setSelectedBase(e.target.value)}
                  className="w-full bg-purple-900/60 border border-purple-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500"
                >
                  {bases.map((base, idx) => (
                    <option key={idx} value={base}>{base}</option>
                  ))}
                </select>
              </div>

              {/* Passo 3: Toppings */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    3. Acompanhamentos (Escolha até 5)
                  </label>
                  <span className="text-xs font-semibold text-fuchsia-400">
                    {selectedToppings.length}/5 selecionados
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableToppings.map((top, idx) => {
                    const isSelected = selectedToppings.includes(top);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleTopping(top)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'border-fuchsia-500 bg-fuchsia-500/20 text-white' 
                            : 'border-purple-800/80 bg-purple-900/30 text-purple-300 hover:border-purple-700'
                        }`}
                      >
                        <span className="truncate">{top}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Totalizador */}
              <div className="bg-purple-900/80 p-6 rounded-2xl border border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-bold">Valor Estimado do Copo</span>
                  <span className="text-3xl font-black text-fuchsia-400">R$ {calculateCustomPrice()},00</span>
                </div>
                <button 
                  onClick={() => handleOpenModal(`Copo Customizado ${selectedSize} - R$ ${calculateCustomPrice()}`)}
                  className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-fuchsia-500/20"
                >
                  Pedir Este Copo
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-2">Por que escolher o Tropical?</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Qualidade em Cada Colherada</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: 'Fruta Nativa Selecionada',
                desc: 'Açaí colhido diretamente da Amazônia, processado com alto teor de pureza e sem corantes sintéticos.'
              },
              {
                icon: Award,
                title: 'Textura Super Cremosa',
                desc: 'Bate com tecnologia especial de congelamento que garante consistência sem pedras de gelo.'
              },
              {
                icon: Heart,
                title: 'Insumos Premium',
                desc: 'Trabalhamos apenas com frutas frescas do dia, Nutella original, Leite Ninho e granolas artesanais.'
              }
            ].map((diff, idx) => {
              const IconComp = diff.icon;
              return (
                <div key={idx} className="bg-purple-900/40 border border-purple-800/80 p-8 rounded-3xl text-center hover:border-fuchsia-500/40 transition-all">
                  <div className="bg-fuchsia-500/10 text-fuchsia-400 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-fuchsia-500/20">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{diff.title}</h3>
                  <p className="text-purple-300 text-xs leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 bg-purple-900/40 border-t border-purple-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-2">Feedback dos Clientes</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase">Quem Provou, Amou!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Camila Rodrigues',
                tag: 'Cliente Assídua',
                comment: 'Melhor açaí da cidade sem dúvidas! A entrega é super rápida e o copo vem recheado até a borda com muita Nutella.',
                stars: 5
              },
              {
                name: 'Felipe Santana',
                tag: 'Atleta / Linha Fit',
                comment: 'O açaí zero com Whey e paçoca é o meu pós-treino sagrado. Cremoso demais e não fica com aquele sabor artificial.',
                stars: 5
              },
              {
                name: 'Beatriz Lima',
                tag: 'Fã de Doces',
                comment: 'A Barca Tropical é espetacular para o fim de semana com os amigos. As frutas chegam super frescas e bem embaladas.',
                stars: 5
              }
            ].map((dep, idx) => (
              <div key={idx} className="bg-purple-950 p-6 rounded-3xl border border-purple-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-fuchsia-400 mb-4">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-fuchsia-400" />
                    ))}
                  </div>
                  <p className="text-purple-200 text-xs italic leading-relaxed mb-6">
                    "{dep.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-purple-900">
                  <p className="text-white font-bold text-sm">{dep.name}</p>
                  <p className="text-fuchsia-400 text-xs">{dep.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer id="contato" className="bg-purple-950 text-purple-300 pt-16 pb-12 border-t border-purple-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-fuchsia-500 p-2 rounded-xl text-white font-bold">
                  <Utensils className="w-5 h-5" />
                </div>
                <span className="text-lg font-black text-white uppercase tracking-wider">
                  Tropical <span className="text-fuchsia-400">Açaí</span>
                </span>
              </div>
              <p className="text-xs text-purple-300 leading-relaxed">
                Açaí artesanal, sabor incomparável e energia natural para deixar o seu dia muito mais gostoso.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#cardapio" className="hover:text-fuchsia-400 transition-colors">Cardápio Completo</a></li>
                <li><a href="#monte-seu-copo" className="hover:text-fuchsia-400 transition-colors">Monte seu Copo</a></li>
                <li><a href="#diferenciais" className="hover:text-fuchsia-400 transition-colors">Qualidade & Origem</a></li>
                <li><a href="#depoimentos" className="hover:text-fuchsia-400 transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Horários</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-white font-semibold">12:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado e Domingo:</span>
                  <span className="text-white font-semibold">11:00 - 00:00</span>
                </li>
                <li className="flex justify-between text-fuchsia-400">
                  <span>Feriados:</span>
                  <span className="font-semibold">Aberto Normalmente</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contato & Entregas</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span>Av. das Palmeiras, 800 - Jardins, São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>(11) 97777-6666 / (11) 3456-7890</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-purple-900 text-center text-xs text-purple-400">
            © {new Date().getFullYear()} Tropical Açaí Studio. Todos os direitos reservados. Projeto criado para portfólio.
          </div>
        </div>
      </footer>

      {/* MODAL DE PEDIDO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm">
          <div className="bg-purple-900 border border-purple-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-purple-300 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-fuchsia-500/20 text-fuchsia-400 p-3 rounded-2xl border border-fuchsia-500/30">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase">Finalizar Pedido</h3>
                <p className="text-xs text-purple-300">Preencha seus dados para entrega imediata via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Pedido enviado para o WhatsApp!'); setIsModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-purple-200 uppercase mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ex: Ana Silva"
                  className="w-full bg-purple-950 border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-fuchsia-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-200 uppercase mb-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(11) 99999-9999"
                    className="w-full bg-purple-950 border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-fuchsia-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-purple-200 uppercase mb-1">Forma de Pagamento</label>
                  <select className="w-full bg-purple-950 border border-purple-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-fuchsia-500">
                    <option>Pix / QR Code</option>
                    <option>Cartão de Crédito/Débito</option>
                    <option>Dinheiro (Com Troco)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-200 uppercase mb-1">Item Selecionado</label>
                <input 
                  type="text" 
                  defaultValue={modalItem || `Copo Customizado ${selectedSize}`}
                  className="w-full bg-purple-950 border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-fuchsia-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-200 uppercase mb-1">Endereço de Entrega</label>
                <textarea 
                  rows={2}
                  required
                  placeholder="Rua, número, bairro e complemento..."
                  className="w-full bg-purple-950 border border-purple-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-fuchsia-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-fuchsia-500/20 mt-2"
              >
                Enviar Pedido no WhatsApp
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}