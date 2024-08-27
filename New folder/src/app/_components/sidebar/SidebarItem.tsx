import { ISidebarItemProps } from "@/types";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const SidebarItem = ({
	item,
	openSidebar,
	handleOpenSidebarSubList,
	index,
}: ISidebarItemProps) => {
	return item?.children ? (
		<div
			className='p-3 bg-gray-100 font-semibold flex justify-between'
			onClick={() => handleOpenSidebarSubList(index)}>
			<Link
				href={item.target || "#"}
				key={item.title}
				className='text-gray-700'
				passHref>
				{item.title}{" "}
			</Link>
			<span
				className={
					openSidebar[index]
						? "-rotate-180 transition-all duration-500"
						: ""
				}>
					<ChevronUp />
				{/* {item?.children && item?.children?.length > 0 ? (
				) : (
					<></>
				)} */}
			</span>
		</div>
	) : (
		<div
			className='p-3 bg-gray-100 font-semibold flex justify-between'
			onClick={() => handleOpenSidebarSubList(index)}>
			<Link
				href={item.target || "#"}
				key={item.title}
				className='text-gray-700 w-full'
				passHref>
				{item.title}{" "}
			</Link>
		</div>
	);
};

export default memo(SidebarItem);

/**
 *
 *     <div className="p-3 bg-gray-100">
      {item.target ? <Link href={item.target} key={item.title} onClick={() => handleOpenSidebarSubList(index)} className="text-gray-700 font-semibold flex justify-between">
        {item.title} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.children?.length > 0 ? <ChevronUp /> : <></>}</span>
      </Link> : !item.action ? <div key={item.title} onClick={() => handleOpenSidebarSubList(index)} className="text-gray-700 font-semibold flex justify-between">
        {item.title} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.children?.length > 0 ? <ChevronUp /> : <></>}</span>
      </div> : <div key={item.title} onClick={item.action} className="text-gray-700 font-semibold flex justify-between">
        {item.title} <span className={openSidebar[index] ? "-rotate-180 transition-all duration-500" : ""}>{item?.children?.length > 0 ? <ChevronUp /> : <></>}</span>
      </div>}
    </div>
 */
