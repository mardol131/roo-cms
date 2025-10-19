import { Block } from 'payload'
import { buttonsField, headingField, imageField } from '../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'
import { textsField } from '../_blocks/textBlock'

export const HeroBubbleSectionBlock: Block = {
  slug: 'HeroBubbleSection',
  labels: { singular: 'Hero v bublině', plural: 'PHero v bublině' },
  fields: [
    textsField,
    buttonsField,
    imageField,
    { name: 'bgColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
  ],
}
