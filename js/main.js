// ===== Site oficial — Vereador Negão Monteiro =====

// Navbar com fundo sólido ao rolar
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Animação de entrada ao rolar
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Contadores animados das estatísticas do hero
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const duration = 1600;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('[data-count]').forEach((el) => statsObserver.observe(el));

// Formulário de contato — abre o e-mail do gabinete com a demanda preenchida.
// Para envio direto, integre um serviço como Formspree e troque este handler.
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const assunto = encodeURIComponent(`Demanda do bairro ${data.get('bairro')} — ${data.get('nome')}`);
  const corpo = encodeURIComponent(
    `Nome: ${data.get('nome')}\nTelefone: ${data.get('telefone') || 'não informado'}\nBairro: ${data.get('bairro')}\n\nDemanda:\n${data.get('mensagem')}`
  );
  window.location.href = `mailto:contato@negaomonteiro.com.br?subject=${assunto}&body=${corpo}`;
  feedback.textContent = 'Abrindo seu aplicativo de e-mail para enviar a demanda...';
  form.reset();
});

// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
