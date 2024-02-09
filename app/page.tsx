import React from 'react';

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center gap-4">
              <img
                alt="Profile Picture"
                className="w-64 h-64 rounded-full object-cover"
                src="/assets/images/lucas.jpeg"
              />
              <h2 className="text-2xl font-bold">Lucas William Bateson</h2>
              <p className="text-gray-600 dark:text-gray-400">Software Developer / Student</p>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">HTML - Advanced</p>
              <p className="text-gray-600 dark:text-gray-400">CSS - Intermediate</p>
              <p className="text-gray-600 dark:text-gray-400">Javascript - Intermediate</p>
              <p className="text-gray-600 dark:text-gray-400">Python - Upper-Intermediate</p>
              <p className="text-gray-600 dark:text-gray-400">Tailwind - Intermediate</p>
              <p className="text-gray-600 dark:text-gray-400">React/Next.js - Intermediate</p>
              <p className="text-gray-600 dark:text-gray-400">AI modeling and training - Intermediate</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Experience</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium">Programming Teacher</h4>
                    <p className="text-gray-600">Aug 2020 – Jun 2021, Oslo Kommune</p>
                    <p className="text-gray-500 dark:text-gray-400">Helped grade 4 students learn block programming.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Scout Leader</h4>
                    <p className="text-gray-600">Aug 2018 – Present, Oslo</p>
                      <p className="text-gray-500 dark:text-gray-400">One of the main active leaders in a scout group, helping to teach others leadership skills</p>
                      <p className="text-gray-500 dark:text-gray-400">Been a leader of a patrol with 10 scouts previously.</p>
                      <p className="text-gray-500 dark:text-gray-400">Completed courses focused on leadership skills.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Media Production</h4>
                    <p className="text-gray-600">Sept 2022 – Present, Jordal AMFI, Oslo</p>
                    <p className="text-gray-500 dark:text-gray-400">Produced live video replays for media cube during live hockey matches.</p>
                    <p className="text-gray-500 dark:text-gray-400">Worked as a camera operator with a professional production team.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="mt-4">Fyrstikkallen Vgs, Aug 2022 – Present</p>
                <p>Information technology and media production studies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}