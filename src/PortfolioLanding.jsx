import { FaCheck, FaLaptop, FaGlobe, FaCog, FaMapMarkerAlt, FaUsers, FaShoppingCart, FaHandshake, FaArrowUp, FaTimes } from 'react-icons/fa';
import Projeto1 from './assets/projeto1.png'
import Projeto2 from './assets/projeto2.png'
import Projeto3 from './assets/projeto3.png'
import Projeto4 from './assets/projeto4.png'
import Projeto5 from './assets/projeto5.png'
import Projeto6 from './assets/projeto6.png'

import { useState } from "react";
import Wpp from './Wpp'
import Heroimg from './assets/heroimg.png'
import Site1 from './assets/site1.png'
import Site2 from './assets/site2.png'

export default function PortfolioLanding() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Topbar / Logo */}
      <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <div>
                <span className="font-semibold text-lg">Recon</span>
                <div className="text-xs text-gray-500 -mt-0.5">Sites & Landing Pages</div>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <a href="#servicos" className="hover:text-blue-600">Serviços</a>
            <a href="#portfolio" className="hover:text-blue-600">Projetos</a>
            <a href="#depoimentos" className="hover:text-blue-600">Depoimentos</a>
            <a href="#orcamento" className="text-white bg-[#237EE6] px-4 py-2 rounded-md shadow">Orçamento</a>
          </nav>

          <div className="md:hidden">
            <button
              className="p-2 w-10 rounded-md border"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖️" : "☰"}
            </button>
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
            <p className="mt-4 text-lg text-gray-600">Design limpo, performance otimizada e SEO básico incluso. Interfaces escaláveis e fáceis de manter.</p>

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

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Heroimg} alt="Mockup do projeto" className="w-full h-72 object-cover bg-gray-100" />
          </div>
        </div>
      </main>

      {/* Novas Seções — logo abaixo do Hero */}

      {/* 2️⃣ Por que sua empresa precisa de um site profissional */}
      <section className="bg-gray-50 py-12 px-6 mb-20 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Site1} alt="Cliente usando notebook" className="w-full h-64 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl text-left font-semibold mb-4">Sua presença online começa aqui</h2>
            <p className="text-gray-700 text-left mb-4">Hoje, a primeira impressão do seu negócio acontece na internet. Se você depende apenas do boca a boca ou das redes sociais, está deixando de alcançar novos clientes todos os dias. Um site profissional mostra credibilidade, gera confiança e coloca sua empresa no mapa — literalmente.</p>
            <ul className="flex flex-col gap-3 text-gray-700">
              <li className="flex items-center gap-2"><FaLaptop className="text-blue-600" /> Cliente navegando no notebook</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-600" /> Destaque no Google Maps</li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* 3️⃣ GMB x GMB + Site */}
      <section className="py-12 px-6 max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Vantagens de ter uma exelente presença online</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2">Recurso</th>
                <th className="px-4 py-2">Apenas Google Meu Negócio</th>
                <th className="px-4 py-2">Google Meu Negócio + Site</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2">Presença online completa</td>
                <td className="px-4 py-2 text-left"><FaTimes className='text-red-500'/></td>
                <td className="px-4 py-2 text-left"><FaCheck className='text-green-600'/></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Vendas online / catálogo</td>
                <td className="px-4 py-2 text-left"><FaTimes className='text-red-500'/></td>
                <td className="px-4 py-2 text-left"><FaCheck className='text-green-600'/></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Credibilidade e autoridade</td>
                <td className="px-4 py-2 textleftr">⚪ Básica</td>
                <td className="px-4 py-2 text-left">⚪ Alta</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Controle da imagem da marca</td>
                <td className="px-4 py-2 text-left"><FaTimes className='text-red-500'/></td>
                <td className="px-4 py-2 text-left"><FaCheck className='text-green-600'/></td>
              </tr>
              <tr>
                <td className="px-4 py-2">Comunicação personalizada</td>
                <td className="px-4 py-2 text-left"><FaTimes className='text-red-500'/></td>
                <td className="px-4 py-2 text-left"><FaCheck className='text-green-600'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-700">Ter apenas o Google Meu Negócio é como ter uma placa na rua: útil, mas limitada. Com um site profissional, você apresenta sua marca, produtos e diferenciais de forma completa e estratégica.</p>
      </section>

      {/* 4️⃣ O Que Muda na Prática */}
      <section className="bg-gray-50 py-12 px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Resultados que você sente no dia a dia</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3"><FaArrowUp className="text-blue-600"/> Mais visibilidade — apareça antes dos concorrentes.</li>
              <li className="flex items-center gap-3"><FaHandshake className="text-blue-600"/> Mais credibilidade — passe confiança e profissionalismo.</li>
              <li className="flex items-center gap-3"><FaShoppingCart className="text-blue-600"/> Mais vendas — conquiste novos clientes 24h por dia.</li>
              <li className="flex items-center gap-3"><FaUsers className="text-blue-600"/> Mais conexão — fale com quem busca exatamente o que você oferece.</li>
            </ul>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={Site2} alt="Cliente feliz usando notebook ou celular" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ GMB + SITE = Casamento Perfeito */}
      <section className="py-12 px-6 max-w-6xl mx-auto mb-20">
       
        <p className="text-gray-700 mb-6 text-[1.5em]">Quando você une o Google Meu Negócio a um site profissional, o resultado é visibilidade com autoridade. Sua empresa se torna fácil de encontrar, confiável e irresistível para o cliente certo.</p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border border-gray-400 rounded-lg bg-blue-50">
            <div className="text-2xl font-bold text-blue-600">+40%</div>
            <div className="text-gray-700 mt-2">mais clientes encontrando você online</div>
          </div>
          <div className="p-4 border border-gray-400 rounded-lg bg-blue-50">
            <div className="text-2xl font-bold text-blue-600">+30%</div>
            <div className="text-gray-700 mt-2">de contatos e orçamentos</div>
          </div>
          <div className="p-4 border border-gray-400 rounded-lg bg-blue-50">
            <div className="text-2xl font-bold text-blue-600">+50%</div>
            <div className="text-gray-700 mt-2">mais credibilidade percebida</div>
          </div>
        </div>
      </section>
      

      {/* Services */}
      <section id="servicos" className="bg-white py-12 border-t border-gray-400 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Serviços</h2>
          <p className="text-gray-600 mt-2">Escolha o pacote ideal para o seu negócio.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-400 rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"> <FaLaptop className="w-8 text-[#237EE6]"  /></div>
              <h3 className="mt-4 font-semibold">Landing page</h3>
              <p className="mt-2 text-sm text-gray-600">Página única focada em conversão, formulário integrado e otimização para anúncios.</p>
              <div className="mt-4 font-medium">A partir de R$ 289,90</div>
            </div>

            <div className="p-6 border border-gray-400  rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"> <FaGlobe className="w-8 text-[#237EE6]" /></div>
              <h3 className="mt-4 font-semibold">Site Institucional</h3>
              <p className="mt-2 text-sm text-gray-600">Multi-página, seção de serviços, blog básico e SEO inicial.</p>
              <div className="mt-4 font-medium">A partir de R$ 599,90</div>
            </div>

            <div className="p-6 border border-gray-400 rounded-xl hover:scale-105 duration-150">
              <div className="text-3xl flex justify-center"><FaCog className="w-8 text-[#237EE6]"  /></div>
              <h3 className="mt-4 font-semibold">Manutenção & Hospedagem</h3>
              <p className="mt-2 text-sm text-gray-600">Planos mensais com atualizações de conteúdo, backups, suporte e hospedagem.</p>
              <div className="mt-4 font-medium">A partir de R$ 30/mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Projetos recentes</h2>
          <p className="text-gray-600 mt-2"></p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Projeto 1 */}
    <a href="https://yagohenriqu3.github.io/biblioteca/" target='_blank'>
      <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto1} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
        </div>
      </article>
    </a>
  
    {/* Projeto 2 */}
     <a href="https://landing-page-estetica-1.vercel.app/" target='_blank'>
       <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto2} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
       
        </div>
         </article>
     </a>
  
    {/* Projeto 3 */}
   <a href="https://yagohenriqu3.github.io/htmw/" target='_blank'>
     <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto3} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
     
        </div>
      </article>
   </a>
  
    {/* Projeto 4 */}
    <a href="https://yagohenriqu3.github.io/projeto-backend/" target='_blank'>
      <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto4} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
        </div>
      </article>
    </a>
  
    {/* Projeto 5 */}
    <a href="https://valueware.com.br/" target='_blank'>
      <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto5} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      
        </div>
      </article>
    </a>
  
    {/* Projeto 6 */}
      <a href="https://yagohenriqu3.github.io/julianacastro/" target='_blank'>
        <article className="border border-gray-400 rounded-xl overflow-hidden group hover:scale-150 transition-transform duration-300">
        <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
          <img src={Projeto6} alt="Projeto 1" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        
        </div>
          </article>
      </a>
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-gray-50 py-12 border-t  border-gray-400 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Depoimentos</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"A Recon transformou nosso site. Conversões aumentaram em 40% — super recomendo."</p>
              <footer className="mt-4 text-sm text-gray-500">— Marina Lopes, Clínica Saúde+</footer>
            </blockquote>

            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"Entrega rápida e comunicação excelente. O site ficou lindo no celular."</p>
              <footer className="mt-4 text-sm text-gray-500">— João Costa, Loja RB</footer>
            </blockquote>

            <blockquote className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">"Ótimo custo-benefício e manutenção prática. Hospedagem sem complicação."</p>
              <footer className="mt-4 text-sm text-gray-500">— Projeto fictício</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Quote / Orçamento Form */}
     
     {/*
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
      */}

      <section id="orcamento" className="py-16 bg-gray-50">
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl font-semibold text-gray-800">
      Peça seu orçamento agora mesmo 💬
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      Quer um site profissional para destacar seu negócio?  
      Fale diretamente comigo no WhatsApp e receba uma proposta personalizada em poucos minutos.
    </p>

    <a
      href=" https://wa.me/5521970276413 " 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#10E686] hover:bg-[#0bcf76] text-white text-lg font-medium mt-8 px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12.04 2C6.52 2 2 6.52 2 12.04c0 1.85.48 3.65 1.39 5.23L2 22l4.86-1.36A10.03 10.03 0 0012.04 22C17.56 22 22 17.48 22 12.04 22 6.52 17.56 2 12.04 2zm5.66 14.48c-.24.68-1.4 1.31-1.94 1.36-.49.05-1.11.07-1.8-.11-.41-.11-.94-.3-1.62-.59-2.85-1.22-4.69-4.04-4.83-4.23-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.08 1.01-2.36.27-.28.59-.35.79-.35.2 0 .4.01.57.01.18 0 .43-.07.67.51.24.59.82 2.03.89 2.18.07.15.12.32.02.51-.1.19-.15.31-.29.48-.14.17-.31.38-.44.52-.14.14-.29.3-.13.58.16.28.7 1.16 1.49 1.87 1.02.9 1.88 1.18 2.16 1.32.28.14.45.12.62-.07.17-.19.72-.84.91-1.12.19-.28.38-.23.64-.14.26.09 1.68.79 1.97.93.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
      </svg>
      Falar no WhatsApp
    </a>
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
