import fs from 'fs';

let code = fs.readFileSync('src/App.jsx', 'utf8');

// ─── 1. ROOT WRAPPER – richer base background ───────────────────────────────
code = code.replace(
  `<div className="min-h-screen bg-[#080B16] text-[#F8FAFC] selection:bg-[#22D3EE] selection:text-[#080B16] antialiased relative">`,
  `<div className="min-h-screen bg-[#04060F] text-[#F8FAFC] selection:bg-[#00E5FF] selection:text-[#04060F] antialiased relative">`
);

// ─── 2. AMBIENT ORBS – larger, more opaque, neon palette ────────────────────
code = code.replace(
  `{/* Visible Vibrant Ambient Lighting Meshes */}
      <div className="fixed inset-0 pointer-events-none z-0 cinema-grid opacity-35" />
      <div className="fixed -top-24 -left-20 w-[650px] h-[650px] pointer-events-none z-0 rounded-full bg-[#22D3EE]/[0.18] blur-[140px]" />
      <div className="fixed top-10 -right-20 w-[700px] h-[700px] pointer-events-none z-0 rounded-full bg-[#A855F7]/[0.18] blur-[150px]" />
      <div className="fixed top-[45%] -left-10 w-[600px] h-[600px] pointer-events-none z-0 rounded-full bg-[#3B82F6]/[0.15] blur-[140px]" />
      <div className="fixed top-[60%] right-[5%] w-[650px] h-[650px] pointer-events-none z-0 rounded-full bg-[#EC4899]/[0.15] blur-[160px]" />
      <div className="fixed bottom-0 left-[20%] w-[600px] h-[600px] pointer-events-none z-0 rounded-full bg-[#14B8A6]/[0.14] blur-[150px]" />`,
  `{/* NEON AMBIENT ORBS */}
      <div className="fixed inset-0 pointer-events-none z-0 cinema-grid opacity-50" />
      <div className="fixed -top-32 -left-24 w-[800px] h-[800px] pointer-events-none z-0 rounded-full bg-[#00E5FF]/[0.28] blur-[120px]" />
      <div className="fixed -top-10 -right-24 w-[850px] h-[850px] pointer-events-none z-0 rounded-full bg-[#A855F7]/[0.28] blur-[130px]" />
      <div className="fixed top-[42%] -left-12 w-[700px] h-[700px] pointer-events-none z-0 rounded-full bg-[#2979FF]/[0.24] blur-[120px]" />
      <div className="fixed top-[58%] -right-12 w-[750px] h-[750px] pointer-events-none z-0 rounded-full bg-[#FF3DCE]/[0.24] blur-[130px]" />
      <div className="fixed bottom-0 left-[18%] w-[700px] h-[700px] pointer-events-none z-0 rounded-full bg-[#00E676]/[0.18] blur-[130px]" />
      <div className="fixed bottom-0 right-[12%] w-[600px] h-[600px] pointer-events-none z-0 rounded-full bg-[#FF9100]/[0.16] blur-[120px]" />`
);

// ─── 3. NAVBAR ──────────────────────────────────────────────────────────────
// Navbar pill background
code = code.replace(
  `className="hidden lg:flex items-center gap-1 rounded-full border border-violet-500/20 bg-[#0D1124]/85 px-6 py-2.5 backdrop-blur-xl shadow-[0_10px_35px_rgba(8,11,22,0.8),0_0_20px_rgba(34,211,238,0.08)]"`,
  `className="hidden lg:flex items-center gap-1 rounded-full border border-[#536DFE]/40 bg-[#070A1A]/90 px-6 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_rgba(4,6,15,0.9),0_0_30px_rgba(0,229,255,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]"`
);

// Active nav pill
code = code.replace(
  `? "text-[#22D3EE] bg-gradient-to-r from-[#22D3EE]/15 via-[#A78BFA]/15 to-[#E879F9]/15 border border-[#22D3EE]/35 font-semibold shadow-[0_0_12px_rgba(34,211,238,0.25)]"`,
  `? "text-[#00E5FF] bg-gradient-to-r from-[#00E5FF]/20 via-[#536DFE]/20 to-[#A855F7]/20 border border-[#00E5FF]/50 font-semibold shadow-[0_0_18px_rgba(0,229,255,0.5)]"`
);

// Inactive nav pill
code = code.replace(
  `: "text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-white/[0.04] font-medium"`,
  `: "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#536DFE]/10 font-medium transition-all"`
);

