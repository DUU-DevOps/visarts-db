export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "visartsIcon",
            type: "image",
            title: "Visarts Logo"
        },
        {
            name: "socialLinks",
            type: "array",
            title: "Social Links",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            name: "type",
                            type: "string",
                            title: "Type",
                            options: {
                                list: [
                                    { title: "Facebook", value: "facebook" },
                                    { title: "Twitter", value: "twitter" },
                                    { title: "Instagram", value: "instagram" },
                                    { title: "Pinterest", value: "pinterest" }
                                ]
                            }
                        },
                        {
                            name: "url",
                            type: "string",
                            title: "URL"
                        }
                    ]
                }
            ]
        },
        {
            name: "image",
            type: 'image',
            title: "Image"
        },
        {
            name: "statement",
            type: "text",
            title: "Statement"
        },
        {
            name: "spotlightText",
            type: "text",
            title: "Artist Spotlight Statement"
        },
        {
            name: "spotlightImage",
            type: "image",
            title: "Artist Spotlight Image"
        },
        {
            name: "brownGalleryText",
            type: "text",
            title: "Brown Gallery Statement"
        },
        {
            name: "brownGalleryLink",
            type: "string",
            title: "Brown Gallery Application URL"
        },
        {
            name: "brownGalleryImage",
            type: "image",
            title: "Brown Gallery Image"
        },
        {
            name: 'figureDrawingImage',
            type: 'image',
            title: 'Figure Drawing Image'
        },
        {
            name: 'figureDrawingText',
            type: 'text',
            title: 'Figure Drawing Text'
        },
        {
            name: 'eventsText',
            type: 'text',
            title: 'Events Text'
        },
        {
            name: 'eventsLink',
            type: 'string',
            title: 'Events Link'
        },
        {
            name: "meetUsImage",
            type: "image",
            title: "Meet Us Image"
        },
        {
            name: "meetUsText",
            type: "text",
            title: "Meet Us Text"
        },
        {
            name: 'getInvolved',
            type: 'document',
            title: 'Get Involved',
            fields: [
                {
                    name: "message",
                    type: "text",
                    title: "Message"
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                },
                {
                    name: "contactLinks",
                    title: "Contact Methods",
                    type: 'array',
                    of: [
                        {
                            name: 'method',
                            type: 'document',
                            fields: [
                                {
                                    name: "name",
                                    type: "string",
                                    title: "Name"
                                },
                                {
                                    name: "icon",
                                    type: "image",
                                    title: "Icon"
                                },
                                {
                                    name: "url",
                                    title: "URL",
                                    type: "string"
                                },
                                {
                                    name: "buttonTitle",
                                    title: "Button Title",
                                    type: "string"
                                },
                                {
                                    name: "clickCopy",
                                    title: "Copy on Click",
                                    type: "boolean"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}