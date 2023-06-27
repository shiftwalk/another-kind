export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroText,
    quoteTitle,
    quoteText,
    pulloutSectionHeading,
    pulloutSectionText,
    pulloutSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    quote2Title,
    quote2Text,
    missionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    teamImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    workImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    footerImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const projectsLandingQuery = `{
  "projectsLanding": *[_type == "projectsLanding"][0]{
    title,
    heroHeading,
    heroText,
    footerCtaTitle,
    footerCtaText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const journalLandingQuery = `{
  "journalLanding": *[_type == "journalLanding"][0]{
    title,
    heroHeading,
    heroText,
    quoteTitle,
    quoteText,
    footerCtaTitle,
    footerCtaText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`


export const contactQuery = `{
  "contact": *[_type == "contact"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroHeading,
    heroText,
    emailAddress,
    telephone,
    socials[] {
      name,
      url
    },
    footerCtaTitle,
    footerCtaText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`