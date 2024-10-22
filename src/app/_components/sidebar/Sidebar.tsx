"use client";

import { Fragment, useCallback, useState } from "react";
import { sidebar } from "@/constants";
import { cn } from "@/lib/utils";
import { ISidebarItem } from "@/types";
import { ArrowLeft, Settings, Text } from "lucide-react";
import Link from "next/link";
import SidebarItem from "@/app/_components/sidebar/SidebarItem";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean[]>(
    Array(sidebar.length).fill(false)
  );
  const handleOpenSidebarSubList = useCallback((index: number) => {
    setOpenSidebar(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }, []);

  const [smallScreenSidebar, setSmallScreenSidebar] = useState<boolean>(false);
  const handleSmallScreenSidebar = () => {
    setSmallScreenSidebar(prev => !prev);
  };

  return (
    <section className='flex flex-col lg:pt-5'>
      <div className='flex flex-col'>
        <div className='hidden md:flex md:self-end'>
          <Settings />
        </div>
        <div
          className='md:hidden p-3 bg-gray-500 w-full flex justify-end items-center'
          onClick={handleSmallScreenSidebar}>
          <span className='text-md font-semibold w-3/5'>
            Companies
          </span>
          <div className='-rotate-180'>
            <Text />
          </div>
        </div>
        <div
          className={cn(
            "bg-white z-[100] md:z-10 md:min-h-[70vh] md:mt-2 md:static flex flex-col gap-1 w-full p-2 fixed top-0 right-0 transform transition-transform duration-500 ease-in-out",
            {
              "translate-x-0 h-full": smallScreenSidebar === true,
              "translate-x-full md:translate-x-0 h-full": smallScreenSidebar === false,
            }
          )}>
          <div className='md:hidden flex justify-between'>
            <ArrowLeft
              size={31}
              className='md:hidden'
              onClick={handleSmallScreenSidebar}
            />
            <Settings size={31} />
          </div>
          {sidebar.map((item: ISidebarItem, index: number) => (
            <Fragment key={item.label}>
              <SidebarItem
                key={item.label}
                item={item}
                openSidebar={openSidebar}
                handleOpenSidebarSubList={
                  handleOpenSidebarSubList
                }
                index={index}
              />
              <div
                className={`transition-all duration-500 overflow-hidden w-full flex flex-col gap-1 ${openSidebar[index]
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                  }`}>
                {item.subList.length > 0 &&
                  item.subList.map(
                    (subL: ISidebarItem) => (
                      <Link
                        key={subL.label}
                        href={subL.href!}
                        className='p-3 bg-gray-100 font-semibold self-end w-4/5'>
                        {subL.label}
                      </Link>
                    )
                  )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sidebar