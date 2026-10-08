const questions = [
  ["What exactly is SPEDX AI?","SPEDX AI is an AI-powered execution platform. A user describes an outcome conversationally; the AI Node interprets the intent, identifies the required capability, uses authorized integrations and executes the workflow, then reports the result. The core idea is moving from AI that mainly provides information to AI that can help users complete real-world tasks."],
  ["How is this different from ChatGPT, Gemini or Perplexity?","Those products can be powerful information and recommendation interfaces. SPEDX AI is positioned around the execution layer: connecting intent to service APIs, provider systems and action workflows. The distinction is not that SPEDX should answer better; it is that SPEDX is designed around getting an authorized outcome completed."],
  ["Is SPEDX AI a job-giving or local-worker app?","No. SPEDX AI is a separate AI action platform. It is not a job marketplace and not a worker-booking product. Its long-term scope is much broader: healthcare, food, groceries, travel, mobility, local services, education, government workflows and other connected digital services."],
  ["What stage are you at today?","Idea / prototype stage. The company is pre-revenue and does not claim customer traction that has not yet been validated. The next objective is to turn the concept into a production-grade MVP and validate high-frequency action workflows with real users and partners."],
  ["Who is the target customer?","The consumer opportunity includes students, professionals, families, seniors and people who prefer a simpler interface than navigating many individual apps. A parallel B2B/B2B2C opportunity can emerge as businesses and service providers connect to the action layer."],
  ["What is the first wedge?","The first wedge should be a small set of frequent, understandable and integration-friendly workflows rather than trying to cover every service on day one. Examples include appointments, food/grocery ordering, reservations and mobility. The exact launch mix should be selected through partner availability and validation."],
  ["How does SPEDX make money?","Potential revenue streams include transaction commissions, consumer subscriptions, API or partner economics, and enterprise offerings. The initial model will be validated alongside real usage, category economics and partner agreements."],
  ["Why would users use one more AI app?","Because the product promise is not another place to search for information. The promise is reducing the number of steps between intent and completion. If SPEDX can reliably complete useful tasks, the value comes from convenience, continuity and one conversational interface across multiple services."],
  ["What is the moat?","The potential moat is the combination of an execution-oriented UX, integration network, workflow reliability, permission architecture and outcome data. As more useful integrations and verified action paths are built, the platform can become harder to replicate as a simple chatbot wrapper."],
  ["How will you acquire integrations?","Through direct API partnerships, commercial integrations, service-provider relationships and, where appropriate, approved third-party connectivity. Integration depth will be prioritized by demand, reliability, economics and compliance rather than by simply maximizing the number of connectors."],
  ["How do you handle payments?","Payments are treated as a sensitive action. The product direction is permission-first, with secure payment integrations and confirmation gates for consequential transactions. Production payment architecture will depend on the final providers, geography, regulatory requirements and commercial agreements."],
  ["How do you protect users from an AI making the wrong action?","SPEDX is designed around structured intent, permissions, confirmation for sensitive actions, auditability and result verification. High-impact actions should not be treated like ordinary text generation. The system needs explicit boundaries around what it may do, what requires confirmation and what must be verified after execution."],
  ["What is the biggest technical challenge?","Reliable orchestration across heterogeneous APIs and real-world service systems. The hard problem is not only understanding language; it is handling authentication, missing information, changing availability, errors, retries, payment states and verification while keeping the user experience simple."],
  ["What is the biggest business risk?","Partner and integration dependency, user trust, execution reliability and the economics of acquiring and serving users. These risks are why the roadmap emphasizes a focused MVP, measurable task completion and a controlled expansion of categories."],
  ["What happens if an API or provider fails?","The execution layer should detect failures, avoid claiming success, surface the state clearly and use an approved fallback only when one exists. Reliability is a product feature: SPEDX must distinguish between requested, attempted, confirmed and failed actions."],
  ["Why now?","AI has become capable enough to understand natural-language intent, reason over context and interact with tools. At the same time, consumers still live across fragmented service ecosystems. SPEDX AI is designed for the gap between conversational intelligence and real-world execution."],
  ["How large can this become?","The long-term thesis is horizontal: if the same action layer can reliably coordinate many high-frequency service categories, SPEDX can become a front door to a large portion of everyday digital activity. The initial market will be narrower; the platform vision is intentionally broader."],
  ["What will the ₹32 crore fund?","The planned raise is intended to support roughly 24 months of product and engineering, AI and cloud infrastructure, integrations and partnerships, team building, operations, security/compliance, marketing and business development. Allocation will be refined through milestones and diligence."],
  ["What would success look like after the raise?","A production-grade core platform, strong execution reliability, selected category integrations, early users and partners, measurable task-completion metrics, a repeatable distribution model and evidence that the economics can scale. The exact targets should be set with investors against the final operating plan."],
  ["Why should an investor back SPEDX AI at idea stage?","The investment case is a high-upside platform thesis: make AI useful not only for answering but for executing. The risk is also real because the company is early. The strongest reason to invest is belief in the team, the timing and the opportunity to build an execution layer before the market becomes fully established — while recognizing that significant validation remains ahead."]
];

