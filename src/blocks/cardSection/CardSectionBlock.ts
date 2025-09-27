import { colorsAndGradients, textColor } from '@/design/colors'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { CardSectionCardBlock } from './CardSectionCardBlock'

export const CardsSectionBlock: Block = {
  slug: 'cardssection',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'headingColor',
      type: 'select',
      options: getOptionsFromObject(textColor),
    },
    {
      name: 'cards',
      type: 'blocks',
      required: true,
      blocks: [CardSectionCardBlock],
    },
    {
      name: 'overlay',
      type: 'select',
      options: getOptionsFromObject(colorsAndGradients),
    },
  ],
}
