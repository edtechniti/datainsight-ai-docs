import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DataInsight AI',
  description: 'Transform your CSV data into beautiful, interactive visualizations with AI-powered insights',
  base: '/datainsight-ai-docs/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/datainsight-ai-docs/favicon.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Features', link: '/features/overview' },
      { text: 'Back to App', link: '../../' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is DataInsight AI?', link: '/guide/what-is-datainsight-ai' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Overview', link: '/features/overview' },
          { text: 'Data Upload', link: '/features/data-upload' },
          { text: 'AI-Powered Analysis', link: '/features/ai-analysis' },
          { text: 'Chart Types', link: '/features/chart-types' },
          { text: 'Natural Language Queries', link: '/features/natural-language' },
          { text: 'Export & Sharing', link: '/features/export' }
        ]
      },
      {
        text: 'Chart Types',
        items: [
          { text: 'Bar Charts', link: '/charts/bar' },
          { text: 'Line Charts', link: '/charts/line' },
          { text: 'Pie Charts', link: '/charts/pie' },
          { text: 'Scatter Plots', link: '/charts/scatter' },
          { text: 'Area Charts', link: '/charts/area' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Data Requirements', link: '/advanced/data-requirements' },
          { text: 'Best Practices', link: '/advanced/best-practices' },
          { text: 'Troubleshooting', link: '/advanced/troubleshooting' },
          { text: 'FAQ', link: '/advanced/faq' }
        ]
      }
    ],

    footer: {
      message: 'DataInsight AI is developed by edTechniti.',
      copyright: '© 2025 edTechniti. All rights reserved.'
    },

    search: {
      provider: 'local'
    }
  }
})
