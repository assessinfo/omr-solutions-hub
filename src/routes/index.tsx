import { Fragment } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "OMR Solutions" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const carouselContent0 = (<>
{activeSlide0 === 0 && <Fragment key={0}>
<div className="omr-slide active">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">OMR Solutions</span>
      <h1>Smart OMR Solutions for Smarter Assessments</h1>
      <p>Power your examinations with reliable OMR software, high-accuracy scanning, and seamless result processing — built for speed, accuracy, and efficiency.</p>
      <a className="omr-btn" href="#solutions">Explore Solutions <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/996f010cf040bf40.jpg" alt="OMR Solutions" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Document Scanning</span>
      <h1>Fast. Accurate. Effortless Document Scanning</h1>
      <p>Transform paper documents into digital data with advanced document scanners designed for high-volume scanning, precision, and productivity.</p>
      <a className="omr-btn" href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">View Scanners <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/9c7204ede04e1f5c.jpg" alt="Document Scanner" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Digital Evaluation</span>
      <h1>Complete Solutions for Modern Examinations</h1>
      <p>From OMR sheet designing and scanning to result processing and online assessments, get everything you need to simplify the entire examination workflow.</p>
      <a className="omr-btn" href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">Discover More <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/c09994488d85bbe7.jpg" alt="Digital Examination Solutions" />
      </div>
    </div>
  </div>
</div>
<button className="omr-prev" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 3) % 3); }} type="button" aria-label="Previous Slide">
  <i className="bi bi-chevron-left" />
</button>
<button className="omr-next" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 3) % 3); }} type="button" aria-label="Next Slide">
  <i className="bi bi-chevron-right" />
</button>
<div className="omr-dots"><button className="omr-dot active" type="button" aria-label="Slide 1" /><button className="omr-dot" type="button" aria-label="Slide 2" /><button className="omr-dot" type="button" aria-label="Slide 3" /></div>
</Fragment>}
{activeSlide0 === 1 && <Fragment key={1}>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">OMR Solutions</span>
      <h1>Smart OMR Solutions for Smarter Assessments</h1>
      <p>Power your examinations with reliable OMR software, high-accuracy scanning, and seamless result processing — built for speed, accuracy, and efficiency.</p>
      <a className="omr-btn" href="#solutions">Explore Solutions <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/996f010cf040bf40.jpg" alt="OMR Solutions" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Document Scanning</span>
      <h1>Fast. Accurate. Effortless Document Scanning</h1>
      <p>Transform paper documents into digital data with advanced document scanners designed for high-volume scanning, precision, and productivity.</p>
      <a className="omr-btn" href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">View Scanners <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/9c7204ede04e1f5c.jpg" alt="Document Scanner" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide active">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Digital Evaluation</span>
      <h1>Complete Solutions for Modern Examinations</h1>
      <p>From OMR sheet designing and scanning to result processing and online assessments, get everything you need to simplify the entire examination workflow.</p>
      <a className="omr-btn" href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">Discover More <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/c09994488d85bbe7.jpg" alt="Digital Examination Solutions" />
      </div>
    </div>
  </div>
</div>
<button className="omr-prev" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 3) % 3); }} type="button" aria-label="Previous Slide">
  <i className="bi bi-chevron-left" />
</button>
<button className="omr-next" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 3) % 3); }} type="button" aria-label="Next Slide">
  <i className="bi bi-chevron-right" />
