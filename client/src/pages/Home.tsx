import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownLeft,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  CircleArrowOutUpRight,
  Download,
  ExternalLink,
  FileArchive,
  FileAudio,
  FileImage,
  FileText,
  FileVideo,
  FolderOpen,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MoveUpLeft,
  Phone,
  Play,
  ScanLine,
  Sparkles,
  Presentation,
  X,
} from "lucide-react";
import { categories, drive, driveFolders, profile, projects, skills, type CategoryId, type Project, type DriveFile } from "@/data/portfolio";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-hidden="true">
      <span>و</span>
      <span className="brand-mark__star">✦</span>
      <span>س</span>
    </span>
  );
}

function SectionEyebrow({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <div className={`section-eyebrow ${inverted ? "section-eyebrow--inverted" : ""}`}>
      <span className="eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(animate);
    };
    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-active");
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${progress}%`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const visibleProjects = useMemo(
    () => (activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory],
  );

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const fileIcon = (file: DriveFile) => {
    if (file.type === "صورة") return <FileImage size={15} />;
    if (file.type === "فيديو") return <FileVideo size={15} />;
    if (file.type === "صوت") return <FileAudio size={15} />;
    if (file.type === "عرض") return <Presentation size={15} />;
    if (file.type === "أرشيف") return <FileArchive size={15} />;
    return <FileText size={15} />;
  };

  return (
    <div className="site-shell" dir="rtl">
      <div className="grain" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-gem" aria-hidden="true"><span className="cursor-gem__stone" /><span className="cursor-gem__sparkle">✦</span><span className="cursor-gem__ring" /></div>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={() => goTo("#home")} aria-label="Genfolio — الصفحة الرئيسية">
            <BrandMark />
            <span className="wordmark__text">
              <strong>GENFOLIO</strong>
              <small>مولّد بصري</small>
            </span>
          </a>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="التنقل الرئيسي">
            <button onClick={() => goTo("#work")}>الأعمال</button>
            <button onClick={() => goTo("#about")}>عنّي</button>
            <button onClick={() => goTo("#materials")}>المواد</button>
            <button onClick={() => goTo("#contact")}>تواصل</button>
          </nav>
          <div className="header-actions">
            <a className="header-link" href={`mailto:${profile.email}`}>ابدئي محادثة <ArrowUpLeft size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="فتح القائمة">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="hero-inner page-width">
            <div className="hero-copy reveal">
              <div className="hero-kicker"><Sparkles size={15} /> AI / IMAGE / DIRECTION <span>01</span></div>
              <h1>
                نصنع من
                <em>الفكرة</em>
                <span className="hero-title-outline">صورةً تُرى.</span>
              </h1>
              <p className="hero-lead">أنا وئام السمرات، مصممة ذكاء اصطناعي توليدي أترجم الأفكار إلى هويات وصور وتجارب بصرية تحمل معنى.</p>
              <div className="hero-actions">
                <button className="button button--ink" onClick={() => goTo("#work")}>استكشف الأعمال <ArrowDownLeft size={17} /></button>
                <button className="text-button" onClick={() => goTo("#about")}>اكتشف طريقتي <MoveUpLeft size={16} /></button>
              </div>
              <div className="hero-meta">
                <span><i className="status-dot" /> متاحة لمشاريع مختارة</span>
                <span>إربد، الأردن · 2026</span>
              </div>
            </div>
            <div className="hero-visual reveal reveal--delay">
              <div className="hero-image-frame">
                <img src={publicAsset("media/hero.jpg")} alt="مشهد بصري من أعمال وئام السمرات" />
                <div className="hero-image-wash" />
                <div className="hero-image-caption">
                  <span>01 / 08</span>
                  <strong>أصنع الصورة<br />من أول إحساس.</strong>
                </div>
              </div>
              <div className="hero-annotation hero-annotation--top">VISUAL<br />THINKING <ArrowUpLeft size={14} /></div>
              <div className="hero-annotation hero-annotation--bottom">A BEAUTIFUL<br />WAY TO BEGIN</div>
              <div className="hero-stamp"><span>WEAM</span><strong>✦</strong><span>AI DESIGN</span></div>
            </div>
          </div>
          <div className="scroll-cue"><span>مرّر لتستكشف</span><ArrowDownLeft size={15} /></div>
        </section>

        <section className="signal-section page-width reveal">
          <div className="signal-intro">
            <SectionEyebrow>الإشارة الأولى</SectionEyebrow>
            <h2>ليست مجرد صور.<br /><span>إنها طريقة تفكير.</span></h2>
          </div>
          <div className="signal-copy">
            <p>أستخدم الذكاء الاصطناعي كمساحة تجريب، لا كاختصار. أبحث عن الفكرة التي تجعل الصورة أصدق، والهوية أكثر حضورًا، والتفاصيل أكثر قدرة على الكلام.</p>
            <div className="signal-index"><span>01</span><div /><span>05</span></div>
          </div>
          <div className="signal-card">
            <ScanLine size={21} />
            <span>CURATED<br />INTELLIGENCE</span>
            <strong>بصري، منظم، ومقصود.</strong>
          </div>
        </section>

        <section id="work" className="work-section page-width">
          <div className="section-heading reveal">
            <div>
              <SectionEyebrow>مختارات من المعرض</SectionEyebrow>
              <h2>أعمال <span>تتحرّك</span><br />بين الفكرة والصورة.</h2>
            </div>
            <p>مجموعة من التجارب التي صنعتها بين الهوية، الحملات، المنتجات، والمساحات — وكل مشروع يبدأ بسؤال بصري.</p>
          </div>
          <div className="filter-row reveal">
            {categories.map((category) => (
              <button key={category.id} className={activeCategory === category.id ? "filter-chip is-active" : "filter-chip"} onClick={() => setActiveCategory(category.id)}>
                {category.label}<span>{category.id === "all" ? "08" : String(projects.filter((project) => project.category === category.id).length).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <button key={project.id} className={`project-card project-card--${index % 3} reveal`} onClick={() => setActiveProject(project)}>
                <div className="project-image-wrap"><img src={publicAsset(project.image)} alt={project.title} /><span className="project-open"><CircleArrowOutUpRight size={18} /></span></div>
                <div className="project-card__meta"><span>{project.categoryLabel}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </button>
            ))}
          </div>
          <div className="work-footer reveal"><span>كل مشروع هو بداية لمسار جديد</span><a href={drive.root} target="_blank" rel="noreferrer">أرشيف Drive الكامل <ArrowUpLeft size={15} /></a></div>
          <div className="drive-archive reveal">
            <div className="archive-heading">
              <div><SectionEyebrow>أرشيف الملفات الكامل</SectionEyebrow><h3>كل المجلدات.<br /><span>كل الملفات.</span></h3></div>
              <p>تمت إضافة كل المجلدات الموجودة في Drive إلى هذا القسم. افتح أي مجلد لعرض جميع ملفاته والوصول إلى المصدر الأصلي.</p>
            </div>
            <div className="folder-grid">
              {driveFolders.map((folder) => (
                <details className="folder-card" key={folder.name}>
                  <summary>
                    <span className="folder-icon"><FolderOpen size={19} /></span>
                    <span className="folder-summary"><strong>{folder.name}</strong><small>{folder.files.length} {folder.files.length === 1 ? "ملف" : "ملفات"}</small></span>
                    <ChevronLeft size={17} className="folder-chevron" />
                  </summary>
                  <div className="folder-body">
                    <p>{folder.description}</p>
                    <a className="folder-source" href={folder.href} target="_blank" rel="noreferrer">فتح المجلد في Drive <ExternalLink size={13} /></a>
                    <div className="file-list">
                      {folder.files.map((file) => <a className="file-row" href={file.href} target="_blank" rel="noreferrer" key={`${folder.name}-${file.name}`}><span className="file-type-icon">{fileIcon(file)}</span><span className="file-name">{file.name}</span><span className="file-meta">{file.type} · {file.size}</span><ExternalLink size={13} /></a>)}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-backdrop" aria-hidden="true">W</div>
          <div className="page-width about-inner">
            <div className="about-media reveal">
              <div className="about-image"><img src={publicAsset("media/identity.jpg")} alt="لوحة الهوية البصرية لوئام السمرات" /></div>
              <div className="about-card"><span>دبلوم</span><strong>إدارة أعمال</strong><small>مع تدريب عملي لدى شركة كهرباء إربد</small></div>
            </div>
            <div className="about-copy reveal reveal--delay">
              <SectionEyebrow inverted>عنّي باختصار</SectionEyebrow>
              <h2>العين التي ترى<br /><em>النظام داخل الفكرة.</em></h2>
              <p>{profile.bio}</p>
              <div className="skill-list">
                {skills.map((skill) => <span key={skill}><Check size={14} />{skill}</span>)}
              </div>
              <div className="about-contact"><span><MapPin size={14} /> {profile.location}</span><span><Mail size={14} /> {profile.email}</span></div>
            </div>
          </div>
        </section>

        <section id="materials" className="materials-section page-width">
          <div className="section-heading section-heading--materials reveal">
            <div><SectionEyebrow>المواد المهنية</SectionEyebrow><h2>أشياء يمكن<br /><span>فتحها الآن.</span></h2></div>
            <p>العروض التقديمية والسيرة الذاتية والافتار، موضوعة هنا كامتداد طبيعي للمشروع — واضحة، قابلة للعرض، وقريبة منك.</p>
          </div>
          <div className="materials-grid">
            <div className="avatar-card reveal">
              <div className="avatar-topline"><span>AVATAR / 01</span><a href={drive.avatar} target="_blank" rel="noreferrer">المصدر <ArrowUpLeft size={14} /></a></div>
              <div className="avatar-video-wrap"><video src={publicAsset("media/avatar.mp4")} autoPlay loop muted playsInline aria-label="فيديو الافتار الصامت" /><div className="avatar-play"><Play size={16} fill="currentColor" /></div><span className="silent-pill">صامت بالكامل</span></div>
              <div className="avatar-caption"><strong>الافتار يتحرك،<br />والصوت ليس ضروريًا.</strong><span>حركة ناعمة بلا موسيقى أو مؤثرات صوتية.</span></div>
            </div>
            <div className="presentation-stack reveal reveal--delay">
              <div className="stack-label"><Layers3 size={17} /> PRESENTATIONS / 02</div>
              {drive.presentations.map((presentation, index) => (
                <a key={presentation.title} href={presentation.href} target="_blank" rel="noreferrer" className={`presentation-card presentation-card--${presentation.accent}`}>
                  <span className="presentation-number">0{index + 1}</span>
                  <span className="presentation-copy"><small>{presentation.eyebrow}</small><strong>{presentation.title}</strong><em>{presentation.description}</em></span>
                  <ArrowUpLeft size={19} />
                </a>
              ))}
              <a className="cv-card" href={publicAsset("docs/Weam-Alsmerat-CV.docx")} download>
                <span className="cv-icon"><FileText size={21} /></span><span><small>CURRICULUM VITAE</small><strong>السيرة الذاتية</strong></span><Download size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section page-width reveal">
          <div className="contact-mark"><BrandMark light /></div>
          <div className="contact-copy"><SectionEyebrow inverted>لنبدأ من سؤال</SectionEyebrow><h2>هل لديك فكرة<br /><em>تريد أن تُرى؟</em></h2><p>أرسل لي الفكرة كما هي. سنكتشف معًا شكلها البصري، ثم نمنحها المساحة التي تستحقها.</p></div>
          <div className="contact-actions"><a className="button button--sand" href={`mailto:${profile.email}`}>أرسل رسالة <ArrowUpLeft size={17} /></a><a className="contact-line" href={`tel:${profile.phone}`}><Phone size={15} /> {profile.phone}</a><a className="contact-line" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div>
        </section>
      </main>

      <footer className="site-footer page-width"><div className="footer-brand"><BrandMark /><span>© 2026 Genfolio · Weam Al-Smerat</span></div><div className="footer-note"><span className="status-dot" /> موقع هادئ، بلا صوت</div><a href="#home" onClick={() => goTo("#home")} className="to-top">العودة للأعلى <ArrowDownLeft size={14} /></a></footer>

      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={() => setActiveProject(null)}>
          <div className="project-modal__panel" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="إغلاق"><X size={20} /></button>
            <div className="modal-media"><img src={publicAsset(activeProject.image)} alt={activeProject.title} /></div>
            <div className="modal-copy"><span className="modal-kicker">{activeProject.categoryLabel} · {activeProject.year}</span><h2>{activeProject.title}</h2><p>{activeProject.note}</p><a href={drive.root} target="_blank" rel="noreferrer" className="text-button">مشاهدة المصدر <ArrowUpLeft size={15} /></a></div>
          </div>
        </div>
      )}
    </div>
  );
}
