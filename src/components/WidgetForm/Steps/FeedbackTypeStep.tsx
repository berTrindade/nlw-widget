import { feedbackTypes } from ".."
import { FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"

interface Props {
  onChange(type: FeedbackType): void
}

export function FeedbackTypeStep(props: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Deixe seu feedback
        </span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                type="button"
                key={key}
                className={`
                  rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2
                  bg-gradient-to-br from-zinc-700 to-[#2d2d32]
                  border-2 border-zinc-700 hover:border-brand-500
                  focus:border-brand-500 focus:outline-none
                `}
                onClick={() => props.onChange(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}