</button>
<div className="omr-dots"><button className="omr-dot" type="button" aria-label="Slide 1" /><button className="omr-dot" type="button" aria-label="Slide 2" /><button className="omr-dot active" type="button" aria-label="Slide 3" /></div>
</Fragment>}
{activeSlide0 === 2 && <Fragment key={2}>
<div className="omr-slide active">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">OMR Solutions</span>
      <h1>Smart OMR Solutions for Smarter Assessments</h1>
      <p>Power your examinations with reliable OMR software, high-accuracy scanning, and seamless result processing — built for speed, accuracy, and efficiency.</p>
      <a className="omr-btn" href="#solutions">Explore Solutions <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/996f010cf040bf40.jpg" alt="OMR Solutions" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Document Scanning</span>
      <h1>Fast. Accurate. Effortless Document Scanning</h1>
      <p>Transform paper documents into digital data with advanced document scanners designed for high-volume scanning, precision, and productivity.</p>
      <a className="omr-btn" href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">View Scanners <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/9c7204ede04e1f5c.jpg" alt="Document Scanner" />
      </div>
    </div>
  </div>
</div>
<div className="omr-slide">
  <img className="omr-slide-bg" alt="" />
  <div className="omr-slide-container">
    <div className="omr-slide-content">
      <span className="omr-tick">Digital Evaluation</span>
      <h1>Complete Solutions for Modern Examinations</h1>
      <p>From OMR sheet designing and scanning to result processing and online assessments, get everything you need to simplify the entire examination workflow.</p>
      <a className="omr-btn" href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">Discover More <i className="bi bi-arrow-right" /></a>
    </div>
    <div className="omr-slide-image">
      <div className="omr-frame">
        <img src="/site-assets/c09994488d85bbe7.jpg" alt="Digital Examination Solutions" />
      </div>
    </div>
  </div>
</div>
<button className="omr-prev" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 3) % 3); }} type="button" aria-label="Previous Slide">
  <i className="bi bi-chevron-left" />
</button>
<button className="omr-next" onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 3) % 3); }} type="button" aria-label="Next Slide">
  <i className="bi bi-chevron-right" />
