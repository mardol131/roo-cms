import { BannerSectionBlock } from '@/blocks/bannerSection/BannerSection'

import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'text', type: 'richText' },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'pageSlug',
      type: 'text',
    },
    {
      name: 'sections',
      type: 'blocks',
      required: true,
      blocks: [BannerSectionBlock],
    },
  ],
  access: {
    read: () => true,
  },
}
