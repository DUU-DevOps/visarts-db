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
        name: 'blurb',
        type: 'string',
        title: 'Blurb'
        },
        {
        name: "art",
        type: 'image',
        title: "Art"        
        }
    ]
  }