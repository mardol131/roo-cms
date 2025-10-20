import { buttonSizeList, buttonTypeList, roundingList } from '@/design/button'
import { colorsAndGradients, textColor } from '@/design/colors'
import { textAlign } from '@/design/orientation'
import { headingLevels, landingHeading } from '@/design/text'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Field } from 'payload'
import { ButtonBlock } from '../_blocks/buttonBlock'
import { buttonType, rounding } from '../types/buttonTypes'
import { fontWeight } from '../types/textTypes'
import { InputWidgetBlock } from '../_blocks/widgetsBlocks'

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

export function getOverlayField(name?: string, label?: string) {
  const field: Field = {
    label: label || 'Pozadí sekce',
    type: 'collapsible',
    admin: { initCollapsed: true },
    fields: [
      {
        name: name || 'overlay',
        type: 'group',
        fields: [
          {
            name: 'overlayColor',
            type: 'select',
            options: getOptionsFromObject(colorsAndGradients),
          },
          {
            name: 'overlayClassname',
            type: 'text',
          },
          imageField,
          {
            label: 'Nápověda',
            type: 'collapsible',
            admin: { initCollapsed: true },
            fields: [
              {
                name: 'advice', // required
                type: 'json', // required

                required: true,
                admin: { readOnly: true },
                defaultValue: () => {
                  return {
                    Nápověda: 'V classname používáš Tailwind. Pochopíš to z kódu.',
                    simple: 'bg-red',
                    gradienty: 'bg-linear-<stupně natočení> from-red-500 via-blue-500 to-green-500',
                    ourColors: 'from-red-500 via-blue-500 to-green-500',
                    transparency:
                      'Za barvu dát /<číslo>, vyjadřuje procento. Takže třeba via-blue-500/40 nebo bg-black/20',
                  }
                },
                access: {
                  update: () => false,
                },
              },
            ],
          },
        ],
      },
    ],
  }
  return field
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

export function getButtonField(name: string, admin?: string) {
  const field: Field = {
    label: admin || 'Tlačítko',
    type: 'collapsible',
    admin: { initCollapsed: true },
    fields: [
      {
        name: name,
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

  return field
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

export const imageField: Field = {
  label: 'Obrázek',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'image',
      type: 'group',
      fields: [
        { name: 'src', type: 'text' },
        { name: 'alt', type: 'text' },
      ],
    },
  ],
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
