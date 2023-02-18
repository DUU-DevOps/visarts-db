export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
    fields: [
        {
        name: "name",
        type: 'string',
        title: "Name"
        },
        {
        name: "Image",
        type: "image",
        title: "Image"
        },
        {
        name: 'blurb',
        type: 'text',
        title: 'Blurb'
        },
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ]
  }