// Resume button
code = code.replace(
  `className="rounded-full border border-[#22D3EE]/35 bg-gradient-to-r from-[#22D3EE]/10 via-[#A78BFA]/10 to-[#E879F9]/10 px-5 py-2 text-xs font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE]/70 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] hover:text-white"`,
  `className="rounded-full border border-[#00E5FF]/60 bg-gradient-to-r from-[#00E5FF]/20 via-[#2979FF]/20 to-[#A855F7]/20 px-5 py-2 text-xs font-semibold text-[#00E5FF] transition hover:border-[#00E5FF] hover:bg-gradient-to-r hover:from-[#00E5FF]/30 hover:via-[#2979FF]/30 hover:to-[#A855F7]/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:text-white"`
);

// Logo dot
code = code.replace(
  `<span className="text-[#22D3EE] text-xl font-bold leading-none drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">`,
  `<span className="text-[#00E5FF] text-xl font-bold leading-none drop-shadow-[0_0_12px_rgba(0,229,255,0.9)]">`
);

// Mobile menu
code = code.replace(
  `className="mt-3 mx-auto max-w-lg rounded-2xl border border-violet-500/25 bg-[#0D1124]/95 p-5 backdrop-blur-2xl shadow-2xl lg:hidden"`,
  `className="mt-3 mx-auto max-w-lg rounded-2xl border border-[#536DFE]/40 bg-[#070A1A]/95 p-5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(4,6,15,0.95),0_0_40px_rgba(83,109,254,0.2)] lg:hidden"`
);

// Active mobile nav
code = code.replace(
  `? "bg-gradient-to-r from-[#22D3EE]/20 to-[#A78BFA]/20 text-[#22D3EE] font-semibold border border-[#22D3EE]/30"`,
  `? "bg-gradient-to-r from-[#00E5FF]/25 to-[#A855F7]/25 text-[#00E5FF] font-semibold border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.3)]"`
);

// Mobile menu button
code = code.replace(
  `className="p-2 text-[#A1A1AA] hover:text-[#F8FAFC] lg:hidden rounded-lg border border-violet-500/20 bg-[#0D1124]"`,
  `className="p-2 text-[#94A3B8] hover:text-[#00E5FF] lg:hidden rounded-lg border border-[#536DFE]/40 bg-[#070A1A] transition-colors"`
);

// ─── 4. HERO SECTION ────────────────────────────────────────────────────────
// Hero background
code = code.replace(
  `id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#070914] via-[#090D24] to-[#0A1026]"`,
  `id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-[#06091A] via-[#0A0D28] via-[#0C1230] to-[#070914]"`
);

// Active timeline bar
code = code.replace(
  `activeTimelineIdx === idx ? "bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] via-[#A855F7] to-[#EC4899] shadow-[0_0_16px_rgba(34,211,238,0.8),0_0_25px_rgba(236,72,153,0.6)]"`,
  `activeTimelineIdx === idx ? "bg-gradient-to-r from-[#00E5FF] via-[#536DFE] via-[#A855F7] to-[#FF3DCE] shadow-[0_0_20px_rgba(0,229,255,1),0_0_35px_rgba(255,61,206,0.8)]"`
);

// Active tab label
code = code.replace(
  `? "text-[#22D3EE] font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"`,
  `? "text-[#00E5FF] font-semibold drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]"`
);

// Hero sub-label "HI I'M"
code = code.replace(
  `<p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A78BFA] font-semibold mb-3">`,
  `<p className="font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold mb-3 bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(83,109,254,0.5)]">`
);

// Hero H1 line 1 (headingMain)
code = code.replace(
  `<span className="block bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">`,
  `<span className="block bg-gradient-to-r from-[#00E5FF] via-[#2979FF] via-[#536DFE] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,229,255,0.6)]">`
);

// Hero H1 line 2 (headingSub)
code = code.replace(
  `<span className="block font-semibold bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F43F5E] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.3)]">`,
  `<span className="block font-semibold bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#FF9100] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,61,206,0.6)]">`
);

// Spec card (right side of hero)
code = code.replace(
  `className="space-y-5 rounded-2xl border border-[#A855F7]/45 bg-gradient-to-br from-[#0F1638]/95 via-[#16123A]/95 to-[#1E103E]/95 p-6 sm:p-7 xl:p-8 backdrop-blur-md glow-purple-top shadow-[0_15px_45px_rgba(7,9,19,0.85),0_0_35px_rgba(168,85,247,0.22)]"`,
  `className="space-y-5 rounded-2xl border border-[#536DFE]/60 bg-gradient-to-br from-[#0D1240]/95 via-[#13154A]/95 to-[#1A0F4A]/95 p-6 sm:p-7 xl:p-8 backdrop-blur-md glow-indigo-top shadow-[0_15px_60px_rgba(4,6,15,0.9),0_0_50px_rgba(83,109,254,0.35),inset_0_1px_0_rgba(83,109,254,0.2)]"`
);

