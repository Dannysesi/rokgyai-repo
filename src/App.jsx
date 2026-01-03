import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.jpg";
import logoWhite from "./assets/logo-white.png";

console.log("heroBg:", heroBg);



export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display overflow-x-hidden antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#f0f2f4] dark:bg-[#101622]/90 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
              <h2 className="text-[#111318] dark:text-white text-xl font-bold tracking-tight">
                RokgyAI
              </h2>
            </div> */}
            <div className="flex items-center gap-2 text-primary">
              <img src={logo} alt="RokgyAI logo" className="h-9 w-9 object-contain" />
              <h2 className="text-[#111318] dark:text-white text-xl font-bold tracking-tight">
                RokgyAI
              </h2>
            </div>


            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-[#111318] dark:text-gray-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors"
                href="#services"
              >
                Services
              </a>
              <a
                className="text-[#111318] dark:text-gray-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors"
                href="#process"
              >
                How it works
              </a>
              <a
                className="text-[#111318] dark:text-gray-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors"
                href="#why-us"
              >
                Why Us
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-md">
                Book a Free Consultation
              </button>
              <button className="md:hidden p-2 text-gray-600">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Background image layer (blurred) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center blur-sm scale-110 opacity-70"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60 dark:from-black/70 dark:via-black/55 dark:to-black/75" /> */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/80 via-white/25 to-transparent dark:from-black/60 dark:via-black/25 dark:to-transparent" />
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-black/100 via-black/35 to-transparent" /> */}

        {/* Existing grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primary w-fit">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Operational AI for African SMEs
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] dark:text-white leading-[1.15]">
                Automate the chaos.
                <br />
                <span className="text-primary">Scale operations</span> without adding headcount.
              </h1>

              {/* <p className="text-lg text-gray-100 dark:text-gray-200 leading-relaxed max-w-lg"> */}
              <p className="text-lg text-[#111318] dark:text-gray-300 leading-relaxed max-w-lg">
                We turn manual bottlenecks into automated workflows. Practical AI solutions that fix support,
                sales, and reporting—no hype, just results.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex items-center justify-center h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-blue-900/10">
                  Book a Free Consultation
                </button>
                <button className="flex items-center justify-center h-12 px-6 bg-white border border-gray-200 text-[#111318] rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  See How It Works
                </button>
              </div>

              {/* <div className="flex items-center gap-4 text-sm text-gray-200 dark:text-gray-300 pt-4"> */}
              <div className="flex items-center gap-4 text-sm text-[#111318] dark:text-gray-300 pt-4">
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXuZOBK04zixyx4CXV59E777jmwb3YCxGbyUol1PGNRKsx24E2bSbsHyOiN3_nljH3kkDpW9cll1JFG1Ow3HY_V8yKnd7eqEJKEw-Rsun4KtwRQZxX1n6hhV3vTT_92JWpykQWxKqcdDaCPY9tT4Od3F172nxxJF983NTlE7b63B_99PjnVzzLcXhhe5b981m_0-tQAEuQmNaYtbCAgLGk68XAt7WXKGALffHI4a_b-HJ-ggkDpsnPcOP8GJpr_HUktltOj9ImUYs')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZS4IsJF-1kE9zBeP5WhgeG2RpZxAJ-Y-_GMUYjNWlsN7LYZjItYz-uhuKDvlrqPLoc96E95fNSklGO9q51xDfzAgi5vnq0WV7zn3VYS14JO9z3NS36XcY2zcNVV76OzUc29GN_ZSwV2IZbicY_w9QaENMlVtxvnJu94DHAqw0AnU3zxmqxio1dcyRXpRleg-IEl9hoclRLzME3D6nUYeFJetQ0PpDsSxVAPme0FgjG1WbtKE9yToD5NUI8DIGS7a4z3GB8VIBWE8')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDTDGBgp-KCpbAijuANo_eWurB1neCf52Fmwn1s3njRwsBgXNFezqcd-znVsugEehNfuJIg6qKT0FFGZ-jwW3I-67LO2pGf3mYmPR2eENm2GxEIxqWtK-VjNzf7c5KIOf560ekvJykXDmpRmOQu09GfTdQ9hB9-FLtd1TQKx41iOXpgkXLQLMSu7qBCyp7FSBZfAoHakwWxiVrD8v7Xq1d9gL34zFiu7-bTepOp7NG6OMyS_--DYGjVCgo4Qm4bKtMdXFSqp9ZQEU')",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <p>Trusted by 20+ operations leaders</p>
              </div>
            </div>

            <div className="relative lg:h-auto lg:w-full flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-gray-900" />
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center">
                  <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 mb-4 transform translate-y-4 opacity-90">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </div>
                      <div className="h-2 w-24 bg-gray-100 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-50 rounded" />
                      <div className="h-2 w-2/3 bg-gray-50 rounded" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center z-10">
                    <div className="h-8 w-0.5 bg-blue-200 mb-1" />
                    <div className="bg-primary text-white rounded-full p-2 shadow-lg mb-1">
                      <span className="material-symbols-outlined block text-xl">smart_toy</span>
                    </div>
                    <div className="h-8 w-0.5 bg-blue-200 mt-1" />
                  </div>

                  <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-l-4 border-l-primary border-gray-100 dark:border-gray-700 p-4 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-sm">
                          check_circle
                        </span>
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                          Action Completed
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">Just now</span>
                    </div>
                    <div className="h-2 w-full bg-gray-50 rounded mb-2" />
                    <div className="h-8 w-24 bg-primary/10 rounded flex items-center justify-center text-primary text-xs font-medium">
                      Ticket Solved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 max-w-8xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl mb-4">
              Your business creates value.<br />Operations quietly destroy it.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Most teams aren’t failing, they’re busy.<br />
              Most businesses aren’t inefficient they’re fragmented. Work moves across chats, spreadsheets, tools, and people, with no clear owner between steps. 
              The result isn’t failure, but friction: delays, rework, missed follow-ups, and decisions made too late in environments where precision, speed, and consistency matter.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 — Time */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-red-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Work waits more than it moves</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Approvals sit in chats. Leads wait on follow-ups. Tasks stall between steps. While work is waiting, revenue is delayed, customers disengage, and momentum quietly dies often before leadership sees the impact.
              </p>
            </div>

            {/* Card 2 — Cost */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-orange-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">paid</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Expensive people do cheap work</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Highly paid teams spend hours copying data, chasing updates, answering repeat questions, and reconciling records. Costs scale with headcount instead of output, compressing margins as the business grows.
              </p>
            </div>

            {/* Card 3 — Error & Consistency */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">error_outline</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Value depends on who’s paying attention</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Manual handoffs create missed steps, wrong data, and inconsistent decisions. Small mistakes trigger rework, customer frustration, and risk exposure turning operational noise into real losses.
              </p>
            </div>

            {/* Card 4 — Scale */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-purple-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Growth exposes what operations can’t handle</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Processes held together by memory, follow-ups, and manual checks don’t bend under scale they break. Volume increases, visibility drops, risk rises, and leadership loses control of what’s actually happening.
              </p>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-12 max-w-6xl">
            <p className="text-lg font-semibold text-[#111318] dark:text-white">
              Your business is paying for friction every day.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Every delayed task, repeated check, or missed handoff quietly eats into revenue, slows growth, and increases risk. 
              These are the gaps where most businesses bleed value without even noticing.
            </p>
          </div>
        </div>
      </section>



      {/* Services / Solution Section */}
      <section
        className="py-20 lg:py-28 bg-background-light dark:bg-background-dark"
        id="services"
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl">
              We focus on the gaps that silently drain value, so where operations break, AI amplifies impact.
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-5xl mx-auto">
              The parts of your business that slow growth aren’t always obvious, but they always create silent friction that costs time, money, and control.
              Intelligent automation handles repetitive, high-volume work while your team focuses on high-value decisions—acting as a real-time decision and knowledge layer
              that standardizes support, routing, approvals, and execution, while keeping humans in control.
            </p>

            {/* AI analogy microcopy */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 backdrop-blur">
                <span className="material-symbols-outlined text-primary text-base">
                  build_circle
                </span>
                AI is a power tool, not a replacement brain: Assistant → Validator → Executor, with humans in control.
              </div>
            </div>
          </div>

          {/* Solution Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1) Decision Automation (Time) */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-red-500 mb-6">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Decision Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Automates approvals, follow-ups, and handoffs so work moves without waiting. Ensures tasks don’t stall and decisions happen on time.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Route tasks automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Auto-follow-ups & reminders
                </li>
              </ul>
            </div>

            {/* 2) Workflow Orchestration (Cost) */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-500 mb-6">
                <span className="material-symbols-outlined text-2xl">autorenew</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Workflow Orchestration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Reduces repetitive tasks performed by highly paid humans: data updates, triaging, and scheduling. Output scales without adding headcount.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Automate manual updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Streamline repetitive workflows
                </li>
              </ul>
            </div>

            {/* 3) Knowledge & SOP Copilot (Error & Consistency) */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-200 mb-6">
                <span className="material-symbols-outlined text-2xl">book_online</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Knowledge &amp; SOP Copilot
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Standardizes how tasks, approvals, and support decisions are executed, reducing mistakes, rework, and inconsistencies.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Instant SOP guidance
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Reduce errors & rework
                </li>
              </ul>
            </div>

            {/* 4) Operational Scaling Layer (Scale) */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-500 mb-6">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Operational Scaling Layer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Executes repetitive high-volume work with guardrails so processes don’t break under growth, providing leadership real-time visibility.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Scale repetitive tasks safely
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Real-time operational visibility
                </li>
              </ul>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="mt-12 max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#111318] dark:text-white">
              We identify where value leaks, and put automation to work only where it amplifies impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Every minute saved, every error prevented, and every bottleneck removed adds directly to revenue, margin, and operational resilience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-blue-900/10"
              >
                Book a Free Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center h-12 px-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>




      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900" id="process">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl mb-6">
                {/* From chaos to clarity in 3 steps */}
                Turning operational friction into scalable impact in 3 steps
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We start by uncovering where work stalls, mistakes happen, and costs quietly rise. Then we design automation and AI agents around your existing tools so your team can focus on high-value decisions while the system handles repetitive, high-volume work.
              </p>


              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                      Identify Bottlenecks
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We pinpoint where work slows, errors occur, and high-cost tasks drain your margins so automation targets what matters most.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                      Automate &amp; Train
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We implement AI and automation with guardrails, then empower your team to oversee and optimize them safely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                      Optimize &amp; Scale
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We measure time saved, errors reduced, and revenue protected then refine workflows to scale efficiently without adding headcount.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* Right-side Visual Panel: Modern KPI + Workflow */}
            <div className="flex-1 p-6 flex flex-col gap-6">
              {/* Top status row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Automations Running
                  </span>
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400">
                  Last sync: 2 mins ago
                </div>
              </div>

              {/* Mini AI-Human Workflow Pipeline */}
              <div className="flex items-center gap-4">
                {/* Input */}
                <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined">input</span>
                </div>

                {/* AI Assistant Phase */}
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-blue-500 w-2/3 rounded animate-[width_2s_ease-in-out_infinite]" />
                </div>
                <div className="w-12 h-12 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined animate-pulse">smart_toy</span>
                </div>

                {/* Human Validation Phase */}
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-yellow-500 w-4/5 rounded animate-[width_2s_ease-in-out_infinite_0.5s]" />
                </div>
                <div className="w-12 h-12 rounded bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600">
                  <span className="material-symbols-outlined animate-pulse">verified_user</span>
                </div>

                {/* AI Execution Phase */}
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-green-500 w-full rounded animate-[width_2s_ease-in-out_infinite_1s]" />
                </div>
                <div className="w-12 h-12 rounded bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined animate-spin">settings</span>
                </div>
              </div>

              {/* KPI Grid (mapped to Problem Section) */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Time */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Time Saved</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">78h</div>
                  <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">south</span>
                    Improved 68%
                  </div>
                </div>

                {/* Cost */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Cost Reclaimed</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">₦1.8m</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">this month</div>
                </div>

                {/* Error / Consistency */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Errors Prevented</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">142</div>
                  <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Accuracy up 85%
                  </div>
                </div>

                {/* Scale / Ops Efficiency */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Process Consistency</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">94%</div>
                  <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    Scaling safely
                  </div>
                </div>
              </div>

              {/* Live Audit / Alerts Panel */}
              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-200">Today’s Activity</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">Live</div>
                </div>

                <div className="space-y-2">
                  {/* Alert 1 */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Follow-up Sent</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Lead re-engaged (Stage: Interested)</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400">9:14</div>
                  </div>

                  {/* Alert 2 */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-orange-500 text-base">notification_important</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Payment Mismatch Flagged</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Sent to finance for review</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400">8:02</div>
                  </div>

                  {/* Alert 3 */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base">description</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Audit Log Saved</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Approval recorded (Ops → Dispatch)</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400">7:31</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative py-20 bg-primary text-white overflow-hidden" id="why-us">
        {/* Background watermark logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src={logoWhite}
            alt=""
            aria-hidden="true"
            className="h-[70%] w-auto opacity-[0.9] blur-xl select-none"
          />
        </div>

        {/* Optional subtle gradient overlay to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Built to stop silent friction and scale impact
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We understand the realities of African business: fragmented workflows, diverse tools, and the pressure to scale efficiently. We don’t sell hype we build systems that save time, reduce errors, reclaim costs, and scale operations reliably from day one.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "Execution-first approach",
                  "No hype, measurable outcomes",
                  "Local infrastructure expertise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Client Outcome</h3>
                <blockquote className="text-lg italic text-blue-50 mb-6">
                  "Before RokgyAI, our support team struggled to keep up. Now, 70% of tickets are resolved automatically, follow-ups happen in minutes, and our operational visibility is real-time letting our team focus on strategic decisions."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-white/20"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi5Eu7015QUYe8ltQ4aWd1mi3WBX9derYz7zfL2WMekIL5yMow8oBhIQ-9Qm0Y0_HYdFcZeAf09K_01QfmcHtor5aFDA1PRDPIFu39LtRMitt8HqfL3HXgoZBoITp4z1ooVXv3b-T7hByzpPaM9ec5KUc0dcuzDeFucERQsUsA0Wa2ke_nl27-KlVlS7DU4U1njuNQkPgcl4cUH-VPZsrx5I7IXYeqru5tNKswMqkXvi1jQuvKAVMtl83UXaazRRNronfPDk-v664')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div>
                    <div className="font-bold">Sarah O.</div>
                    <div className="text-sm text-blue-200">COO, Logistics Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl mb-6">
            Stop drowning in manual work.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Get clarity on what to automate first. No pressure, no hype—just a clear roadmap for operational
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg">
              Book a Free Discovery Call
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-[#111318] px-8 py-4 rounded-lg text-lg font-bold transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background-light dark:bg-[#0b0f17] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        {/* subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-primary mb-4">
                <img src={logo} alt="RokgyAI logo" className="h-9 w-9 object-contain" />
                <h2 className="text-[#111318] dark:text-white text-lg font-bold">RokgyAI</h2>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Practical AI solutions for African SMEs. Building the future of automated operations.
              </p>

              {/* Optional mini CTA */}
              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors hover:underline underline-offset-4"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {["AI Support", "Sales Automation", "Consulting"].map((item) => (
                  <li key={item}>
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors hover:underline underline-offset-4"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Connect</h4>

              <div className="flex gap-3">
                <a
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:border-primary/40 transition"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:border-primary/40 transition"
                  href="#"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>

              {/* Optional contact line */}
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Email: <a href="mailto:hello@rokgy.ai" className="hover:text-primary hover:underline underline-offset-4">hello@rokgyai.io</a><br />
                Phone No: <a href="tel:+1234567890" className="hover:text-primary hover:underline underline-offset-4">+123 456 7890</a>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 RokgyAI. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">
              <a className="hover:text-primary hover:underline underline-offset-4 transition" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary hover:underline underline-offset-4 transition" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
