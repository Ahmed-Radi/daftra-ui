import { IJobPost, ISidebarItem } from "@/types";

// export const sidebar: ISidebarItem[] = [
//   {
//     title: "Dashboard",
//     target: "/",
//     children: [],
//   },
//   {
//     title: "Jobs Applications",
//     children: [
//       {
//         title: "Job sub list",
//         target: "/",
//         children: [],
//       },
//     ],
//   },
//   {
//     title: "Companies",
//     children: [{
//       title: "Companies 1",
//       target: "/",
//       children: [],
//     },
//     {
//       title: "Companies 2",
//       target: "/",
//       children: [],
//     },
//     ],
//   },
//   {
//     title: "Settings",
//     children: [
//       {
//         title: "Settings 1",
//         target: "/",
//         children: [],
//       },
//       {
//         title: "Settings 2",
//         target: "/",
//         children: [],
//       },
//     ],
//   },
//   // {
//   //   title: "Logout",
//   //   action: () => { console.log('logout') },
//   //   subList: [],
//   // },
// ];

export const jobPost: IJobPost[] = [
  {
    companyImage: "/product-image-one.png",
    isActive: true,
    jobTitle: "Gaming UI Designer",
    jobLocation: "Elmansoura, Egypt",
    postJobDate: "10 days age",
    companyName: "RockStar",
    yearExperience: "0-3y of exp",
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
    yearExperience: "1-4y of exp",
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
    yearExperience: "1-2y of exp",
    jobType: "Part time",
    jobLocal: "Onsite",
    relativeTracks: "Creative / Design - IT Software development",
  },
];