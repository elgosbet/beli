import { BeliData } from './model';

export class BeliView {
  render() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      <div class="flex relative bg-brand-dark min-h-screen">
        <!-- SIDEBAR (Editorial Style) -->
        <div class="hidden lg:flex w-16 flex-col justify-between items-center py-10 border-r border-white/10 fixed left-0 top-0 h-full z-50 bg-brand-dark">
          <div class="sidebar-vertical text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold whitespace-nowrap">ESTABLECIDO 2010</div>
          <div class="flex flex-col gap-8 items-center">
            <div class="w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
            <div class="w-1 h-1 bg-white/20 rounded-full"></div>
            <div class="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
          <div class="sidebar-vertical text-[10px] uppercase tracking-[0.4em] text-brand-primary font-bold whitespace-nowrap">BELI SRL</div>
        </div>

        <div class="flex-1 lg:ml-16">
          <!-- NAVIGATION -->
          <nav id="navbar" class="fixed top-0 left-0 lg:left-16 right-0 z-40 transition-all duration-300 py-8 bg-transparent">
            <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <div class="flex flex-col">
                <h1 class="text-2xl md:text-3xl font-black tracking-tighter italic leading-none">
                  BELI<span class="text-brand-primary">.</span>
                </h1>
                <p class="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Servicios Generales SRL</p>
              </div>
              
              <!-- Desktop Nav -->
              <div class="hidden md:flex gap-10 items-center">
                <a href="#inicio" class="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-brand-primary">Inicio</a>
                <a href="#nosotros" class="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-brand-primary">Nosotros</a>
                <a href="#servicios" class="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-brand-primary">Servicios</a>
                <a href="#contacto" class="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-brand-primary">Contacto</a>
                <a href="${BeliData.whatsappLink}" target="_blank" class="px-6 py-2 bg-brand-primary text-brand-dark text-xs font-black rounded-sm hover:scale-105 transition-all duration-300 uppercase tracking-widest">
                  CONSULTA EXPERTA
                </a>
              </div>

              <!-- Mobile Toggle -->
              <button id="mobile-menu-toggle" class="md:hidden text-white focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </nav>

          <!-- Mobile Menu Overlay -->
          <div id="mobile-menu" class="fixed inset-0 bg-brand-dark z-[60] flex-col p-10 gap-8 hidden animate-fade-in translate-x-full transition-transform duration-300">
            <div class="flex justify-between items-center mb-10">
              <h1 class="text-3xl font-black tracking-tighter italic text-white">BELI<span class="text-brand-primary">.</span></h1>
              <button id="mobile-menu-close" class="text-white"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </div>
            <div class="flex flex-col gap-6">
              <a href="#inicio" class="mobile-nav-link text-4xl font-black italic tracking-tighter hover:text-brand-primary">INICIO</a>
              <a href="#nosotros" class="mobile-nav-link text-4xl font-black italic tracking-tighter hover:text-brand-primary">NOSOTROS</a>
              <a href="#servicios" class="mobile-nav-link text-4xl font-black italic tracking-tighter hover:text-brand-primary">SERVICIOS</a>
              <a href="#contacto" class="mobile-nav-link text-4xl font-black italic tracking-tighter hover:text-brand-primary">CONTACTO</a>
            </div>
            <a href="${BeliData.whatsappLink}" target="_blank" class="mt-auto px-8 py-4 bg-brand-primary text-brand-dark font-black text-center rounded text-lg italic tracking-tighter uppercase">CONSULTA WHATSAPP</a>
          </div>

