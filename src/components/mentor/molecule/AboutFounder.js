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
            <p class="lg:text-xl text-white text-center md:text-left px-10"> 
            I Veronne McMain am a native of Jamaica who migrated to Florida in 1986, which I now called my home. I am a graduate of Barry University and after college, I worked for 14 years as a substance abuse therapist with a mental health agency. I currently, work for Broward County Public Schools for the past 17 years as a School Social Worker. In this position, my focus is on community collaboration, which has led me to a few volunteer and community leadership roles. People are drawn to the field of social work for various reasons most have bleeding hearts and want to save the world. Others, though they may not be aware, are working out their own stuff by tirelessly helping others. <br/>In my work with students, I have come to the realization that I fall somewhere in the middle.  It happened one day while I was meeting with a male student who was being defiant and disrespectful in the classroom. As I was speaking with this young man in my office, he stated, ”It would be pointless for me to tell you my story because you would never understand”. I said, ”Try me you have nothing to lose”. He started to open up and said “miss you don’t understand what it is like to be homeless and not have a father in your life”.  I looked this young man in his eyes and said, “yes I can relate because I once was homeless and I never met my biological father until the age of 13”. As he spoke the hurt of my past came flooding back. It was the moment that I decided that I needed to do more for the student. Every day I hear stories of hurt, sorrow, and hopelessness and it was from these stories that this program was born. <br/>Currently, I run a successful world-class mentorship program at Parkway Middle School of the Arts, which has been helping students to improve their lives and become better role models in school and in the community. In addition to my many roles, I also host an Annual Thanksgiving Dinner at Parkway Middle School of the Arts to feed needy families in the school and in the community at large. I hold a Master's Degree in Social Work from Barry University, which is located in Miami, Florida.  I am also a Ph.D. student working on my degree in psychology. I currently reside in Pembroke Pines, Florida, and worked as a family therapist for Larkin Community Behavioral Health Hospital for the past 6 years. When not working, I love to read, go shopping and spend time with family and friends.  My goal is to continue to stay humble and kind and to never give up.</p>
            <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400"><a href="https://www.linkedin.com/in/veronne-mcmain-07221b211/">Learn More</a></button>
        </div>
    </div>
  )
  
}

export default AboutFounder;
