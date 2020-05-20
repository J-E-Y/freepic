import React, { Component } from "react";

export const Slogan = () => {
  return (
    <div class="flex bg-gray-100 py-24 justify-center">
      <div class="p-12 text-center max-w-2xl">
        <div class="md:text-3xl text-3xl font-bold">
          Want to discover more ?
        </div>
        <div class="text-xl font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </div>
        <div class="mt-6 flex justify-center h-12 relative">
          <div
            class="flex shadow-md font-medium absolute py-2 px-4 text-green-100
        cursor-pointer bg-green-600 rounded text-lg tr-mt  svelte-jqwywd"
          >
            Click Here
          </div>
        </div>
      </div>
    </div>
  );
};
