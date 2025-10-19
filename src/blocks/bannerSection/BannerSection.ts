import { Block } from 'payload'
import { buttonsField, overlayField } from '../global/fields'
import { TextBlock } from '../globalBlocks/textBlock'
import { widgetsField } from '../globalBlocks/widgetsBlocks'

export const BannerSectionBlock: Block = {
  slug: 'BannerSection',
  fields: [
    { name: 'texts', type: 'blocks', blocks: [TextBlock] },
    overlayField,
    buttonsField,
    widgetsField,
  ],
}
