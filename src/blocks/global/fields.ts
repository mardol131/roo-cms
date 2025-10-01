import { colorsAndGradients, textColor } from '@/design/colors'
import { textAlign } from '@/design/orientation'
import { headingLevels, landingHeading } from '@/design/text'
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
    { name: 'level', type: 'select', options: getOptionsFromObject(headingLevels) },
    { name: 'weight', type: 'number' },
  ],
  required: true,
}

export const columnField: Field = {
  name: 'column',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}

export const rowField: Field = {
  name: 'row',
  type: 'group',
  fields: [
    { name: 'start', type: 'number', required: true },
    { name: 'end', type: 'number', required: true },
  ],
}

export const richTextColors: Field = {
  name: 'richTextColors',
  type: 'group',
  fields: [
    { name: 'h1', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'h2', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'h3', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'h4', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'h5', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'h6', type: 'select', options: getOptionsFromObject(textColor) },
    { name: 'paragraph', type: 'select', options: getOptionsFromObject(textColor) },
  ],
}

export const richTextWeights: Field = {
  name: 'richTextWeights',
  type: 'group',
  fields: [
    { name: 'h1', type: 'number' },
    { name: 'h2', type: 'number' },
    { name: 'h3', type: 'number' },
    { name: 'h4', type: 'number' },
    { name: 'h5', type: 'number' },
    { name: 'h6', type: 'number' },
    { name: 'paragraph', type: 'number' },
  ],
}

export const richTextSizes: Field = {
  name: 'richTextSizes',
  type: 'group',
  fields: [
    { name: 'h1', type: 'number' },
    { name: 'h2', type: 'number' },
    { name: 'h3', type: 'number' },
    { name: 'h4', type: 'number' },
    { name: 'h5', type: 'number' },
    { name: 'h6', type: 'number' },
    { name: 'paragraph', type: 'number' },
  ],
}

export const richTextField: Field = {
  admin: {
    hideGutter: true,
  },
  label: 'Textové pole',
  name: 'text',
  type: 'group',
  fields: [
    { name: 'richText', type: 'richText', required: true },
    {
      type: 'collapsible',
      fields: [
        {
          type: 'collapsible',
          fields: [richTextColors],
          label: 'Barvy textu',
          admin: { initCollapsed: true },
        },
        {
          type: 'collapsible',
          fields: [richTextWeights],
          label: 'Síla fontu',
          admin: { initCollapsed: true },
        },
      ],
      label: 'Nastavení textu',
      admin: { initCollapsed: true },
    },
  ],
}
