<div
  class="modalt pointer-events-none fixed w-full h-full top-0 left-0 flex
  items-center justify-center">
  <div
    class="modal-container pointer-events-auto bg-white w-11/12 md:max-w-md
    mx-auto rounded shadow-lg overflow-y-auto">

    <!-- Add margin if you want to see some of the overlay behind the modal-->
    <div class="modal-content py-4 text-left px-6">
      <!--Title-->
      <div class="flex justify-between items-center pb-3">
        <p class="text-2xl font-bold">Add New Problem</p>
      </div>

      <!--Body-->
      <form class="w-full max-w-md">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0
              pr-4"
              for="inline-full-name">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200
              rounded w-full py-2 px-4 text-gray-700 leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Name" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0
              pr-4"
              for="inline-full-name">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200
              rounded w-full py-2 px-4 text-gray-700 leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="Email"
              placeholder="Email" />
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0
                pr-4"
                for="inline-full-name">
                College Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200
                rounded w-full py-2 px-4 text-gray-700 leading-tight
                focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="College Name" />
            </div>

          </div>
        </div>
      </form>

      <!--Footer-->
      <div class="flex justify-end pt-2">
        <button
          id="close"
          class="px-4 bg-transparent p-3 rounded-lg text-indigo-500
          hover:bg-gray-100 hover:text-indigo-400 mr-2 close">
          Submit
        </button>
      </div>

    </div>
  </div>
</div>
