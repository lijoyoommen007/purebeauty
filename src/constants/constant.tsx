import React from 'react'

export const Constants= {
    baseUrl : process.env.NEXT_PUBLIC_BASE_URL,
    consumerKey : process.env.NEXT_PUBLIC_consumerKey,
    consumerSecret: process.env.NEXT_PUBLIC_consumerSecret,
    version : process.env.NEXT_PUBLIC_version
}

export const ApiUrl = {
    authPostApi :"/wp-json/api/v1/token",
    getAllPostApi : '/wp-json/wp/v2/posts',
    getAllMediaApi :'/wp-json/wp/v2/media'
}