export default {
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