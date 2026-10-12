import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Scale } from "lucide-react";
import {
  Button,
  Reveal,
  Eyebrow,
  Heading,
  ServiceList,
} from "../components/common/ui.jsx";
import {
  Hero,
  Trustbar,
  Steps,
  ClaimForm,
  FAQ,
  CTA,
} from "../components/home/HomeSections.jsx";

export function Home() {
  return (
    <>
      <Hero />
      <Trustbar />
      <section className="section intro">
        <div className="wrap intro-grid">
          <Reveal>
            <Eyebrow>SUPPORT THAT STARTS WITH LISTENING</Eyebrow>
            <h2>
              Get the support
              <br />
              you <em>deserve.</em>
            </h2>
            <div className="blue-rule" />
          </Reveal>
          <Reveal className="intro-content">
            <Eyebrow>EXPERT GUIDANCE. NO UPFRONT COST.</Eyebrow>
            <p>
              After an accident, it can be hard to know where to begin. We make
              the first step easier with straightforward guidance, a free
              eligibility check, and support to understand the options available
              to you.
            </p>
            <Button to="/#claim">Start your claim</Button>
          </Reveal>
        </div>
      </section>
      <Steps />
      <section className="section why">
        <div className="wrap">
          <Heading
            label="WHY MOTOR VEHICLE CLAIM"
            title="For your claim, and for you."
            text="We guide you through the claim process with clear communication and dependable support."
          />
          <div className="why-grid">
            {[
              [
                "01",
                "Trusted expertise",
                "Clear guidance from people who understand the claims process.",
              ],
              [
                "02",
                "Customer-first support",
                "Clear communication and dependable guidance throughout the process.",
              ],
              [
                "03",
                "Claim assistance",
                "Help gathering the details needed to assess your enquiry.",
              ],
              [
                "04",
                "Free consultation",
                "Begin with a no-obligation consultation to explore your claim options.",
              ],
            ].map(([n, t, d]) => (
              <Reveal className="why-item" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="wrap stats-inner">
          <div className="stats-heading">
            <Eyebrow light>SUPPORT YOU CAN COUNT ON</Eyebrow>
            <h2>
              Here for the
              <br />
              <em>road ahead.</em>
            </h2>
          </div>
          {[
            ["1,000+", "Claims assisted"],
            ["24/7", "Support"],
            ["95%*", "Success rate"],
            ["FREE", "Consultation"],
          ].map(([n, l]) => (
            <div className="stat" key={n}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section specialist">
        <div className="wrap specialist-grid">
          <div className="specialist-photo">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals discussing a case"
            />
            <div className="photo-caption">PERSONAL INJURY CLAIM SUPPORT</div>
          </div>
          <div className="specialist-copy">
            <Eyebrow>PEOPLE IN YOUR CORNER</Eyebrow>
            <h2>
              Personal injury
              <br />
              specialists.
            </h2>
            <p>
              When you've been injured, clear support matters. We help you
              understand the claims process and connect with legal support if
              you choose.
            </p>
            <ul className="check-list">
              <li>
                <Check /> Guidance tailored to your situation
              </li>
              <li>
                <Check /> No obligation to continue
              </li>
              <li>
                <Check /> Support to understand your options
              </li>
            </ul>
            <Button to="/contact">Talk to our team</Button>
          </div>
        </div>
      </section>
      <section className="no-win">
        <div className="wrap no-win-inner">
          <div className="no-win-copy">
            <Eyebrow light>STRAIGHTFORWARD SUPPORT</Eyebrow>
            <h2>
              No win no fee.
              <br />
              <em>No hidden extras.</em>
            </h2>
            <p>
              Start with a free eligibility check. No hidden extras or
              unexpected charges. Your lawyer will explain the fee arrangement
              before you decide to proceed.
            </p>
            <Button to="/#claim" light>
              Check eligibility
            </Button>
          </div>
          <div className="no-win-visual">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
              alt="Legal professional reviewing claim documents"
            />
            <div className="no-win-visual-caption">
              <span>PERSONAL INJURY CLAIM SUPPORT</span>
              <strong>Clear guidance, at every step.</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="wrap">
          <div className="services-heading">
            <Heading
              label="HOW WE CAN HELP"
              title="What type of claim can we help with?"
              text="Explore the kinds of accident and injury claims you can enquire about."
            />
            <Link className="text-link" to="/services">
              View all services ?
            </Link>
          </div>
          <ServiceList limit={8} />
        </div>
      </section>
      <ClaimForm />
      <FAQ />
      <CTA />
    </>
  );
}