// Spec tag text
code = code.replace(
  `<div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#22D3EE]">`,
  `<div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">`
);

// Spec focus badges
code = code.replace(
  `className="rounded border border-[#A78BFA]/25 bg-[#A78BFA]/[0.08] px-2.5 py-1 text-[11px] font-mono text-[#F8FAFC] hover:border-[#22D3EE]/40 transition"`,
  `className="rounded-md border border-[#536DFE]/50 bg-[#536DFE]/15 px-2.5 py-1 text-[11px] font-mono text-[#C7D2FE] hover:border-[#00E5FF]/70 hover:bg-[#00E5FF]/15 hover:text-[#00E5FF] transition shadow-[0_0_10px_rgba(83,109,254,0.2)]"`
);

// CTA "See My Work" button
code = code.replace(
  `className="rounded-full bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#A855F7] px-5 sm:px-6 py-2.5 text-xs font-bold text-[#070913] transition hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:brightness-110 shadow-lg"`,
  `className="rounded-full bg-gradient-to-r from-[#00E5FF] via-[#2979FF] to-[#536DFE] px-5 sm:px-6 py-2.5 text-xs font-bold text-[#04060F] transition hover:shadow-[0_0_35px_rgba(0,229,255,0.9),0_0_60px_rgba(41,121,255,0.5)] hover:brightness-115 shadow-[0_0_20px_rgba(0,229,255,0.5)]"`
);

// CTA "Contact Me" button
code = code.replace(
  `className="rounded-full border border-[#EC4899]/60 bg-gradient-to-r from-[#A855F7]/25 via-[#EC4899]/25 to-[#F43F5E]/20 px-5 sm:px-6 py-2.5 text-xs font-semibold text-[#F8FAFC] transition hover:border-[#EC4899] hover:shadow-[0_0_20px_rgba(236,72,153,0.45)]"`,
  `className="rounded-full border border-[#FF3DCE]/70 bg-gradient-to-r from-[#E040FB]/25 via-[#FF3DCE]/25 to-[#A855F7]/20 px-5 sm:px-6 py-2.5 text-xs font-semibold text-[#F8FAFC] transition hover:border-[#FF3DCE] hover:bg-gradient-to-r hover:from-[#E040FB]/40 hover:via-[#FF3DCE]/40 hover:to-[#A855F7]/35 hover:shadow-[0_0_30px_rgba(255,61,206,0.6)]"`
);

// Hero bottom bar border
code = code.replace(
  `className="mx-auto max-w-7xl w-full flex items-center justify-between border-t border-violet-500/20 pt-5"`,
  `className="mx-auto max-w-7xl w-full flex items-center justify-between border-t border-[#536DFE]/30 pt-5"`
);

// Arrow down
code = code.replace(
  `className="text-[#22D3EE] transition-transform group-hover:translate-y-0.5 animate-bounce"`,
  `className="text-[#00E5FF] transition-transform group-hover:translate-y-0.5 animate-bounce drop-shadow-[0_0_6px_rgba(0,229,255,0.9)]"`
);

code = code.replace(
  `className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-[#22D3EE] transition-colors"`,
  `className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#00E5FF] transition-colors"`
);

code = code.replace(
  `<span className="text-[#A78BFA]">B.TECH CSE 2023-2027</span>`,
  `<span className="bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent font-semibold">B.TECH CSE 2023-2027</span>`
);

// ─── 5. ABOUT SECTION ───────────────────────────────────────────────────────
// Section background (vivid blue-cyan gradient)
code = code.replace(
  `id="about" className="relative border-t border-[#22D3EE]/25 bg-gradient-to-b from-[#0A1026] via-[#081836] to-[#0A1226] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`,
  `id="about" className="relative border-t border-[#00E5FF]/40 bg-gradient-to-br from-[#06111E] via-[#071A2E] via-[#07213A] to-[#061730] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`
);

// Section eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22D3EE] block mb-2 font-semibold">\n              1.0 // THE ORIGIN\n            </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">\n              1.0 // THE ORIGIN\n            </span>`
);

// Portrait card
code = code.replace(
  `className="relative rounded-3xl border border-[#22D3EE]/40 bg-gradient-to-b from-[#0C1A3A]/90 to-[#08142C]/90 p-6 sm:p-7 glow-cyan-top shadow-[0_20px_50px_rgba(7,9,19,0.85),0_0_35px_rgba(34,211,238,0.2)]"`,
  `className="relative rounded-3xl border border-[#00E5FF]/60 bg-gradient-to-b from-[#0A1E42]/95 to-[#061428]/95 p-6 sm:p-7 glow-cyan-top shadow-[0_20px_60px_rgba(4,6,15,0.9),0_0_50px_rgba(0,229,255,0.35),inset_0_1px_0_rgba(0,229,255,0.15)]"`
);

