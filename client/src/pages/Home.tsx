/* Quiet Craft Editorial: offset compositions, tactile imagery, and one confident CTA. */
import { type FormEvent, type MouseEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  { label: "Find your roast", href: "#quiz" },
  { label: "Choose a ritual", href: "#plans" },
  { label: "The fine print", href: "#fine-print" },
];

const quizQuestions = [
  {
    prompt: "How do you like your cup to feel?",
    helper: "Think about the first sip.",
    options: [
      { label: "Bright & lifted", detail: "Citrus, florals, a little spark", score: 0 },
      { label: "Round & balanced", detail: "Sweet, smooth, quietly complex", score: 1 },
      { label: "Deep & grounding", detail: "Cocoa, spice, a long finish", score: 2 },
    ],
  },
  {
    prompt: "What is your usual morning move?",
    helper: "There is no wrong way to brew.",
    options: [
      { label: "Slow pour-over", detail: "A few minutes to pay attention", score: 0 },
      { label: "One good filter", detail: "Reliable, generous, ready to share", score: 1 },
      { label: "Short & strong", detail: "Espresso, moka, or a quick reset", score: 2 },
    ],
  },
  {
    prompt: "How much surprise do you want?",
    helper: "Choose the feeling you want from your next bag.",
    options: [
      { label: "Keep it familiar", detail: "An easy favourite from the first cup", score: 1 },
      { label: "A thoughtful twist", detail: "A familiar shape with a new note", score: 1 },
      { label: "Take me somewhere", detail: "A seasonal lot with a point of view", score: 0 },
    ],
  },
];

