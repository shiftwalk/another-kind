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
    },
    "projects": *[_type == "projects"]{
      title,
      location,
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
      slug {
        current
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

export const teamQuery = `{
  "team": *[_type == "team"][0]{
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
    teamMembers[] {
      name,
      bio,
      image {
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
      role,
      email
    },
    pulloutSectionHeading,
    pulloutSectionText,
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

export const missionQuery = `{
  "mission": *[_type == "mission"][0]{
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
    heroHeadingLine1,
    heroHeadingLine2,
    ourMissionText,
    pulloutSection1Heading,
    pulloutSection1Text,
    pulloutSection1Image {
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
    sectorsWeServeText,
    pulloutSection2Heading,
    pulloutSection2Text,
    pulloutSection2Image {
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
    servicesWeSupplyText,
    servicesWeSupplyImage {
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
    sectorsCtas[] {
      image {
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
      name,
      shortText,
      text
    },
    services[],
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

export const projectQuery = `{
  "project": *[_type == "projects" && slug.current == $slug][0]{
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
    contentBlocks[] {
      ...,
      image {
        asset-> {
          ...
        },
        videoOverride {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      images[] {
        asset-> {
          ...
        },
        videoOverride {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
    location,
    type,
    services,
    overview,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`