// Photo border
code = code.replace(
  `className="aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-neutral-900 border-2 border-[#22D3EE]/50 shadow-[0_0_25px_rgba(34,211,238,0.3)] mb-5 relative"`,
  `className="aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-neutral-900 border-2 border-[#00E5FF]/70 shadow-[0_0_40px_rgba(0,229,255,0.5),0_0_80px_rgba(0,229,255,0.2)] mb-5 relative"`
);

// "Hello I'm" label
code = code.replace(
  `<p className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2 font-semibold font-mono">\n                Hello, I'm\n              </p>`,
  `<p className="font-mono text-xs uppercase tracking-widest mb-2 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">\n                Hello, I'm\n              </p>`
);

// About stat cards
code = code.replace(
  `className="rounded-xl border border-[#22D3EE]/50 bg-gradient-to-b from-[#0A203E]/90 to-[#071730]/90 p-4 transition hover:border-[#22D3EE] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] glow-cyan-top shadow-lg"`,
  `className="rounded-xl border border-[#00E5FF]/60 bg-gradient-to-b from-[#0B2240]/95 to-[#071A32]/95 p-4 transition hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] glow-cyan-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]"`
);

code = code.replace(
  `<p className="font-display text-base font-bold text-[#22D3EE]">Full-Stack</p>`,
  `<p className="font-display text-base font-bold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">Full-Stack</p>`
);

code = code.replace(
  `className="rounded-xl border border-[#3B82F6]/50 bg-gradient-to-b from-[#0B1A42]/90 to-[#071333]/90 p-4 transition hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] glow-blue-top shadow-lg"`,
  `className="rounded-xl border border-[#536DFE]/60 bg-gradient-to-b from-[#0D164A]/95 to-[#08113A]/95 p-4 transition hover:border-[#536DFE] hover:shadow-[0_0_30px_rgba(83,109,254,0.5)] glow-blue-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]"`
);

code = code.replace(
  `<p className="font-display text-base font-bold text-[#60A5FA]">AI / ML</p>`,
  `<p className="font-display text-base font-bold bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent">AI / ML</p>`
);

code = code.replace(
  `className="rounded-xl border border-[#14B8A6]/50 bg-gradient-to-b from-[#07242E]/90 to-[#051A22]/90 p-4 transition hover:border-[#14B8A6] hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] glow-teal-top shadow-lg"`,
  `className="rounded-xl border border-[#00E676]/50 bg-gradient-to-b from-[#062918]/95 to-[#041E12]/95 p-4 transition hover:border-[#00E676] hover:shadow-[0_0_30px_rgba(0,230,118,0.4)] glow-green-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]"`
);

code = code.replace(
  `<p className="font-display text-base font-bold text-[#14B8A6]">Available</p>`,
  `<p className="font-display text-base font-bold bg-gradient-to-r from-[#00E676] to-[#14B8A6] bg-clip-text text-transparent">Available</p>`
);

// ─── 6. EXPERTISE / SKILLS SECTION ──────────────────────────────────────────
// Section background (vivid purple)
code = code.replace(
  `id="skills" className="relative border-t border-[#A855F7]/25 bg-gradient-to-b from-[#0A1226] via-[#140C30] to-[#0A0D24] py-24 sm:py-32 overflow-hidden"`,
  `id="skills" className="relative border-t border-[#A855F7]/50 bg-gradient-to-br from-[#0D0920] via-[#130A32] via-[#190C3E] to-[#0F0828] py-24 sm:py-32 overflow-hidden"`
);

// Skills section eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A78BFA] block mb-2 font-semibold">\n            II. TECHNICAL STACK\n          </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#A855F7] to-[#FF3DCE] bg-clip-text text-transparent">\n            II. TECHNICAL STACK\n          </span>`
);

// Marquee row 1 pills
code = code.replace(
  `className="rounded-full border border-[#A855F7]/45 bg-[#170E38]/85 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:border-[#A855F7] hover:bg-[#A855F7]/25 hover:text-white transition whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(168,85,247,0.2)]"`,
  `className="rounded-full border border-[#A855F7]/60 bg-gradient-to-r from-[#1A0D44]/90 to-[#200F4A]/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#D8B4FE] hover:border-[#A855F7] hover:bg-[#A855F7]/30 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition whitespace-nowrap cursor-default shadow-[0_0_20px_rgba(168,85,247,0.3)]"`
);

