import React from 'react';
import vm from "../../../ui/assets/photos/vm.png"

function AboutFounder() {
  return (
    <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
        <div class="grid justify-center items-center order-1 col-span-1">
            <img class="lg:h-80 md:h-64 h-40 rounded-full" src={vm} alt="Founder Veronne McMain" />
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 class="text-4xl text-white text-center md:text-left font-bold mb-6">Hi, I am Ms. Veronne McMain, Founder and Social Worker</h1>
            <p class="lg:text-xl text-white text-center md:text-left px-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400"><a href="https://www.linkedin.com/in/veronne-mcmain-07221b211/">Learn More</a></button>
        </div>
    </div>
  )
  
}

export default AboutFounder;
