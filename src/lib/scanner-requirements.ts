import { z } from "zod";

export const scannerRequirements = z.object({
  volume: z.string().trim().min(3, "Describe your document volume and timeframe.").max(500),
  forms: z.string().trim().min(3, "Describe the forms you need to scan.").max(1500),
  requirements: z.string().trim().min(3, "Describe what you need to capture.").max(1500),
});
export type ScannerRequirements = z.infer<typeof scannerRequirements>;