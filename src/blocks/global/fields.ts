import { colorsAndGradients, textColor } from '@/design/colors'
import { textAlign } from '@/design/orientation'
import { landingHeading } from '@/design/text'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Field } from 'payload'

export const overlayField: Field = {
  name: 'overlay',
  type: 'group',
  fields: [
    { name: 'overlayColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    { name: 'image', type: 'text' },
  ],
}

export const headingField: Field = {
  name: 'heading',
  type: 'group',
  fields: [
    { name: 'headingOne', type: 'text', required: true },
    { name: 'headingTwo', type: 'text' },
    { name: 'size', type: 'select', options: getOptionsFromObject(landingHeading) },
    {
      name: 'color',
      type: 'select',
      options: getOptionsFromObject(textColor),
    },
    {
      name: 'align',
      type: 'select',
      options: getOptionsFromObject(textAlign),
    },
  ],
  required: true,
}
