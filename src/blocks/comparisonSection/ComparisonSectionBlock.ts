import { Block } from 'payload'
import { headingField, overlayField } from '../global/fields'

export const ComparisonSectionBlock: Block = {
  slug: 'comparisonsection',
  fields: [
    headingField,
    {
      name: 'for',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'points', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
      ],
      required: true,
    },
    {
      name: 'against',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'points', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
      ],
      required: true,
    },
    overlayField,
  ],
}
