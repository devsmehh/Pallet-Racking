export default function DivWrapper() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-8 py-20 bg-white">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl w-full mx-auto px-8">
        <img
          className="w-[420.7px] h-[370.5px] flex-1 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
          alt="Lead Time Image"
          src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-12.png"
        />
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            LONG BUYING PROCESSES AND LEAD TIMES ARE HOLDING YOU BACK
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In the warehouse industry, time is money. Yet, many businesses face
            <span className="font-semibold"> unnecessary delays </span>
            when trying to secure the right storage solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Between drawn-out quoting processes, multiple back-and-forths, and
            suppliers who are slow to act, companies find themselves stuck
            waiting for weeks—sometimes months—before they can even begin to
            solve their storage problems. And once you finally place an order,
            <span className="font-semibold"> long lead times </span>
            push back your installation, leaving your operations in limbo and
            your warehouse underperforming.
          </p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="w-full max-w-5xl px-8 py-6 rounded-lg bg-gray-100 text-center mx-auto">
        <p className="text-lg font-medium text-gray-800">
          These slow processes don’t just waste time—
          <span className="font-semibold">
            {" "}
            they cost you productivity, revenue, and valuable opportunities.{" "}
          </span>
          In an industry where every day counts, long lead times can grind your
          business to a halt.
        </p>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl w-full mx-auto px-8">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            HOW DIRECT PALLET RACKING SOLVES IT
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Direct Pallet Racking</span>, we
            don’t believe in dragging out the buying process. We provide{" "}
            <span className="font-semibold">quotes in a day</span> and deliver
            <span className="font-semibold">
              {" "}
              detailed drawings within 24 hours
            </span>
            , so you know exactly what you’re getting and when. From there, we
            handle installation{" "}
            <span className="font-semibold">within a week</span>, meaning you’re
            up and running faster than any competitor can promise.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            And while others are still figuring out stock availability, our
            <span className="font-semibold">
              {" "}
              shelves are always in stock{" "}
            </span>{" "}
            and ready to go. No more lengthy waits, no more stalled projects.
            With us, you get
            <span className="font-semibold">
              {" "}
              speed, efficiency, and reliability{" "}
            </span>
            —everything you need to keep your warehouse moving forward without
            missing a beat.
          </p>
          <button className="mt-6 px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-blue-600">
            Get a Quote Today
          </button>
        </div>
        <img
          className="w-[420.7px] h-[370.5px] flex-1 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
          alt="Warehouse Image"
          src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-13.png"
        />
      </div>
    </div>
  );
}
