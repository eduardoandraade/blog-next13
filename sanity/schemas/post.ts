export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titulo',
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Visão Geral',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL',
            options: {
                source: 'title',
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Conteúdo',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative Text'
                        }
                    ]
                }
            ]

        }
    ]
}