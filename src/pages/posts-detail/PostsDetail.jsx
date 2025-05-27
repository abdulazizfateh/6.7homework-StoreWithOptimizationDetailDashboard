import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Fetch Hook
import useFetch from '../../hooks/useFetch';
// Loading Component
import LoadingPostsDetail from '../../components/loadingPostsDetail/LoadingPostsDetail';
// Icons
import { LiaHeart } from "react-icons/lia";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";

const PostsDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, loading } = useFetch(`/posts/${id}`);
    if (error) {
        navigate("*");
        console.error(error);
    }

    return (
        <section className='section_post_detail text-[#fff]'>
            <div className="container mx-auto">
                <div className='post_detail_wrapper py-[30px] max-md:py-[22px]'>
                    <div className='posts_detail_card w-[40%] max-[1024px]:w-[60%] max-[768px]:w-85% max-[550px]:w-[90%] max-[450px]:w-full mx-auto overflow-hidden rounded-[8px] border border-[#3d444d] flex flex-col'>
                        {
                            loading && <LoadingPostsDetail />
                        }
                        <div className='py-[8px] md:py-[12px] border-b border-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-white'>{data?.body}</p>
                        </div>
                        <div className='h-[30px] px-[12px] md:h-[42px] border-b border-b-[#3d444d] flex items-center gap-[8px]'>
                            <LiaHeart className='text-[20px] max-sm:text-[18px] cursor-pointer hover:text-[#bcc1c8] duration-100 ease-out' />
                            <GoComment className='text-[20px] max-sm:text-[18px] cursor-pointer hover:text-[#bcc1c8] duration-100 ease-out' />
                            <IoShareOutline className='text-[20px] max-sm:text-[18px] cursor-pointer hover:text-[#bcc1c8] duration-100 ease-out' />
                        </div>
                        <div className='h-[30px] md:h-[42px] border-b border-b-[#3d444d] flex items-center'>
                            <div className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] flex items-center gap-[2px]'>
                                <span className='text-white'>{data?.reactions?.likes} likes</span>
                            </div>
                        </div>
                        <div className='h-[30px] md:h-[42px] border-b border-b-[#3d444d] flex items-center'>
                            <div className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] flex items-center gap-[2px]'>
                                <span className='text-white'>{data?.reactions?.dislikes} dislikes</span>
                            </div>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>#{data?.tags?.[0]} #{data?.tags?.[1]} #{data?.tags?.[2]}</p>
                        </div>
                        <div className=''>
                            <div className='text-[11px] md:text-[14px]'>
                                <form className='h-[80px] md:h-[112px] flex items-start' action="">
                                    <textarea rows={6} className='w-[90%] h-full resize-none text-white py-[8px] md:py-[12px] px-[12px] outline-none' type="text" placeholder='Add a comment' />
                                    <button className='submit cursor-pointer text-[11px] md:text-[14px] text-[#0095f6] py-[8px] md:py-[12px]'>Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(PostsDetail);