// Marquee row 2 pills
code = code.replace(
  `className="rounded-full border border-[#6366F1]/45 bg-[#120F38]/85 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:border-[#6366F1] hover:bg-[#6366F1]/25 hover:text-white transition whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(99,102,241,0.2)]"`,
  `className="rounded-full border border-[#536DFE]/60 bg-gradient-to-r from-[#120E42]/90 to-[#191448]/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#C7D2FE] hover:border-[#536DFE] hover:bg-[#536DFE]/30 hover:text-white hover:shadow-[0_0_25px_rgba(83,109,254,0.6)] transition whitespace-nowrap cursor-default shadow-[0_0_20px_rgba(83,109,254,0.3)]"`
);

// Skills capability cards background
code = code.replace(
  `className={\`rounded-2xl border \${cat.borderClass} bg-[#0D1124]/75 p-6 \${cat.glowClass} transition-all duration-300 hover:bg-[#121833]\`}`,
  `className={\`rounded-2xl border \${cat.borderClass} bg-gradient-to-br from-[#120A30]/90 to-[#0D0825]/90 p-6 \${cat.glowClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl\`}`
);

// Skills item pills (inner tech tags)
code = code.replace(
  `className="rounded border border-white/10 bg-[#080B16]/60 px-2.5 py-1 text-xs text-[#A1A1AA] hover:text-[#F8FAFC] hover:border-[#22D3EE]/40 transition font-mono"`,
  `className="rounded-md border border-white/15 bg-[#07050F]/70 px-2.5 py-1 text-xs text-[#B8C0CC] hover:text-[#F8FAFC] hover:border-[#A855F7]/60 hover:bg-[#A855F7]/15 transition font-mono"`
);

// Icon box in skill cards
code = code.replace(
  `className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]"`,
  `className="flex h-9 w-9 items-center justify-center rounded-lg border bg-gradient-to-br from-white/10 to-white/5"` 
);

// ─── 7. EXPERIENCE SECTION ──────────────────────────────────────────────────
// Section background (vivid teal-green)
code = code.replace(
  `id="experience" className="relative border-t border-[#14B8A6]/25 bg-gradient-to-b from-[#0A0D24] via-[#061C1E] to-[#07171A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`,
  `id="experience" className="relative border-t border-[#00E676]/40 bg-gradient-to-br from-[#060E12] via-[#071A18] via-[#071F1C] to-[#06120E] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`
);

// Experience eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E879F9] block mb-2 font-semibold">\n              III. WORK EXPERIENCE\n            </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#00E676] to-[#14B8A6] bg-clip-text text-transparent">\n              III. WORK EXPERIENCE\n            </span>`
);

// Experience cards background
code = code.replace(
  `className={\`group relative flex flex-col justify-between rounded-2xl border \${internship.cardBorder} bg-[#0D1124]/85 p-7 \${internship.glowClass} transition-all duration-300 hover:bg-[#121833] shadow-[0_15px_40px_rgba(8,11,22,0.8)]\`}`,
  `className={\`group relative flex flex-col justify-between rounded-2xl border \${internship.cardBorder} bg-gradient-to-br from-[#071510]/90 to-[#060E0C]/90 p-7 \${internship.glowClass} transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_50px_rgba(4,6,15,0.85)]\`}`
);

// Tech tags in experience
code = code.replace(
  `className="rounded border border-white/10 bg-[#080B16]/60 px-2 py-0.5 text-[10px] font-mono text-[#A1A1AA]"`,
  `className="rounded-md border border-[#00E676]/25 bg-[#00E676]/10 px-2 py-0.5 text-[10px] font-mono text-[#6EE7B7]"`
);

// ─── 8. PROJECTS SECTION ────────────────────────────────────────────────────
// Section background (vivid blue-purple-pink)
code = code.replace(
  `id="projects" className="relative border-t border-[#3B82F6]/25 bg-gradient-to-b from-[#07171A] via-[#100D2C] to-[#1A0A28] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`,
  `id="projects" className="relative border-t border-[#2979FF]/50 bg-gradient-to-br from-[#070D1E] via-[#0E0C2E] via-[#160C38] to-[#0E0620] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`
);

// Projects eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22D3EE] block mb-2 font-semibold">\n              IV. PORTFOLIO WORK\n            </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#2979FF] via-[#536DFE] to-[#A855F7] bg-clip-text text-transparent">\n              IV. PORTFOLIO WORK\n            </span>`
);

// Project cards
code = code.replace(
  `className={\`group flex flex-col justify-between rounded-2xl border \${project.borderClass} bg-[#0D1124]/90 p-5 \${project.glowClass} transition-all duration-300 hover:bg-[#121833] shadow-[0_15px_45px_rgba(8,11,22,0.8)]\`}`,
  `className={\`group flex flex-col justify-between rounded-2xl border \${project.borderClass} bg-gradient-to-br from-[#0D0D28]/95 to-[#08081A]/95 p-5 \${project.glowClass} transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_50px_rgba(4,6,15,0.85)]\`}`
);

