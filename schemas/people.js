export default {
    name: 'people',
    type: 'document',
    title: 'People',
    fields: [
        {
            name: "name",
            type: 'string',
            title: "Name"
        },
        {
            name: "title",
            type: 'string',
            title: "Title"
        },
        {
            name: "image",
            type: "image",
            title: "Image"
        }
    ]
  }