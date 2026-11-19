import { useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/content";
import { buildWhatsAppChatUrl } from "@/lib/whatsapp-chat";

export function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const chatUrl = message.trim() ? buildWhatsAppChatUrl(company.whatsapp, message) : null;

  return (
    <div className="fixed bottom-5 right-5 z-50 pb-[env(safe-area-inset-bottom)]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="lg"
            aria-label="Chat with OMR Solutions on WhatsApp"
            title="Chat on WhatsApp"
            className="h-12 gap-2 rounded-full px-5 shadow-lift"
          >
            <MessageCircle aria-hidden="true" />
            <span>Chat with us</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={12}
          aria-label="OMR Solutions WhatsApp chat"
          className="w-[min(22rem,calc(100vw-2.5rem))] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-lg p-0 shadow-lift motion-reduce:animate-none"
        >
          <div className="flex items-center gap-3 border-b bg-secondary px-5 py-4">
            <MessageCircle className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold tracking-normal">OMR Solutions</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Sales & enquiries · WhatsApp</p>
            </div>
            <Button variant="ghost" size="icon" aria-label="Close WhatsApp chat" title="Close chat" onClick={() => setOpen(false)}>
              <X aria-hidden="true" />
            </Button>
          </div>
          <div className="space-y-5 p-5">
            <div className="border-l-2 border-primary pl-3">
              <p className="text-sm leading-relaxed">Hello! Looking for a scanner, Remark software or OMR answer sheets?</p>
              <p className="mt-2 text-sm text-muted-foreground">Tell our team what you need.</p>
            </div>
            <div>
              <label htmlFor="whatsapp-message" className="mb-2 block text-sm font-semibold">Your message</label>
              <Textarea
                id="whatsapp-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="I’m interested in…"
                className="h-28 min-h-28 resize-none bg-background"
              />
            </div>
            <div className="space-y-3">
              {chatUrl ? (
                <Button asChild className="h-11 w-full">
                  <a href={chatUrl} target="_blank" rel="noopener noreferrer">Continue in WhatsApp <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              ) : (
                <Button disabled className="h-11 w-full">Continue in WhatsApp <ArrowUpRight aria-hidden="true" /></Button>
              )}
              <p className="text-center text-xs leading-relaxed text-muted-foreground">Send and receive replies in WhatsApp.<br />{company.whatsapp}</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}