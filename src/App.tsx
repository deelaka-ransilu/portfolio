const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/deelaka-ransilu',
    icon: '/icon-linked-in.png',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/deelaka-ransilu',
    icon: '/icon-github.png',
  },
]

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-center text-[clamp(1.75rem,8vw,2.5rem)] font-bold leading-[1.48]">
        Deelaka Ransilu
      </h1>

      <div className="flex gap-1">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={l.label}
            className="p-2.5 transition-transform hover:-translate-y-1"
          >
            <img src={l.icon} alt={l.label} width={32} height={32} />
          </a>
        ))}
      </div>
    </main>
  )
}