
export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title (or name)'
        },
        {
        name: "name",
        type: 'string',
        title: "Subtitle (optional name, date, etc.)"
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
            title: 'Gallery',
            type: 'array',
            of: [
                { 
                    type: 'document',
                    name: "work",
                    fields: [
                        {
                            name: "image",
                            type: "image"
                        },
                        {
                            name: "blurb",
                            type: "text"
                        },
                        {
                            name: "title",
                            type: "string"
                        }
                    ]
                }
            ]
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: 'array',
            of: [
                {
                    name: 'link',
                    type: 'document',
                    fields: [
                        {
                            name: "type",
                            type: 'string',
                            title: "Type",
                            options: {
                                list: [ 
                                  { title: 'Facebook', value: 'facebook'},
                                  { title: 'Twitter', value: 'twitter' },
                                  { title: "Instagram", value: "instagram"},
                                  { title: "Pinterest", value: "pinterest"}
                                ]
                              }
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "string"
                        }
                    ]
                  }
            ]
        }
    ]
  }