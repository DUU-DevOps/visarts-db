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
            name: "email",
            type: "string",
            title: "Email"
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
            name: "homepageInfo",
            type: "document",
            title: "Homepage Info",
            fields: [
                {
                    name: "landingTitle",
                    type: "string",
                    title: "Landing Title"
                },
                {
                    name: "landingText",
                    type: "text",
                    title: "Landing Text"
                },
                {
                    name: "visartsIcon",
                    type: "image",
                    title: "Visarts Logo"
                },
                {
                    name: "landingImage",
                    type: "image",
                    title: "Landing Image"
                },
                {
                    name: "spotlightText",
                    type: "text",
                    title: "Spotlight Text"
                },
                {
                    name: "getInvolvedText",
                    type: "text",
                    title: "Get Involved Text"
                },
                {
                    name: "brownGalleryText",
                    type: "text",
                    title: "Brown Gallery Text"
                },
                {
                    name: "figureDrawingText",
                    type: "text",
                    title: "Figure Drawing Text"
                },
                {
                    name: "eventsText",
                    type: "text",
                    title: "Events Text"
                },
                {
                    name: "getInvolvedImage",
                    type: "image",
                    title: "Get Involved Image"
                },
                {
                    name: "brownGalleryImage",
                    type: "image",
                    title: "Brown Gallery Image"
                },
                {
                    name: "figureDrawingImage",
                    type: "image",
                    title: "Figure Drawing Image"
                }
            ]
        },
        {
            name: "meetUs",
            type: "document",
            title: "Meet Us",
            fields: [
                {
                    name: "text",
                    type: "text",
                    title: "Text"
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                }
            ]
        },
        {
            name: "brownGallery",
            type: "document",
            title: "Brown Gallery",
            fields: [
                {
                    name: "text",
                    type: "text",
                    title: "Text"
                },
                {
                    name: "link",
                    type: "string",
                    title: "Application Link"
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                },
                {
                    name: 'backgroundImage',
                    type: 'image',
                    title: 'Background Image'
                }
            ]
        },
        {
            name: "artistSpotlight",
            type: "document",
            title: "Artist Spotlight",
            fields: [
                {
                    name: "text",
                    type: "text",
                    title: "Text"
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image"
                }
            ]
        },
        {
            name: "events",
            type: "document",
            title: "Events",
            fields: [
                {
                    name: "text",
                    type: "text",
                    title: "Text"
                },
                {
                    name: "link",
                    type: "string",
                    title: "Link"
                }
            ]
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