import { buttonSizeList, buttonTypeList, roundingList } from '@/design/button'
import { colorsAndGradients, textColor } from '@/design/colors'
import { textAlign } from '@/design/orientation'
import { headingLevels, landingHeading } from '@/design/text'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Field } from 'payload'
import { ButtonBlock } from '../globalBlocks/buttonBlock'
import { buttonType, rounding } from '../types/buttonTypes'
import { fontWeight } from '../types/textTypes'
import { InputWidgetBlock } from '../globalBlocks/widgetsBlocks'

export const overlayField: Field = {
  label: 'Pozadí sekce',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'overlay',
      type: 'group',
      fields: [
        { name: 'overlayColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
        { name: 'image', type: 'text' },
      ],
    },
  ],
}

export const buttonsField: Field = {
  label: 'Tlačítka',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'buttons',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}

export const buttonField: Field = {
  label: 'Tlačítko',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'textColor', type: 'select', options: getOptionsFromObject(textColor) },
        {
          name: 'bgColor',
          type: 'select',
          options: getOptionsFromObject(colorsAndGradients),
        },
        { name: 'size', type: 'select', options: getOptionsFromObject(buttonSizeList) },
        { name: 'rounding', type: 'select', options: getOptionsFromObject(rounding) },
        { name: 'className', type: 'text' },
        { name: 'type', type: 'select', options: getOptionsFromObject(buttonType) },
        { name: 'link', type: 'text' },
      ],
    },
  ],
}

export const headingField: Field = {
  label: 'Nadpis',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
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
        { name: 'weight', type: 'text' },
      ],
      required: true,
    },
  ],
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
    { name: 'h1', type: 'text' },
    { name: 'h2', type: 'text' },
    { name: 'h3', type: 'text' },
    { name: 'h4', type: 'text' },
    { name: 'h5', type: 'text' },
    { name: 'h6', type: 'text' },
    { name: 'paragraph', type: 'text' },
  ],
}

export const richTextSizes: Field = {
  name: 'richTextSizes',
  type: 'group',
  fields: [
    { name: 'h1', type: 'text' },
    { name: 'h2', type: 'text' },
    { name: 'h3', type: 'text' },
    { name: 'h4', type: 'text' },
    { name: 'h5', type: 'text' },
    { name: 'h6', type: 'text' },
    { name: 'paragraph', type: 'text' },
  ],
}

export const richTextFieldWithSize: Field = {
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
        {
          type: 'collapsible',
          fields: [richTextSizes],
          label: 'Velikost textu',
          admin: { initCollapsed: true },
        },
      ],
      label: 'Nastavení textu',
      admin: { initCollapsed: true },
    },
  ],
}

export function getRichTextField(name?: string) {
  const richTextField: Field = {
    admin: {
      hideGutter: true,
    },
    label: 'Textové pole',
    name: name ? name : 'text',
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
          {
            type: 'collapsible',
            fields: [richTextSizes],
            label: 'Velikost textu',
            admin: { initCollapsed: true },
          },
        ],
        label: 'Nastavení textu',
        admin: { initCollapsed: true },
      },
    ],
  }

  return richTextField
}

// export type ButtonPropsType = {
//   text: string
//   textColor?: TextColorType
//   bgColor: ColorsAndGradientsType
//   size: ButtonSize
//   rounding: RoundingType
//   className?: string
//   type?: 'submit' | 'button' | 'reset'
//   link?: string
// }
