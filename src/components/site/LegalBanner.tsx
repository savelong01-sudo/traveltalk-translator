import { Shield, FileText } from "lucide-react";

export function LegalBanner() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass rounded-2xl px-8 py-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Legal & Policies
          </span>
          <p className="mt-3 text-sm font-light text-muted-foreground">
            Your privacy and trust matter to us. Review our policies anytime.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_30px_-8px_var(--gold)]"
            >
              <Shield className="h-4 w-4" />
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_30px_-8px_var(--gold)]"
            >
              <FileText className="h-4 w-4" />
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
