import { FaCheck, FaLaptop, FaGlobe, FaCog } from 'react-icons/fa';
import Projeto1 from './assets/projeto1.png'
import Projeto2 from './assets/projeto2.png'
import Projeto3 from './assets/projeto3.png'
import Projeto4 from './assets/projeto4.png'
import Projeto5 from './assets/projeto5.png'
import Projeto6 from './assets/projeto6.png'

import { useState } from "react";

import Wpp from './Wpp'

import Heroimg from './assets/heroimg.png'
export default function PortfolioLanding() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Topbar / Logo */}
       <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <div>
              <span className="font-semibold text-lg">Recon</span>
              <div className="text-xs text-gray-500 -mt-0.5">Sites & Landing Pages</div>
            </div>
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <a href="#servicos" className="hover:text-blue-600">Serviços</a>
          <a href="#portfolio" className="hover:text-blue-600">Projetos</a>
          <a href="#depoimentos" className="hover:text-blue-600">Depoimentos</a>
          <a href="#orcamento" className="text-white bg-[#237EE6] px-4 py-2 rounded-md shadow">Orçamento</a>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            className="p-2 w-10 rounded-md border"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖️" : "☰"}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md flex flex-col gap-4 p-4 mt-2 z-20">
              <a href="#servicos" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Serviços</a>
              <a href="#portfolio" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projetos</a>
              <a href="#depoimentos" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Depoimentos</a>
              <a href="#orcamento" className="text-white bg-[#237EE6] px-4 py-2 rounded-md shadow" onClick={() => setMenuOpen(false)}>Orçamento</a>
            </div>
          )}
        </div>
      </div>
    </header>

      {/* Hero */}
      <main id="hero" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-3xl font-extrabold leading-tight">Transformamos sua presença digital com sites e landing pages modernas, funcionais e que destacam sua marca na web.</h1>
            <p className="mt-4 text-lg text-gray-600">Design limpo, performance otimizada e SEO básico incluso.  interfaces escaláveis e fáceis de manter.</p>

            <div className="mt-6 flex gap-4">
              <a href="#orcamento" className="inline-block bg-[#237EE6] text-white px-5 py-3 rounded-lg shadow hover:opacity-95">Pedir orçamento</a>
              <a href="#portfolio" className="inline-block border px-5 py-3 rounded-lg">Ver projetos</a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <li className='flex items-center'> <FaCheck className="text-green-500 w-6 mr-2" />Entregas rápidas</li>
              <li className='flex items-center'> <FaCheck className="text-green-500 w-6 mr-2 " />Responsivo e acessível</li>
              <li className='flex items-center'> <FaCheck className="text-green-500 w-6 mr-2 " />Integração com CMS / Formulários</li>
              <li className='flex items-center'> <FaCheck className="text-green-500 w-6 mr-2 " />Hospedagem e manutenção</li>
            </ul>
          </div>

          <div>
            {/* Hero image placeholder - REPLACE with /public/images/hero.jpg */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={Heroimg} alt="Mockup do projeto" className="w-full h-72 object-cover bg-gray-100" />
            </div>
            
          </div>
        </div>
      </main>

      {/* Services */}
      <section id="servicos" className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Serviços</h2>
          <p className="text-gray-600 mt-2">Escolha o pacote ideal para o seu negócio.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"> <FaLaptop className="w-8 text-[#237EE6]"  /></div>
              <h3 className="mt-4 font-semibold">Landing page</h3>
              <p className="mt-2 text-sm text-gray-600">Página única focada em conversão, formulário integrado e otimização para anúncios.</p>
              <div className="mt-4 font-medium">A partir de R$ 600</div>
            </div>

            <div className="p-6 border rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"> <FaGlobe className="w-8 text-[#237EE6]" /></div>
              <h3 className="mt-4 font-semibold">Site Institucional</h3>
              <p className="mt-2 text-sm text-gray-600">Multi-página, seção de serviços, blog básico e SEO inicial.</p>
              <div className="mt-4 font-medium">A partir de R$ 1.600</div>
            </div>

            <div className="p-6 border rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"><FaCog className="w-8 text-[#237EE6]"  /></div>
              <h3 className="mt-4 font-semibold">Manutenção & Hospedagem</h3>
              <p className="mt-2 text-sm text-gray-600">Planos mensais com atualizações de conteúdo, backups e suporte. Revenda HostGator possível.</p>
              <div className="mt-4 font-medium">A partir de R$ 49/mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Projetos recentes</h2>
          <p className="text-gray-600 mt-2"></p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Projeto 1 */}
  <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto1} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>

  {/* Projeto 2 */}
   <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto2} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>

  {/* Projeto 3 */}
 <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto3} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>

  {/* Projeto 4 */}
  <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto4} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>

  {/* Projeto 5 */}
  <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto5} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>

  {/* Projeto 6 */}
    <article className="border rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
    <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
      <img src={Projeto6} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
    </div>
  </article>
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-gray-50 py-12 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Depoimentos</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"A NexaSites transformou nosso site. Conversões aumentaram em 40% — super recomendo."</p>
              <footer className="mt-4 text-sm text-gray-500">— Marina Lopes, Clínica Saúde+</footer>
            </blockquote>

            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"Entrega rápida e comunicação excelente. O site ficou lindo no celular."</p>
              <footer className="mt-4 text-sm text-gray-500">— João Costa, Loja RB</footer>
            </blockquote>

            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"Ótimo custo-benefício e manutenção prática. Hospedagem via HostGator sem complicação."</p>
              <footer className="mt-4 text-sm text-gray-500">— Projeto fictício</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Quote / Orçamento Form */}
      <section id="orcamento" className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Peça um orçamento</h2>
          <p className="text-gray-600 mt-2">Preencha o formulário e eu entro em contato com uma proposta personalizada.</p>

          <form className="mt-6 grid gap-4 justify-center max-w-[95vw] ">
            <div className="grid sm:grid-cols-2 gap-4 md:w-[60vw]">
              <input type="text" name="nome" placeholder="Seu nome*" className="px-4 py-3 border rounded-lg" required />
              <input type="email" name="email" placeholder="Seu email*" className="px-4 py-3 border rounded-lg" required />
            </div>

            <input type="text" name="empresa" placeholder="Empresa (opcional)" className="px-4 py-3 border rounded-lg" />

            <select name="servico" className="px-4 py-3 border rounded-lg">
              <option>Escolha um serviço</option>
              <option>Landing page</option>
              <option>Site institucional</option>
              <option>Manutenção e Hospedagem</option>
            </select>

            <textarea name="descricao" rows="5" placeholder="Conte brevemente sobre o projeto (objetivo, público, prazo)..." className="px-4 py-3 border rounded-lg"></textarea>

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-[#237EE6] text-white px-5 py-3 rounded-lg">Enviar pedido</button>
              <button type="reset" className="px-4 py-3 border rounded-lg">Limpar</button>
            </div>

          </form>
        </div>
      </section>
      
    <Wpp/>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Recon</div>
          <div className="flex gap-4">
            <a href="#">Política de privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