          <!-- HERO SECTION -->
          <section id="inicio" class="relative h-screen flex items-center overflow-hidden">
            <div class="absolute inset-0 z-0 opacity-40">
              <img src="https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&q=80&w=1600" alt="" class="w-full h-full object-cover grayscale" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div class="max-w-4xl">
                <div class="flex items-center gap-4 mb-8">
                  <div class="accent-line"></div>
                  <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary cyan-glow">PIONEROS EN VANGUARDIA</span>
                </div>
                <h1 class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-10 tracking-tighter italic animate-fade-in-up">
                  INGENIERÍA DE <br />
                  <span class="text-brand-primary cyan-glow">SOLUCIONES</span><br />
                  INTEGRALES
                </h1>
                <p class="text-base md:text-xl text-slate-400 mb-12 max-w-2xl font-light italic leading-relaxed border-l border-brand-primary/30 pl-8">
                  ${BeliData.subtagline}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a href="#servicios" class="px-10 py-5 bg-brand-primary text-brand-dark font-black text-sm rounded-lg shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:brightness-110 transition-all text-center uppercase tracking-widest">NUESTROS PROYECTOS</a>
                  <a href="#contacto" class="px-10 py-5 border border-white/20 text-white font-black text-sm rounded-lg hover:bg-white/5 transition-all text-center uppercase tracking-widest">SOPORTE TÉCNICO</a>
                </div>
              </div>
            </div>
            <div class="absolute bottom-12 right-12 hidden lg:block">
              <div class="text-right">
                <p class="text-3xl font-black italic text-white leading-none">${BeliData.experience}</p>
                <p class="text-[10px] uppercase tracking-widest opacity-40">Liderazgo en Minería Moderna</p>
              </div>
            </div>
          </section>

          <!-- ESSENCE SECTION -->
          <section id="nosotros" class="py-20 md:py-32 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto px-6">
              <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <h2 class="text-xs font-black text-brand-primary uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                    <span class="accent-line w-8"></span> NUESTRA ESENCIA
                  </h2>
                  <h3 class="text-3xl md:text-5xl font-black italic tracking-tighter mb-10 leading-tight">${BeliData.essence.title}</h3>
                  <p class="text-lg md:text-xl text-slate-400 font-light italic leading-relaxed border-b border-white/5 pb-10">
                    ${BeliData.essence.content}
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-10">
                    <div class="p-6 glass rounded-xl">
                      <span class="text-[10px] uppercase font-bold text-brand-primary tracking-widest">Soporte Técnico</span>
                      <p class="text-xs text-white uppercase font-black tracking-widest mt-2">ZONAS REMOTAS</p>
                    </div>
                    <div class="p-6 glass rounded-xl">
                      <span class="text-[10px] uppercase font-bold text-brand-primary tracking-widest">Cumplimiento</span>
                      <p class="text-xs text-white uppercase font-black tracking-widest mt-2">NORMAS INTERNACIONALES</p>
                    </div>
                  </div>
                </div>
                <div class="glass rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <div class="relative z-10 space-y-12">
                    <div>
                      <h4 class="text-xs font-black text-brand-primary uppercase tracking-[0.2em] mb-4">Misión</h4>
                      <p class="text-slate-300 italic font-light leading-relaxed">"${BeliData.mission.content}"</p>
                    </div>
                    <div>
                      <h4 class="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-4">Visión</h4>
                      <p class="text-slate-400 italic font-light leading-relaxed">"${BeliData.vision.content}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SERVICES GRID -->
          <section id="servicios" class="py-32 border-y border-white/5">
            <div class="max-w-7xl mx-auto px-6">
              <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div class="max-w-2xl">
                  <h2 class="text-xs font-black text-brand-primary uppercase tracking-[0.5em] mb-8">ÁREAS DE SERVICIO</h2>
                  <h3 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">SOLUCIONES <span class="text-brand-primary">COMPLETAS</span></h3>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${BeliData.services.map(s => `
                  <div class="relative group overflow-hidden rounded-2xl glass-dark border border-white/5 h-[300px] flex flex-col justify-end p-8 transition-all hover:border-brand-primary/50 cursor-pointer">
                    <!-- Icon Container -->
                    <div class="absolute inset-0 z-0 flex items-center justify-center bg-slate-900 group-hover:bg-brand-dark transition-colors duration-500">
                      <div class="text-8xl filter blur-sm opacity-20 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-700">
                        ${s.icon}
                      </div>
                      <div class="absolute top-10 left-10 text-4xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        ${s.icon}
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
                    </div>

