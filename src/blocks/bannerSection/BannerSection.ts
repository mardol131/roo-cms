import { Block } from 'payload'
import { buttonsField, overlayField } from '../_global/fields'
import { TextBlock } from '../_blocks/textBlock'
import { widgetsField } from '../_blocks/widgetsBlocks'

export const BannerSectionBlock: Block = {
  slug: 'BannerSection',
  fields: [
    { name: 'texts', type: 'blocks', blocks: [TextBlock] },
    overlayField,
    buttonsField,
    widgetsField,
  ],
}
