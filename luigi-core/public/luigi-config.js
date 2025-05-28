//you can now use ES6 goodies here
Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/views/home.html',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/views/sample1.html',
            loadingIndicator: {
              enabled: false
            }
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'JavaScript',
            externalLink: {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            }
          }
        ]
      }
    ],
    profile: {
      logout: {
        label: 'Sign Out',
        icon: "sys-cancel",
        customLogoutFn: myLogoutFn
      }
    },
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Luigi JavaScript',
      logo: '/logo.png',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'simpleMobileOnly',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  },
  userSettings: {
    userSettingGroups: {
      theme: {
        label: 'Theming',
        title: 'Theming',
        icon: 'lightbulb',
        settings: {
          theme: {
            type: 'enum',
            label: 'Theming',
            options: [
              { value: 'sap_fiori_3', label: 'Quartz light' },
              { value: 'sap_fiori_3_dark', label: 'Quartz dark' },
              { value: 'sap_fiori_3_hcw', label: 'High Contrast White' },
              { value: 'sap_fiori_3_hcb', label: 'High Contrast Black' },
              { value: 'sap_horizon', label: 'Morning Horizon' },
              { value: 'sap_horizon_dark', label: 'Evening Horizon' }
            ]
          }
        }
      }
    },
  }
});

function myLogoutFn() {
  console.log('logout');
}