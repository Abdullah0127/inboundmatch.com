
import { Eyebrow, PageHero } from "../components/common/ui.jsx";
import { terms, privacy } from "../data/siteData.js";

export function Legal({ privacy: isPrivacy = false }) {
  const document = isPrivacy ? privacy?.[0] : terms?.[0];

  if (!document) {
    return <p>Legal content is not available.</p>;
  }

  const sections = document.sections ?? [];
  const pageTitle = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  return (
    <>
      <PageHero
        label="INBOUNDMATCH · LEGAL INFORMATION"
        title={
          isPrivacy ? (
            <>
              Privacy
              <br />
              <em>policy.</em>
            </>
          ) : (
            <>
              Terms &
              <br />
              <em>conditions.</em>
            </>
          )
        }
        text={document.intro}
      />

      <section className="section legal-section">
        <div className="wrap legal-layout">
          <aside className="legal-sidebar">
            <Eyebrow>ON THIS PAGE</Eyebrow>

            <nav aria-label={`${pageTitle} navigation`}>
              {sections.map((section, index) => (
                <a href={`#legal-${index}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </nav>

            <small>
              Please review this page periodically for updates.
            </small>
          </aside>

          <article className="legal-content">
            {sections.map((section, index) => (
              <section
                className="legal-content-section"
                id={`legal-${index}`}
                key={section.title}
              >
                <span className="legal-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.title}</h2>

                {/* Render privacy labels as headings to match Terms subsections */}
                {section.paragraphs?.map((paragraph, paragraphIndex) =>
                  paragraph.label ? (
                    <div className="legal-subsection" key={paragraphIndex}>
                      <h3>{paragraph.label}</h3>
                      <p>{paragraph.content}</p>
                    </div>
                  ) : (
                    <p key={paragraphIndex}>
                      {paragraph.content ?? paragraph}
                    </p>
                  ),
                )}
                {/* Render subsections, used by Terms & Conditions */}
                {section.subsections?.map((subsection) => (
                  <div className="legal-subsection" key={subsection.title}>
                    <h3>{subsection.title}</h3>

                    {subsection.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
