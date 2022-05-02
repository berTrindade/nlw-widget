import { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {

  return (
    <Popover
      className='absolute bottom-5 right-5'
    >

      <Popover.Panel>Olá mundo</Popover.Panel>

      <Popover.Button
        onClick={() => {}}
        className={`
        bg-brand-500 rounded-full px-3 h-12
        text-white flex items-center group
      `}>
          <ChatTeardropDots className='w-6 h-6' />
          <span className={`
            max-w-0 overflow-hidden
            group-hover:max-w-sm
            transition-all duration-300 ease-linear
          `}>
            <span className='pl-2'></span>
            Feedback
          </span>
      </Popover.Button>
    </Popover>
  )
}