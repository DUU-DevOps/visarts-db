
export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "description",
            type: "text",
            title: "Description"
        },
        {
            name: "images",
            type: "array",
            title: "Images",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
}