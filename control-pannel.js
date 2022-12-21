import React from "react";
import { motion } from "framer-motion"

export default function ControlPannel(props) {

    const [bg_toggle, setBgToggle] = React.useState("translate-x-1")
    const [dm_toggle, setDmToggle] = React.useState(0)

    function bgToggle() {
        setBgToggle("translate-x-6")
    }

    return (
            <motion.div whileHover={{ scale: 1.05 }} class="border row-start-16 row-end-16 col-start-2 col-span-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/40 dark:border-gray-600">  
                <div class="h-full grid md:grid-cols-5 md:grid-rows-2 place-items-center">
                    <div class="grid w-1/2 h-full row-start-1 col-start-1 text-gray-400 text-center">Gradient</div>
                    <div class="grid place-items-center md:grid-rows-1 md:grid-cols-3 border w-1/2 h-full row-start-2 row-end-2 col-start-1 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                        <button class="row-start-1 col-start-1 row-end-1 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer focus:ring focus:ring-gray-300 focus:ring-1 focus:ring-gray-400 active:ring-gray-400 focus:transition ease-in-out delay-80 duration-80"></button>
                        <button class="row-start-1 col-start-2 row-end-1 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 rounded-full cursor-pointer focus:ring focus:ring-gray-300 focus:ring-1 focus:ring-gray-400 active:ring-gray-400 focus:transition ease-in-out delay-80 duration-80"></button>
                        <button class="row-start-1 col-start-3 row-end-1 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-700 to-pink-600 rounded-full cursor-pointer focus:ring focus:ring-gray-300 focus:ring-1 focus:ring-gray-400 active:ring-gray-400 focus:transition ease-in-out delay-80 duration-80"></button>
                    </div>
                    <div class="grid w-1/2 h-full row-start-1 col-start-2 text-gray-400">Background</div>
                    <div class="grid md:grid-rows-1 md:grid-cols-1 w-2/6 h-3/4 row-start-2 row-end-2 col-start-2 border border-gray-300 rounded-xl dark:bg-gray-700 dark:border-gray-600">
                        <motion.div drag="x" dragConstraints={{left:0, right:27}} dragElastic={0} class="row-start-1 col-start-1 row-end-1 w-2/4 h-4/4 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer"></motion.div>    
                    </div>    
                    <div class="row-start-1 col-start-3 text-gray-400">Dark Mode</div>
                    <div class="grid md:grid-rows-1 md:grid-cols-1 w-2/6 h-3/4 row-start-2 row-end-2 col-start-3 border border-gray-300 rounded-xl dark:bg-gray-700 dark:border-gray-600">
                        <motion.div drag="x" dragConstraints={{left:0, right:27}} dragElastic={0} class="row-start-1 col-start-1 row-end-1 w-2/4 h-4/4 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-full cursor-pointer"></motion.div>    
                    </div>
                    <div class="row-start-1 col-start-4 text-gray-400">Padding</div>
                    <button class="w-1/2 h-3/4 row-start-1 row-span-2 col-start-5 bg-green-800/50 border border-green-800 text-green-500 rounded-lg">Export</button>
                </div>            
            </motion.div>
    );
}
