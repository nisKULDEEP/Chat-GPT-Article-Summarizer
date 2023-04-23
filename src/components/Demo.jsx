import React from 'react';

import {useState, useEffect} from "react";
import {copy,linkIcon, loader, tick} from '../assets'
import {useLazyGetSummaryQuery} from "../services/article.js";



const Demo = () => {
    const [articles, setArticles] = useState({
        url:'',
        summary:''
    });
    const [getSummaryApi, {error, isFetching}] = useLazyGetSummaryQuery();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await getSummaryApi({articleUrl: articles.url})
            if('error' in res) throw res.error;

            setArticles((old) => ({...old, summary: res?.data?.summary}))
            console.log(res);

        }catch (error) {
            console.log(error)
        }


    }
    return (
    <section className='mt-16 w-full max-w-xl'>
        <div className='flex flex-col w-full gap-2'>
            <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
                <img src={linkIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
                <input type='url' placeholder='Enter a URL' value={articles.url} onChange={(e) =>setArticles((old => ({...old, url: e.target.value })))} required className="url_input peer"/>
                <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'> ↩</button>
            </form>

            {/* Browse History*/}
        </div>

    </section>
)
};
export default Demo;