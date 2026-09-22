import { ArrowDown, ArrowRight, Check, ChevronRight, Calculator, Layers3, Ruler, HardHat, Bookmark, SlidersHorizontal, Plus } from 'lucide-react';
import Image from 'next/image';
import { AppPreview } from './app-preview';
import logo from './images/homewise-logo.webp';
import { ScrollReveal } from './scroll-reveal';
import { siteUrl } from './site';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

const features = [
  { icon: Ruler, title: 'Start with your space.', text: 'Set your house dimensions and arrange rooms around the way you want to live.', tone: 'orange' },
  { icon: Layers3, title: 'Make it your own.', text: 'Explore concrete or wood, roof options, finishes, doors, and windows.', tone: 'blue' },
  { icon: Calculator, title: 'See the bigger picture.', text: 'Bring material quantities, cost ranges, and labor allowances together in one estimate.', tone: 'orange' },
];

const faqs = [
  { question: 'What is HomeWise?', answer: 'HomeWise is a mobile app for planning a one-storey home in the Philippines. It takes you from your house dimensions and room layout to a preliminary estimate of materials, costs, and labor.' },
  { question: 'What goes into a HomeWise estimate?', answer: 'Start with your house type, dimensions, rooms, and bathrooms. Then choose concrete or wood construction, roof and truss options, doors and windows, finishes such as paint, tile, and ceilings, and electrical, plumbing, and labor inputs. HomeWise brings your choices together into material quantities with material, labor, and combined cost ranges.' },
  { question: 'How accurate are the cost estimates?', answer: 'HomeWise estimates are preliminary, made for planning and budgeting rather than as final construction costs. They assume a one-storey home on a flat site with standard soil and wind conditions, and actual prices and requirements vary by location and date.' },
  { question: 'Can HomeWise estimate a two-storey house?', answer: 'Not yet. HomeWise currently estimates one-storey homes, often called bungalows, on flat sites.' },
  { question: 'Does HomeWise replace an architect, engineer, or contractor?', answer: 'No. HomeWise results are not signed plans, a professional bill of quantities, or a building permit. Use your estimate to prepare, then review your plans, prices, and site requirements with qualified professionals before construction.' },
  { question: 'Can I save my projects?', answer: 'Yes. Save projects to your HomeWise account and revisit your estimates whenever you are ready.' },
];

