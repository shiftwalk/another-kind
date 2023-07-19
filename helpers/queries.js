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

export const privacyQuery = `{
  "privacy": *[_type == "privacy"][0]{
    title,
    content,
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
    "projects": *[_type == "projects"] | order(orderRank asc) {
      title,
      orderRank,
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
      teaserImage {
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
    },
    "journals": *[_type == "journals"] | order(postDate desc) {
      title,
      category->{
        title,
      },
      postDate,
      content,
      images[] {
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
      teaserImage {
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
    pulloutSectionImages[] {
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
    manifestoItems[] {
      heading,
      text
    },
    heroHeadingLine1,
    heroHeadingLine2,
    ourMissionSubHeading,
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
    sectorsWeServeSubHeading,
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
    servicess[]-> {
      title
    },
    overview,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const journalQuery = `{
  "journal": *[_type == "journals" && slug.current == $slug][0]{
    title,
    category->{
      title,
    },
    postDate,
    content,
    images[] {
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
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "more": *[_type == "journals" && slug.current != $slug] | order(postDate desc)[0...3] {
      title,
      category->{
        title,
      },
      postDate,
      content,
      images[] {
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
      teaserImage {
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