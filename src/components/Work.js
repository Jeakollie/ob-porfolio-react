import React from "react";

export default function Work() {
    return (
        <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-20  border-dashed px-4 py-4">Work</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Optechsol</summary>
          <p>Optechsol is a multi-tech company that provides excellent and affordable electrical, technical, technological, and tech consultancy services.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Optimo Store</summary>
          <p>Optimo Store is an online store that provides diverse range of products for online buyers and also do excellent and free delivery.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Optransol</summary>
          <p>Optransol is a Liberian transport company that provides excellent, affordable, and pleasantish transport services around Liberia.</p>
        </details>

      </div>
    )
}