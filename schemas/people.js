export default {
    name: 'people',
    type: 'document',
    title: 'People',
    fields: [
        {
                name: "image",
                type: "image",
                title: "Image"
        },
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
            name: "section",
            type: "string",
            title: "Section",
            options: {
                list: [
                    { title: "VisArts Chair", value: "chair" },
                    { title: "Executive Board", value: "exec" },
                    { title: "Committee Member", value: "member" }
                ],
                layout: "radio"
            }
        },
        {
            name: "order",
            type: "number",
            title: "Order (from left to right and top to bottom)"
        }
    ]
  }