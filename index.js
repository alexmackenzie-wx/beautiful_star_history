import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import axios from "axios";
import React, { PureComponent } from "react";
import "react-hook-form"
import { useForm } from "react-hook-form";

{/* TODOS */}
{/* Add "K-bar React library at some point" */}

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Components
import StargazerChart from "/Users/alexmackenzie/Desktop/b_star_history/b_star_history/components/star_chart.js"
import ControlPannel from "/Users/alexmackenzie/Desktop/b_star_history/b_star_history/components/control_pannel.js"
import RepoSearch from "/Users/alexmackenzie/Desktop/b_star_history/b_star_history/components/repo_search.js"

export default function Home() {

  const [stargazer_count, setStargazerCount] = React.useState(0)
  const [avatar_url, setAvatarURL] = React.useState(0)

  const [bg_toggle, setBgToggle] = React.useState(0)
  const [dm_toggle, setDmToggle] = React.useState(0)


  const empty_chart = <StargazerChart stargazer_count={0}></StargazerChart>
  const populated_chart = <StargazerChart stargazer_count={stargazer_count.stargazer_count}></StargazerChart>

  const [chart_state, setChartState] = React.useState(empty_chart)


  function getStarcount() {
    let url = 'https://api.github.com/repos/NixOS/nix';
      axios.get(url)
        .then(function (response) {
          const stargazer_count = response.data.stargazers_count
          setStargazerCount({stargazer_count})
          const avatar_url = response.data.owner["avatar_url"]
          setAvatarURL({avatar_url})
          setChartState({populated_chart})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    function bgToggle() {
        setBgToggle("translate-x-6")
    }

  return (
    <div class="h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div class="h-full grid md:grid-cols-5 md:grid-rows-17">

        {/* Navbar -- todo: make component later */}
        <div class="row-start-1 col-start-1 col-span-5"></div>

        {/* Form -- todo: make component later */}

        <form class="row-start-2 row-end-2 col-start-2 col-span-3">
            <div class="grid md:grid-cols-5 md:grid-rows-1 place-items-center">
              <input type="url" id="first_name" class="row-start-1 col-start-1 col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com/NixOS/nix" required></input>
              <button class="h-3/4 w-3/5 ml-9 row-start-1 col-start-5 text-gray-400 text-sm border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-200" type="submit" onClick={getStarcount}>
                Get History
              </button>
            </div>
        </form>

        {/* Gradient & Chart -- todo: make component later */}

        <div class="grid row-start-4 row-span-6 col-start-2 col-span-3 place-items-center border-gray-300 rounded-sm bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
          <div class="grid rounded-xl pt-10 pl-10 pr-10 pb-10 place-items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700/50 via-gray-900/50 to-black/50 shadow-2xl">
            <div></div>
            {<StargazerChart stargazer_count={stargazer_count.stargazer_count}></StargazerChart>}
            <div></div>
            <div></div>
            <div></div>
          </div>  
        </div>
        <div class="row-start-7 row-end-7 col-start-1 col-span-1"></div>
        <div class="row-start-8 row-end-8 col-start-1 col-span-1"></div>
        <div class="row-start-9 row-end-9 col-start-1 col-span-1"></div>

        {/* Gradient (should) spans to row 9 */}

        <div class="row-start-10 row-end-10 col-start-1 col-span-1"></div>
        <div class="row-start-11 row-end-11 col-start-1 col-span-1"></div>
        <div class="row-start-12 row-end-12 col-start-1 col-span-1"></div>
        <div class="row-start-13 row-end-13 col-start-1 col-span-1"></div>
        <div class="row-start-14 row-end-14 col-start-2 col-span-1"></div>
        <div class="row-start-15 row-end-15 col-start-1 col-span-1"></div>
        
        {/* Control Pannel Component */}

        <ControlPannel></ControlPannel>
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

  
