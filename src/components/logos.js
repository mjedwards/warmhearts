import React from 'react'
import ss from "../ui/assets/logos/agape.png";

function Logos() {
  return (
    <div class="py-16 bg-white">
    <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div class="m-auto text-center lg:w-7/12">
            <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">Our partners.</h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div class="p-4">
                <img src={ss} class="" alt=""/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Logos