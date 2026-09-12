'use client';

import { Check, ChevronRight, FolderOpen, Home, Ruler } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type PreviewScreen = 'plan' | 'choices' | 'estimate' | 'projects';

const screenNames: Record<PreviewScreen, string> = {
  plan: 'house dimensions',
  choices: 'build details',
  estimate: 'project estimate',
  projects: 'saved projects',
};

function ScreenHeader({ eyebrow, title, step }: { eyebrow: string; title: string; step?: string }) {
  return (
    <div className="app-topbar">
      <Image className="app-brand-mark" src="/homewise-logo.png" alt="" width={30} height={30} />
      <div>
        <span className="app-top-eyebrow">{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      {step && <span className="app-step">{step}</span>}
    </div>
  );
}

function PlanScreen() {
  return (
    <div className="app-view">
      <ScreenHeader eyebrow="NEW ESTIMATE" title="House dimensions" step="1 of 8" />
      <div className="app-body">
        <span className="app-section-label">LAYOUT</span>
        <h4>Set your home footprint</h4>
        <p className="app-copy">Enter the outside dimensions of your one-storey home.</p>
        <div className="metric-grid">
          <div><span>WIDTH</span><strong>8.00 m</strong></div>
          <div><span>LENGTH</span><strong>10.00 m</strong></div>
        </div>
        <div className="footprint-card">
          <div className="footprint-plan">
            <span className="dimension dimension-top">8.00 m</span>
            <span className="dimension dimension-side">10.00 m</span>
            <Home aria-hidden="true" />
          </div>
          <div><span>FLOOR AREA</span><strong>80 m²</strong></div>
        </div>
        <div className="app-action">Continue <ChevronRight aria-hidden="true" /></div>
      </div>
    </div>
  );
}

function ChoicesScreen() {
  const choices = [
    ['Wall system', 'Concrete blocks'],
    ['Roofing', 'Pre-painted metal'],
    ['Roof frame', 'Steel truss'],
    ['Floor finish', 'Ceramic tile'],
  ];

  return (
    <div className="app-view">
      <ScreenHeader eyebrow="NEW ESTIMATE" title="Build details" step="5 of 8" />
      <div className="app-body">
        <span className="app-section-label">MATERIALS &amp; FINISHES</span>
        <h4>Choose your specifications</h4>
        <p className="app-copy">Selections update the materials and preliminary cost range.</p>
        <div className="choice-list">
          {choices.map(([label, value]) => (
            <div className="choice-row" key={label}>
              <div><span>{label}</span><strong>{value}</strong></div>
              <span className="choice-check"><Check aria-hidden="true" /></span>
            </div>
          ))}
        </div>
        <div className="app-action">Review selections <ChevronRight aria-hidden="true" /></div>
      </div>
    </div>
  );
}

function EstimateScreen() {
  const materials = [
    ['Concrete hollow blocks', '2,184 pcs'],
    ['Cement', '406 bags'],
    ['Pre-painted roofing', '112 m²'],
  ];

  return (
    <div className="app-view">
      <ScreenHeader eyebrow="SAMPLE PROJECT" title="Project estimate" />
      <div className="app-body estimate-body">
        <div className="project-summary">
          <Ruler aria-hidden="true" />
          <div><span>ONE-STOREY HOME</span><strong>80 m² · 3 bedrooms</strong></div>
        </div>
        <div className="estimate-heading"><span>MATERIALS</span><span>QUANTITY</span></div>
        <div className="estimate-list">
          {materials.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
        <div className="estimate-total">
          <span>PRELIMINARY MATERIAL + LABOR TOTAL</span>
          <strong>₱1.18M – ₱1.36M</strong>
          <small>Sample range for planning</small>
        </div>
        <div className="estimate-note"><Check aria-hidden="true" /> Saved to Sample one-storey home</div>
      </div>
    </div>
  );
}

function ProjectsScreen() {
  return (
    <div className="app-view">
      <ScreenHeader eyebrow="HOMEWISE" title="Your projects" />
      <div className="app-body">
        <span className="app-section-label">WELCOME BACK</span>
        <h4>Plan at your own pace.</h4>
        <p className="app-copy">Open a saved plan or begin another preliminary estimate.</p>
        <div className="saved-project">
          <div className="project-icon"><FolderOpen aria-hidden="true" /></div>
          <div><span>SAMPLE PROJECT</span><strong>One-storey family home</strong><small>80 m² · Updated today</small></div>
          <ChevronRight aria-hidden="true" />
        </div>
        <div className="project-progress"><span><i />Estimate ready</span><strong>View project</strong></div>
        <div className="app-action">New estimate <ChevronRight aria-hidden="true" /></div>
      </div>
    </div>
  );
}

function AppScreen({ screen }: { screen: PreviewScreen }) {
  if (screen === 'plan') return <PlanScreen />;
  if (screen === 'choices') return <ChoicesScreen />;
  if (screen === 'estimate') return <EstimateScreen />;
  return <ProjectsScreen />;
}

export function AppPreview({ label, screen, delay = 1500 }: { label: string; screen: PreviewScreen; delay?: number }) {
  const phoneRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer: number | undefined;
    // The watched area stretches up by the page height, so a phone counts as seen once scrolled past and only
    // dropping below the screen, even in one jump, resets the launch to replay on the way back down.
    const observer = new IntersectionObserver(
      (entries) => {
        window.clearTimeout(timer);
        if (entries.at(-1)?.isIntersecting) {
          timer = window.setTimeout(() => setStarted(true), reducedMotion ? 0 : delay);
        } else {
          setStarted(false);
        }
      },
      { rootMargin: `${document.documentElement.scrollHeight}px 0px 0px 0px` },
    );

    observer.observe(phone);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <figure ref={phoneRef} className="phone" data-started={started ? 'true' : 'false'} aria-label={`${label}: HomeWise splash screen followed by a sample ${screenNames[screen]} screen`}>
      <div className="phone-screen">
        <div className="app-splash" aria-hidden="true">
          <Image src="/homewise-wordmark.png" alt="" width={156} height={52} priority />
          <span>One-storey home estimator</span>
          <i />
        </div>
        <div className="app-ui"><AppScreen screen={screen} /></div>
        <span className="phone-camera" aria-hidden="true" />
        <span className="phone-home" aria-hidden="true" />
      </div>
    </figure>
  );
}
