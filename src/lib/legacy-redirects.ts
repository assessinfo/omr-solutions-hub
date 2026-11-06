const map: Record<string, string> = {
  "": "/",
  "index.php": "/",
  "about_omr_solutions.php": "/about",
  "career.php": "/careers",
  "omr_clients.php": "/clients",
  "omr_application_area.php": "/applications",
  "contact/contact_us.php": "/contact",
  "privacy-policy.php": "/privacy-policy",
  "solutions/government/newgov_index.php": "/solutions/government",
  "solutions/government/new_ewaste_management.php": "/solutions/e-waste",
  "solutions/education/newedu_index.php": "/solutions/education",
  "solutions/corporate/newcorp_index.php": "/solutions/corporate",
  "solutions/ngos/new_ngo.php": "/solutions/ngos",
  "press_media/news/new_newsindex.php": "/news",
  "press_media/case_studies/newcase_studies.php": "/case-studies",
  "products/omr_scanners/newomr_scanner.php": "/products/omr-scanners",
  "products/omr_sheets/newindexomrsheet.php": "/products/omr-sheets",
  "products/omr_software/newsoftware.php": "/products/omr-software",
  "products/omr_software/remark_classic_omr/newindex.php": "/products/remark-classic-omr",
  "products/omr_software/remark_office_omr/newremark_test_grading.php": "/products/remark-test-grading",
  "products/omr_software/remark/mos.php": "/products/mark-on-screen",
  "products/omr_software/remark/optic_view_for_image.php": "/products/optic-view-image",
  "products/omr_software/remark/optic_view_omr_for_sekonic.php": "/products/optic-view-sekonic",
  "products/omr_form_designing/newomr_form_design.php": "/products/omr-form-design",
  "products/document_scanner/new_document_scanner.php": "/products/document-scanners",
  "products/book_scanners/newbookscannerindex.php": "/products/book-scanners",
  "products/document_managment/newdocument_managment.php": "/products/document-management",
};

/** Maps an old /omr_web/<path> URL to its page on the new site (falls back to home). */
export function legacyRedirect(path: string): string {
  const key = path.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "").toLowerCase();
  return map[key] ?? "/";
}
