module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Photon",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Photon by HTML5 UP"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
     {
    resolve: "gatsby-source-wordpress",
    options: {
      /*
       * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
       * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
       */
      baseUrl: "www.sstech.us/blog",
      // The protocol. This can be http or https.
      protocol: "https",
      // Indicates whether the site is hosted on wordpress.com.
      // If false, then the asumption is made that the site is self hosted.
      // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
      // If your site is hosted on wordpress.org, then set this to false.
      hostingWPCOM: false,
      // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
      // This feature is untested for sites hosted on Wordpress.com.
      // Defaults to true.
      useACF: false,
      auth: {
        // If auth.user and auth.pass are filled, then the source plugin will be allowed
        // to access endpoints that are protected with .htaccess.
        htaccess_user: "your-htaccess-username",
        htaccess_pass: "your-htaccess-password",
        htaccess_sendImmediately: false,

        // If hostingWPCOM is true then you will need to communicate with wordpress.com API
        // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
        // then add your clientId, clientSecret, username, and password here
        wpcom_app_clientSecret:
          "NMPnXYFtj2gKas7V1kZyMxr7oLry9V5ZxIyBQGu2txjVHg0GhFz6RYcKopkHICYg",
        wpcom_app_clientId: "54793",
        wpcom_user: "gatsbyjswpexample@gmail.com",
        wpcom_pass: "very-secured-password",
      },
      // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
      // It can help you debug specific API Endpoints problems.
      verboseOutput: true,
      // Set how many pages are retrieved per API request.
      perPage: 3,
      // Search and Replace Urls across WordPress content.
      searchAndReplaceContentUrls: {
        sourceUrl: "https://source-url.com",
        replacementUrl: "https://replacement-url.com",
      },
      // Set how many simultaneous requests are sent at once.
      concurrentRequests: 10,
      // Exclude specific routes using glob parameters
      // See: https://github.com/isaacs/minimatch
      // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
      // all routes that begin with `yoast` from fetch.
      excludedRoutes: ["/*/*/comments", "/yoast/**"],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