const faqList = document.getElementById('faqList');
questions.forEach((q,i)=>{const item=document.createElement('div');item.className='faq-item';item.innerHTML=`<button class="faq-q"><span class="num">${String(i+1).padStart(2,'0')}</span><span>${q[0]}</span><span class="plus">+</span></button><div class="faq-a"><p>${q[1]}</p></div>`;item.querySelector('.faq-q').addEventListener('click',()=>{document.querySelectorAll('.faq-item.open').forEach(x=>{if(x!==item)x.classList.remove('open')});item.classList.toggle('open')});faqList.appendChild(item)});

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));

const glow=document.getElementById('cursorGlow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const art=document.getElementById('heroArt');window.addEventListener('pointermove',e=>{if(innerWidth<900)return;const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.transform=`rotateY(${x*5}deg) rotateX(${y*-4}deg)`});
window.addEventListener('pointerleave',()=>art.style.transform='');


// Premium motion layer — additive only.
const progress = document.getElementById('scrollProgress');
const sectionCursor = document.getElementById('sectionCursor');
const updateScrollUI = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
};
addEventListener('scroll', updateScrollUI, {passive:true});
updateScrollUI();

// Section-aware floating micro-label.
const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting && sectionCursor) {
    const labels = {vision:'THE SHIFT',product:'AI NODE',market:'MANY WORLDS',roadmap:'ROADMAP',raise:'THE RAISE',faq:'INVESTOR Q&A'};
    sectionCursor.textContent = 'SPEDX AI · ' + (labels[entry.target.id] || 'EXECUTE');
  }
}), {rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s => sectionObserver.observe(s));
addEventListener('pointermove', e => {
  if (!sectionCursor || innerWidth < 900) return;
  sectionCursor.style.left = e.clientX + 'px';
  sectionCursor.style.top = e.clientY + 'px';
  sectionCursor.style.opacity = '1';
}, {passive:true});
addEventListener('blur', () => { if(sectionCursor) sectionCursor.style.opacity='0'; });

// Subtle 3D tilt on premium cards, without affecting touch devices.
if (matchMedia('(pointer:fine)').matches) {
  const tiltItems = document.querySelectorAll('.glass-card,.category-card,.revenue-grid article,.founder-card,.raise-card');
  tiltItems.forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      card.style.transform = `perspective(900px) rotateX(${y*-2.2}deg) rotateY(${x*2.8}deg) translateY(-5px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform=''; });
  });
}

// Make the AI Node feel alive as the user scrolls through the product section.
const nodeVisual = document.querySelector('.node-visual');
const steps = [...document.querySelectorAll('.node-steps .step')];
if (nodeVisual && steps.length) {
  const stepObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    steps.forEach(s => s.classList.remove('active'));
    entry.target.classList.add('active');
  }), {threshold:.7});
  steps.forEach(s => stepObserver.observe(s));
}


// Reference-inspired scroll choreography — additive, existing interactions preserved.
(() => {
  const targets = document.querySelectorAll('.section-pad > .section-kicker, .split-heading, .section-title, .problem-grid, .node-layout, .demo-window, .category-grid, .architecture-map, .principles, .revenue-grid, .timeline, .founder-grid, .raise-card, .faq-list, .final-cta');
  targets.forEach((el,i)=>{ el.classList.add('parallax-in'); el.style.transitionDelay = Math.min((i%5)*70,280)+'ms'; });
  const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in-view'); io.unobserve(e.target)} }), {threshold:.08, rootMargin:'0px 0px -7% 0px'});
  targets.forEach(t=>io.observe(t));

  // Subtle depth movement while scrolling, tuned for the glossy reference look.
  const floaters = [...document.querySelectorAll('.hero-art .orb, .hero-art .glass-panel, .hero-art .glass-pill, .ambient-scene .ambient-orb, .ambient-scene .glass-shard')];
  let ticking=false;
  const depth=()=>{
    const y=scrollY;
    floaters.forEach((el,i)=>{ const speed=(i%4+1)*0.012; el.style.setProperty('--scroll-depth',(y*speed).toFixed(2)+'px'); });
    ticking=false;
  };
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(depth);ticking=true}},{passive:true}); depth();
})();

// Extra scroll choreography: subtle section activation and depth movement.
(() => {
  const sections = [...document.querySelectorAll('main > section')];
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-active');
    });
  }, {threshold: 0.22});
  sections.forEach(s => io.observe(s));

  const depthItems = document.querySelectorAll('.snapshot-card, .capability-strip, .visual-frame, .moat-visual');
  const onScroll = () => {
    const vh = innerHeight;
    depthItems.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const center = r.top + r.height / 2;
      const offset = Math.max(-10, Math.min(10, (vh / 2 - center) * 0.018));
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  };
  addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();


// Cinematic return-to-top: robust click handling + liquid-glass transition.
(() => {
  const goTop = (e) => {
    const link = e.target.closest?.('a[href="#top"], .back-top');
    if (!link) return;
    e.preventDefault();
    e.stopPropagation();

    const overlay = document.querySelector('.back-top-transition');
    const root = document.documentElement;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!overlay || prefersReduced) {
      window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
      return;
    }

    // Restart the animation every time, even if the user clicks again after a short pause.
    overlay.classList.remove('play');
    void overlay.offsetWidth;
    overlay.classList.add('play');
    root.classList.add('is-returning-top');

    // Begin the actual journey while the glass transition is visible.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 760);

    window.setTimeout(() => {
      overlay.classList.remove('play');
      root.classList.remove('is-returning-top');
    }, 1650);
  };

  // Delegated listener is more reliable than binding only to the element present at load time.
  document.addEventListener('click', goTop, true);
})();
