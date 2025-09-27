import { CardsSectionBlock } from '@/blocks/cardSection/CardSectionBlock'
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
      blocks: [CardsSectionBlock],
    },
  ],
  access: {
    read: () => true,
  },
}
