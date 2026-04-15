'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, Facebook, Phone, ExternalLink, Briefcase, BookOpen, Database, BarChart3, Table } from 'lucide-react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

// ── Scroll-reveal hook (fires only once per element) ──────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // never re-triggers on scroll back
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// ── Reusable animated wrapper ─────────────────────────────────────────────────
type RevealProps = {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'flip'
  delay?: number   // ms
}

function Reveal({ children, className = '', animation = 'fade-up', delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal()

  const base = 'transition-all duration-700 ease-out'

  const hidden: Record<string, string> = {
    'fade-up':    'opacity-0 translate-y-12',
    'fade-left':  'opacity-0 -translate-x-12',
    'fade-right': 'opacity-0 translate-x-12',
    'zoom':       'opacity-0 scale-90',
    'flip':       'opacity-0 rotateX-90',
  }

  const shown = 'opacity-100 translate-y-0 translate-x-0 scale-100'

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('dashboard')

  const projects = {
    dashboard: [
      {
        id: 1,
        title: 'Retail Analytics Dashboard',
        description: '20+ self-directed dashboards across retail, healthcare, and sales domains with interactive KPI tracking',
        tools: ['Tableau', 'Power BI'],
        link: '#'
      },
      {
        id: 2,
        title: 'Sales Performance Metrics',
        description: 'Real-time dashboard for sales funnel analysis and revenue tracking by region and product',
        tools: ['Tableau', 'SQL'],
        link: '#'
      },
      {
        id: 3,
        title: 'Customer Behavior Analytics',
        description: 'Segmentation dashboard for customer insights, retention rates, and lifetime value visualization',
        tools: ['Power BI', 'Excel'],
        link: '#'
      }
    ],
    sql: [
      {
        id: 4,
        title: 'Customer RFM Analysis',
        description: 'Complex SQL queries for recency, frequency, monetary analysis and customer segmentation',
        tools: ['MySQL', 'PostgreSQL'],
        link: '#'
      },
      {
        id: 5,
        title: 'Sales Funnel Queries',
        description: 'Advanced SQL procedures for conversion rate analysis and sales pipeline optimization',
        tools: ['PostgreSQL', 'Python'],
        link: '#'
      },
      {
        id: 6,
        title: 'Data Pipeline & ETL',
        description: 'ETL-style queries for multi-source data transformation, aggregation, and quality validation',
        tools: ['MySQL', 'Python'],
        link: '#'
      }
    ],
    excel: [
      {
        id: 7,
        title: 'Financial Forecasting',
        description: 'Dynamic Excel models with Power Query for revenue projections and trend analysis',
        tools: ['Excel', 'Power Query'],
        link: '#'
      },
      {
        id: 8,
        title: 'Budget & Variance Analysis',
        description: 'Automated budget tracking with variance calculations, alerts, and scenario planning',
        tools: ['Excel', 'Formulas'],
        link: '#'
      },
      {
        id: 9,
        title: 'Sales Inventory Tracking',
        description: 'Interactive Excel dashboard with real-time inventory optimization and stock forecasting',
        tools: ['Excel', 'Power Query'],
        link: '#'
      }
    ]
  }

  const toolCategories = [
    { category: 'Visualization', tools: ['Tableau', 'Power BI'],                          color: 'from-primary/20' },
    { category: 'Programming',   tools: ['Python', 'Pandas', 'MySQL', 'PostgreSQL'],      color: 'from-green-500/20' },
    { category: 'Tools',         tools: ['Excel', 'Power Query', 'Word', 'PowerPoint'],   color: 'from-purple-500/20' },
    { category: 'Other',         tools: ['Canva', 'GitHub', 'Vercel'],                    color: 'from-blue-500/20' }
  ]

  const education = [
    { degree: 'Bachelor of Science in Information Technology', school: 'STI College Novaliches',       year: '2024' },
    { degree: 'Huawei Certified Associate - Cloud Service',    school: 'Huawei Official Certification', year: '2021' }
  ]

  const experience = [
    { title: 'Freelance Web Developer', company: 'Self-employed',  duration: '2021 – Present', description: 'Built responsive websites with clean design and user-focused architecture' },
    { title: 'Cloud Computing Trainee', company: 'Huawei (OJT)',   duration: '2020 – 2021',   description: 'Completed HCIA certification with hands-on cloud infrastructure training' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-white">Christian </span>
            <span className="text-secondary">Kho </span>
            <span className="text-secondary">Aler</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home"    className="text-foreground hover:text-secondary transition">Home</a>
            <a href="#projects" className="text-foreground hover:text-secondary transition">Projects</a>
            <a href="#contact"  className="text-foreground hover:text-secondary transition">Contact</a>
          </div>
        </div>  
      </nav>



     <section id='home' className="relative flex items-start justify-center px-4 pt-24 pb-0 overflow-hidden">
  <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />

  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT */}
    <div>
      <Reveal animation="fade-up">
        <div className="text-sm text-secondary mb-4 font-semibold">
          Data Analyst | Web Developer
        </div>
      </Reveal>

      <Reveal animation="fade-up" delay={100}>
        <div className="flex items-center gap-3 mb-4">
          <DotLottieReact
            src="https://lottie.host/f080f7fc-60aa-4066-85e4-33933835cd3b/K4C0QeWTxX.lottie"
            loop
            autoplay
            style={{ width: 80, height: 80 }}
          />
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-secondary">Christian Kho Aler</span>
          </h1>
        </div>
      </Reveal>

      <Reveal animation="fade-up" delay={200}>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Aspiring Data Analyst with a background in IT, passionate about turning
          raw data into clear, actionable insights through SQL, Python, and
          interactive dashboards.
        </p>
      </Reveal>

  <Reveal animation="fade-up" delay={300}>
  {/* Nilagyan ng z-10 para hindi maharangan ng image sa baba */}
  <div className="flex gap-3 flex-wrap relative z-10">
    
    {/* View My Work - Nagiging mas dark ang primary color */}
  {/* Mula sa hover:bg-primary/80, gawin nating hover:bg-yellow-400 */}
<a 
  href="#projects" 
  className="bg-primary hover:bg-yellow-400 transition-colors duration-300 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer text-white hover:text-white"
>
  View My Work
</a>


    {/* Download CV - Nagkakaroon ng background color */}
    <a 
      href="/path-to-your-cv.pdf" 
      className="border border-secondary hover:bg-secondary hover:text-white transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
    >
      Download CV
    </a>

    {/* Contact - Nagbabago ang border opacity o kulay */}
    <a 
      href="#contact" 
      className="border border-primary/50 hover:border-primary transition-colors duration-300 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
    >
      Contact
    </a>
    
  </div>

  {/* Image section */}
  <div className="ml-2 -mt-8 pointer-events-none">
    <img
      src="/lesson.png"
      className="w-72"
      alt="self taught"
    />
  </div>
</Reveal>


    </div>

    {/* RIGHT */}
    <Reveal animation="zoom" delay={150}>
      <div className="flex justify-center md:justify-end">
        <Image
          src="/pic2.png"
          alt="profile"
          width={700}
          height={600}
          className="rounded-xl object-cover -mt-20"
          priority
        />
      </div>
    </Reveal>

  </div>
</section>

  
     {/* ── Experience & Education ───────────────────────────────────────────── */}
<section className="-mt-16 py-20 px-4 bg-card/50">
  <div className="max-w-6xl mx-auto">

    <Reveal animation="fade-up">
      <p className="mb-2 font-mono text-sm tracking-widest uppercase text-secondary">
        Background
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
        Experience & <span className="text-secondary">Education</span>
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-8">

      {/* ── Experience ── */}
      <div>
        <Reveal animation="fade-left">
          <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Experience
          </h3>
        </Reveal>
        <div className="space-y-4 text-xl font-bold text-secondary mb-6 ">
          {[
            {
              title: 'Freelance Web Developer',
              company: 'Self-employed',
              duration: '2021 – 2026',
              description: 'Built responsive websites with clean design and user-focused architecture for various clients.'
            },
            {
              title: 'Digital Marketplace Seller',
              company: 'Self-employed',
              duration: '2018 – 2025',
              description: 'Managed online reselling business with inventory tracking, pricing strategy, and sales analytics.'
            },
            {
              title: 'Cloud Computing Trainee',
              company: 'Huawei (OJT)',
              duration: '2020 – 2021',
              description: 'Completed HCIA certification with hands-on cloud infrastructure and VM training.'
            },
            {
              title: 'Freelance Photo & Video Editor',
              company: 'Self-employed',
              duration: '2020 – 2022',
              description: 'Edited photos and promotional videos using Canva, Photoshop, and Cap Cut for social media.'
            },
          ].map((exp, idx) => (
            <Reveal key={idx} animation="fade-left" delay={idx * 80}>
              <div className="bg-background/50 p-4 rounded-xl border-2 border-yellow-500 hover:border-purple-500 transition">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-foreground text-sm">{exp.title}</p>
                  <span className="text-xs text-secondary font-mono whitespace-nowrap ml-2">{exp.duration}</span>
                </div>
                <p className="text-xs text-primary mb-2">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div>
        <Reveal animation="fade-right">
          <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Education
          </h3>
        </Reveal>
        <div className="space-y-4 text-xl font-bold text-secondary mb-6">
          {[
            {
              degree: 'Bachelor of Science in Information Technology',
              school: 'STI College Novaliches',
              year: '2021',
              description: 'Graduated with a focus on software development, database systems, and cloud computing.'
            },
            {
              degree: 'Huawei Certified ICT Associate',
              school: 'Huawei Official Certification',
              year: '2021',
              description: 'Passed Huawei\'s official HCIA-Cloud Service exam with hands-on training in VM setup and cloud security.'
            },
          ].map((edu, idx) => (
            <Reveal key={idx} animation="fade-right" delay={idx * 80}>
              <div className="bg-background/50 p-4 rounded-xl border-2 border-yellow-500 hover:border-purple-500 transition">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-foreground text-sm">{edu.degree}</p>
                  <span className="text-xs text-secondary font-mono whitespace-nowrap ml-2">{edu.year}</span>
                </div>
                <p className="text-xs text-primary mb-2">{edu.school}</p>
                <p className="text-xs text-muted-foreground">{edu.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* ── Skills ───────────────────────────────────────────────────────────── */}
<section id="skills" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">

    <Reveal animation="fade-up">
      <p className="mb-2 font-mono text-sm tracking-widest uppercase text-secondary">
        Skills
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
        Tools & Technologies
      </h2>
      <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground mb-12">
        My core toolkit for data analysis, visualization, and creative content production.
      </p>
    </Reveal>

    {/* Data & Analytics */}
    <Reveal animation="fade-up" delay={100}>
      <p className="self-start border-l-2 border-secondary/60 pl-3 font-mono text-[11px] uppercase tracking-widest text-secondary/70 mb-4">
        Data & Analytics
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { name: 'Excel',           img: 'https://img.icons8.com/color/96/microsoft-excel-2019.png' },
          { name: 'Microsoft Suite', img: 'https://img.icons8.com/color/96/microsoft.png' },
          { name: 'Power BI',        img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
          { name: 'Tableau',         img: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
          { name: 'MySQL',           img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          { name: 'PostgreSQL',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'Python',          img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Pandas',          img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        ].map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center gap-3 rounded-xl border-2 border-yellow-500 bg-card p-4 transition-all duration-200 hover:border-purple-500 hover:bg-secondary/5 hover:-translate-y-1">
            <div className="flex h-11 w-11 items-center justify-center">
              <img src={skill.img} alt={skill.name} loading="lazy" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-center text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Reveal>

    {/* Creative & Deployment */}
    <Reveal animation="fade-up" delay={200}>
      <p className="self-start border-l-2 border-primary/60 pl-3 font-mono text-[11px] uppercase tracking-widest text-primary/70 mb-4">
        Creative & Deployment
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { name: 'Canva',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
          { name: 'GitHub',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
          { name: 'Vercel',   img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico', invert: true },
          { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        ].map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center gap-3 rounded-xl border-2 border-yellow-500 bg-card p-4 transition-all duration-200 hover:border-purple-500 hover:bg-primary/5 hover:-translate-y-1">
            <div className="flex h-11 w-11 items-center justify-center">
              <img
                src={skill.img}
                alt={skill.name}
                loading="lazy"
                className="h-10 w-10 object-contain"
                style={skill.invert ? { filter: 'invert(1)' } : undefined}
              />
            </div>
            <span className="text-center text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Reveal>

  </div>
</section>
      {/* ── Projects ─────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <Reveal animation="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-muted-foreground mb-12">Explore my work across different data disciplines</p>
          </Reveal>

          {/* Tabs */}
          <Reveal animation="fade-up" delay={100}>
            <div className="flex gap-4 mb-12 border-b border-border pb-4 overflow-x-auto">
              {['dashboard', 'sql', 'excel'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 font-semibold whitespace-nowrap transition ${
                    activeCategory === category
                      ? 'text-secondary border-b-2 border-secondary -mb-4 pb-6'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category === 'dashboard' && 'Dashboards (Tableau)'}
                  {category === 'sql'       && 'SQL Queries'}
                  {category === 'excel'     && 'Excel Projects'}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Cards — re-animate when category changes via key */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects[activeCategory as keyof typeof projects].map((project, i) => (
              <Reveal key={`${activeCategory}-${project.id}`} animation="fade-up" delay={i * 100}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition hover:shadow-lg hover:shadow-primary/20 group h-full">
                  <div className="mb-4 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-5xl opacity-50">📈</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 transition">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">

          <Reveal animation="fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Let&apos;s <span className="text-secondary">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              I&apos;m always interested in discussing data projects and opportunities.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Reveal animation="fade-left" delay={0}>
              <a href="mailto:Chan.aler02@gmail.com" className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 hover:shadow-lg hover:shadow-primary/20 transition group block">
                <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-muted-foreground">Chan.aler02@gmail.com</p>
              </a>
            </Reveal>
            <Reveal animation="fade-right" delay={100}>
              <a href="tel:+63969694840008" className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 hover:shadow-lg hover:shadow-primary/20 transition group block">
                <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-muted-foreground">+63 (96) 969-4840008</p>
              </a>
            </Reveal>
          </div>

          <Reveal animation="zoom" delay={100}>
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/chrissssy520" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 hover:bg-primary/40 text-primary rounded-full flex items-center justify-center transition" title="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:Chan.aler02@gmail.com"
                className="w-12 h-12 bg-secondary/20 hover:bg-secondary/40 text-secondary rounded-full flex items-center justify-center transition" title="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 hover:bg-primary/40 text-primary rounded-full flex items-center justify-center transition" title="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="tel:+63969694840008"
                className="w-12 h-12 bg-secondary/20 hover:bg-secondary/40 text-secondary rounded-full flex items-center justify-center transition" title="Phone">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={200}>
         <a>
         "Thank you so much for visiting my portfolio! It means a lot.
          I'm still growing and learning every day, but I hope my work gave you a g
          limpse of what I can bring to the table. Feel free to reach out! 🙌"
         </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Christian Kho Aler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}