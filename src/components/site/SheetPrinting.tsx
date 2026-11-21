import sampleSheet from "@/assets/sample-answer-sheet.jpg.asset.json";
import printingVideo from "@/assets/omr-sheet-printing.mp4.asset.json";

export function SheetPrintingMedia() {
  return (
    <section className="container-x pt-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border bg-black shadow-lift">
          <video
            src={printingVideo.src}
            poster={sampleSheet.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="aspect-[9/16] w-full object-cover"
            aria-label="Video of printed OMR answer sheets moving through the print and cutting line"
          />
        </div>
        <div>
          <span className="eyebrow">From press to reader</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">How your sheets are made</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Answer sheets are printed, collated and cut on the same line, so the marks land where your reader expects
            them. The clip shows sheets moving through the line; the sample beside it shows how a three-part candidate
            data sheet is laid out.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Consistent register, so bubbles sit in the same place on every sheet",
              "Precision cutting and perforation for detachable parts",
              "Magenta or black print, matched to your reader",
              "Sample proofing and a scan test before the full batch",
            ].map((t) => (
              <li key={t} className="rounded-xl bg-secondary p-4 text-sm">{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,320px)_1fr] md:items-center">
        <a
          href={sampleSheet.src}
          target="_blank"
          rel="noopener"
          className="group overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-lift"
        >
          <img
            src={sampleSheet.src}
            alt="Sample OMR candidate data sheet printed in three detachable parts: main answer book, valuer's record and the part detached for scanning"
            loading="lazy"
            className="aspect-[4/5] w-full object-contain bg-secondary p-3 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
        <div>
          <h3 className="text-xl font-semibold">A three-part answer sheet, printed as one</h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            This sample is a university-style candidate data sheet: Part I is the main answer book, Part II stays with
            the answer book for the valuer, and Part III is detached and sent for scanning. Perforations, bar-code
            areas and bubble grids are all positioned for the reader, which is why sheet design and printing have to be
            agreed together.
          </p>
        </div>
      </div>
    </section>
  );
}
