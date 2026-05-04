export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Tax Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Which Expenses
          <span className="text-[#58a6ff]"> Are Tax Deductible</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your receipts or bank transactions. Our AI instantly categorizes every expense into the correct IRS tax deduction category — with confidence scores and plain-English explanations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Categorizing — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">95%</div>
            <div className="text-[#8b949e] text-sm">Categorization accuracy</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">&lt;30s</div>
            <div className="text-[#8b949e] text-sm">Per receipt processed</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">$2,400</div>
            <div className="text-[#8b949e] text-sm">Avg. deductions found</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-xl">Pro Plan</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited receipt uploads",
              "AI categorization with confidence scores",
              "20+ IRS tax deduction categories",
              "Plain-English explanations per item",
              "CSV & PDF export for your accountant",
              "Bank transaction CSV import",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats can I upload?",
              a: "You can upload receipt images (JPG, PNG, PDF) or export your bank transactions as a CSV file. Our AI handles both formats automatically."
            },
            {
              q: "How accurate is the AI categorization?",
              a: "Our model achieves ~95% accuracy on common freelancer expenses. Every categorization includes a confidence score so you know when to double-check, and a plain-English explanation of why it was categorized that way."
            },
            {
              q: "Is this a replacement for an accountant?",
              a: "No — TaxCat AI is a preparation tool. It organizes and categorizes your expenses so you (or your accountant) can file faster and catch more deductions. Always consult a tax professional for final filing."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} TaxCat AI. Built for freelancers who hate tax season.
      </footer>
    </main>
  );
}
