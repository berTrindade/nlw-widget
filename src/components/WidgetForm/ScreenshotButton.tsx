import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface Props {
  screenshot: string | null
  onTake(screenshot: string | null): void
}

export function ScreenshotButton(props: Props) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    props.onTake(base64image)
    setIsTakingScreenshot(false)
  }

  if (props.screenshot) {
    return (
      <button
        type="button"
        onClick={() => props.onTake(null)}
        className={`
          p-1 w-10 h-10 rounded-md border-transparent
          flex justify-end items-end text-zinc-400
          hover:text-zinc-100 transition-colors
        `}
        style={{
          backgroundImage: `url(${props.screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className={`
        p-2 bg-[#2d2d32] rounded-md border-transparent
        hover:bg-zinc-700 transition-colors
        focus:border-brand-300 focus:outline-zinc-900
      `}
    >
      {
        isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />
      }
    </button>
  )
}
