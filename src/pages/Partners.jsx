
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/common/ui.jsx";

const partners = [
  "Isaacs & Isaacs Law Firm",
  "Kaizen BPO",
  "Monge & Associates",
  "Lux Media Mix",
  "Elocal",
  "LawLogic",
  "Car Accident Help",
  "TriggerFish Leads",
  "Injury Assist",
  "Injuryassist.net",
  "Anderson Injury Attorneys",
  "Buckeye Law Group",
  "McCready Law Injury Attorneys",
  "West Coast Trial Lawyers",
  "FreeCaseEvaluations",
  "HQ4Ads",
  "TailoredPros",
  "USA Legal Support",
  "Car Accident Helpline",
  "The Accident Helpers",
  "Adolicious LLC",
  "Accident.com",
  "Quintessa Marketing",
  "InfoWorx",
  "Injury Help Network",
  "Auto Accident Claims",
  "Best Case Leads",
  "Auto Accident Help Desk",
  "Injury Claims Helpline",
  "Adrea Rubin Marketing, Inc.",
  "Advocate Health LLC",
  "Aetna",
  "Affluent Ads, LLC",
  "AGENCY INCLINE, LLC",
  "Agentra Healthcare",
  "Agile Health Insurance",
  "AIG",
  "Aliera Healthcare",
  "All Web Leads",
  "Alliance321, LLC",
  "Allied Insurance Partners",
  "Allied Insurance",
  "Allstate",
  "All In Marketing Inc.",
  "Alpine Digital Group, Inc.",
  "Amac",
  "America's Health Center, Inc.",
  "American Classified Services",
  "American Continental",
  "American Health & Life Associates LLC",
  "American Income Life Insurance Company Family",
  "American Insurance Agencies Direct, LLC",
  "American Insurance Organization",
  "American Republic",
  "Americo Life, Inc.",
  "AmeriLife",
  "Angelic Marketing Group",
  "Anthem",
  "Apollo Interactive, Inc.",
  "Applied General Agency, Inc.",
  "ARROYO MEDIA",
  "Assurance IQ, Inc",
  "Assurant",
  "Assured Life",
  "Supreme Health Group",
  "Time2Lead Network",
  "Tobias & Associates, LLC",
  "Today Medicare",
  "Top Healthcare Options Insurance Agency Inc",
  "Torchlight Technology Group, LLC",
  "TOTAL INSURANCE BROKERS, INC.",
  "TradeMarc Global LLC",
  "TruBridge, Inc.",
  "TrueChoice Insurance Services",
  "Trusource Marketing, LLC",
  "Trusted Consumer Advocates",
  "Tufts",
  "TZ Insurance Solutions LLC",
  "U.S. Standard Products Corp.",
  "UE.co",
  "Underground Elephant, Inc.",
  "United American Insurance Company",
  "United Medicare Advisors",
  "Universal American",
  "Universal Healthcare Advisors, LLC",
  "US Health Group",
  "USA Health Options",
  "USA Insurance Partners",
  "USHA-Dawn Group, LLC",
  "USHEALTH Advisors, LLC",
  "USWEBLEADS COM LLC",
  "Valley Peak Insurance Group LLC",
  "Vantis Life",
  "Veerus Holdings LLC",
  "Velapoint",
  "Vimo, Inc",
  "Visiqua, LLC",
  "VitalOne Health Plans Direct, LLC",
  "WASATCH MARKETING GROUP, LLC",
  "Wax Digital Solutions Inc",
  "WellPoint",
  "Whitebmg, LLC",
  "Wise Insurance Agency",
  "Xana Network, Inc.",
  "Ymarketing, LLC",
  "Yours2u Ltd.",
  "Zenith Media, LLC",
  "Zeta Global",
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function Partners() {
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const sortedPartners = useMemo(
    () => [...partners].sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredPartners = sortedPartners.filter((partner) => {
    const matchesSearch = partner
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    const matchesLetter =
      !selectedLetter ||
      partner.toUpperCase().startsWith(selectedLetter);

    return matchesSearch && matchesLetter;
  });

  function handleSearch(value) {
    setQuery(value);
    setSelectedLetter("");
  }

  function handleLetterClick(letter) {
    setSelectedLetter((current) =>
      current === letter ? "" : letter,
    );
    setQuery("");
  }

  return (
    <>
      <PageHero
        label="OUR NETWORK"
        title={
          <>
            Our <em>partners.</em>
          </>
        }
        text={`Browse our partner directory of ${partners.length} organizations. Use the search field or select a letter to find a partner.`}
      />

      <section className="section partners-section">
        <div className="wrap">
          <div className="partner-tools">
            <input
              type="search"
              aria-label="Search partners"
              placeholder="Search partners..."
              value={query}
              onChange={(event) =>
                handleSearch(event.target.value)
              }
            />

            <div
              className="alphabet"
              aria-label="Filter partners by letter"
            >
              {alphabet.map((letter) => {
                const hasPartners = sortedPartners.some((partner) =>
                  partner.toUpperCase().startsWith(letter),
                );

                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!hasPartners}
                    aria-pressed={selectedLetter === letter}
                    className={
                      selectedLetter === letter ? "active" : ""
                    }
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </button>
                );
              })}

              {selectedLetter && (
                <button
                  type="button"
                  className="clear-filter"
                  onClick={() => setSelectedLetter("")}
                >
                  Show all
                </button>
              )}
            </div>
          </div>

          <p className="partner-results" aria-live="polite">
            Showing {filteredPartners.length} of {partners.length} partners
            {selectedLetter
              ? ` starting with ${selectedLetter}`
              : ""}
          </p>

          <div className="partner-list">
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner, index) => (
                <div key={partner}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{partner}</h3>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </div>
              ))
            ) : (
              <p className="partner-empty">
                No partners found. Try another search or letter.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