</button>
<div className="omr-dots"><button className="omr-dot active" type="button" aria-label="Slide 1" /><button className="omr-dot" type="button" aria-label="Slide 2" /><button className="omr-dot" type="button" aria-label="Slide 3" /></div>
</Fragment>}
</>);
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
          <div className={"\x74op-right [@media(max-width:991px)]:flex [@media(max-width:991px)]:flex-wrap [@media(max-width:991px)]:gap-[12px] [@media(max-width:991px)]:justify-center"}><a aria-label="Facebook" href="https://www.facebook.com/IndiaOutsources" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-facebook-f" />{"\n    "}</a><a aria-label="YouTube" href="https://www.youtube.com/@omrsolutions" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-youtube" />{"\n    "}</a><a aria-label="Instagram" href="https://www.instagram.com/omrindiaoutsources/" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-instagram" />{"\n    "}</a><a aria-label="LinkedIn" href="https://www.linkedin.com/company/omr-india-outsources-pvt-ltd/" rel="noopener noreferrer" target="_blank">{"\n        "}<i className="fa-brands fa-linkedin-in" />{"\n    "}</a></div>
        </div>
      </div>
      <div className="header bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white [box-shadow:rgba(0,0,0,0.08)_0px_3px_10px]">
        <div className="header-inner items-center flex justify-between max-w-[1200px] [@media(max-width:991px)]:flex-wrap">
          <div className="logo">
            <a href="#">
              <img src="/site-assets/5db59fecaa10f04f.png" alt="OMR Solutions" />
            </a>
          </div>
          <div className="menu-toggle cursor-pointer text-[28px]" id="menuToggle">
            <i className="fas fa-bars" />
          </div>
          <ImportedNav />
        </div>
      </div>
      <div className="omr-home bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-paper) text-(--omr-text) font-[family-name:Barlow,Arial,sans-serif] overflow-hidden">
        <section className="omr-hero" data-site-import-carousel-root="0">{carouselContent0}</section>
        <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-ink-soft) [border-top:1px_solid_var(--omr-line-dark)]">
          <div className="omr-stats-grid grid max-w-[1250px] [@media(max-width:1100px)]:gap-y-[24px] [@media(max-width:1100px)]:gap-x-0">
            <div className="omr-stat text-center">
              <strong>99.8%</strong>
              <span>Scanning Accuracy</span>
            </div>
            <div className="omr-stat text-center">
              <strong>500+</strong>
              <span>Institutions Served</span>
            </div>
            <div className="omr-stat text-center">
              <strong>10M+</strong>
              <span>Sheets Processed</span>
            </div>
            <div className="omr-stat text-center">
              <strong>24/7</strong>
              <span>Support &amp; Uptime</span>
            </div>
          </div>
        </section>
        <section className="omr-section omr-about bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#121212]" id="about">
          <div className="omr-container max-w-[1250px]">
            <div className="omr-about-grid items-center grid">
              <div className="omr-about-image omr-frame">
                <img alt="About OMR Solutions" />
              </div>
              <div className="omr-about-content">
                <span>About OMR Solutions</span>
                <h2>Technology Built Around Accuracy &amp; Efficiency</h2>
                <p>OMR Solutions provides technology-driven solutions for examination processing, OMR scanning, document digitization and data management.</p>
                <p>Our solutions are designed to reduce manual effort, improve accuracy and help organizations manage large volumes of information efficiently.</p>
                <ul className="omr-check-list list-none">
                  <li><i className="bi bi-check-circle-fill text-(--omr-orange)" /> Reliable OMR Processing</li>
                  <li><i className="bi bi-check-circle-fill text-(--omr-orange)" /> Advanced Document Scanning</li>
                  <li><i className="bi bi-check-circle-fill text-(--omr-orange)" /> Examination &amp; Evaluation Solutions</li>
                  <li><i className="bi bi-check-circle-fill text-(--omr-orange)" /> Secure Data Processing</li>
                </ul>
                <a className="omr-btn" href="/omr_web/about_omr_solutionsphp-f8c503f6ea0cd34a">Read More <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
        </section>
        <ImportedSectionPrinciplesThatPowerOur />
        <ImportedSectionCompleteTechnologySolutions />
        <ImportedSectionDesignedForBetterResults />
        <section className="omr-cta bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-orange) overflow-hidden relative" id="contact">
          <div className="omr-cta-inner flex gap-[30px] justify-between max-w-[1250px] relative z-2 [@media(max-width:768px)]:flex-col">
            <div>
              <h2>Ready To Simplify Your Workflow?</h2>
              <p>Talk to our team about the right solution for your organization.</p>
            </div>
            <a className="omr-btn whitespace-nowrap" href="/omr_web/contactcontact_usphp-26ddceaf91136972">Contact Us <i className="bi bi-arrow-right" /></a>
          </div>
        </section>
      </div>
      <ImportedFooter />

    </>
  );
}

function ImportedNav() {
  return (
    <nav className="navbar [@media(max-width:991px)]:w-full" id="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
          <ul>
            <li>
              <a href="/omr_web/about_omr_solutionsphp-f8c503f6ea0cd34a">
                                    About Us
                                </a>
            </li>
            <li>
              <a href="/omr_web/careerphp-b74987bb2d02f0be">
                                    Career
                                </a>
            </li>
            <li>
              <a href="/omr_web/omr_clientsphp-2b4f7e0f5680a823">
                                    Clients
                                </a>
            </li>
            <li>
              <a href="/omr_web/omr_application_areaphp-148e32150e549d5b">
                                    OMR Application Area
                                </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Solutions</a>
          <ul>
            <li>
              <a href="/omr_web/solutions/government/newgov_indexphp-be63d4a123e2548e">Government</a>
            </li>
            <li>
              <a href="/omr_web/solutions/education/newedu_indexphp-1c28afcd465278f1">Education</a>
            </li>
            <li>
              <a href="/omr_web/solutions/corporate/newcorp_indexphp-af5dde7752b3202b">Corporate</a>
            </li>
            <li>
              <a href="/omr_web/solutions/ngos/new_ngophp-9b6ac22205fad002">NGO's</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Products</a>
          <ul>
            <li>
              <a href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">
                                    OMR Scanner
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">
                                    OMR Software
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/omr_form_designing/newomr_form_designphp-2c85611ba802eb08">
                                    OMR Form Designing
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/document_managment/newdocument_managmentphp-eeb286fde108c93a">
                                    Document Management Software
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/document_scanner/new_document_scannerphp-31632d4105835407">
                                    Document Scanner
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/omr_sheets/newindexomrsheetphp-c886d494362cbda3">
                                    OMR Sheets
                                </a>
            </li>
            <li>
              <a href="/omr_web/products/book_scanners/newbookscannerindexphp-e569406b121e6122">
                                    Book Scanners
                                </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Press &amp; Media</a>
          <ul>
            <li>
              <a href="/omr_web/press_media/news/new_newsindexphp-17d0c6e5c9263536">
                                    News
                                </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/omr_web/solutions/government/new_ewaste_managementphp-c2d0ee6db896cf32">
                            E-Waste
                        </a>
        </li>
        <li>
          <a href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">
                            Contact Us
                        </a>
        </li>
        <li>
          <a className="book-btn" href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">
                            Book Now
                        </a>
        </li>
      </ul>
    </nav>
  );
}

