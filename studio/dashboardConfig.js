export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ede3672d28b067bf591634f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m6b2oygy',
                  apiId: 'a1d417e8-6d05-4a14-a90c-9fd8d4f31846'
                },
                {
                  buildHookId: '5ede3672ac328771400e561c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mzyfxueb',
                  apiId: 'ef197df3-cfa2-4383-809c-c73c37f90ea4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mzyfxueb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
