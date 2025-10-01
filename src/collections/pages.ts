import { CardsSectionBlock } from '@/blocks/cardSection/CardsSectionBlock'
import { ComparisonSectionBlock } from '@/blocks/comparisonSection/ComparisonSectionBlock'
import { FormSectionBlock } from '@/blocks/formSection/FormSectionBlock'
import { HeroBackgroundImageSectionBlock } from '@/blocks/heroes/HeroBackgroundImageSectionBlock'
import { MasonrySectionBlock } from '@/blocks/masonrySection/MasonrySectionBlock'
import { TextImageSectionBlock } from '@/blocks/textImageSection/TextImageSection'
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
        HeroBackgroundImageSectionBlock,
        TextImageSectionBlock,
        CardsSectionBlock,
        ComparisonSectionBlock,
        FormSectionBlock,
        MasonrySectionBlock,
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