// Describes the brand, site, app, and FAQ to search engines. Google only accepts FAQ markup that matches questions visible on the page.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'HomeWise', url: siteUrl, logo: `${siteUrl}/icon.png` },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'HomeWise', url: siteUrl, inLanguage: 'en-PH', publisher: { '@id': `${siteUrl}/#organization` } },
    { '@type': 'SoftwareApplication', '@id': `${siteUrl}/#app`, name: 'HomeWise', url: siteUrl, applicationCategory: 'HomeApplication', description: 'Plan a one-storey home in the Philippines and explore material quantities, preliminary cost ranges, and labor allowances in one estimate.', featureList: ['House dimensions and room planning', 'Concrete or wood construction', 'Roof, door, window, and finish choices', 'Material quantities and preliminary cost ranges', 'Labor allowances', 'Saved projects'], publisher: { '@id': `${siteUrl}/#organization` } },
    { '@type': 'FAQPage', '@id': `${siteUrl}/#faq`, mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <ScrollReveal />
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot" /> BIG IDEAS. THOUGHTFUL BEGINNINGS.</div>
        <h1 id="hero-title">Your dream home.<br /><span>A wiser start.</span></h1>
        <p className="hero-description">From your first floor plan to your first estimate.<br className="desktop-break" /> Make room for better decisions with HomeWise.</p>
        <div className="hero-actions"><a className="pill-button" href="#features">Meet HomeWise <ArrowRight size={19} aria-hidden="true" /></a><a className="text-link" href="#how-it-works">See how it works <ArrowDown size={17} aria-hidden="true" /></a></div>
        <div className="hero-note"><Check size={15} aria-hidden="true" /> Made for one-storey homes in the Philippines</div>
        <div className="phone-stage">
          <div className="stage-wash" aria-hidden="true" />
          <div className="stage-label label-left"><Ruler size={20} aria-hidden="true" /><span>A space<br /><strong>that fits you.</strong></span></div>
          <div className="hero-phone phone-left"><AppPreview label="Home planning" screen="plan" delay={1500} /><span className="phone-caption">01 <span>Plan your space</span></span></div>
          <div className="hero-phone phone-center"><AppPreview label="Project features" screen="choices" delay={1800} /><span className="phone-caption">02 <span>Choose the details</span></span></div>
          <div className="hero-phone phone-right"><AppPreview label="Cost estimate" screen="estimate" delay={2100} /><span className="phone-caption">03 <span>Know your estimate</span></span></div>
          <div className="stage-label label-right"><Calculator size={20} aria-hidden="true" /><span>A budget<br /><strong>you can explore.</strong></span></div>
        </div>
        <p className="preview-note">Live sample screens shown with illustrative project data.</p>
      </section>
      <section className="features shell section" id="features" aria-labelledby="features-title">
        <div className="section-heading" data-reveal><span className="eyebrow">LESS GUESSWORK. MORE CLARITY.</span><h2 id="features-title">Good plans start with<br /><span>the right perspective.</span></h2><p>A simpler way to explore what goes into your home,<br className="desktop-break" /> before you start building it.</p></div>
        <div className="feature-grid" data-reveal>{features.map(({ icon: Icon, title, text, tone }, index) => <article className={`feature-card ${tone}`} key={title}><div className="card-top"><span className="feature-icon"><Icon size={27} strokeWidth={1.65} aria-hidden="true" /></span><span className="card-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="detail-section shell section" aria-labelledby="details-title" data-reveal>
        <div className="detail-visual"><span className="visual-label"><SlidersHorizontal size={17} aria-hidden="true" /> YOUR HOME, YOUR CHOICES</span><AppPreview label="Saved HomeWise project" screen="projects" delay={1200} /><span className="visual-footnote">Every detail adds up.</span></div>
        <div className="detail-copy" data-reveal><span className="eyebrow">THE DETAILS MAKE THE DIFFERENCE</span><h2 id="details-title">Think it through.<br /><span>One choice at a time.</span></h2><p>Big decisions feel more manageable when you can break them down. Explore the parts of your home and see how your choices shape the estimate.</p><ul className="benefit-list" data-reveal><li><Layers3 aria-hidden="true" /><div><h3>Materials and finishes</h3><p>Choose your structure, roofing, and finishing details.</p></div></li><li><HardHat aria-hidden="true" /><div><h3>Costs with context</h3><p>Review material ranges alongside a labor allowance.</p></div></li><li><Bookmark aria-hidden="true" /><div><h3>Your plans, kept together</h3><p>Save projects to your account and revisit your estimates.</p></div></li></ul><a className="text-link orange-link" href="#how-it-works">Find your starting point <ArrowRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section className="how-section section" id="how-it-works" aria-labelledby="how-title"><div className="shell"><div className="section-heading" data-reveal><span className="eyebrow">FROM “WHAT IF” TO “WHAT’S NEXT”</span><h2 id="how-title">A few steps.<br /><span>A clearer starting point.</span></h2></div><ol className="steps" data-reveal><li><span className="step-number">1</span><h3>Picture your home</h3><p>Choose a house type, enter dimensions, and plan your rooms.</p><ChevronRight className="step-arrow" aria-hidden="true" /></li><li><span className="step-number">2</span><h3>Work out the details</h3><p>Select your roof, openings, finishes, and home services.</p><ChevronRight className="step-arrow" aria-hidden="true" /></li><li><span className="step-number">3</span><h3>Explore your estimate</h3><p>Review quantities and cost ranges, then save your project.</p></li></ol></div></section>
      <section className="shell section" id="faq" aria-labelledby="faq-title"><div className="section-heading" data-reveal><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2 id="faq-title">Good questions.<br /><span>Clearer answers.</span></h2></div><div className="faq-list" data-reveal>{faqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary><h3>{question}</h3><span className="faq-icon"><Plus aria-hidden="true" /></span></summary><p>{answer}</p></details>)}</div></section>
      <section className="about-section shell section" id="about" aria-labelledby="about-title" data-reveal><div className="about-logo"><Image src={logo} alt="" width={82} height={86} unoptimized /></div><span className="eyebrow">BUILT FOR THE BEGINNING</span><h2 id="about-title">Your next chapter.<br /><span>A little more considered.</span></h2><p>HomeWise helps homeowners, students, and early-stage planners explore the possibilities of a one-storey home in the Philippines.</p><a className="pill-button" href="#hero-title">Back to the beginning <ArrowRight size={18} aria-hidden="true" /></a><div className="scope-note"><HardHat size={20} aria-hidden="true" /><p>Start with an estimate. Build with a professional.<br /><span>HomeWise provides preliminary estimates for one-storey homes on flat sites with standard soil and wind assumptions. Review your plans, prices, and site requirements with qualified professionals before construction.</span></p></div></section>
    </main>
    <SiteFooter />
  </>;
}
