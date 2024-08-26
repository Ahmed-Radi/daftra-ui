import React from "react";

export interface NavbarIconProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

export interface ISidebarItemProps {
  item: ISidebarItem;
  openSidebar: boolean[];
  handleOpenSidebarSubList: (index: number) => void;
  index: number
}

export interface ISidebarItem {
  label: string;
  href?: string;
  action?: () => void;
  subList: ISidebarItem[];
}

export interface IJobPost {
  companyImage: string;
  isActive: boolean;
  jobTitle: string;
  jobLocation: string;
  postJobDate: string;
  companyName: string;
  yearExperiance: string;
  jobType: string;
  jobLocal: string;
  relativeTracks: string;
}