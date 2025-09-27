import { CardsSectionBlock } from '@/blocks/cardSection/CardsSectionBlock'
import { ComparisonSectionBlock } from '@/blocks/comparisonSection/ComparisonSectionBlock'
import { FormSectionBlock } from '@/blocks/formSection/FormSectionBlock'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'sections',
      type: 'blocks',
      required: true,
      blocks: [CardsSectionBlock, ComparisonSectionBlock, FormSectionBlock],
    },
  ],
  access: {
    read: () => true,
  },
}
