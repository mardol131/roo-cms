import { Block } from 'payload'
import { columnField, getRichTextField, rowField } from '../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients } from '@/design/colors'
import { textsField } from '../_blocks/textBlock'

export const MasonryBubbleBlock: Block = {
  slug: 'masonrybubble',
  fields: [
    textsField,
    { name: 'bgColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    columnField,
    rowField,
  ],
}

export const MasonryBubbleImageBlock: Block = {
  slug: 'masonrybubbleimage',
  fields: [{ name: 'image', type: 'text', required: true }, columnField, rowField],
}
