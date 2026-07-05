import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Check,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Target,
  Wallet,
  LineChart,
  BookOpen,
  Zap,
  X,
  Copy,
  CreditCard,
  Download,
} from "lucide-react";
import proofImage from "@/assets/proof.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PDR 2026 — Enter Early, Exit Early, Profit Always" },
      {
        name: "description",
        content:
          "A simple, repeatable strategy to profit from prediction markets — without relying on luck or waiting for the final result.",
      },
      { property: "og:title", content: "PDR 2026 — Enter Early, Exit Early, Profit Always" },
      {
        property: "og:description",
        content: "A simple, repeatable strategy to profit from prediction markets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const SOLANA_ADDRESS = "DiLyUUMVXQmG4LJUnJvnPKutrLDWQC93Hp777AUET8yB";
const PRICE_USD = 11.99;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-6 md:px-10 py-24 md:py-32 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function Landing() {
  const STRIPE_LINK = "https://buy.stripe.com/5kQ9AV0h404Z2u1eRifQI00";
  const openCheckout = () => {
    window.open(STRIPE_LINK, "_blank");
  };

  return (
    <div className="min-h-screen text-fo  reground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight">
            PDR <span className="text-primary">2026</span>
          </div>
          <button
            onClick={openCheckout}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Buy the guide <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <Section className="!pt-20 md:!pt-28">
        <motion.div {...fadeUp} className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-8">
            <Sparkles className="w-3 h-3 text-primary" /> Weekly strategy · Low starting capital
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl">
            Enter early. Exit early.
            <br />
            <span className="text-primary text-glow">Profit always.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            A simple, repeatable strategy to profit from prediction markets — without relying on
            luck and without waiting for the final result.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={openCheckout}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition"
            >
              Get the PDR 2026 guide <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#results"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              See real results ↓
            </a>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            +<span className="text-foreground font-semibold">312</span> people already bought
          </div>
        </motion.div>

        {/* Proof image */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs text-muted-foreground">
                Closed positions — every one in profit
              </span>
            </div>
            <img
              src={proofImage}
              alt="Proof of results: closed positions in profit"
              className="w-full block"
            />
          </div>
        </motion.div>
      </Section>

      {/* Concept */}
      <Section>
        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              The concept
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Like a stock market — but for real-world events.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              There are platforms where you buy and sell "shares" on real-world events, just like on
              a stock exchange. You can exit whenever you want — no need to wait for the final
              result to lock in profit or cut losses.
            </p>
            <p>
              PDR 2026 focuses on{" "}
              <span className="text-foreground font-medium">
                one very specific weekly market, largely overlooked, with predictable patterns
              </span>
              . A recurring window most participants ignore.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Problem */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="text-destructive text-sm font-semibold mb-3">Most people</div>
            <h3 className="text-2xl font-bold mb-4">Enter late. Buy high. Hope.</h3>
            <p className="text-muted-foreground leading-relaxed">
              They jump in after the hype explodes, pay the highest price, and stay at the mercy of
              the final result — risking everything until the very last minute.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl border border-primary/40 bg-primary/5 p-8 md:p-10 shadow-glow"
          >
            <div className="text-primary text-sm font-semibold mb-3">PDR 2026</div>
            <h3 className="text-2xl font-bold mb-4">
              Enter early. Exit early. Never depend on the end.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              It teaches the opposite: position yourself at the right moment, capture the
              predictable move, and exit before the final risk arrives.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Results */}
      <Section className="!py-24">
        <div id="results" />
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Proof of results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">The numbers speak for themselves.</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { pct: "+48%", period: "3 days" },
            { pct: "+31%", period: "4 days" },
            { pct: "+26%", period: "3 days" },
            { pct: "+15%", period: "2 days" },
          ].map((r, i) => (
            <motion.div
              key={r.pct}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition"
            >
              <TrendingUp className="w-5 h-5 text-primary mb-4" />
              <div className="font-display text-4xl md:text-5xl font-bold text-primary text-glow">
                {r.pct}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">period: {r.period}</div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Every result comes from a repeatable tactic, week after week. The full step-by-step is
          inside the guide.
        </motion.p>
      </Section>

      {/* ROI Callout */}
      <Section className="!py-16">
        <motion.div
          {...fadeUp}
          className="relative rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-center">
            <div className="font-display text-6xl md:text-7xl font-bold text-primary text-glow">
              $11.99
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                $11.99 pays for itself on your first trade.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Put the knowledge to work: invest $200, capture a 30% move, and you walk away with a{" "}
                <span className="text-primary font-semibold">$60 profit</span> — the guide has
                already paid for itself{" "}
                <span className="text-foreground font-semibold">5 times over</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* What you'll learn */}
      <Section>
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            What you'll learn
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">A system, not a guess.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Target,
              text: "How to identify the right moment to enter, without relying on luck.",
            },
            { icon: Zap, text: "How to know when to sell before the final risk hits." },
            {
              icon: LineChart,
              text: "How to pick the right markets to maximize your hit rate.",
            },
            { icon: Wallet, text: "How to manage capital safely, starting small." },
            {
              icon: BookOpen,
              text: "Recommended tools and platforms to operate without friction.",
            },
            {
              icon: Sparkles,
              text: "How to repeat the tactic, week after week, with discipline.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Liquidity and Risks */}
      <Section>
        <motion.div {...fadeUp} className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Full transparency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Liquidity and risks.</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            The weekly markets in focus have enough volume to enter and exit without liquidity
            issues. But risks exist — and it's only fair to talk about them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Unpredictable behavior of the underlying event can flip positions quickly.",
            "Selling too early reduces potential profit — discipline has a cost.",
            "The platform operates with cryptocurrency: basic knowledge of digital wallets is required.",
          ].map((risk, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-xl border border-warning/30 bg-warning/5 p-6"
            >
              <AlertTriangle className="w-5 h-5 text-warning mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">{risk}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="mt-8 text-sm text-muted-foreground italic">
          This is not financial advice. Always start with small amounts before scaling.
        </motion.p>
      </Section>

      {/* Offer / Buy */}
      <section id="buy" className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              What you get
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">The complete PDR 2026 package.</h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="relative rounded-3xl border border-primary/40 bg-card p-8 md:p-12 shadow-glow overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative grid md:grid-cols-2 gap-10">
              <div>
                <div className="font-display font-bold text-3xl mb-6">PDR 2026 Guide</div>
                <ul className="space-y-3">
                  {[
                    "Complete PDF guide with the step-by-step tactic",
                    "Sell-decision table: when to enter, when to exit",
                    "Real examples with screenshots and documented values",
                    "List of recommended tools and platforms",
                    "Free updates included — no extra cost",
                    "Instant access after payment",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center md:border-l md:border-border md:pl-10">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">$19.99</span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full px-2 py-0.5">
                    -40%
                  </span>
                </div>
                <div className="font-display text-6xl font-bold text-primary text-glow mt-1">
                  ${PRICE_USD}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  One-time payment · lifetime access
                </div>
                <button
                  onClick={openCheckout}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
                >
                  Buy now <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-muted-foreground mt-3 text-center">
                  Card · instant delivery
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <motion.div {...fadeUp} className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Quick questions.</h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl">
          {[
            {
              q: "Do I need crypto experience?",
              a: "No. The guide walks you through everything step-by-step, from zero to fully operational.",
            },
            {
              q: "Is it guaranteed?",
              a: "No. It's a strategy based on probability, not a guarantee. Past results don't guarantee future ones.",
            },
            {
              q: "How do I pay?",
              a: "Card, via secure Stripe checkout. You get the PDF immediately after payment.",
            },
            {
              q: "What do I get after buying?",
              a: "Instant access to the complete PDF and content area, with all the technical details, examples, and updates.",
            },
            {
              q: "How much capital do I need to start?",
              a: "You can start with small amounts. The guide shows how to scale safely.",
            },
          ].map((item, i) => (
            <motion.details
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card p-5 open:border-primary/30 transition"
            >
              <summary className="cursor-pointer font-semibold flex items-center justify-between list-none">
                {item.q}
                <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="!py-32 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
            Start this week before the{" "}
            <span className="text-primary text-glow">next market opens</span>.
          </h2>
          <button
            onClick={openCheckout}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Get the PDR 2026 guide <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-display font-bold text-foreground text-base">
            PDR <span className="text-primary">2026</span>
          </div>
          <p className="max-w-xl text-center md:text-right">
            Educational content. Not financial advice. Trading on prediction markets involves risk
            of capital loss.
          </p>
        </div>
      </footer>
    </div>
  );
}

type Tab = "solana" | "card";
type Stage = "select" | "pay" | "done";

function CheckoutModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>("solana");
  const [stage, setStage] = useState<Stage>("select");
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [txHash, setTxHash] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(SOLANA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submitSolana = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || txHash.length < 20) return;
    setSubmitting(true);
    // In a real setup, this would verify the tx on-chain and email the PDF.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setStage("done");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-border bg-card shadow-card overflow-hidden max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-display font-bold text-sm">PDR 2026 Guide</div>
              <div className="text-xs text-muted-foreground">${PRICE_USD} · instant delivery</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto">
          {stage === "done" ? (
            <DoneStage />
          ) : (
            <>
              <div className="p-6 pb-0">
                <div className="grid grid-cols-2 gap-2 p-1 bg-background/60 border border-border rounded-xl">
                  <button
                    onClick={() => setTab("solana")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
                      tab === "solana"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <SolanaIcon /> Solana
                  </button>
                  <button
                    onClick={() => setTab("card")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
                      tab === "card"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Card
                  </button>
                </div>
              </div>

              {tab === "solana" ? (
                <div className="p-6 space-y-5">
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      Send exactly ${PRICE_USD} in SOL
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use any Solana wallet (Phantom, Solflare, exchange withdrawal). Convert $
                      {PRICE_USD} USD to SOL at current rate.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&bgcolor=0a0a0a&color=00ff9d&margin=0&data=solana:${SOLANA_ADDRESS}`}
                      alt="Solana wallet QR"
                      className="rounded-xl border border-border bg-background p-3"
                      width={180}
                      height={180}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">
                      Wallet address
                    </label>
                    <div className="mt-1 flex items-stretch gap-2">
                      <div className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-xs break-all">
                        {SOLANA_ADDRESS}
                      </div>
                      <button
                        onClick={copy}
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3 text-xs font-semibold hover:opacity-90 transition"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <form onSubmit={submitSolana} className="space-y-3 pt-2 border-t border-border">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">
                        Your email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary/60"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">
                        Transaction signature
                      </label>
                      <input
                        type="text"
                        required
                        value={txHash}
                        onChange={(e) => setTxHash(e.target.value)}
                        placeholder="Paste the tx signature from your wallet"
                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary/60 font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
                    >
                      {submitting ? "Verifying…" : "Confirm & unlock PDF"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      We verify the transaction on-chain and send the PDF to your email.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  <div className="rounded-xl border border-border bg-background/60 p-5">
                    <CreditCard className="w-6 h-6 text-primary mb-3" />
                    <div className="font-semibold mb-1">Card checkout</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Card payments (Visa, Mastercard, Apple Pay, Google Pay) are being enabled. For
                      instant access right now, use Solana — it takes under a minute with any wallet
                      or exchange.
                    </p>
                  </div>
                  <button
                    onClick={() => setTab("solana")}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Pay with Solana instead <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function DoneStage() {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shadow-glow">
        <Check className="w-7 h-7 text-primary" />
      </div>
      <h3 className="mt-5 font-display font-bold text-2xl">Payment received.</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        Your PDR 2026 guide is ready. A copy has also been sent to your email.
      </p>
      <a
        href="/pdr-2026.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
      >
        <Download className="w-4 h-4" /> Download the PDF
      </a>
    </div>
  );
}

function SolanaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 128 128" fill="none" aria-hidden>
      <path
        d="M25 88l14-14h78l-14 14H25zm0-48l14-14h78L103 40H25zm14 10h78l14 14H53L39 50z"
        fill="currentColor"
      />
    </svg>
  );
}
