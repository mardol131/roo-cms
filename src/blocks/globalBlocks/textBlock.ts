import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { iconsListString } from '@/icons/iconsList'
import { Block } from 'payload'
import { textAlign } from '@/design/orientation'
import { getRichTextField } from '../global/fields'
import { fontWeight, textColor, textLevels } from '../types/textTypes'

export const TextBlock: Block = {
  slug: 'TextBlock',
  fields: [
    { name: 'level', type: 'select', options: getOptionsFromObject(textLevels) },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: getOptionsFromObject(textColor),
    },
    { name: 'text', type: 'text', required: true },
    { name: 'className', type: 'text' },
    { name: 'fontWeight', type: 'select', options: getOptionsFromObject(fontWeight) },
  ],
}
