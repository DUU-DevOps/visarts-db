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
            name: "bio",
            type: "text",
            title: "Bio"
        },
        {
            name: "order",
            type: "number",
            title: "Order (from left to right and top to bottom)"
        }
    ]
  }