import React from "react";
import Link from "next/link";
import Header from "./headerPage";
import { Cpu, ShieldCheck, Bot } from "lucide-react"; // icons for feature cards

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Accents */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        {/* Top-left accent */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-sky-500 to-teal-500 animate-pulse" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 mt-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
            SomniaAI <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
              The Future of <br />
            </span>
            <span>Blockchain Conversations</span>
          </h2>

          <p className="mt-11 text-lg font-serif text-gray-300 max-w-xl">
            Interact with blockchains like never before — seamless, intuitive,
            and powered by cutting-edge AI. Say goodbye to commands, and{" "}
            <span className="text-sky-400 font-semibold">
              start chatting with the chain.
            </span>
          </p>

          <p className="mt-4 text-lg font-medium text-emerald-400">
            "Your voice. Your wallet. Your blockchain assistant."
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/chat" passHref>
              <button className="rounded-xl cursor-pointer bg-gradient-to-r from-sky-500 to-teal-500 px-6 py-3 font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content - AI Illustration */}
        <div className="flex-1 relative">
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-2xl p-1 bg-black shadow-xl shadow-sky-500/20">
              <div className="rounded-2xl p-8 bg-black backdrop-blur-md border border-gray-800 relative overflow-hidden">
                {/* Decorative AI glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 blur-2xl -z-10" />
                <h3 className="text-2xl font-serif font-bold text-sky-400">
                  AI-Powered Blockchain Assistant
                </h3>

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  Ask natural questions like
                  <span className="text-white">
                    Whats my wallet balance?
                  </span>
                  &nbsp;or&nbsp;
                  <span className="text-white">
                    Send 5 SUI to Alice.
                  </span>
                 all executed through smart blockchain
                  integration.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-lg bg-gradient-to-tr from-gray-800/70 to-gray-900/70 border border-sky-500/20 shadow-md">
                    <span className="block text-gray-400">Wallets</span>
                    <span className="font-semibold text-white">
                      Multi-Sui Wallets
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-tr from-gray-800/70 to-gray-900/70 border border-fuchsia-500/20 shadow-md">
                    <span className="block text-gray-400">AI Engine</span>
                    <span className="font-semibold text-white">
                      Google Gemini
                    </span>
                  </div>
                </div>

                <Link href="/chat" passHref>
                  <button className="mt-6 cursor-pointer w-full rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2 text-black font-medium hover:opacity-90 transition shadow-md shadow-sky-500/20">
                    Try Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-16 lg:px-24 mt-24 text-center relative z-10">
        <h3 className="text-3xl font-bold font-serif">Why Choose SomniaAI?</h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-gradient-to-tl from-sky-800 to-black border border-sky-500/30 hover:scale-110 transition-transform shadow-xl shadow-sky-500/20">
            <Cpu className="w-10 h-10 text-sky-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-sky-400">
              Natural Language to Blockchain
            </h4>
            <p className="mt-3 text-gray-300">
              Forget complex commands — just type or say what you want, and let
              AI handle the chain logic.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-gradient-to-tl from-emerald-800 to-black border border-emerald-500/30 hover:scale-110 transition-transform shadow-xl shadow-emerald-500/20">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-emerald-400">
              Secure Wallet Integration
            </h4>
            <p className="mt-3 text-gray-300">
              Powered by <code>@suiet/wallet-kit</code> with multi-wallet
              support. Transactions are private, safe, and seamless.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-gradient-to-tl from-teal-800 to-black border border-teal-500/30 hover:scale-110 transition-transform shadow-xl shadow-teal-500/20">
            <Bot className="w-10 h-10 text-teal-300 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-teal-300">
              Smart Contracts + AI
            </h4>
            <p className="mt-3 text-gray-300">
              Execute Move-based smart contracts with real-time AI guidance,
              insights, and error-free precision.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SomniaAI — Built for the next generation
        of blockchain interaction.
      </footer>
    </div>
  );
};

export default LandingPage;
