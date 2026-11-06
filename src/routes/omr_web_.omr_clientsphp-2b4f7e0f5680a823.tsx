import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/omr_web.omr_clientsphp-2b4f7e0f5680a823.css?raw";

export const Route = createFileRoute("/omr_web_/omr_clientsphp-2b4f7e0f5680a823")({
  head: () => ({ meta: [{ title: "OMR Solutions" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-black text-white text-[14px]">
        <div className={"\x74op-bar-inner items-center flex justify-between max-w-[1200px] [@media(max-width:991px)]:flex-col [@media(max-width:991px)]:gap-[8px] [@media(max-width:991px)]:text-center"}>
          <div className={"\x74op-left [@media(max-width:991px)]:flex [@media(max-width:991px)]:flex-col [@media(max-width:991px)]:gap-[6px]"}><span>{"\n                "}<i className="fas fa-phone text-[#ff8100]" />
                      +91 9319123429
                  </span><span>{"\n                "}<i className="fas fa-envelope text-[#ff8100]" />
                      sales@omr.co.in
                  </span></div>
          <div className={"\x74op-right [@media(max-width:991px)]:flex [@media(max-width:991px)]:flex-wrap [@media(max-width:991px)]:gap-[12px] [@media(max-width:991px)]:justify-center"}><a className="no-underline" aria-label="Facebook" href="https://www.facebook.com/IndiaOutsources" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-facebook-f" />{"\n    "}</a><a className="no-underline" aria-label="YouTube" href="https://www.youtube.com/@omrsolutions" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-youtube" />{"\n    "}</a><a className="no-underline" aria-label="Instagram" href="https://www.instagram.com/omrindiaoutsources/" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-instagram" />{"\n    "}</a><a className="no-underline" aria-label="LinkedIn" href="https://www.linkedin.com/company/omr-india-outsources-pvt-ltd/" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-linkedin-in" />{"\n    "}</a></div>
        </div>
      </div>
      <div className="header bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white [box-shadow:rgba(0,0,0,0.08)_0px_3px_10px]">
        <div className="header-inner items-center flex justify-between max-w-[1200px] [@media(max-width:991px)]:flex-wrap">
          <div>
            <a href="/omr_web">
              <img className="h-[30px]" src="/site-assets/5db59fecaa10f04f.png" alt="OMR Solutions" />
            </a>
          </div>
          <div className="menu-toggle cursor-pointer text-[28px]" id="menuToggle">
            <i className="fas fa-bars" />
          </div>
          <ImportedNav />
        </div>
      </div>
      <div className="omr-page bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--bg) text-(--text) leading-[1.55]">
        <div className="omr-banner items-center flex w-full [border-bottom:4px_solid_var(--orange)]">
          <div className="omr-banner-inner max-w-(--max) relative w-full z-2">
            <div className="omr-banner-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white [box-shadow:0_24px_60px_rgba(0,0,0,.28)] max-w-[640px]">
              <span className="omr-eyebrow items-center text-(--orange-dark) inline-flex text-[.78rem] font-extrabold gap-[8px] tracking-[.14em] uppercase">About Clients</span>
              <h1 className="text-[clamp(1.7rem,3.6vw,2.5rem)] max-w-[20ch]">Our solutions for data capture in every <span className="text-(--orange)">organization</span></h1>
              <p className="lead text-(--muted) text-[1rem] max-w-[56ch]">We work with schools, colleges, businesses, government departments and hospitals — organizations that often need to collect information from a large number of people quickly: test answers, feedback, or registration forms.</p>
              <p className="lead text-(--muted) text-[1rem] max-w-[56ch]">OMR Solutions turns those paper forms into accurate digital data — fast, trusted, and built to handle important tasks without doing it all by hand.</p>
              <div className="flex flex-wrap gap-[14px]"><a className={"omr-btn omr-btn-primary items-center cursor-pointer gap-[8px] tracking-[.03em] no-underline [transition:transform_.15s,box-shadow_.15s,background_.15s] [&:hover]:[box-shadow:0_10px_26px_rgba(255,122,26,.35)]"} href="#omr-sector-list">View our clients</a><a className="omr-btn omr-btn-ghost items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) cursor-pointer gap-[8px] tracking-[.03em] no-underline [transition:transform_.15s,box-shadow_.15s,background_.15s]" href="#omr-contact">Contact Us</a></div>
              <div className="omr-banner-badges flex flex-wrap">
                <div className="[border-left:3px_solid_var(--orange)]">
                  <strong className="text-(--text) block font-extrabold">40+</strong>
                  <span className="text-(--muted) text-[.72rem] tracking-[.06em] uppercase">Trusted Clients</span>
                </div>
                <div className="[border-left:3px_solid_var(--orange)]">
                  <strong className="text-(--text) block font-extrabold">5</strong>
                  <span className="text-(--muted) text-[.72rem] tracking-[.06em] uppercase">Sectors Served</span>
                </div>
                <div className="[border-left:3px_solid_var(--orange)]">
                  <strong className="text-(--text) block font-extrabold">PAN</strong>
                  <span className="text-(--muted) text-[.72rem] tracking-[.06em] uppercase">India Reach</span>
                </div>
                <div className="[border-left:3px_solid_var(--orange)]">
                  <strong className="text-(--text) block font-extrabold">2</strong>
                  <span className="text-(--muted) text-[.72rem] tracking-[.06em] uppercase">Global Universities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white [box-shadow:0_2px_10px_rgba(0,0,0,.03)] sticky top-0 z-20 [border-bottom:1px_solid_var(--line)]">
          <div className="omr-year-scroll flex flex-wrap gap-[8px] max-w-(--max)" id="omrSectorBar"><button className="omr-pill active bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--orange) cursor-pointer font-bold whitespace-nowrap [transition:border-color_.15s,color_.15s,background_.15s]">Corporates / MNCs</button><button className="omr-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white cursor-pointer font-bold whitespace-nowrap [transition:border-color_.15s,color_.15s,background_.15s]">Education &amp; Universities</button><button className="omr-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white cursor-pointer font-bold whitespace-nowrap [transition:border-color_.15s,color_.15s,background_.15s]">Schools &amp; Coaching Institutes</button><button className="omr-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white cursor-pointer font-bold whitespace-nowrap [transition:border-color_.15s,color_.15s,background_.15s]">Marketing &amp; Health Care Industry</button><button className="omr-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white cursor-pointer font-bold whitespace-nowrap [transition:border-color_.15s,color_.15s,background_.15s]">Printers &amp; Publishers in OMR</button></div>
        </div>
        <div className="omr-wrap max-w-(--max)">
          <ImportedSectionWhoWeWorkWith />
          <section className="omr-trust-strip bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--black) [border-radius:var(--radius)]" style={{ marginBottom: "24px" }}>
            <div className="omr-wrap flex flex-wrap gap-[24px] justify-between max-w-(--max) [@media(max-width:720px)]:flex-col">
              <div className="text-white text-[1.5rem] font-extrabold"><span className="text-(--orange)">40</span>+ Trusted Clients</div>
              <div className="flex flex-wrap gap-[26px]"><span className="text-[#a8a6a1] text-[.72rem] tracking-[.06em]">CORPORATES</span><span className="text-[#a8a6a1] text-[.72rem] tracking-[.06em]">EDUCATION</span><span className="text-[#a8a6a1] text-[.72rem] tracking-[.06em]">SCHOOLS</span><span className="text-[#a8a6a1] text-[.72rem] tracking-[.06em]">HEALTHCARE</span><span className="text-[#a8a6a1] text-[.72rem] tracking-[.06em]">PRINTERS</span></div>
            </div>
          </section>
          <section className="omr-section" style={{ paddingTop: "0px" }}>
            <div className="omr-contact-strip [background:linear-gradient(135deg,var(--orange),var(--orange-dark))] rounded-[var(--radius)] text-white flex flex-wrap gap-[18px] justify-between [@media(max-width:720px)]:flex-col">
              <div>
                <h2 className="text-[1.25rem]">Delivering OMR excellence for all your evaluation needs.</h2>
                <p className="text-[#ffffffd9] font-semibold">Reach out and we'll help you find the right OMR solution.</p>
              </div>
              <a className="omr-btn items-center cursor-pointer gap-[8px] tracking-[.03em] no-underline [transition:transform_.15s,box-shadow_.15s,background_.15s] [background:rgb(255,_255,_255)]" style={{ color: "var(--orange-dark)" }} href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">Contact Us →</a>
            </div>
          </section>
        </div>
      </div>
      <ImportedFooter />
    </>
  );
}

function ImportedNav() {
  return (
    <nav className="navbar [@media(max-width:991px)]:hidden [@media(max-width:991px)]:w-full" id="navbar">
      <ul className="list-none [@media(max-width:991px)]:flex-col">
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web">Home</a>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="#">Profile</a>
          <ul className="left-0 list-none top-full z-999 [@media(max-width:991px)]:flex-col">
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/about_omr_solutionsphp-f8c503f6ea0cd34a">
                                    About Us
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/careerphp-b74987bb2d02f0be">
                                    Career
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="#">
                                    Clients
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/omr_application_areaphp-148e32150e549d5b">
                                    OMR Application Area
                                </a>
            </li>
          </ul>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="">Solutions</a>
          <ul className="left-0 list-none top-full z-999 [@media(max-width:991px)]:flex-col">
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/solutions/government/newgov_indexphp-be63d4a123e2548e">Government</a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/solutions/education/newedu_indexphp-1c28afcd465278f1">Education</a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/solutions/corporate/newcorp_indexphp-af5dde7752b3202b">Corporate</a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/solutions/ngos/new_ngophp-9b6ac22205fad002">NGO's</a>
            </li>
          </ul>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="#">Products</a>
          <ul className="left-0 list-none top-full z-999 [@media(max-width:991px)]:flex-col">
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">
                                    OMR Scanner
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">
                                    OMR Software
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/omr_form_designing/newomr_form_designphp-2c85611ba802eb08">
                                    OMR Form Designing
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/document_managment/newdocument_managmentphp-eeb286fde108c93a">
                                    Document Management Software
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/document_scanner/new_document_scannerphp-31632d4105835407">
                                    Document Scanner
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/omr_sheets/newindexomrsheetphp-c886d494362cbda3">
                                    OMR Sheets
                                </a>
            </li>
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/products/book_scanners/newbookscannerindexphp-e569406b121e6122">
                                    Book Scanners
                                </a>
            </li>
          </ul>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="#">Press &amp; Media</a>
          <ul className="left-0 list-none top-full z-999 [@media(max-width:991px)]:flex-col">
            <li className="relative [border-bottom:1px_solid_rgb(238,238,238)] [@media(max-width:991px)]:w-full">
              <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/press_media/news/new_newsindexphp-17d0c6e5c9263536">
                                    News
                                </a>
            </li>
          </ul>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/solutions/government/new_ewaste_managementphp-c2d0ee6db896cf32">
                            E-Waste
                        </a>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="no-underline [@media(max-width:991px)]:w-full" href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">
                            Contact Us
                        </a>
        </li>
        <li className="relative [@media(max-width:991px)]:w-full">
          <a className="book-btn no-underline [@media(max-width:991px)]:w-full" href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">
                            Book Now
                        </a>
        </li>
      </ul>
    </nav>
  );
}

function ImportedSectionWhoWeWorkWith() {
  return (
    <section className="omr-section" id="omr-sector-list">
      <div className="omr-layout items-start grid gap-[34px]">
        <div>
          <div className="omr-section-head max-w-[680px]">
            <span className="omr-eyebrow items-center text-(--orange-dark) inline-flex text-[.78rem] font-extrabold gap-[8px] tracking-[.14em] uppercase">Our Clients</span>
            <h2 className="text-[clamp(1.4rem,2.4vw,2rem)]">Who we work with, by sector</h2>
            <p className="text-(--muted)">Select a sector above to see the clients and feedback from that industry.</p>
          </div>
          <div className="flex flex-col gap-[20px]" id="omrSectorList">
            <article className="omr-news-card active bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] block [border:1px_solid_var(--line)] [border-left:4px_solid_var(--orange)]! [transition:transform_.18s_ease,box-shadow_.18s_ease,border-color_.18s_ease]">
              <span className="omr-news-tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fff3e9] rounded-[99px] text-(--orange-dark) inline-block text-[.68rem] font-extrabold tracking-[.04em] uppercase">Sector 01</span>
              <h3 className="text-[1.12rem]">Corporates / MNCs</h3>
              <div className="omr-client-pills flex flex-wrap gap-[8px]"><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Accenture</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Boeing</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Citibank</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Larsen &amp; Toubro, Mumbai</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">L&amp;T Infotech — Mumbai, Pune, Bangalore</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Honeywell, India</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Infosys, Thiruvananthapuram</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">BHEL, Trichy</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[99px] border-dashed! text-(--orange-dark) text-[.82rem] font-bold [border:1px_solid_var(--line)]">+ and more</span></div>
              <div className="omr-testi-col flex flex-col gap-[14px] [border-top:1px_solid_var(--line)]">
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "OMR Solutions' products and services are distinct, with personalised support — a must for any corporate running recruitment or campus drives."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Corporate HR, L&amp;T</cite></div>
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "We were worried about our recruitment process, but the team got our forms printed and supplied within two days, with great software support."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">P. Md, BHEL</cite></div>
              </div>
            </article>
            <article className="omr-news-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] hidden [border:1px_solid_var(--line)] [border-left:4px_solid_var(--orange)]! [transition:transform_.18s_ease,box-shadow_.18s_ease,border-color_.18s_ease]">
              <span className="omr-news-tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fff3e9] rounded-[99px] text-(--orange-dark) inline-block text-[.68rem] font-extrabold tracking-[.04em] uppercase">Sector 02</span>
              <h3 className="text-[1.12rem]">Education &amp; Universities</h3>
              <div className="omr-client-pills flex flex-wrap gap-[8px]"><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Johns Hopkins University, New York</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Jiwaji University, Gwalior</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Madurai University</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Hongkong University</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Larsen &amp; Toubro, Mumbai</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Karnataka Public Service Commission</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Rajasthan Public Service Commission</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">MDSU Ajmer University</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[99px] border-dashed! text-(--orange-dark) text-[.82rem] font-bold [border:1px_solid_var(--line)]">+ and more</span></div>
              <div className="omr-testi-col flex flex-col gap-[14px] [border-top:1px_solid_var(--line)]">
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "How quickly they understand what is required and give you the solution at your budget is the best of any vendor."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Jiwaji University</cite></div>
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "I have seen OMR readers from various companies, but Sekonic for us had the most friendly OMR reader — government jobs are crucial and accuracy is a must."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Secretary, KPSC</cite></div>
              </div>
            </article>
            <article className="omr-news-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] hidden [border:1px_solid_var(--line)] [border-left:4px_solid_var(--orange)]! [transition:transform_.18s_ease,box-shadow_.18s_ease,border-color_.18s_ease]">
              <span className="omr-news-tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fff3e9] rounded-[99px] text-(--orange-dark) inline-block text-[.68rem] font-extrabold tracking-[.04em] uppercase">Sector 03</span>
              <h3 className="text-[1.12rem]">Schools &amp; Coaching Institutes</h3>
              <div className="omr-client-pills flex flex-wrap gap-[8px]"><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Delhi Public School, R K Puram Delhi</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Modern Vidya Niketan, Faridabad</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">City Montessori School, Lucknow</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Rubics Rostrum, Lucknow</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">TriVaAg, Lucknow</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Sahil Study Circle, Delhi</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Mission PMT, Delhi</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Brilliant Tutorials, Delhi</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">IITian Prathisthan, Pune</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Atharwa Classes, Pune</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Sinhal Classes, Mumbai</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Career Point, Kota</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Resonance, Kota</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Cerebral Heights, Indore</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Pathfinder Classes, Indore</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Gupta Tutorials, Indore</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[99px] border-dashed! text-(--orange-dark) text-[.82rem] font-bold [border:1px_solid_var(--line)]">+ and more</span></div>
              <div className="omr-testi-col flex flex-col gap-[14px] [border-top:1px_solid_var(--line)]">
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "Low budget, still accurate and promising — their software and support with scanners and Remark Office is great."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Resonance, Kota</cite></div>
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "Sekonic SR2300 and Remark Classic OMR is a must for any institute — how quickly the two process, for me it's just like MS Office."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Sinhal Classes</cite></div>
                <div className="omr-news-quote bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none text-(--text) text-[.88rem] italic [border-left:3px_solid_var(--orange)]">
                            "We can now conduct so many tests with Sekonic SR2300 — high speed, accurate and low maintenance. Japanese machine, Indian condition."
                            <cite className="text-(--orange-dark) block text-[.78rem] not-italic font-bold">Career Point, Kota</cite></div>
              </div>
            </article>
            <article className="omr-news-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] hidden [border:1px_solid_var(--line)] [border-left:4px_solid_var(--orange)]! [transition:transform_.18s_ease,box-shadow_.18s_ease,border-color_.18s_ease]">
              <span className="omr-news-tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fff3e9] rounded-[99px] text-(--orange-dark) inline-block text-[.68rem] font-extrabold tracking-[.04em] uppercase">Sector 04</span>
              <h3 className="text-[1.12rem]">Marketing &amp; Health Care Industry</h3>
              <div className="omr-client-pills flex flex-wrap gap-[8px]"><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Indian Orthopaedic Association, Delhi</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Hyundai Motors — Marketing Surveys</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Health Research Associates, USA</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[99px] border-dashed! text-(--orange-dark) text-[.82rem] font-bold [border:1px_solid_var(--line)]">+ and more</span></div>
              <div className="omr-no-testi text-(--muted) text-[.85rem] [border-top:1px_solid_var(--line)]">No public testimonials on file for this sector yet.</div>
            </article>
            <article className="omr-news-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] hidden [border:1px_solid_var(--line)] [border-left:4px_solid_var(--orange)]! [transition:transform_.18s_ease,box-shadow_.18s_ease,border-color_.18s_ease]">
              <span className="omr-news-tag bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fff3e9] rounded-[99px] text-(--orange-dark) inline-block text-[.68rem] font-extrabold tracking-[.04em] uppercase">Sector 05</span>
              <h3 className="text-[1.12rem]">Printers &amp; Publishers in OMR</h3>
              <div className="omr-client-pills flex flex-wrap gap-[8px]"><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Manipal Press, Manipal</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Aadarsh Printers, Bhopal</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Ruchi Printers, Bhopal</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card-light) rounded-[99px] text-(--text) text-[.82rem] font-semibold [border:1px_solid_var(--line)]">Autoprint, Coimbatore</span><span className="omr-client-pill bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[99px] border-dashed! text-(--orange-dark) text-[.82rem] font-bold [border:1px_solid_var(--line)]">+ and more</span></div>
              <div className="omr-no-testi text-(--muted) text-[.85rem] [border-top:1px_solid_var(--line)]">No public testimonials on file for this sector yet.</div>
            </article>
          </div>
        </div>
        <aside className="flex flex-col gap-[22px]">
          <div className="omr-side-box bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] [border:1px_solid_var(--line)]">
            <h3 className="inline-block text-[1rem] [border-bottom:2px_solid_var(--orange)]">Browse by sector</h3>
            <ul className="flex-col gap-[10px] list-none">
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Corporates / MNCs</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Education &amp; Universities</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Schools &amp; Coaching Institutes</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Marketing &amp; Health Care Industry</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Printers &amp; Publishers in OMR</a>
              </li>
            </ul>
          </div>
          <div className="omr-side-box [background:linear-gradient(135deg,#FFF6EE,#FFFFFF)] border-(--orange)! rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] [border:1px_solid_var(--line)]" id="omr-contact">
            <h3 className="inline-block text-[1rem] [border-bottom:2px_solid_var(--orange)]">Client enquiries</h3>
            <p className="text-(--muted) text-[.88rem]">Mail your requirements to sales@omr.co.in or call +91-9319123429.</p>
            <a className={"omr-btn omr-btn-primary items-center cursor-pointer gap-[8px] tracking-[.03em] no-underline [transition:transform_.15s,box-shadow_.15s,background_.15s] [&:hover]:[box-shadow:0_10px_26px_rgba(255,122,26,.35)] [width:100%] justify-center"} style={{ marginTop: "14px" }} href="mailto:sales@omr.co.in">Contact the sales desk</a>
          </div>
          <div className="omr-side-box bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--card) rounded-[var(--radius)] [box-shadow:0_2px_10px_rgba(0,0,0,.04)] [border:1px_solid_var(--line)]">
            <h3 className="inline-block text-[1rem] [border-bottom:2px_solid_var(--orange)]">Useful links</h3>
            <ul className="flex-col gap-[10px] list-none">
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">Home page</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">OMR Softwares</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">OMR Scanners</a>
              </li>
              <li>
                <a className="items-start gap-[8px] no-underline" href="#">About Us</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#111111] text-white font-[family-name:Arial,sans-serif] overflow-x-hidden w-full [border-top:3px_solid_rgb(255,106,0)]" id="omr-footer">
      <div className="omr-top max-w-[1200px] w-full">
        <div className="omr-col-brand min-w-0 wrap-break-word [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-1! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)]">
          <a className="omr-logo items-center no-underline [@media(max-width:600px)]:justify-center" href="/">
            <span className="text-[22px] font-bold">
              <span className="lt text-white">O</span>
              <span className="ac text-[#ff6a00]">M</span>
              <span className="lt text-white">R Solutions</span>
            </span>
          </a>
          <p className="omr-about bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#121212] text-white text-[13px] leading-[1.82] [word-break:break-word] [@media(max-width:600px)]:text-[13px] [@media(max-width:600px)]:text-left">
            OMR India Outsources Pvt. Ltd. (OIPL), established in 2004 by serial entrepreneur Rohit Gupta, is a distinguished member of the IOS Group — India's trusted OMR &amp; ICR solutions provider.
          </p>
          <div className="omr-social flex flex-wrap gap-[9px] [@media(max-width:600px)]:justify-center"><a className="items-center shrink-0 justify-center no-underline [transition:background_0.2s,border-color_0.2s,color_0.2s,transform_0.18s]" href="https://www.facebook.com/IndiaOutsources" rel="noopener" target="_blank" title="Facebook">{"\n          "}<svg className="block fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg>{"\n        "}</a><a className="items-center shrink-0 justify-center no-underline [transition:background_0.2s,border-color_0.2s,color_0.2s,transform_0.18s]" href="https://www.youtube.com/@omrsolutions" rel="noopener" target="_blank" title="YouTube">{"\n          "}<svg className="block fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>{"\n        "}</a><a className="items-center shrink-0 justify-center no-underline [transition:background_0.2s,border-color_0.2s,color_0.2s,transform_0.18s]" href="https://www.instagram.com/omrindiaoutsources/" rel="noopener" target="_blank" title="Instagram">{"\n          "}<svg className="block fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>{"\n        "}</a><a className="items-center shrink-0 justify-center no-underline [transition:background_0.2s,border-color_0.2s,color_0.2s,transform_0.18s]" href="https://www.linkedin.com/company/omr-india-outsources-pvt-ltd/" rel="noopener" target="_blank" title="LinkedIn">{"\n          "}<svg className="block fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>{"\n        "}</a></div>
        </div>
        <div className="omr-col-links min-w-0 wrap-break-word [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-2! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)]">
          <h3 className="text-[#ff6a00] text-[11px] font-bold tracking-[0.14em] uppercase [border-bottom:1px_solid_rgba(255,106,0,0.22)]">Useful Links</h3>
          <ul className="list-none">
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web">Home</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/about_omr_solutionsphp-f8c503f6ea0cd34a">About Us</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">OMR Scanners</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">OMR Softwares</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_form_designing/newomr_form_designphp-2c85611ba802eb08">OMR Form Designing</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/document_scanner/new_document_scannerphp-31632d4105835407">Document Scanners</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/press_media/news/new_newsindexphp-17d0c6e5c9263536">News</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="omr-col-services min-w-0 wrap-break-word [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-3! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)]">
          <h3 className="text-[#ff6a00] text-[11px] font-bold tracking-[0.14em] uppercase [border-bottom:1px_solid_rgba(255,106,0,0.22)]">Services</h3>
          <ul className="list-none">
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark_office_omr/newremark_office_omrphp-492802bb4d8c8045">Remark Office OMR</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark_office_omr/newremark_test_gradingphp-ee9f95c17553c8f4">Remark Test Grading</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark_classic_omr/newindexphp-4e2be46061234c76">Remark Classic OMR</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark/optic_view_omr_for_sekonicphp-89232d47f121ed4b">optic view omr for sekonic</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark/optic_view_for_imagephp-5c6f894999229cd5">Optic View For Image</a>
            </li>
            <li>
              <a className="no-underline [transition:color_0.2s,padding-left_0.2s] [word-break:break-word]" href="/omr_web/products/omr_software/remark/mosphp-c01062fae26ba92e">Mark On Screen System</a>
            </li>
          </ul>
        </div>
        <div className="omr-col-contact min-w-0 wrap-break-word [@media(max-width:600px)]:border-b-current [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-4! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)] [@media(max-width:600px)]:[border-bottom-style:none] [@media(max-width:600px)]:[border-bottom-width:medium]">
          <h3 className="text-[#ff6a00] text-[11px] font-bold tracking-[0.14em] uppercase [border-bottom:1px_solid_rgba(255,106,0,0.22)]">Contact Us</h3>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg className="block fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div>
              <a href="tel:+919319123429">+91-9319123429</a>
              <br />
            </div>
          </div>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg className="block fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <a href="mailto:sales@omr.co.in">sales@omr.co.in</a>
              <br />
            </div>
          </div>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg className="block fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <div>#503, 5th Floor, DLF Prime Tower, Okhla Industrial Area Phase 1, South Delhi, India – 110020</div>
          </div>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg className="block fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <div>#1609, Arc One By Lotus, 16th Floor, Off Link Road, Andheri (W), Mumbai, Maharashtra, India – 400053</div>
          </div>
        </div>
      </div>
      <div className="[border-top:1px_solid_rgba(255,106,0,0.15)]">
        <div className="omr-bottom-inner items-center flex flex-wrap justify-between max-w-[1200px] w-full [@media(max-width:600px)]:items-center [@media(max-width:600px)]:flex-col [@media(max-width:600px)]:text-center">
          <p className="text-white text-[12px]">© 2026 OMR India Outsources Pvt. Ltd. All Rights Reserved.</p>
          <nav className="omr-policy flex [@media(max-width:480px)]:flex-col [@media(max-width:600px)]:flex-wrap [@media(max-width:600px)]:justify-center">
            <a className="no-underline [transition:color_0.2s]" href="/omr_web/privacy-policyphp-5f25f67f1371eb7a">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
