import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


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
            S.documentTypeListItem("people").title("People")
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
