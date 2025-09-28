import { Block } from 'payload'
import { MasonryBubbleBlock, MasonryBubbleImageBlock } from './MasonryBubbleBlock'

export const MasonrySectionBlock: Block = {
  slug: 'masonrysection',
  fields: [
    { name: 'text', type: 'text', required: true },
    {
      name: 'bubbles',
      type: 'blocks',
      blocks: [MasonryBubbleBlock, MasonryBubbleImageBlock],
      required: true,
    },
  ],
}
