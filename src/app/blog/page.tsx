import Image from "next/image"

export default function Blog(){
  return (
    <>
      <div className=" h[316px] w-full ">
        <Image src="/shop1.png" alt="background-shop" width={0} height={0} className="w-full h-auto"
        sizes="100vw" />
        <Image src="/mh.png" alt="back" width={50} height={41} className="w-[50px] h-[41px] mt-[-15%] ml-[45%]" />
        <h2 className="w-[124px] h-[72px]  text-[#000000] font-medium text-5xl mt-[1%] ml-[43%]">
          Blog
        </h2>
        <h3 className="w-[48px] h-[24px] text-black ml-[42%] ">Home</h3>
        <Image src="/arw.png" alt="arrow" height={20}  width={20} className="ml-[46%] mt-[-1.4%] ]"/>
        <h3 className="w-[41px] h-[24px]  ml-[48%] mt-[-1.3%] font-light text-base ">Blog</h3>
      </div>
            <div className="h-[2550px] w-full  mt-[5%] flex justify-around">
        
            
                        
                        <div className="h-[2490px] w-[820px]  ml-[5%] mt-[5%]">
                
                                <div className="w-[820px] h-[794px] ">
                                    <Image src="/Rec1.png" alt="blog1" width={817} height={500} />
                    
                                        <div className="w-[349px] h-[24px] mt-5 flex gap-10">
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-man.png" alt="blog-man" width={20} height={20}className="text-[#9F9F9F]"/>
                                            <h2 className="w-[53px] h-[24px] text-[#9F9F9F] font-normal text-base">Admin</h2>
                                             </div>
                
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-calander.png" alt="blog-calander" width={20} height={20} className="text-[#9F9F9F]"/>
                                            <h2 className="w-[90px] h-[24px] text-[#9F9F9F] font-normal text-base">14 Oct 2022</h2>
                                            </div>
                
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-clip.png" alt="blog-clip" width={24} height={24}className="text-[#9F9F9F]"/>
                                            <h2 className="w-[47px] h-[24px] text-[#9F9F9F] font-normal text-base">Wood</h2>
                                             </div>
                                         </div>
                                     <p className="w-[517px] h-[47px] font-medium text-3xl mt-[2%]">Going all-in with millennial design</p>
                                     <p className="w-[817px] h-[115px] text-[#9F9F9F] font-normal text-[15px] text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                                        mauris vitae ultricies leo integer malesuada nunc. In nulla
                                        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                                        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                                        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                                        pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                                        ornare aenean euismod elementum.
                                    </p>
                                    <h3 className="w-[89px] h-[24px] text-base font-normal mt-[3%]">Read more</h3>
                                    <div className="border-[1px] border-black w-[77px] h-[0px] ml-[1%] mt-[1%]"></div>
                                 </div>
            
                                <div className="w-[820px] h-[794px] ">
                                    <Image src="/Rec2.png" alt="blog1" width={817} height={500} />
              
                                        <div className="w-[349px] h-[24px] mt-5 flex gap-10">
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-man.png" alt="blog-man" width={20} height={20} className="text-[#9F9F9F]"/>
                                             <h2 className="w-[53px] h-[24px] text-[#9F9F9F] font-normal text-base">Admin</h2>
                                             </div>
                
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-calander.png" alt="blog-man" width={20} height={20} className="text-[#9F9F9F]"/>
                                            <h2 className="w-[90px] h-[24px] text-[#9F9F9F] font-normal text-base">14 Oct 2022</h2>
                                            </div>

                                             <div className="flex justify-start gap-1">
                                             <Image src="/blog-clip.png" alt="blog-man" width={24} height={24} className="text-[#9F9F9F]"/>
                                             <h2 className="w-[47px] h-[24px] text-[#9F9F9F] font-normal text-base">Wood</h2>
                                            </div>
                                        </div>
                                    <p className="w-[506px] h-[45px] font-medium text-3xl mt-[2%]">Exploring new ways of decorating</p>
                                    <p className="w-[817px] h-[115px] text-[#9F9F9F] font-normal text-[15px] text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                         eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                                         mauris vitae ultricies leo integer malesuada nunc. In nulla
                                        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                                        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                                        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                                        pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                                        ornare aenean euismod elementum.
                                    </p>
                                    <h3 className="w-[89px] h-[24px] text-base font-normal mt-[3%]">Read more</h3>
                                    <div className="border-[1px] border-black w-[77px] h-[0px] ml-[1%] mt-[1%]"></div>
                                </div>
            
                                <div className="w-[820px] h-[794px] ">
                                    <Image src="/Rec3.png" alt="blog1" width={817} height={500} />
              
                                        <div className="w-[349px] h-[24px] mt-5 flex gap-10">
                                            <div className="flex justify-start gap-1">
                                             <Image src="/blog-man.png" alt="blog-man" width={20} height={20} className="text-[#9F9F9F]"/>
                                             <h2 className="w-[53px] h-[24px] text-[#9F9F9F] font-normal text-base">Admin</h2>
                                            </div>
                
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-calander.png" alt="blog-man" width={20} height={20} className="text-[#9F9F9F]"/>
                                            <h2 className="w-[90px] h-[24px] text-[#9F9F9F] font-normal text-base">14 Oct 2022</h2>
                                            </div>
                
                                            <div className="flex justify-start gap-1">
                                            <Image src="/blog-clip.png" alt="blog-man"width={24}height={24} className="text-[#9F9F9F]"/>
                                            <h2 className="w-[47px] h-[24px] text-[#9F9F9F] font-normal text-base">Wood</h2>
                                             </div>
                                        </div>
                                    <p className="w-[632px] h-[45px] font-medium text-3xl mt-[2%]">Handmade pieces that took time to make</p>
                                    <p className="w-[817px] h-[115px] text-[#9F9F9F] font-normal text-[15px] text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                                        mauris vitae ultricies leo integer malesuada nunc. In nulla
                                        posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                                        risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                                        turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                                         pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                        ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                                        ornare aenean euismod elementum.
                                    </p>
                                    <h3 className="w-[89px] h-[24px] text-base font-normal mt-[3%]">Read more</h3>
                                    <div className="border-[1px] border-black w-[77px] h-[0px] ml-[1%] mt-[1%]"></div>
                        </div>
            
                
            </div>
                
                <div className="mt-[5%] ">
                    <div className="w-[393px] h-[537px] " >
                        <button className="w-[311px] h-[58px] border-[#9F9F9F] border-[1px] rounded-lg mt-[4%] ml-[10%]"><i className="bi bi-search w-[130px] h-[130px] mt-[29px] ml-[85%] "></i></button>
                        <h2 className="w-[134px] h-[36px] font-medium text-2xl mt-[5%] ml-[14%]">Categories</h2>
                        <div className="overflow-x-auto">
                        
                        <table className="min-w-full  ">
                        <tbody>
                            <tr className="hover:underline text-[#9F9F9F] text-base font-normal">
                             <td className="px-14 py-4 ">Crafts</td>
                             <td className="px-8 py-4  ">2</td>
                            </tr>
                            <tr className="hover:underline text-[#9F9F9F] text-base font-normal">
                            <td className="px-14 py-4 ">Designs</td>
                            <td className="px-8 py-4 ">8</td>
                            </tr>
                            <tr className="hover:underline text-[#9F9F9F] text-base font-normal">
                            <td className="px-14 py-4 ">Hand Made</td>
                            <td className="px-8 py-4 ">7</td>
                            </tr>
                            <tr className="hover:underline text-[#9F9F9F] text-base font-normal">
                            <td className="px-14 py-4 ">Interior</td>
                            <td className="px-8 py-4 ">1</td>
                            </tr>
                            <tr className="hover:underline text-[#9F9F9F] text-base font-normal">
                            <td className="px-14 py-4 ">Wood</td>
                            <td className="px-8 py-4 ">6</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                    </div>
                     <div className="w-[393px] h-[650px]  mt-5">
                        <div className="w-[252px] h-[618px]  mt-5 ml-20 ">
                            
                                <h2 className="w-[155px] h-[36px] text-2xl font-medium mt-5 text-black">Recent Posts</h2>
                                    
                                    <div className="flex mt-5">
                                        <Image src="/rp1.png" alt="recent-post1" width={80} height={80} className="mt-[5%]"/>
                                            <div className="mt-5 ml-2 ">
                                            <p className="w-[119px] h-[42px] text-sm font-normal">Going all-in with millennial design</p>
                                            <p className="w-[119px] h-[18px] text-[#9F9F9F] font-normal text-xs">03 Aug 2022</p>
                                            </div>
                                    </div>
                                    
                                    <div className="flex mt-5">
                                        <Image src="/rp2.png" alt="recent-post1" width={80} height={80} className="mt-[5%]"/>
                                            <div className="mt-5 ml-2">
                                            <p className="w-[149px] h-[42px] text-sm font-normal">Exploring new ways of decorating</p>
                                            <p className="w-[119px] h-[18px] text-[#9F9F9F] font-normal text-xs">03 Aug 2022</p>
                                            </div>
                                    </div>
                                    
                                    <div className="flex mt-5">
                                        <Image src="/rp3.png" alt="recent-post1" width={80} height={80} className="mt-[5%]"/>
                                            <div className="mt-5 ml-2">
                                            <p className="w-[160px] h-[42px] text-sm font-normal">Handmade pieces that took time to make</p>
                                            <p className="w-[119px] h-[18px] text-[#9F9F9F] font-normal text-xs">03 Aug 2022</p>
                                            </div>
                                    </div>
                                    
                                    <div className="flex mt-5">
                                        <Image src="/rp4.png" alt="recent-post1" width={80} height={80} className="mt-[5%]"/>
                                            <div className="mt-5 ml-2">
                                            <p className="w-[119px] h-[42px] text-sm font-normal">Modern home in Milan</p>
                                            <p className="w-[119px] h-[18px] text-[#9F9F9F] font-normal text-xs">03 Aug 2022</p>
                                            </div>
                                    </div>
                                    
                                    <div className="flex mt-5">
                                        <Image src="/rp5.png" alt="recent-post1" width={80} height={80} className="mt-[5%]"/>
                                            <div className="mt-5 ml-2">
                                            <p className="w-[119px] h-[42px] text-sm font-normal">Colorful office redesign</p>
                                            <p className="w-[119px] h-[18px] text-[#9F9F9F] font-normal text-xs">03 Aug 2022</p>
                                            </div>
                                    </div>
                            
                         </div>
                     </div>
                </div>
           
      </div>
      <div className="h-[90px] w-full flex justify-center gap-5">
                 <button className="w-[60px] h-[60px] bg-[#B88E2F]">1</button>
                 <button className="w-[60px] h-[60px] bg-[#F9F1E7]">2</button>
                 <button className="w-[60px] h-[60px] bg-[#F9F1E7]">3</button>
                 <button className="w-[98px] h-[60px] bg-[#F9F1E7]">Next</button>
            </div>
    </>
  );
}
