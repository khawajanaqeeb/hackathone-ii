import React from "react";
import Link from "next/link";


export default function Header(data:any){
    return(
        <div className={`${data.font.className} w-[1440px] h-[100px] bg-[##FFFFFF]`}>
            <div className=" h-[41px] mt-[29px]  flex justify-center items-center">
                <div className="w-[185px] h-[41} flex">
                    <img src="/mh.png" className="w-[50px] h-[41px]"/>
                    <h2 className="w-[130px] h-[41px] text-[34px] font-bold text-[#000000]  ">Furniro</h2>
                </div>
                    <div className="flex w-[430px] h-[41px] mt-[29px] ml-[300px] text-black justify-between list-none font-semibold text-base">
                       <li className="w-[48px] h-[24px]"> <Link href="/"> Home </Link></li>
                        <li className="w-[42px] h-[24px]"><Link href ="/shop "> Shop </Link></li>
                        <li className="w-[36px] h-[24px]"><Link href="/blog">Blog</Link></li>
                        <li className="w-[60px] h-[24px]"><Link href="/contact"> Contact</Link></li>
                    </div>
                        <div className="flex justify-center items-center ml-[80px] gap-4">
                        <i className="bi bi-person-exclamation w-[30px] h-[30px] mt-[27px] ml-[10px] text-2xl"  ></i>
                        <i className="bi bi-search w-[30px] h-[30px] mt-[27px] ml-[10px] text-2xl"></i>
                        <i className="bi bi-heart w-[30px] h-[30px] mt-[27px] ml-[10px] text-2xl"></i>
                        <i className="bi bi-cart3 w-[30px] h-[30px] mt-[27px] ml-[10px] text-2xl"></i>
                        </div>
            </div>

        </div>
        

        
    )
}