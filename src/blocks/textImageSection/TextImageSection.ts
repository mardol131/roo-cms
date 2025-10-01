import { Block } from 'payload'
import { headingField, overlayField, richTextField } from '../global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients, textColor } from '@/design/colors'
import { sides } from '@/design/orientation'

export const TextImageSectionBlock: Block = {
  slug: 'textimagesection',
  fields: [
    richTextField,

    { name: 'image', type: 'text', required: true },
    { name: 'imageSide', type: 'select', options: getOptionsFromObject(sides) },
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    overlayField,
  ],
}
