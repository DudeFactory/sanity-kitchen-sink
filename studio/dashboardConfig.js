export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eca82a7f5ea883e4ed60c2c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s4iziq1a',
                  apiId: '61267c59-32cb-4448-a14c-4fe7e033a23a'
                },
                {
                  buildHookId: '5eca82a745228a286b7995f2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jkpm4ac2',
                  apiId: '9213b37d-bda1-4a5e-9066-ec415ac7bb32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DudeFactory/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jkpm4ac2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
