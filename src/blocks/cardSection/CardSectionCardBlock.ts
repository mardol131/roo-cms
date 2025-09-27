import { textColor } from '@/design/colors'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { iconsListString } from '@/icons/iconsList'
import { Block } from 'payload'

export const CardSectionCardBlock: Block = {
  slug: 'cardsectioncard',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: getOptionsFromObject(iconsListString),
    },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    {
      name: 'href',
      type: 'text',
    },
  ],
}