// Project status badge
code = code.replace(
  `<span className="absolute top-2.5 right-2.5 rounded border border-[#22D3EE]/30 bg-[#080B16]/80 px-2 py-0.5 text-[9px] font-mono text-[#22D3EE] backdrop-blur-md">`,
  `<span className="absolute top-2.5 right-2.5 rounded border border-[#00E5FF]/60 bg-[#04060F]/85 px-2 py-0.5 text-[9px] font-mono text-[#00E5FF] backdrop-blur-md shadow-[0_0_10px_rgba(0,229,255,0.4)]">`
);

// ─── 9. EDUCATION SECTION ───────────────────────────────────────────────────
// Section background (vivid orange-gold)
code = code.replace(
  `id="education" className="relative border-t border-[#F59E0B]/25 bg-gradient-to-b from-[#1A0A28] via-[#1E1208] to-[#160D06] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`,
  `id="education" className="relative border-t border-[#FFD740]/40 bg-gradient-to-br from-[#160E04] via-[#1E1206] via-[#221504] to-[#180F03] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`
);

// Education eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A78BFA] block mb-2 font-semibold">\n              V. ACADEMIC PEDIGREE\n            </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#FFD740] to-[#FF9100] bg-clip-text text-transparent">\n              V. ACADEMIC PEDIGREE\n            </span>`
);

// Education cards hover
code = code.replace(
  `className={\`rounded-2xl border p-6 \${edu.borderClass} \${edu.glowClass} transition-all duration-300 hover:bg-[#121833]\`}`,
  `className={\`rounded-2xl border p-6 \${edu.borderClass} \${edu.glowClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,145,0,0.15)]\`}`
);

// ─── 10. CERTIFICATIONS ─────────────────────────────────────────────────────
// Cert section heading
code = code.replace(
  `<p className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] mb-6 font-semibold">\n              Verified Industry Certifications\n            </p>`,
  `<p className="font-mono text-xs uppercase tracking-widest mb-6 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">\n              Verified Industry Certifications\n            </p>`
);

// Cert cards
code = code.replace(
  `className="rounded-xl border border-[#14B8A6]/45 bg-gradient-to-b from-[#081F26]/90 to-[#05151A]/90 p-4 flex items-center justify-between hover:border-[#22D3EE] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition shadow-[0_10px_30px_rgba(7,9,19,0.8)]"`,
  `className="rounded-xl border border-[#00E5FF]/50 bg-gradient-to-b from-[#081E2E]/95 to-[#051220]/95 p-4 flex items-center justify-between hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition shadow-[0_10px_30px_rgba(4,6,15,0.8)]"`
);

// ─── 11. CONTACT SECTION ────────────────────────────────────────────────────
// Section background (vivid pink-purple)
code = code.replace(
  `id="contact" className="relative border-t border-[#EC4899]/25 bg-gradient-to-b from-[#160D06] via-[#1E0928] to-[#0D051A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`,
  `id="contact" className="relative border-t border-[#FF3DCE]/50 bg-gradient-to-br from-[#120520] via-[#190638] via-[#1E0730] to-[#0E0318] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"`
);

// Contact eyebrow
code = code.replace(
  `<span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E879F9] block mb-6 font-semibold">\n            // LIVE INTERACTION MODE\n          </span>`,
  `<span className="font-mono text-xs uppercase tracking-[0.25em] block mb-6 font-semibold bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#A855F7] bg-clip-text text-transparent">\n            // LIVE INTERACTION MODE\n          </span>`
);

// Contact JSON box
code = code.replace(
  `className="mt-8 rounded-2xl border border-[#A855F7]/50 bg-gradient-to-b from-[#1F0C30]/95 to-[#130720]/95 p-5 font-mono text-xs shadow-2xl relative glow-pink-top shadow-[0_20px_50px_rgba(7,9,19,0.9),0_0_35px_rgba(236,72,153,0.22)]"`,
  `className="mt-8 rounded-2xl border border-[#E040FB]/60 bg-gradient-to-b from-[#260C38]/95 to-[#180520]/95 p-5 font-mono text-xs shadow-2xl relative glow-pink-top shadow-[0_20px_60px_rgba(4,6,15,0.95),0_0_50px_rgba(224,64,251,0.35),inset_0_1px_0_rgba(224,64,251,0.15)]"`
);