function ImportedSectionPrinciplesThatPowerOur() {
  return (
    <section className="omr-section bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-paper)">
      <div className="omr-container max-w-[1250px]">
        <div className="omr-section-heading omr-values-heading text-center">
          <span>What We Believe</span>
          <h2>Principles That Power Our Solutions</h2>
          <p>Our solutions are guided by principles that help us deliver dependable technology and better customer experiences.</p>
        </div>
        <div className="omr-values-grid bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-line) grid gap-px [border:1px_solid_var(--omr-line)]">
          <div className="omr-value-card [transition:background_0.25s]">
            <div className="omr-value-icon items-center text-(--omr-orange) flex text-[24px] h-[54px] justify-center w-[54px] [border:2px_solid_var(--omr-orange)]">
              <i className="bi bi-bullseye" />
            </div>
            <h3>Role Model</h3>
            <p>Leading with innovation, professionalism, and excellence to inspire better solutions and set higher standards in OMR technology and assessment services.</p>
          </div>
          <div className="omr-value-card [transition:background_0.25s]">
            <div className="omr-value-icon items-center text-(--omr-orange) flex text-[24px] h-[54px] justify-center w-[54px] [border:2px_solid_var(--omr-orange)]">
              <i className="bi bi-lightning-charge" />
            </div>
            <h3>Responsibility</h3>
            <p>Taking responsibility for delivering accurate, secure, and dependable solutions while understanding the needs of our clients and supporting their success.</p>
          </div>
          <div className="omr-value-card [transition:background_0.25s]">
            <div className="omr-value-icon items-center text-(--omr-orange) flex text-[24px] h-[54px] justify-center w-[54px] [border:2px_solid_var(--omr-orange)]">
              <i className="bi bi-shield-check" />
            </div>
            <h3>Open-Mindedness</h3>
            <p>Embracing new ideas, technologies, and perspectives to continuously improve OMR solutions and create smarter, more flexible ways of working.</p>
          </div>
          <div className="omr-value-card [transition:background_0.25s]">
            <div className="omr-value-icon items-center text-(--omr-orange) flex text-[24px] h-[54px] justify-center w-[54px] [border:2px_solid_var(--omr-orange)]">
              <i className="bi bi-people" />
            </div>
            <h3>Integrity</h3>
            <p>Building trust through honest practices, transparent communication, data security, and a strong commitment to quality in every solution we deliver.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionCompleteTechnologySolutions() {
  return (
    <section className="omr-section omr-solutions bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-ink) relative" id="solutions">
      <div className="omr-container max-w-[1250px]">
        <div className="omr-section-heading">
          <span>Our Solutions</span>
          <h2>Complete Technology Solutions</h2>
          <p>Explore our range of software, scanning and examination processing solutions.</p>
        </div>
        <div className="omr-products-grid grid gap-[24px]">
          <div className="omr-product-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#1a1a1c] min-h-[340px] overflow-hidden">
            <img src="/site-assets/a4ad769c7824af5a.png" alt="OMR Software" />
            <div className="omr-product-content bottom-[26px] text-white left-[26px] absolute right-[26px]">
              <span className="omr-tick">01</span>
              <h3>OMR Software</h3>
              <p>Software solutions for OMR sheet designing, scanning and processing.</p>
            </div>
          </div>
          <div className="omr-product-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#1a1a1c] min-h-[340px] overflow-hidden">
            <img src="/site-assets/99ec7bad68a99e67.png" alt="Document Scanner" />
            <div className="omr-product-content bottom-[26px] text-white left-[26px] absolute right-[26px]">
              <span className="omr-tick">02</span>
              <h3>Document Scanners</h3>
              <p>High-speed scanning solutions for efficient document digitization.</p>
            </div>
          </div>
          <div className="omr-product-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#1a1a1c] min-h-[340px] overflow-hidden">
            <img src="/site-assets/fa29dfea440c0411.png" alt="Examination Solutions" />
            <div className="omr-product-content bottom-[26px] text-white left-[26px] absolute right-[26px]">
              <span className="omr-tick">03</span>
              <h3>Examination Solutions</h3>
              <p>Technology solutions for examination, evaluation and result processing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionDesignedForBetterResults() {
  return (
    <section className="omr-section bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--omr-white)">
      <div className="omr-container max-w-[1250px]">
        <div className="omr-why-grid items-center grid">
          <div>
            <div className="omr-section-heading">
              <span>Why OMR Solutions</span>
              <h2>Designed For Better Results</h2>
              <p>We combine technology, experience and practical solutions to simplify complex processing requirements.</p>
            </div>
            <div className="omr-feature flex gap-[18px] [border-top:1px_solid_var(--omr-line)]">
              <div className="omr-feature-icon items-center text-(--omr-orange) flex text-[24px] h-[48px] justify-center min-w-[48px] [border:2px_solid_var(--omr-orange)]">
                <i className="bi bi-speedometer2" />
              </div>
              <div>
                <h3>Faster Processing</h3>
                <p>Reduce processing time with efficient digital workflows.</p>
              </div>
            </div>
            <div className="omr-feature flex gap-[18px] [border-top:1px_solid_var(--omr-line)]">
              <div className="omr-feature-icon items-center text-(--omr-orange) flex text-[24px] h-[48px] justify-center min-w-[48px] [border:2px_solid_var(--omr-orange)]">
                <i className="bi bi-check2-circle" />
              </div>
              <div>
                <h3>Improved Accuracy</h3>
                <p>Minimize manual errors and improve data reliability.</p>
              </div>
            </div>
            <div className="omr-feature flex gap-[18px] [border-bottom:1px_solid_var(--omr-line)] [border-top:1px_solid_var(--omr-line)]">
              <div className="omr-feature-icon items-center text-(--omr-orange) flex text-[24px] h-[48px] justify-center min-w-[48px] [border:2px_solid_var(--omr-orange)]">
                <i className="bi bi-gear" />
              </div>
              <div>
                <h3>Easy Workflow</h3>
                <p>Simple and practical solutions designed for everyday operations.</p>
              </div>
            </div>
          </div>
          <div className="omr-why-image omr-frame">
            <img src="/site-assets/bb06aa785b4420d8.png" alt="OMR Solutions Technology" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer id="omr-footer">
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
          <div className="omr-social flex flex-wrap gap-[9px] [@media(max-width:600px)]:justify-center"><a href="https://www.facebook.com/IndiaOutsources" rel="noopener" target="_blank" title="Facebook">{"\n          "}<svg viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg>{"\n        "}</a><a href="https://www.youtube.com/@omrsolutions" rel="noopener" target="_blank" title="YouTube">{"\n          "}<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>{"\n        "}</a><a href="https://www.instagram.com/omrindiaoutsources/" rel="noopener" target="_blank" title="Instagram">{"\n          "}<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>{"\n        "}</a><a href="https://www.linkedin.com/company/omr-india-outsources-pvt-ltd/" rel="noopener" target="_blank" title="LinkedIn">{"\n          "}<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>{"\n        "}</a></div>
        </div>
        <div className="omr-col-links min-w-0 wrap-break-word [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-2! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)]">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/omr_web/about_omr_solutionsphp-f8c503f6ea0cd34a">About Us</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_scanners/newomr_scannerphp-d7fc95de163901df">OMR Scanners</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/newsoftwarephp-5c486ac3a3d9a5bd">OMR Softwares</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_form_designing/newomr_form_designphp-2c85611ba802eb08">OMR Form Designing</a>
            </li>
            <li>
              <a href="/omr_web/products/document_scanner/new_document_scannerphp-31632d4105835407">Document Scanners</a>
            </li>
            <li>
              <a href="/omr_web/press_media/news/new_newsindexphp-17d0c6e5c9263536">News</a>
            </li>
            <li>
              <a href="/omr_web/contact/contact_usphp-9f39c8e90fd3b42a">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="omr-col-services min-w-0 wrap-break-word [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-3! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)]">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/omr_web/products/omr_software/remark_office_omr/newremark_office_omrphp-492802bb4d8c8045">Remark Office OMR</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/remark_office_omr/newremark_test_gradingphp-ee9f95c17553c8f4">Remark Test Grading</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/remark_classic_omr/newindexphp-4e2be46061234c76">Remark Classic OMR</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/remark/optic_view_omr_for_sekonicphp-89232d47f121ed4b">optic view omr for sekonic</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/remark/optic_view_for_imagephp-5c6f894999229cd5">Optic View For Image</a>
            </li>
            <li>
              <a href="/omr_web/products/omr_software/remark/mosphp-c01062fae26ba92e">Mark On Screen System</a>
            </li>
          </ul>
        </div>
        <div className="omr-col-contact min-w-0 wrap-break-word [@media(max-width:600px)]:border-b-current [@media(max-width:600px)]:block [@media(max-width:600px)]:max-w-full [@media(max-width:600px)]:order-4! [@media(max-width:600px)]:text-center [@media(max-width:600px)]:w-full [@media(max-width:600px)]:[border-bottom:1px_solid_rgba(255,255,255,0.12)] [@media(max-width:600px)]:[border-bottom-style:none] [@media(max-width:600px)]:[border-bottom-width:medium]">
          <h3>Contact Us</h3>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg viewBox="0 0 24 24">
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
              <svg viewBox="0 0 24 24">
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
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <div>#503, 5th Floor, DLF Prime Tower, Okhla Industrial Area Phase 1, South Delhi, India – 110020</div>
          </div>
          <div className="omr-citem items-start text-white flex leading-[1.7] [word-break:break-word] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:text-left">
            <div className="omr-icon items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff6a001a] border border-solid border-site-import-muted rounded-[7px] text-[#ff6a00] flex shrink-0 justify-center">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <div>#1609, Arc One By Lotus, 16th Floor, Off Link Road, Andheri (W), Mumbai, Maharashtra, India – 400053</div>
          </div>
        </div>
      </div>
      <div className="omr-bottom [border-top:1px_solid_rgba(255,106,0,0.15)]">
        <div className="omr-bottom-inner items-center flex flex-wrap justify-between max-w-[1200px] w-full [@media(max-width:600px)]:items-center [@media(max-width:600px)]:flex-col [@media(max-width:600px)]:text-center">
          <p>© 2026 OMR India Outsources Pvt. Ltd. All Rights Reserved.</p>
          <nav className="omr-policy flex [@media(max-width:480px)]:flex-col [@media(max-width:600px)]:flex-wrap [@media(max-width:600px)]:justify-center">
            <a href="/omr_web/privacy-policyphp-5f25f67f1371eb7a">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
