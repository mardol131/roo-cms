import { Block } from 'payload'
import { MasonryBubbleBlock, MasonryBubbleImageBlock } from './MasonryBubbleBlock'
import { getRichTextField, overlayField } from '../global/fields'

export const MasonrySectionBlock: Block = {
  slug: 'masonrysection',
  fields: [
    getRichTextField(),
    {
      name: 'bubbles',
      type: 'blocks',
      blocks: [MasonryBubbleBlock, MasonryBubbleImageBlock],
      required: true,
    },
    overlayField,
  ],
}
