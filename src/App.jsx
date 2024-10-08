import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* card-skin*/}
        <div className="rounded-md pl-6 flex flex-col text-left bg-[#faeee2] row-span-2">
          <h2 className="leading-6 pt-[40px] font-bold text-2xl pb-[10px]">
            Create and <br />
            schedule <br />
            content <br />
            <i className="text-[#7651dc]">quicker</i>
          </h2>
          <img
            src="src/images/card-1-illustration-create-post.webp"
            alt=""
            className="w-[120px]"
          />
        </div>
        {/* card-Social Media */}
        <div className="rounded-md flex flex-col items-center bg-[#7651dc] col-span-2 px-[24px]">
          <div className="">
            <p className="pt-[38px] text-5xl font-bold text-white">
              Social Media
              <span className="text-[#ffcc69]"> 10x </span>
              <br /> <i>Faster </i>
              with AI
            </p>
          </div>
          <div>
            <img
              src="src/images/card-purple-illustration-five-stars.webp"
              alt=""
              className="pt-[16px] w-[135px] "
            />
          </div>
          <div>
            <p className="pt-[6px] pb-[35px] text-xs text-white">
              Over 4,000 5-star reviews
            </p>
          </div>
        </div>
        {/* card- Schedule */}
        <div className="rounded-md flex flex-col justify-between pl-[15px] bg-[#dcd1fc] relative overflow-hidden row-span-2">
          <h3 className="leading-6 pt-[23px] font-bold text-2xl text-left">
            Schedule to social media.
          </h3>
          <div className="w-72 absolute left-[112px] top-[75px]">
            <img
              src="src/images/card-lavender-illustration-schedule-posts.webp"
              alt=""
              className=""
            />
          </div>
          <p className="text-xs text-left pb-[30px]">
            Optimize post timings <br />
            to publish content at <br />
            the perfect time for
            <br />
            your audience.
          </p>
        </div>
        {/* card- Manage Multiple */}
        <div className="rounded-md bg-[#ffffff] relative overflow-hidden">
          <div className="absolute left-11 top-3">
            <img
              src="src/images/card-white-illustration-multiple-platforms.webp"
              alt=""
              className="rounded-full"
            />
          </div>
          <h2 className="leading-6 pt-[75px] text-2xl font-bold text-left pl-6 pb-[14px]">
            Manage <br /> multiple <br /> accounts and <br /> platforms.
          </h2>
          {/*card-Maintain a  */}
        </div>
        <div className="rounded-md bg-[#ffcc69] relative overflow-hidden text-left">
          <h2 className="p-[15px] text-2xl font-bold leading-6">
            Maintain a <br /> consistent <br /> posting <br /> schedule.
            <div className="absolute left-4 top-[130px] w-48">
              <img
                src="src/images/card-yellow-2-illustration-consistent-schedule.webp"
                alt=""
              />
            </div>
          </h2>
        </div>
        {/* card-Write your */}
        <div className="rounded-md bg-[#ffcc69] pl-6">
          <h2 className="leading-6 font-bold text-2xl text-left pt-[12px]">
            Write your <br /> content <br /> using AI.
          </h2>
          <div className="w-40">
            <img
              src="src/images/card-2-illustration-ai-content.webp"
              alt=""
              className="pt-[32px] pb-[10px]"
            />
          </div>
        </div>
        {/* card-56% */}
        <div className="rounded-md bg-[#ffffff] flex flex-col items-center">
          <h2 className="text-5xl font-bold pt-[10px]">
            <span>&#62;</span>56%
          </h2>
          <p className="text-xs pt-[8px]">faster audience growth</p>
          <img
            src="src/images/card-white-2-illustration-audience-growth.webp"
            alt=""
            className="w-36 pt-[16px]"
          />
        </div>
        {/* card-Grow Followers */}
        <div className="flex bg-[#7651dc] col-span-2">
          <div className="w-52">
            <img
              src="src/images/card-purple-2-illustration-grow-followers.webp"
              alt=""
              className="pl-[10px] pt-[10px]"
            />
          </div>
          <h3 className="leading-6 text-3xl font-bold text-white text-left">
            Grow followers <br /> with non-stop
            <br />
            content.
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
