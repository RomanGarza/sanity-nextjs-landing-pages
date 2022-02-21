export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '621410c1e39e80afd1658dba',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q5bfna86',
                  apiId: 'c978e6d2-6bed-43f8-85d0-52986e71fb35'
                },
                {
                  buildHookId: '621410c198b17ba68029a9f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7rh7hi8m',
                  apiId: '55ad81dd-2fe5-47c5-a43f-649886ffe598'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RomanGarza/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7rh7hi8m.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
