import { useState } from "react";
import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestart() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className={`
      bg-zinc-800 p-4 mb-4 relative rounded-2xl
      flex flex-col items-center shadow-lg
      w-[calc(100vw-2rem)] md:w-auto
    `}>

      { feedbackSent &&
        <FeedbackSuccessStep onBack={handleRestart} />
      }

      { !feedbackSent &&
        <>
          { !feedbackType ? (
            <FeedbackTypeStep onChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              type={feedbackType}
              onBack={handleRestart}
              onSend={() => setFeedbackSent(true)}
            />
          )}
        </>
      }

      <footer className="text-xs text-neutral-400">
      Feito com ♥ por <a href="https://github.com/luiizsilverio"
        className="underline underline-offset-2"
      >Luiiz</a>
      </footer>
    </div>
  )
}