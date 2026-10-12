import { CTA } from "../components/home/HomeSections.jsx";
import { ArrowUpRight } from "lucide-react";
import {
  Button,
  Eyebrow,
  Heading,
  PageHero,
} from "../components/common/ui.jsx";

export function About() {
  return (
    <>
      <PageHero
        label="ABOUT US"
        title={
          <>
            Your partner in
            <br />
            <em>accident claims.</em>
          </>
        }
        text="We're here to take the stress out of claiming. From quick checks to expert support, no win no fee, no hidden extras."
      />
      <section className="section">
        <div className="wrap editorial-grid">
          <Heading
            label="OUR MISSION"
            title="Make the first step feel simpler."
          />
          <div>
            <p className="large-copy">
              We help people find clarity after an accident. Our role is to
              listen, understand the essentials, and explain possible next
              steps.
            </p>
            <p>
              Every enquiry is different. We aim to make it easier to ask
              questions and understand what support may be available, with no
              pressure to proceed.
            </p>
          </div>
        </div>
      </section>
      <section className="section values">
        <div className="wrap">
          <Heading
            label="WHAT GUIDES US"
            title="The values behind our support."
          />
          <div className="why-grid">
            {[
              [
                "01",
                "Trust",
                "We explain what to expect and treat your information with care.",
              ],
              [
                "02",
                "Efficiency",
                "We keep the enquiry process clear and focused.",
              ],
              ["03", "Support", "We help you understand your options."],
              [
                "04",
                "Expertise",
                "We connect you with appropriate claim support.",
              ],
            ].map(([n, t, d]) => (
              <div className="why-item" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap editorial-grid">
          <Heading
            label="WHY CHOOSE US"
            title="Considered help, at every step."
          />
          <div className="about-points">
            {[
              "Fast claim evaluation",
              "Expert claim and legal support",
              "No win no fee",
              "24/7 enquiry support",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <h3>{x}</h3>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