const roastResults = [
  {
    name: "Daybreak",
    roast: "Light roast",
    tasting: "Citrus · honey · jasmine",
    description: "A lifted, quietly electric cup for mornings that start with a little room to notice things.",
    plan: "The Taster",
  },
  {
    name: "House Ritual",
    roast: "Medium roast",
    tasting: "Stone fruit · cocoa · toasted sugar",
    description: "Our most generous middle way: sweet, composed, and easy to return to every morning.",
    plan: "The House Ritual",
  },
  {
    name: "Afterglow",
    roast: "Medium-dark roast",
    tasting: "Dark chocolate · spice · walnut",
    description: "A grounded, lingering cup for people who like their mornings to arrive with some weight.",
    plan: "The Full Table",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState("The House Ritual");
  const [submitted, setSubmitted] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScores, setQuizScores] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<(typeof roastResults)[number] | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");
  const [checkoutCity, setCheckoutCity] = useState("");
  const [checkoutRegion, setCheckoutRegion] = useState("");
  const [checkoutPostalCode, setCheckoutPostalCode] = useState("");
  const [deliveryFrequency, setDeliveryFrequency] = useState("every-4-weeks");

  const selectedPlanDetails = plans.find((plan) => plan.name === selectedPlan) ?? plans[1];

  const scrollToAnchor = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

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

  const openCheckout = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setCheckoutSubmitted(false);
    setCheckoutOpen(true);
  };

  const handleCheckoutSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckoutSubmitted(true);
    toast.success("Your ritual is ready for the next step.", {
      description: "This preview captured your plan. Connect checkout when you are ready to take payments.",
    });
  };

  const handleQuizAnswer = (score: number) => {
    const nextScores = [...quizScores, score];
    setQuizScores(nextScores);
    if (nextScores.length === quizQuestions.length) {
      const average = nextScores.reduce((total, value) => total + value, 0) / nextScores.length;
      const resultIndex = average < 0.75 ? 0 : average < 1.5 ? 1 : 2;
      setQuizResult(roastResults[resultIndex]);
      return;
    }
    setQuizStep((step) => step + 1);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScores([]);
    setQuizResult(null);
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
            <a href={link.href} key={link.href} onClick={(event) => scrollToAnchor(event, link.href)}>{link.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#plans" onClick={(event) => scrollToAnchor(event, "#plans")}>
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
            <a href={link.href} key={link.href} onClick={(event) => scrollToAnchor(event, link.href)}>{link.label}</a>
          ))}
          <a className="mobile-nav-cta" href="#plans" onClick={(event) => scrollToAnchor(event, "#plans")}>Choose your ritual <ArrowUpRight size={16} /></a>
        </nav>
      )}

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark">01</span> Monthly coffee, considered</p>
            <h1 id="hero-title">A better morning, <em>already on its way.</em></h1>
            <p className="hero-intro">Small-lot coffees, roasted with patience and delivered at the exact moment your pantry needs a little more wonder.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#plans" onClick={(event) => scrollToAnchor(event, "#plans")}>Choose your ritual <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#method" onClick={(event) => scrollToAnchor(event, "#method")}>See how it works <ArrowDown size={15} /></a>
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
            <a className="text-link" href="#plans" onClick={(event) => scrollToAnchor(event, "#plans")}>Choose your ritual <ArrowUpRight size={15} /></a>
          </div>
          <div className="manifesto-aside">
            <span className="big-number">03</span>
            <p>Ways we make the ritual feel more like yours and less like another delivery.</p>
          </div>
        </section>

        <section className="quiz-section section-pad" id="quiz" aria-labelledby="quiz-title">
          <div className="quiz-intro">
            <p className="eyebrow"><span className="eyebrow-mark">03</span> A small guide to your next bag</p>
            <h2 id="quiz-title">Find the roast that fits <em>your morning.</em></h2>
            <p>Three quick choices, one considered recommendation. No coffee vocabulary test required.</p>
            <span className="quiz-side-note">Tasting index<br /><strong>03 / 03</strong></span>
          </div>
          <div className="quiz-card">
            {quizResult ? (
              <div className="quiz-result" aria-live="polite">
                <span className="quiz-result-kicker">Your morning match</span>
                <h3>{quizResult.name}</h3>
                <div className="quiz-result-meta"><span>{quizResult.roast}</span><span>{quizResult.tasting}</span></div>
                <p>{quizResult.description}</p>
                <div className="quiz-result-actions">
                  <button className="button button-primary" type="button" onClick={() => openCheckout(quizResult.plan)}>Make it my ritual <ArrowUpRight size={17} /></button>
                  <button className="quiz-reset" type="button" onClick={resetQuiz}>Retake the guide</button>
                </div>
              </div>
            ) : (
              <>
                <div className="quiz-progress"><span>Question {quizStep + 1} of {quizQuestions.length}</span><span>{Math.round((quizStep / quizQuestions.length) * 100)}% explored</span></div>
                <div className="quiz-progress-track"><span style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }} /></div>
                <div className="quiz-question-head"><span className="quiz-question-number">0{quizStep + 1}</span><div><h3>{quizQuestions[quizStep].prompt}</h3><p>{quizQuestions[quizStep].helper}</p></div></div>
                <div className="quiz-option-grid">
                  {quizQuestions[quizStep].options.map((option) => (
                    <button className="quiz-option" key={option.label} type="button" onClick={() => handleQuizAnswer(option.score)}>
                      <span className="quiz-option-index">0{quizQuestions[quizStep].options.indexOf(option) + 1}</span>
                      <strong>{option.label}</strong>
                      <small>{option.detail}</small>
                    </button>
                  ))}
                </div>
              </>
            )}
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
            <p className="eyebrow"><span className="eyebrow-mark">04</span> Before it reaches your shelf</p>
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
              <p className="eyebrow"><span className="eyebrow-mark">05</span> Choose your ritual</p>
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
            <p className="eyebrow"><span className="eyebrow-mark">06</span> A little more room in the morning</p>
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
            <p className="eyebrow"><span className="eyebrow-mark">07</span> Put a better cup on the calendar</p>
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

      <Dialog open={checkoutOpen} onOpenChange={(open) => { setCheckoutOpen(open); if (!open) setCheckoutSubmitted(false); }}>
        <DialogContent className="checkout-dialog" showCloseButton={false}>
          <div className="checkout-shell">
            <aside className="checkout-aside">
              <span className="checkout-aside-kicker">Your morning match</span>
              <strong>{quizResult?.name ?? selectedPlanDetails.name}</strong>
              <span className="checkout-aside-roast">{quizResult?.roast ?? "A considered monthly ritual"}</span>
              <p>{quizResult?.tasting ?? selectedPlanDetails.detail}</p>
              <div className="checkout-aside-note"><span>Roasted for your delivery.</span><span>Pause or skip whenever you like.</span></div>
            </aside>
            <div className="checkout-main">
              <DialogClose asChild>
                <button className="checkout-close" type="button" aria-label="Close checkout"><X size={18} /></button>
              </DialogClose>
              {checkoutSubmitted ? (
                <div className="checkout-success" aria-live="polite">
                  <span className="checkout-success-mark"><Check size={20} /></span>
                  <span className="checkout-kicker">Next step saved</span>
                  <h3>Your {selectedPlanDetails.name} is ready.</h3>
                  <p>We have a note of your preference, {checkoutName || "coffee friend"}. When checkout is connected, this is where your secure payment step will begin.</p>
                  <button className="checkout-secondary" type="button" onClick={() => setCheckoutOpen(false)}>Back to the page <ArrowDown size={15} /></button>
                </div>
              ) : (
                <>
                  <DialogHeader className="checkout-header">
                    <span className="checkout-kicker">Reserve a better morning</span>
                    <DialogTitle className="checkout-title">Make {selectedPlanDetails.name} <em>yours.</em></DialogTitle>
                    <DialogDescription className="checkout-description">A short note now, a fresh box next. This checkout preview keeps your recommended plan in view while you connect a payment provider later.</DialogDescription>
                  </DialogHeader>
                  <form className="checkout-form" onSubmit={handleCheckoutSubmit}>
                    <div className="checkout-plan-summary"><span>Selected ritual</span><strong>{selectedPlanDetails.name}</strong><span>{selectedPlanDetails.detail}</span><b>{selectedPlanDetails.price[billing]}<small> / month</small></b></div>
                    <div className="checkout-billing" role="group" aria-label="Checkout billing frequency">
                      <span>Billing rhythm</span>
                      <div><button className={billing === "monthly" ? "active" : ""} type="button" onClick={() => setBilling("monthly")}>Monthly</button><button className={billing === "annual" ? "active" : ""} type="button" onClick={() => setBilling("annual")}>Annual <small>save 12%</small></button></div>
                    </div>
                    <div className="checkout-form-grid">
                      <div className="checkout-field"><label htmlFor="checkout-name">Your name</label><input id="checkout-name" value={checkoutName} onChange={(event) => setCheckoutName(event.target.value)} placeholder="Avery Morgan" required /></div>
                      <div className="checkout-field"><label htmlFor="checkout-email">Email address</label><input id="checkout-email" type="email" value={checkoutEmail} onChange={(event) => setCheckoutEmail(event.target.value)} placeholder="you@yourmorning.com" required /></div>
                    </div>
                    <div className="checkout-field checkout-address-wide"><label htmlFor="checkout-address">Shipping address</label><input id="checkout-address" value={checkoutAddress} onChange={(event) => setCheckoutAddress(event.target.value)} placeholder="12 Morning Lane" required /></div>
                    <div className="checkout-form-grid checkout-address-grid">
                      <div className="checkout-field"><label htmlFor="checkout-city">City</label><input id="checkout-city" value={checkoutCity} onChange={(event) => setCheckoutCity(event.target.value)} placeholder="Portland" required /></div>
                      <div className="checkout-field"><label htmlFor="checkout-region">State / region</label><input id="checkout-region" value={checkoutRegion} onChange={(event) => setCheckoutRegion(event.target.value)} placeholder="OR" required /></div>
                      <div className="checkout-field"><label htmlFor="checkout-postal-code">Postal code</label><input id="checkout-postal-code" value={checkoutPostalCode} onChange={(event) => setCheckoutPostalCode(event.target.value)} placeholder="97205" required /></div>
                      <div className="checkout-field"><label htmlFor="checkout-grind">Preferred grind</label><select id="checkout-grind" defaultValue="whole-bean"><option value="whole-bean">Whole bean</option><option value="filter">Filter / drip</option><option value="espresso">Espresso</option></select></div>
                    </div>
                    <div className="checkout-field"><label htmlFor="checkout-frequency">Delivery frequency</label><select id="checkout-frequency" value={deliveryFrequency} onChange={(event) => setDeliveryFrequency(event.target.value)}><option value="every-2-weeks">Every 2 weeks</option><option value="every-4-weeks">Every 4 weeks</option><option value="every-6-weeks">Every 6 weeks</option><option value="every-8-weeks">Every 8 weeks</option></select></div>
                    <button className="button button-primary checkout-submit" type="submit">Continue to secure checkout <ArrowUpRight size={17} /></button>
                    <p className="checkout-trust"><ShieldCheck size={14} /> No payment is processed in this preview.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="site-footer section-pad" id="fine-print">
        <div className="footer-brand"><a className="brand-lockup" href="#top"><span className="brand-emblem"><img className="brand-mark" src="/manus-storage/ember-bean-mark_feb835bf.png" alt="" /></span><span className="brand-name">Ember <i>&amp;</i> Bean</span></a><p>Considered coffee for ordinary days.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="#method" onClick={(event) => scrollToAnchor(event, "#method")}>Our method</a><a href="#quiz" onClick={(event) => scrollToAnchor(event, "#quiz")}>Find your roast</a><a href="#plans" onClick={(event) => scrollToAnchor(event, "#plans")}>Subscriptions</a></div><div><span>Notes</span><a href="#subscribe" onClick={(event) => scrollToAnchor(event, "#subscribe")}>Contact</a><a href="#fine-print" onClick={(event) => scrollToAnchor(event, "#fine-print")}>Shipping &amp; pauses</a></div></div>
        <div className="footer-bottom"><span>© 2026 Ember &amp; Bean Roasters</span><span>Made for the first pour.</span></div>
      </footer>
    </div>
  );
}
