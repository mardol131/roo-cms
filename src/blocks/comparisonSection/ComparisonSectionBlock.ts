import { Block } from 'payload'
import { headingField, overlayField } from '../_global/fields'
import { textsField } from '../_blocks/textBlock'

export const ComparisonSectionBlock: Block = {
  slug: 'ComparisonSection',
  fields: [
    textsField,
    {
      label: 'Pro',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'for',
          type: 'group',
          fields: [
            textsField,
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            overlayField,
          ],
          required: true,
        },
      ],
    },
    {
      label: 'Proti',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'against',
          type: 'group',
          fields: [
            textsField,
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            overlayField,
          ],
          required: true,
        },
      ],
    },
  ],
}