// JSON preview label
code = code.replace(
  `<span className="text-[#A78BFA]">// payload_preview.json</span>`,
  `<span className="bg-gradient-to-r from-[#E040FB] to-[#A855F7] bg-clip-text text-transparent font-semibold">// payload_preview.json</span>`
);

// JSON sender key
code = code.replace(
  `<span className="text-[#22D3EE]">sender: </span>`,
  `<span className="text-[#00E5FF] font-semibold">sender: </span>`
);
code = code.replace(
  `<span className="text-[#22D3EE]">email: </span>`,
  `<span className="text-[#00E5FF] font-semibold">email: </span>`
);
code = code.replace(
  `<span className="text-[#22D3EE]">message: </span>`,
  `<span className="text-[#00E5FF] font-semibold">message: </span>`
);
code = code.replace(
  `<span className="text-[#22D3EE]">destination: </span>`,
  `<span className="text-[#00E5FF] font-semibold">destination: </span>`
);

// JSON destination value
code = code.replace(
  `<span className="text-[#E879F9]">"{personalData.email}"</span>`,
  `<span className="text-[#E040FB] font-semibold">"{personalData.email}"</span>`
);

// Contact form card
code = code.replace(
  `className="rounded-2xl border border-[#A855F7]/45 bg-gradient-to-b from-[#1D0C2E]/95 to-[#12061E]/95 p-6 sm:p-8 glow-purple-top shadow-[0_20px_50px_rgba(7,9,19,0.9),0_0_35px_rgba(168,85,247,0.22)]"`,
  `className="rounded-2xl border border-[#A855F7]/65 bg-gradient-to-b from-[#260E3A]/95 to-[#180A26]/95 p-6 sm:p-8 glow-purple-top shadow-[0_20px_60px_rgba(4,6,15,0.95),0_0_50px_rgba(168,85,247,0.35),inset_0_1px_0_rgba(168,85,247,0.15)]"`
);

// Form inputs
code = code.replace(
  /className="w-full rounded-xl border border-violet-500\/20 bg-\[#080B16\]\/70 px-3\.5 py-2\.5 text-xs text-\[#F8FAFC\] placeholder-\[#A1A1AA\]\/50 focus:border-\[#22D3EE\] focus:outline-none focus:ring-1 focus:ring-\[#22D3EE\]\/30 transition"/g,
  `className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60"`
);

code = code.replace(
  `className="w-full rounded-xl border border-violet-500/20 bg-[#080B16]/70 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#22D3EE] focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/30 transition resize-none"`,
  `className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60 resize-none"`
);

// Send button
code = code.replace(
  `className="w-full rounded-full bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F43F5E] py-3.5 text-xs font-bold text-white transition hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:brightness-110 flex items-center justify-center gap-2 shadow-xl"`,
  `className="w-full rounded-full bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#A855F7] py-3.5 text-xs font-bold text-white transition hover:shadow-[0_0_40px_rgba(224,64,251,0.8),0_0_70px_rgba(255,61,206,0.4)] hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(224,64,251,0.4)]"`
);

// Copy email button
code = code.replace(
  `className="inline-flex items-center gap-1 text-[10px] font-mono text-[#22D3EE] hover:text-[#A78BFA] transition-colors"`,
  `className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E040FB] hover:text-[#FF3DCE] transition-colors"`
);

// ─── 12. FOOTER ─────────────────────────────────────────────────────────────
// Footer background
code = code.replace(
  `className="relative border-t border-[#A855F7]/30 bg-gradient-to-b from-[#0D051A] to-[#040208] px-6 sm:px-10 lg:px-16 pt-20 pb-12 overflow-hidden"`,
  `className="relative border-t border-[#A855F7]/50 bg-gradient-to-b from-[#0E0620] via-[#09040F] to-[#030106] px-6 sm:px-10 lg:px-16 pt-20 pb-12 overflow-hidden"`
);

// Footer col labels
code = code.replace(
  `<p className="text-[#22D3EE] uppercase tracking-widest text-[10px] mb-1 font-semibold">`,
  `<p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">`
);

code = code.replace(
  `<p className="text-[#A78BFA] uppercase tracking-widest text-[10px] mb-1 font-semibold">`,
  `<p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#A855F7] to-[#536DFE] bg-clip-text text-transparent">`
);

code = code.replace(
  `<p className="text-[#E879F9] uppercase tracking-widest text-[10px] mb-1 font-semibold">`,
  `<p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#FF3DCE] to-[#E040FB] bg-clip-text text-transparent">`
);

// Footer giant name
code = code.replace(
  `<h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] font-bold uppercase tracking-tight leading-none text-gradient-aurora">`,
  `<h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] font-bold uppercase tracking-tight leading-none bg-gradient-to-r from-[#00E5FF] via-[#536DFE] via-[#A855F7] via-[#FF3DCE] to-[#FFD740] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(83,109,254,0.4)]">`
);

