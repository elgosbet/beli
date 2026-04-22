import { BeliView } from './view';
import { BeliData } from './model';
import { createIcons, Hammer, Settings2, GraduationCap, Zap, Construction, Factory, Building2, Shield, HardHat, Leaf, Users, Map, Globe, Check, Menu, X, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide';

export class BeliController {
  private view: BeliView;

  constructor() {
    this.view = new BeliView();
  }

  init() {
    // Render the view
    this.view.render();

    // Initialize Icons
    createIcons({
      icons: {
        Hammer,
        Settings2,
        GraduationCap,
        Zap,
        Construction,
        Factory,
        Building2,
        Shield,
        HardHat,
        Leaf,
        Users,
        Map,
        Globe,
        Check,
        Menu,
        X,
        MessageSquare,
        ArrowUpRight,
        ShieldCheck
      }
    });

    // Attach event listeners
    this.attachListeners();

    // Welcome Modal logic
    this.initWelcomeModal();
    
    console.log("Beli MVC System Initialized");
  }

  private initWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    const closeBtns = ['welcome-close', 'welcome-x', 'welcome-cta'];
    
    if (!modal) return;

    // Show modal after 2 seconds
    setTimeout(() => {
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
      }, 50);
    }, 2000);

    const closeModal = () => {
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 500);
    };

    closeBtns.forEach(id => {
      document.getElementById(id)?.addEventListener('click', closeModal);
    });
  }

  private attachListeners() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    
    const chatWindow = document.getElementById('chat-window');
    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    
    // Chatbot Toggle
    chatToggle?.addEventListener('click', () => {
      chatWindow?.classList.toggle('hidden');
    });

    chatClose?.addEventListener('click', () => {
      chatWindow?.classList.add('hidden');
    });

    // Chat Question Click
    document.querySelectorAll('.chat-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = btn.getAttribute('data-msg');
        if (msg) {
          // If it's a web tech support msg, send to dev, otherwise to company
          const isDevMsg = msg.toLowerCase().includes('sitio web');
          const phone = isDevMsg ? '51944283432' : '51974606325';
          const url = `https://wa.me/${phone}?text=${msg}`;
          window.open(url, '_blank');
          chatWindow?.classList.add('hidden');
        }
      });
    });

    // Mobile Menu Toggle
    const toggleMenu = (show: boolean) => {
      if (mobileMenu) {
        if (show) {
          mobileMenu.classList.remove('hidden');
          setTimeout(() => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('flex');
          }, 10);
        } else {
          mobileMenu.classList.add('translate-x-full');
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
          }, 300);
        }
      }
    };

    menuToggle?.addEventListener('click', () => toggleMenu(true));
    menuClose?.addEventListener('click', () => toggleMenu(false));

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Handle Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-brand-dark/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
          navbar.classList.remove('bg-transparent', 'py-8');
        } else {
          navbar.classList.remove('bg-brand-dark/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
          navbar.classList.add('bg-transparent', 'py-8');
        }
      }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}
