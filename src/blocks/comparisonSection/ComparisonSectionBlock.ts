import { Block } from 'payload'
import { headingField, overlayField } from '../global/fields'

export const ComparisonSectionBlock: Block = {
  slug: 'comparisonsection',
  fields: [
    headingField,
    {
      label: 'Pro',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'for',
          type: 'group',
          fields: [
            { name: 'heading', type: 'text', required: true },
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
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
            { name: 'heading', type: 'text', required: true },
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
          ],
          required: true,
        },
      ],
    },
    overlayField,
  ],
}
