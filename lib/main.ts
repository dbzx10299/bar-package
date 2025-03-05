export { default as Text } from './components/Text/index.vue'

import Grid_ from './components/Grid/index.vue'
import Cell from './components/Grid/GridCell.vue'

export const Grid = Object.assign(Grid_, {
  Cell
})