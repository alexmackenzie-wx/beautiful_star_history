import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import axios from "axios";
import React from 'react';
import 'react-hook-form'
import { useForm } from "react-hook-form";



export default function Home() {

  const [stargazer_count, setStargazerCount] = React.useState(0)

  function getStarcount() {
    let url = 'https://api.github.com/repos/marqo-ai/marqo';
      axios.get(url)
        .then(function (response) {
          const stargazer_count = response.data.stargazers_count
          setStargazerCount({stargazer_count})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div class="h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div class="h-screen grid md:grid-cols-5 md:grid-rows-17">
        <div>
          <h1 className="text-3xl font-bold underline col-start-2 col-span-6">
            {stargazer_count.stargazer_count}
          </h1>
        </div>
        <div class="row-start-1 col-start-1 col-span-5"></div>
        <form class="row-start-2 row-end-2 col-start-2 col-span-3">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insert Repo</label>
            <div class="grid md:grid-cols-5 md:grid-rows-1 place-items-center">
              <input type="url" id="first_name" class="row-start-1 col-start-1 col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com/NixOS/nix" required></input>
              <button class="h-3/4 w-3/5 ml-9 row-start-1 col-start-5 text-gray-400 text-sm border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-200" type="submit" onClick={getStarcount}>
                Get History
              </button>
            </div>
        </form>
        <div class="border row-start-3 row-span-6 col-start-2 col-span-3 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
        </div>
        <div class="row-start-7 row-end-7 col-start-1 col-span-1"></div>
        <div class="row-start-8 row-end-8 col-start-1 col-span-1"></div>
        <div class="row-start-9 row-end-9 col-start-1 col-span-1"></div>
        <div class="row-start-10 row-end-10 col-start-1 col-span-1"></div>
        <div class="row-start-11 row-end-11 col-start-1 col-span-1"></div>
        <div class="row-start-12 row-end-12 col-start-1 col-span-1"></div>
        <div class="row-start-13 row-end-13 col-start-1 col-span-1"></div>
        <div class="row-start-14 row-end-14 col-start-2 col-span-1"></div>
        <div class="row-start-15 row-end-15 col-start-1 col-span-1"></div>
        <div class="border row-start-16 row-end-16 col-start-2 col-span-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div class="border h-full grid grid md:grid-cols-5 md:grid-rows-2 place-items-center">
            <div class="row-start-1 col-start-1">test</div>
            <div class="row-start-1 col-start-2">test</div>
            <div class="row-start-1 col-start-3">test</div>
            <div class="row-start-1 col-start-4">test</div>
            <div class="row-start-1 col-start-5">test</div>
          </div>
        </div>
        <div class="row-start-17 row-end-17 col-start-1 col-span-1"></div>
        <div class="row-start-18 row-end-18 col-start-1 col-span-1">
          <div class="w-screen grid md:grid-cols-5 md:grid-rows-2 place-items-center">
            <p class="col-start-3 col-span-1 md:grid-rows-1 mb-1 text-gray-400 text-xs">
              Made by Alex Mackenzie // Tapestry VC
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  
