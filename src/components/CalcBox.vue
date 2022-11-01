<template>
    <section class="flex flex-row flex-wrap bg-nearBlack border-4 border-white rounded-xl max-w-lg mx-auto py-5 px-6 mb-12">
      <div class="text-white text-lg flex flex-row w-full">
        <div class="flex-1 font-bold text-lg leading-6"><slot name="title"></slot></div>
        <div class="flex-0">
          <slot name="input"></slot>
        </div>
      </div>
      <div class="text-lightGray text-base w-3/4 leading-6 pt-2 text-opacity-70">
        <slot name="description"></slot>  
      </div>
      <div class="text-lightGray text-xsm w-3/4 leading-6 pt-2 text-opacity-50">
        <slot name="secondary"></slot>
    </div>
    </section>
</template>