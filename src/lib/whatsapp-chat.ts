export function buildWhatsAppChatUrl(phone: string, message: string): string {
  const digits = phone.replace(/[\s()+-]/g, "");
  if (!/^[1-9]\d{6,14}$/.test(digits)) {
    throw new Error("A valid international WhatsApp number is required.");
  }
  const text = message.trim();
  if (!text) throw new Error("Please enter a message.");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}