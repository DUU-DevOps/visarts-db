
export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      ...S.documentTypeListItems(),
    ])