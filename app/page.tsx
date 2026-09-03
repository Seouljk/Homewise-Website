import { ArrowDown, ArrowRight, Check, ChevronRight, Calculator, Layers3, Ruler, HardHat, Bookmark, SlidersHorizontal } from 'lucide-react';

const features = [
  { icon: Ruler, title: 'Start with your space.', text: 'Set your house dimensions and arrange rooms around the way you want to live.', tone: 'orange' },
  { icon: Layers3, title: 'Make it your own.', text: 'Explore concrete or wood, roof options, finishes, doors, and windows.', tone: 'blue' },
  { icon: Calculator, title: 'See the bigger picture.', text: 'Bring material quantities, cost ranges, and labor allowances together in one estimate.', tone: 'orange' },
];

function Phone({ label }: { label: string }) {
  return <div className="phone" role="img" aria-label={`${label} — blank app screenshot placeholder`}><div className="phone-screen"><span className="phone-camera" /><span className="phone-home" /></div></div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header shell">
      <a className="brand" href="#" aria-label="HomeWise home"><img src="/homewise-wordmark.png" alt="HomeWise" width="186" height="62" /></a>
      <nav aria-label="Main navigation"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#about">About</a></nav>
      <a href="#features" className="pill-button nav-button">Explore the app <ArrowRight size={17} aria-hidden="true" /></a>
    </header>
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot" /> BIG IDEAS. THOUGHTFUL BEGINNINGS.</div>
        <h1 id="hero-title">Your dream home.<br /><span>A wiser start.</span></h1>
        <p className="hero-description">From your first floor plan to your first estimate.<br className="desktop-break" /> Make room for better decisions with HomeWise.</p>
        <div className="hero-actions"><a className="pill-button" href="#features">Meet HomeWise <ArrowRight size={19} aria-hidden="true" /></a><a className="text-link" href="#how-it-works">See how it works <ArrowDown size={17} aria-hidden="true" /></a></div>
        <div className="hero-note"><Check size={15} aria-hidden="true" /> Made for one-storey home planning</div>
        <div className="phone-stage">
          <div className="stage-wash" aria-hidden="true" />
          <div className="stage-label label-left"><Ruler size={20} aria-hidden="true" /><span>A space<br /><strong>that fits you.</strong></span></div>
          <div className="hero-phone phone-left"><Phone label="Home planning" /><span className="phone-caption">01 <span>Plan your space</span></span></div>
          <div className="hero-phone phone-center"><Phone label="Project features" /><span className="phone-caption">02 <span>Choose the details</span></span></div>
          <div className="hero-phone phone-right"><Phone label="Cost estimate" /><span className="phone-caption">03 <span>Know your estimate</span></span></div>
          <div className="stage-label label-right"><Calculator size={20} aria-hidden="true" /><span>A budget<br /><strong>you can explore.</strong></span></div>
        </div>
        <p className="preview-note">App previews coming soon.</p>
      </section>
      <section className="features shell section" id="features" aria-labelledby="features-title">
        <div className="section-heading"><span className="eyebrow">LESS GUESSWORK. MORE CLARITY.</span><h2 id="features-title">Good plans start with<br /><span>the right perspective.</span></h2><p>A simpler way to explore what goes into your home,<br className="desktop-break" /> before you start building it.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text, tone }, index) => <article className={`feature-card ${tone}`} key={title}><div className="card-top"><span className="feature-icon"><Icon size={27} strokeWidth={1.65} aria-hidden="true" /></span><span className="card-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="detail-section shell section" aria-labelledby="details-title">
        <div className="detail-visual"><span className="visual-label"><SlidersHorizontal size={17} aria-hidden="true" /> YOUR HOME, YOUR CHOICES</span><Phone label="Material and finish selections" /><span className="visual-footnote">Every detail adds up.</span></div>
        <div className="detail-copy"><span className="eyebrow">THE DETAILS MAKE THE DIFFERENCE</span><h2 id="details-title">Think it through.<br /><span>One choice at a time.</span></h2><p>Big decisions feel more manageable when you can break them down. Explore the parts of your home and see how your choices shape the estimate.</p><ul className="benefit-list"><li><Layers3 aria-hidden="true" /><div><h3>Materials and finishes</h3><p>Choose your structure, roofing, and finishing details.</p></div></li><li><HardHat aria-hidden="true" /><div><h3>Costs with context</h3><p>Review material ranges alongside a labor allowance.</p></div></li><li><Bookmark aria-hidden="true" /><div><h3>Your plans, kept together</h3><p>Save projects to your account and revisit your estimates.</p></div></li></ul><a className="text-link orange-link" href="#how-it-works">Find your starting point <ArrowRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section className="how-section section" id="how-it-works" aria-labelledby="how-title"><div className="shell"><div className="section-heading"><span className="eyebrow">FROM “WHAT IF” TO “WHAT’S NEXT”</span><h2 id="how-title">A few steps.<br /><span>A clearer starting point.</span></h2></div><ol className="steps"><li><span className="step-number">1</span><h3>Picture your home</h3><p>Choose a house type, enter dimensions, and plan your rooms.</p><ChevronRight className="step-arrow" aria-hidden="true" /></li><li><span className="step-number">2</span><h3>Work out the details</h3><p>Select your roof, openings, finishes, and home services.</p><ChevronRight className="step-arrow" aria-hidden="true" /></li><li><span className="step-number">3</span><h3>Explore your estimate</h3><p>Review quantities and cost ranges, then save your project.</p></li></ol></div></section>
      <section className="about-section shell section" id="about" aria-labelledby="about-title"><div className="about-logo"><img src="/homewise-logo.png" alt="" width="82" height="86" loading="lazy" /></div><span className="eyebrow">BUILT FOR THE BEGINNING</span><h2 id="about-title">Your next chapter.<br /><span>A little more considered.</span></h2><p>HomeWise helps homeowners, students, and early-stage planners explore the possibilities of a one-storey home in the Philippines.</p><a className="pill-button" href="#hero-title">Back to the beginning <ArrowRight size={18} aria-hidden="true" /></a><div className="scope-note"><HardHat size={20} aria-hidden="true" /><p>Start with an estimate. Build with a professional.<br /><span>HomeWise provides preliminary estimates for one-storey homes on flat sites with standard soil and wind assumptions. Review your plans, prices, and site requirements with qualified professionals before construction.</span></p></div></section>
    </main>
    <footer className="site-footer shell"><div className="footer-brand"><a href="#" aria-label="HomeWise home"><img src="/homewise-wordmark.png" alt="HomeWise" width="156" height="52" loading="lazy" /></a><span>A wiser start to a place of your own.</span></div><nav aria-label="Footer navigation"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#about">About HomeWise</a></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} HomeWise</span><span>Thoughtful planning. Better beginnings.</span></div></footer>
  </>;
}
