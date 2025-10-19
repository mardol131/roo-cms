import { BannerSectionBlock } from '@/blocks/bannerSection/bannerSection'
import { ComparisonSectionBlock } from '@/blocks/comparisonSection/ComparisonSectionBlock'
import { FormSectionBlock } from '@/blocks/formSection/FormSectionBlock'
import { HeroBubbleSectionBlock } from '@/blocks/heroes/HeroBubbleSection'
import { ImageTextSectionBlock } from '@/blocks/imageTextSectionBlock/ImageTextSectionBlock'
import { MasonrySectionBlock } from '@/blocks/masonrySection/MasonrySectionBlock'
import { TextSectionBlock } from '@/blocks/textSection/textSection'

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
      blocks: [
        BannerSectionBlock,
        HeroBubbleSectionBlock,
        TextSectionBlock,
        ComparisonSectionBlock,
        FormSectionBlock,
        ImageTextSectionBlock,
        MasonrySectionBlock,
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
