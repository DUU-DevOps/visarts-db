
export default {
    name: 'album',
    type: 'document',
    title: 'Photo Albums',
    fields: [
        {
        name: "name",
        type: 'string',
        title: "Name"
        },
        {
            name: 'imagesGallery',
            title: 'Gallery',
            type: 'array',
            of: [
                { 
                    type: 'image',
                    name: "Photo",
                }
            ],
            options: {
                layout: 'grid'
            }
        }
    ]
}