import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'



export default defineConfig({
  name: 'default',
  title: 'visarts-db',

  projectId: 'iwi3amti',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), deskTool({structure: myStructure})],

  schema: {
    types: schemaTypes,
  },
})
