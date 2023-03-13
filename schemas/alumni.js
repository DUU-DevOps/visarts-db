export default {
    name: 'alumni',
    type: 'document',
    title: 'Alumni',
    fields: [
        {
            name: "name",
            type: 'string',
            title: "Name"
        },
        {
            name: "image",
            type: 'image',
            title: "Image"
        },
        {
            name: "quote",
            type: "text",
            title: "Quote"
        }
    ]
  }