                    <div class="relative z-10">
                      <div class="flex justify-between items-start mb-4">
                        <div class="w-10 h-10 bg-brand-primary/20 flex items-center justify-center text-brand-primary rounded border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <span class="text-xs font-black italic text-brand-primary opacity-40">${s.id}</span>
                      </div>
                      <h4 class="text-xl font-black italic tracking-tighter text-white uppercase leading-none mb-2 group-hover:text-brand-primary transition-colors">${s.title}</h4>
                      <p class="text-xs text-slate-400 font-light italic mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">${s.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>

          <!-- CTA / CONTACT -->
          <section id="contacto" class="py-20 md:py-40 relative overflow-hidden">
            <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <h3 class="text-4xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-none mb-12 uppercase">
                OPTIMICE SU <br/> <span class="text-brand-primary">PRODUCCIÓN</span>
              </h3>
              <p class="text-base md:text-lg text-slate-400 mb-16 max-w-2xl mx-auto font-light italic">
                Permítanos diseñar la solución integral que impulsará su rentabilidad y liderazgo técnico.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
                <div class="p-8 glass rounded-2xl border-l-2 border-brand-primary">
                  <div class="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Contacto Directo (WhatsApp)</div>
                  <div class="text-xl font-black italic text-white tracking-tighter">${BeliData.whatsapp}</div>
                </div>
                <div class="p-8 glass rounded-2xl border-l-2 border-white/20">
                  <div class="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Expertise Global</div>
                  <div class="text-sm font-bold uppercase italic text-slate-500">Soporte 24/7 en las zonas más críticas del territorio nacional.</div>
                </div>
              </div>
              <a href="${BeliData.whatsappLink}" target="_blank" class="inline-flex items-center gap-6 px-6 sm:px-12 py-6 bg-brand-primary text-brand-dark font-black text-base sm:text-lg italic tracking-tighter uppercase rounded shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:scale-105 transition-all text-center">
                SOLICITAR CONSULTA WHATSAPP
              </a>
            </div>
          </section>

          <!-- FOOTER -->
          <footer class="py-12 border-t border-white/10 mt-10">
            <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              <div>&copy; 2024 ${BeliData.company}</div>
              <div class="flex flex-col items-center md:items-end gap-2">
                <div class="flex gap-10">
                  <span>Socio Estratégico</span>
                  <span class="text-brand-primary">Minería Peruana</span>
                </div>
                <div class="mt-4 text-[8px] tracking-[0.5em] text-slate-500">
                  Desarrollado por mjmc4498 (+51944283432)
                </div>
              </div>
              <div class="flex gap-6">
                 <span>${BeliData.location}</span>
                 <a href="${BeliData.whatsappLink}" target="_blank" class="hover:text-brand-primary transition-colors">${BeliData.whatsapp}</a>
              </div>
            </div>
          </footer>

          <!-- CHATBOT UI -->
          <div class="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <!-- Chat Window -->
            <div id="chat-window" class="hidden w-[320px] bg-brand-dark border border-white/10 rounded-2xl shadow-2xl glass overflow-hidden animate-fade-in-up">
              <div class="p-6 bg-brand-primary text-brand-dark flex justify-between items-center">
                <div>
                  <h4 class="font-black text-sm uppercase tracking-widest leading-none mb-1">Beli Asistente</h4>
                  <p class="text-[8px] font-bold uppercase tracking-widest opacity-60">Soporte Express</p>
                </div>
                <button id="chat-close" class="hover:rotate-90 transition-transform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div class="p-4 flex flex-col gap-3">
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 px-2">¿En qué podemos ayudarle hoy?</p>
                ${BeliData.chatQuestions.map(item => `
                  <button 
                    class="chat-question px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-left text-xs text-slate-300 hover:bg-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary transition-all duration-300 italic group"
                    data-msg="${encodeURIComponent(item.msg)}"
                  >
                    ${item.q}
                  </button>
                `).join('')}
              </div>
              <div class="p-4 border-t border-white/5 bg-black/20">
                <p class="text-[8px] text-center text-slate-500 uppercase tracking-widest">Atención inmediata vía WhatsApp</p>
              </div>
            </div>

            <!-- Chat Button -->
            <button id="chat-toggle" class="w-16 h-16 bg-brand-primary text-brand-dark rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:scale-110 transition-all active:scale-95 group">
              <svg class="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.011 20L12 20c-1.071 0-2.091-.252-2.992-.703l-4.47 1.635c-.244.089-.512.032-.7-.146-.188-.178-.146-.464.103-.7l1.378-2.585C4.544 16.36 4 14.73 4 13c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-7.989 8z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
