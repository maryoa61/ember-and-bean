/* Quiet Craft Editorial: offset compositions, tactile imagery, and one confident CTA. */
import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Coffee,
  Compass,
  Leaf,
  Menu,
  Package,
  ShieldCheck,
  Sparkles,
  Timer,
  X,
} from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "The Taster",
    detail: "One 250g bag · whole bean",
    price: { monthly: "$19", annual: "$17" },
    note: "A gentle way in",
    featured: false,
  },
  {
    name: "The House Ritual",
    detail: "Two 250g bags · whole bean or ground",
    price: { monthly: "$34", annual: "$30" },
    note: "Most chosen",
    featured: true,
  },
  {
    name: "The Full Table",
    detail: "Three 250g bags · whole bean",
    price: { monthly: "$47", annual: "$42" },
    note: "For generous mornings",
    featured: false,
  },
];

const anchorLinks = [
  { label: "Our method", href: "#method" },
  { label: "Choose a ritual", href: "#plans" },
  { label: "The fine print", href: "#fine-print" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState("The House Ritual");
  const [submitted, setSubmitted] = useState(false);

  const scrollToSubscribe = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your first pour is on the list.", {
      description: "We’ll be in touch with the next step for your Ember & Bean ritual.",
    });
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Ember and Bean home">
          <span className="brand-emblem"><img className="brand-mark" src="/manus-storage/ember-bean-mark_feb835bf.png" alt="" /></span>
          <span className="brand-name">Ember <i>&amp;</i> Bean</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {anchorLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#plans">
          Choose your ritual <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>

        <button
          className="mobile-menu-trigger"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {anchorLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
          ))}
          <a className="mobile-nav-cta" href="#plans" onClick={() => setMobileOpen(false)}>Choose your ritual <ArrowUpRight size={16} /></a>
        </nav>
      )}

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark">01</span> Monthly coffee, considered</p>
            <h1 id="hero-title">A better morning, <em>already on its way.</em></h1>
            <p className="hero-intro">Small-lot coffees, roasted with patience and delivered at the exact moment your pantry needs a little more wonder.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#plans">Choose your ritual <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#method">See how it works <ArrowDown size={15} /></a>
            </div>
            <div className="hero-details" aria-label="Subscription benefits">
              <span><Check size={14} /> Pause or skip anytime</span>
              <span><Check size={14} /> Roasted for your delivery</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-index">No. 01 <span>Morning cup</span></div>
            <figure className="image-plate hero-plate">
              <img src="/manus-storage/ember-bean-hero_61e8cc70.jpg" alt="Terracotta coffee cup on a warm parchment table beside roasted beans" />
              <figcaption>
                <span>House note</span>
                <strong>Soft citrus / cocoa / a long finish</strong>
              </figcaption>
            </figure>
            <div className="vertical-note">ROASTED IN SMALL BATCHES · SENT WITH INTENTION</div>
            <div className="hero-stamp" aria-hidden="true"><Sparkles size={18} /><span>est.<br />2018</span></div>
          </div>
        </section>

        <div className="section-rule section-pad" aria-hidden="true">
          <span className="transition-seal"><img src="/manus-storage/ember-bean-mark_feb835bf.png" alt="" /></span>
          <span>One less decision. One more good cup.</span>
          <span className="rule-line" />
          <span>Scroll to taste</span>
        </div>

        <section className="manifesto section-pad" id="method" aria-labelledby="manifesto-title">
          <div className="margin-label">The short version</div>
          <div className="manifesto-copy">
            <p className="eyebrow"><span className="eyebrow-mark">02</span> The Ember &amp; Bean method</p>
            <h2 id="manifesto-title">Coffee that respects <em>the quiet part</em> of your day.</h2>
            <p>We look for coffees with a clear point of view, then roast them slowly enough to keep it. You choose the rhythm; we take care of the rest.</p>
            <a className="text-link" href="#plans">Choose your ritual <ArrowUpRight size={15} /></a>
          </div>
          <div className="manifesto-aside">
            <span className="big-number">03</span>
            <p>Ways we make the ritual feel more like yours and less like another delivery.</p>
          </div>
        </section>

        <section className="steps section-pad" aria-label="How Ember and Bean works">
          <div className="step-row">
            <div className="step-index">01</div>
            <div className="step-icon"><Compass size={21} strokeWidth={1.4} /></div>
            <div className="step-copy"><h3>We source with a point of view.</h3><p>Distinct lots from thoughtful producers, chosen for clarity, balance, and the stories they carry.</p></div>
            <span className="step-tag">Origin</span>
          </div>
          <div className="step-row">
            <div className="step-index">02</div>
            <div className="step-icon"><Coffee size={21} strokeWidth={1.4} /></div>
            <div className="step-copy"><h3>We roast for the cup you like.</h3><p>Every release is dialed toward sweetness first, whether your morning is a pour-over or a quick, strong one.</p></div>
            <span className="step-tag">Roast</span>
          </div>
          <div className="step-row">
            <div className="step-index">03</div>
            <div className="step-icon"><Package size={21} strokeWidth={1.4} /></div>
            <div className="step-copy"><h3>We send it when it will matter.</h3><p>Your next bag arrives fresh, with a small tasting note to make the first pour feel like a beginning.</p></div>
            <span className="step-tag">Ritual</span>
          </div>
        </section>

        <section className="feature-split section-pad" aria-labelledby="roast-title">
          <div className="feature-image-wrap">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85" alt="A quiet coffee ritual with a fresh cup and handwritten note" />
            <span className="image-caption">The good stuff, before the label.</span>
          </div>
          <div className="feature-copy">
            <p className="eyebrow"><span className="eyebrow-mark">03</span> Before it reaches your shelf</p>
            <h2 id="roast-title">Roasted for <em>the long finish.</em></h2>
            <p>Not dark for drama. Not light for status. We roast to make the whole cup feel generous: bright where it should be, deep where it counts.</p>
            <div className="feature-list">
              <div><Leaf size={17} /><span><strong>Seasonal releases</strong><small>Always moving, never random.</small></span></div>
              <div><Timer size={17} /><span><strong>Roast-to-order cadence</strong><small>Freshness is part of the flavor.</small></span></div>
              <div><ShieldCheck size={17} /><span><strong>No subscription lock-in</strong><small>Pause, skip, or change your grind.</small></span></div>
            </div>
          </div>
        </section>

        <section className="plans section-pad" id="plans" aria-labelledby="plans-title">
          <div className="plans-header">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark">04</span> Choose your ritual</p>
              <h2 id="plans-title">Enough coffee. <em>Exactly enough.</em></h2>
            </div>
            <div className="billing-switch" role="group" aria-label="Billing frequency">
              <button className={billing === "monthly" ? "active" : ""} onClick={() => setBilling("monthly")} type="button">Monthly</button>
              <button className={billing === "annual" ? "active" : ""} onClick={() => setBilling("annual")} type="button">Annual <span>save 12%</span></button>
            </div>
          </div>
          <div className="plan-list">
            {plans.map((plan) => (
              <div className={`plan-row ${plan.featured ? "featured" : ""}`} key={plan.name}>
                <div className="plan-name"><span className="plan-dot" /> <strong>{plan.name}</strong>{plan.featured && <span className="plan-badge">Our middle way</span>}</div>
                <p>{plan.detail}</p>
                <div className="plan-price"><strong>{plan.price[billing]}</strong><span>/ month</span></div>
                <button className="plan-choose" type="button" onClick={() => scrollToSubscribe(plan.name)}>{selectedPlan === plan.name ? "Selected" : "Choose"} <ArrowUpRight size={16} /></button>
              </div>
            ))}
          </div>
          <div className="plans-footnote"><span><Check size={14} /> Ships free</span><span><Check size={14} /> Choose whole bean or ground</span><span><Check size={14} /> Change your cadence</span></div>
        </section>

        <section className="ritual-split section-pad" aria-labelledby="ritual-title">
          <div className="ritual-copy">
            <p className="eyebrow"><span className="eyebrow-mark">05</span> A little more room in the morning</p>
            <h2 id="ritual-title">The ritual is yours. <em>We just send the beans.</em></h2>
            <p>Every box comes with a concise brew note, a roast date, and enough context to make a cup feel considered without making it complicated.</p>
            <div className="ritual-note"><span className="quote-mark">“</span><span>Good coffee should make the day feel like it has started on purpose.</span></div>
          </div>
          <div className="ritual-image-wrap">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85" alt="A warm ceramic coffee cup ready for the first pour" />
            <div className="image-index">05 / Brew note</div>
          </div>
        </section>

        <section className="subscribe section-pad" id="subscribe" aria-labelledby="subscribe-title">
          <div className="subscribe-image-wrap"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85" alt="Minimal coffee pouches arranged on a warm stone surface" /><span>First box, soon.</span></div>
          <div className="subscribe-panel">
            <p className="eyebrow"><span className="eyebrow-mark">06</span> Put a better cup on the calendar</p>
            <h2 id="subscribe-title">Start with <em>{selectedPlan}.</em></h2>
            <p>Leave your email and we’ll send the simple next step for your first delivery. No noisy inbox, no hard sell—just coffee with somewhere to go.</p>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Your email address</label>
              <div className="input-row"><input id="email" name="email" type="email" placeholder="you@yourmorning.com" required /><button className="button button-primary" type="submit">{submitted ? "You’re on the list" : "Reserve my first box"} <ArrowUpRight size={17} /></button></div>
            </form>
            <p className="form-note"><ShieldCheck size={14} /> Your address stays with us. Unsubscribe whenever you like.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad" id="fine-print">
        <div className="footer-brand"><a className="brand-lockup" href="#top"><span className="brand-emblem"><img className="brand-mark" src="/manus-storage/ember-bean-mark_feb835bf.png" alt="" /></span><span className="brand-name">Ember <i>&amp;</i> Bean</span></a><p>Considered coffee for ordinary days.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="#method">Our method</a><a href="#plans">Subscriptions</a></div><div><span>Notes</span><a href="#subscribe">Contact</a><a href="#fine-print">Shipping &amp; pauses</a></div></div>
        <div className="footer-bottom"><span>© 2026 Ember &amp; Bean Roasters</span><span>Made for the first pour.</span></div>
      </footer>
    </div>
  );
}
