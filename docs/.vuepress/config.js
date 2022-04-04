module.exports = {
  title: 'Kitsu Documentation',
  description: 'Documentation for the production tracker Kitsu',
  head: [
     ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./img/favicon.ico` }]
  ],
  themeConfig: {
   sidebar: [{
     title: 'Guide',
     collapsable: false,
     children: [
       ['/', 'Introduction'],
       '/getting-started-production/',
	     '/getting-started-advanced/',
       '/getting-started-artist/',
	     '/getting-started-client/'
     ]
   },
   {
     title: 'Modules',
     collapsable: false,
     children: [
	     '/department/',
	     '/customization/',
       '/permissions/',
	     '/playlist/',
       '/Schedules/',
       '/batch-action/',
       '/custom-actions/'
     ]
   },
   {
     title: 'Chat Integrations',
     collapsable: false,
     children: [
       '/discord/',
       '/mattermost/',
       '/slack/',
     ]
	},

	{
     title: 'FAQ',
     collapsable: false,
     children: [
       '/faq-deletion/',
	     '/faq-filter/',
	     '/faq-notification/',
	     '/faq-production-report/'
     ]
	},
    {
     title: 'Open Source Setup',
     collapsable: false,
     children: [
       '/installation/',
       '/development-environment/'
     ]
    }]
  }
}
