import { Block } from 'payload'
import { buttonsField, overlayField } from '../_global/fields'
import { TextBlock, textsField } from '../_blocks/textBlock'
import { widgetsField } from '../_blocks/widgetsBlocks'

export const TextSectionBlock: Block = {
  slug: 'TextSection',
  labels: { singular: 'Textová sekce', plural: 'Textové sekce' },
  fields: [textsField, buttonsField],
}
