import { Block } from 'payload'
import { columnField, headingField, overlayField, rowField } from '../global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'
import { sides } from '@/design/orientation'

export const MasonryBubbleBlock: Block = {
  slug: 'masonrybubble',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'text', type: 'text' },
    { name: 'textColor', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'color', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    columnField,
    rowField,
  ],
}

export const MasonryBubbleImageBlock: Block = {
  slug: 'masonrybubbleimage',
  fields: [{ name: 'image', type: 'text', required: true }, columnField, rowField],
}
