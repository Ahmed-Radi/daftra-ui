import { IJobPost, ISidebarItem } from "@/types";

export const sidebar: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/",
    subList: [],
  },
  {
    label: "Jobs Applications",
    subList: [
      {
        label: "Job sub list",
        href: "/",
        subList: [],
      },
    ],
  },
  {
    label: "Companies",
    subList: [{
      label: "Companies 1",
      href: "/",
      subList: [],
    },
    {
      label: "Companies 2",
      href: "/",
      subList: [],
    },
    ],
  },
  {
    label: "Settings",
    subList: [
      {
        label: "Settings 1",
        href: "/",
        subList: [],
      },
      {
        label: "Settings 2",
        href: "/",
        subList: [],
      },
    ],
  },
  {
    label: "Logout",
    action: () => { console.log('logout') },
    subList: [],
  },
];

export const jobPost: IJobPost[] = [
  {
    companyImage: "/product-image-one.png",
    isActive: true,
    jobTitle: "Gaming UI Designer",
    jobLocation: "Elmansoura, Egypt",
    postJobDate: "10 days age",
    companyName: "RockStar",
    yearExperiance: "0-3y of exp",
    jobType: "Full time",
    jobLocal: "Remote",
    relativeTracks: "Creative / Design - IT Software development - Gaming",
  },
  {
    companyImage: "/product-image-one.png",
    isActive: false,
    jobTitle: "Front End Developer",
    jobLocation: "Cairo, Egypt",
    postJobDate: "1 day age",
    companyName: "Daftra",
    yearExperiance: "1-4y of exp",
    jobType: "Full time",
    jobLocal: "Remote",
    relativeTracks: "Creative / Design - IT Software development",
  },
  {
    companyImage: "/product-image-one.png",
    isActive: false,
    jobTitle: "Back End Developer",
    jobLocation: "Cairo, Egypt",
    postJobDate: "8 days age",
    companyName: "Daftra",
    yearExperiance: "1-2y of exp",
    jobType: "Part time",
    jobLocal: "Onsite",
    relativeTracks: "Creative / Design - IT Software development",
  },
];