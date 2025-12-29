export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display overflow-x-hidden antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#f0f2f4] dark:bg-[#101622]/90 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
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
                Book a Pilot
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

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                We turn manual bottlenecks into automated workflows. Practical AI solutions that fix support,
                sales, and reporting—no hype, just results.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex items-center justify-center h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-blue-900/10">
                  Book a Pilot
                </button>
                <button className="flex items-center justify-center h-12 px-6 bg-white border border-gray-200 text-[#111318] rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  See How It Works
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
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
              Is your growth stalled by operations?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We identify and solve the manual tasks that are slowing you down, creating invisible ceilings on
              your revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-red-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">headset_mic</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Overloaded Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Drowning in tickets, repetitive questions, and slow response times that frustrate customers.
              </p>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-orange-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">running_with_errors</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Missed Sales</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Leads going cold because your team is too busy to follow up instantly or persistently.
              </p>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-600 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">hourglass_disabled</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Slow Reporting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Manual data entry across spreadsheets delaying the crucial insights you need to make decisions.
              </p>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 bg-background-light dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-purple-500 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined">science</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">Random Experiments</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                No clear AI strategy, just disconnected tools and &quot;shiny objects&quot; with no measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Solutions
            </span>
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white sm:text-4xl">
              Practical AI Workflows
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just advise. We build and deploy systems that work from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3">AI Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Deploy intelligent agents that handle 80% of routine inquiries instantly, escalating only
                complex issues to humans.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  24/7 Instant Responses
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  WhatsApp &amp; Email Integration
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3">
                Sales &amp; Lead Nurturing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Automate lead qualification and follow-ups. Never let a potential customer slip through the
                cracks again.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  Instant Lead Qualification
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  Automated Calendar Booking
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">neurology</span>
              </div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3">Internal Knowledge Bots</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Turn your internal documents into a searchable chat interface. Help your team find answers in
                seconds, not hours.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  Onboard Employees Faster
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  Instant SOP Retrieval
                </li>
              </ul>
            </div>
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
                We don't disrupt your business. We integrate smoothly with your existing operations to lift
                the burden off your team.
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
                      We monitor performance, refine the models, and help you scale as volume grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-background-light dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
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
                        <div className="text-3xl font-bold text-[#111318] dark:text-white">124h</div>
                      </div>
                      <div className="text-green-500 text-sm font-medium flex items-center">
                        <span className="material-symbols-outlined text-base mr-1">trending_up</span>
                        +24% this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary text-white" id="why-us">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Built for the realities of African business.
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We understand the context. Unstable connectivity, diverse payment methods, and the need for
                rock-solid reliability. We don't sell "future tech"—we sell systems that work today.
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
                  automatically, and our response time dropped from 4 hours to 2 minutes."
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
      <footer className="bg-background-light dark:bg-[#0b0f17] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
                <h2 className="text-[#111318] dark:text-white text-lg font-bold">RokgyAI</h2>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Practical AI solutions for African SMEs. Building the future of automated operations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    AI Support
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Sales Automation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#111318] dark:text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-primary" href="#">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-primary" href="#">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2024 RokgyAI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a className="hover:text-primary" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
