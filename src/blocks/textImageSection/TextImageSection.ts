import { Block } from 'payload'
import { headingField, overlayField } from '../global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'
import { sides } from '@/design/orientation'

export const TextImageSectionBlock: Block = {
  slug: 'textimagesection',
  fields: [
    headingField,
    {
      name: 'textOne',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'color', type: 'select', options: getOptionsFromObject(textColor) },
      ],
      required: true,
    },
    {
      name: 'textTwo',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'color', type: 'select', options: getOptionsFromObject(textColor) },
      ],
    },
    { name: 'image', type: 'text', required: true },
    { name: 'imageSide', type: 'select', options: getOptionsFromObject(sides) },
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    overlayField,
  ],
}
