import { Block } from 'payload'
import { columnField, getRichTextField, rowField } from '../global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients } from '@/design/colors'

export const MasonryBubbleBlock: Block = {
  slug: 'masonrybubble',
  fields: [
    getRichTextField(),
    { name: 'color', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    columnField,
    rowField,
  ],
}

export const MasonryBubbleImageBlock: Block = {
  slug: 'masonrybubbleimage',
  fields: [{ name: 'image', type: 'text', required: true }, columnField, rowField],
}
