export function WidgetForm() {
  return (
    <div className={`
      bg-zinc-800 p-4 mb-4 relative rounded-2xl
      flex flex-col items-center shadow-lg
      w-[calc(100vw-2rem)] md:w-auto
    `}>
      <header>
        <span className="text-xl leading-6">
          Deixe seu feedback
        </span>
      </header>

      <p>Hellow World</p>

      <footer className="text-xs text-neutral-400">
      Feito com ♥ por <a href="https://github.com/luiizsilverio"
        className="underline underline-offset-2"
      >Luiiz</a>
      </footer>
    </div>
  )
}