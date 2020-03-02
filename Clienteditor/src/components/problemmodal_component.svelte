<!--Modal-->

<div class="modalt opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlayt absolute w-full h-full bg-gray-900 opacity-50"></div>
    
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
    
    <div class="modal-closet absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span class="text-sm">(Esc)</span>
    </div>

    <!-- Add margin if you want to see some of the overlay behind the modal-->
    <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
        <p class="text-2xl font-bold">Add New Problem</p>
        <div class="modal-closet cursor-pointer z-50">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
        </div>
        </div>

        <!--Body-->
        <form class="w-full max-w-md">
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Problem Name
    </label>
    </div>
    <div class="md:w-2/3">
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Problem Name">
    </div>
</div>
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Problem Description
    </label>
    </div>
    <div class="md:w-2/3">
    <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="text-area" placeholder="Problem Statement"></textarea>
    </div>
</div>
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Test Cases
    </label>
    </div>
    <div class="md:w-2/3">
    <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="text-area" placeholder="eg : [1,3]"></textarea>
    </div>
</div>
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Output
    </label>
    </div>
    <div class="md:w-2/3">
    <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="text-area" placeholder="[4]"></textarea>
    </div>
</div>
<div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Difficulty Type
    </label>
    </div>
  <div class="md:w-2/3">
    <label class="inline-flex items-center">
      <input type="radio" class="form-radio" name="difficultyType" value="easy">
      <span class="ml-2 text-gray-500">Easy</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="difficultyType" value="medium">
      <span class="ml-2 text-gray-500">Medium</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="difficultyType" value="hard">
      <span class="ml-2 text-gray-500">Hard</span>
    </label>
  </div>
</div>
</form>

        <!--Footer-->
        <div class="flex justify-end pt-2">
        <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
        <button class="modal-closet px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
        </div>
        
    </div>
    </div>
</div>