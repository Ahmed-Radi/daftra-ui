import { ISidebarItemProps } from '@/types';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react'

const SidebarItem = ({ item, openSidebar, handleOpenSidebarSubList, index }: ISidebarItemProps) => {

  return (
    <div className="p-3 bg-gray-100">
      {item.href ? <Link href={item.href} key={item.label} onClick={() => handleOpenSidebarSubList(index)} className="text-gray-700 font-semibold flex justify-between">
        {item.label} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.subList?.length > 0 ? <ChevronUp /> : <></>}</span>
      </Link> : !item.action ? <div key={item.label} onClick={() => handleOpenSidebarSubList(index)} className="text-gray-700 font-semibold flex justify-between">
        {item.label} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.subList?.length > 0 ? <ChevronUp /> : <></>}</span>
      </div> : <div key={item.label} onClick={item.action} className="text-gray-700 font-semibold flex justify-between">
        {item.label} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.subList?.length > 0 ? <ChevronUp /> : <></>}</span>
      </div>}
    </div>
  )
}

export default memo(SidebarItem)