// Footer email link
code = code.replace(
  `className="text-[#22D3EE] hover:text-[#A78BFA] transition-colors flex items-center gap-1.5 font-medium"`,
  `className="text-[#00E5FF] hover:text-[#A855F7] transition-colors flex items-center gap-1.5 font-medium drop-shadow-[0_0_6px_rgba(0,229,255,0.4)]"`
);

// Footer social links
code = code.replace(
  `className="hover:text-[#22D3EE] transition-colors"\n              >\n                GitHub`,
  `className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.6)] transition-all"\n              >\n                GitHub`
);

code = code.replace(
  `className="hover:text-[#A78BFA] transition-colors"\n              >\n                LinkedIn`,
  `className="hover:text-[#A855F7] hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] transition-all"\n              >\n                LinkedIn`
);

code = code.replace(
  `className="hover:text-[#E879F9] transition-colors"\n              >\n                HackerRank`,
  `className="hover:text-[#FF3DCE] hover:drop-shadow-[0_0_6px_rgba(255,61,206,0.6)] transition-all"\n              >\n                HackerRank`
);

// Back to top button
code = code.replace(
  `className="hover:text-[#22D3EE] transition-colors"\n              >\n                ↑ Top`,
  `className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.6)] transition-all"\n              >\n                ↑ Top`
);

// Footer view more button
code = code.replace(
  `className="text-[11px] text-[#A1A1AA] hover:text-[#22D3EE] underline mt-1 transition-colors"`,
  `className="text-[11px] text-[#94A3B8] hover:text-[#00E5FF] underline mt-1 transition-colors"`
);

// ─── 13. skillsCategories accent updates – replace old weak colors with neon ─
// Programming – A855F7 stays but borders more vivid
code = code.replace(
  `borderClass: "border-[#A855F7]/40 hover:border-[#A855F7]/80",
    badgeBg: "border-[#A855F7]/50 bg-[#A855F7]/20 text-[#C084FC]",
  },
  {
    category: "Web Technologies",`,
  `borderClass: "border-[#A855F7]/65 hover:border-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    badgeBg: "border-[#A855F7]/60 bg-[#A855F7]/25 text-[#D8B4FE]",
  },
  {
    category: "Web Technologies",`
);

code = code.replace(
  `borderClass: "border-[#6366F1]/40 hover:border-[#6366F1]/80",
    badgeBg: "border-[#6366F1]/50 bg-[#6366F1]/20 text-[#818CF8]",
  },
  {
    category: "Machine Learning",`,
  `borderClass: "border-[#536DFE]/65 hover:border-[#536DFE] shadow-[0_0_20px_rgba(83,109,254,0.3)]",
    badgeBg: "border-[#536DFE]/60 bg-[#536DFE]/25 text-[#C7D2FE]",
  },
  {
    category: "Machine Learning",`
);

code = code.replace(
  `borderClass: "border-[#EC4899]/40 hover:border-[#EC4899]/80",
    badgeBg: "border-[#EC4899]/50 bg-[#EC4899]/20 text-[#F472B6]",
  },
  {
    category: "Developer Tools",`,
  `borderClass: "border-[#FF3DCE]/65 hover:border-[#FF3DCE] shadow-[0_0_20px_rgba(255,61,206,0.3)]",
    badgeBg: "border-[#FF3DCE]/60 bg-[#FF3DCE]/20 text-[#FBCFE8]",
  },
  {
    category: "Developer Tools",`
);

code = code.replace(
  `borderClass: "border-[#A855F7]/40 hover:border-[#A855F7]/80",
    badgeBg: "border-[#A855F7]/50 bg-[#A855F7]/20 text-[#C084FC]",
  },
  {
    category: "Database",`,
  `borderClass: "border-[#E040FB]/65 hover:border-[#E040FB] shadow-[0_0_20px_rgba(224,64,251,0.3)]",
    badgeBg: "border-[#E040FB]/60 bg-[#E040FB]/20 text-[#F5D0FE]",
  },
  {
    category: "Database",`
);

code = code.replace(
  `borderClass: "border-[#6366F1]/40 hover:border-[#6366F1]/80",
    badgeBg: "border-[#6366F1]/50 bg-[#6366F1]/20 text-[#818CF8]",
  },
];

const internships`,
  `borderClass: "border-[#00E5FF]/65 hover:border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)]",
    badgeBg: "border-[#00E5FF]/60 bg-[#00E5FF]/20 text-[#A5F3FC]",
  },
];

const internships`
);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log('Done! Length:', code.length);
