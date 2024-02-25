import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'


// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["settings"])


export default defineConfig({
  name: 'default',
  title: 'visarts-db',

  projectId: 'iwi3amti',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([

            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.documentTypeListItem("artist").title("Artist"),
            S.documentTypeListItem("socialLink").title("Social Links"),
            S.documentTypeListItem("people").title("People"),
            S.documentTypeListItem("album").title("Photo Albums")
          ]),
    }),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: schemaTypes,
  },
})
