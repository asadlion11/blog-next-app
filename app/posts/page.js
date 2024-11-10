import Link from "next/link";
import List from "./_components/List";
import { Suspense } from "react";
import Loading from "./loading";

const Posts = async () => {

  return (
    <div className='px-4 sm:px-6 lg:px-8 mt-10'>

      <div className='sm:flex sm:items-center'>
          <div div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-300'>Posts</h1>
            <p className='mt-2 text-sm text-gray-300'>A list of all posts from the json file</p>
          </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
              href={'/posts/new'}
              type="button"
              className="block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline"
          >
              Add Post
          </Link>
        </div>
      </div>
     <Suspense fallback = {<Loading />}>
      <List />
     </Suspense>
    </div>
  );
}
export default Posts;
