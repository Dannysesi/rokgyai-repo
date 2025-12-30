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
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#111318] dark:text-white sm:text-4xl mb-4">
              Busy every day… but operations are still leaking value.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              If your business runs on WhatsApp, spreadsheets, and “please follow up”, you’re not alone.
              These are the operational hits that quietly cap growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-red-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">trending_down</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Revenue slips through cracks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Leads go cold, follow-ups don’t happen, invoices delay, collections drag—small gaps become big losses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-orange-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Customer experience is inconsistent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Response times depend on who’s online. Repeat questions pile up. Escalations get missed. Customers churn.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">query_stats</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Leadership is flying blind</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Data is scattered across tools. Reporting is manual and late—so decisions are slow, reactive, and stressful.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-purple-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Risk & compliance become chaos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Approvals happen in chats. Audit trails are missing. Fraud/leakage is hard to detect. Compliance becomes “panic mode”.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Solutions
            </span>
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl">
              Outcomes-first automation systems
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don’t sell “AI tools”. We install workflows and agents that remove bottlenecks, enforce consistency,
              and give leadership real-time visibility.
            </p>

            {/* Personalization note (top, visible) */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 backdrop-blur">
                <span className="material-symbols-outlined text-primary text-base">tune</span>
                Tailored to your business: we audit your workflows, then build what you need (not one-size-fits-all).
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1) Customer Ops */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Customer Ops Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Faster responses, consistent handling, and clean escalation so service quality scales without extra headcount.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  WhatsApp + Email + Instagram flows
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Auto-triage + escalation with context
                </li>
              </ul>
            </div>

            {/* 2) Revenue Ops */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Revenue Ops Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Stop leakage across leads, follow-ups, and handoffs so pipeline conversion doesn’t depend on reminders.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Lead qualification + follow-ups
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  CRM/Sheets updates + booking flows
                </li>
              </ul>
            </div>

            {/* 3) Knowledge & SOP */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">neurology</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                Knowledge &amp; SOP Copilot
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                Turn docs into answers. Teams execute consistently and new hires ramp faster even across branches.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Instant SOP retrieval
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Faster onboarding + fewer mistakes
                </li>
              </ul>
            </div>

            {/* 4) Training / Enablement */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                AI Adoption &amp; Team Training
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                We train your team to use, monitor, and improve the automations so the system sticks and keeps delivering ROI.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-auto">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Role-based training (Ops, Sales, Support)
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base">check</span>
                  Playbooks + best practices + governance
                </li>
              </ul>
            </div>
          </div>

          {/* Optional bottom CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </section>



      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900" id="process">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl mb-6">
                From chaos to clarity in 3 steps
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Every engagement starts with a quick ops audit. Then we build the automations and agents around
                your existing tools (WhatsApp, email, Sheets, CRM) and train your team to run it.
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
                      We audit your current workflows to find the highest-impact areas for automation.
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
                      We build custom AI agents and train your team on how to manage them effectively.
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
                      We track results (time saved, response speed, conversions), refine the workflows, and help you scale
                      without adding headcount.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative bg-background-light dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
              <div className="aspect-square w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono text-gray-400">RokgyAI Monitor</div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined">input</span>
                    </div>

                    <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-primary w-full animate-[width_2s_ease-in-out_infinite]" />
                    </div>

                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined animate-spin">settings</span>
                    </div>

                    <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-green-500 w-full animate-[width_2s_ease-in-out_infinite_1s]" />
                    </div>

                    <div className="w-12 h-12 rounded bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined">output</span>
                    </div>
                  </div>

                  <div className="mt-auto bg-gray-50 dark:bg-gray-800 rounded p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Hours Saved</div>
                        <div className="text-3xl font-bold text-[#111318] dark:text-white">78h</div>
                      </div>
                      <div className="text-green-500 text-sm font-medium flex items-center">
                        <span className="material-symbols-outlined text-base mr-1">trending_up</span>
                        +24% this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex-1 p-6 flex flex-col gap-4">
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

              {/* Mini workflow pipeline */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined">input</span>
                </div>

                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-primary w-4/5 animate-[width_2s_ease-in-out_infinite]" />
                </div>

                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined animate-spin">settings</span>
                </div>

                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-green-500 w-full animate-[width_2s_ease-in-out_infinite_1s]" />
                </div>

                <div className="w-12 h-12 rounded bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">output</span>
                </div>
              </div>

              {/* KPI grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Avg Response Time</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">2m 14s</div>
                  <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">south</span>
                    down 68%
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Revenue Protected</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">₦1.8m</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">this month</div>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Work Saved</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">78h</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">this week</div>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">SOP Compliance</div>
                  <div className="mt-1 text-xl font-bold text-[#111318] dark:text-white">94%</div>
                  <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    improving
                  </div>
                </div>
              </div>

              {/* Alerts / audit trail snippet */}
              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-200">Today’s Activity</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">Live</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Follow-up sent</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Lead re-engaged (Stage: Interested)</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400">9:14</div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-orange-500 text-base">notification_important</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Payment mismatch flagged</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Sent to finance for review</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400">8:02</div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base">description</span>
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 font-medium">Audit log saved</div>
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
                Built for the realities of African business.
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We understand the context. Unstable connectivity, diverse payment methods, and the need for
                rock-solid reliability. We don't sell "future tech" we sell systems that work today.
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
                  "Before RokgyAI, our support team was drowning. Now, 70% of tickets are resolved
                  automatically, and our response time dropped from 2 hours to less than 2 minutes."
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
