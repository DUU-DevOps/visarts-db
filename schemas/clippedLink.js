export default {
    name: 'socialLink',
    type: 'document',
    title: 'Social Link',
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