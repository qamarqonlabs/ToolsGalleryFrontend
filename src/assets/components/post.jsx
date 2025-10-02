import FAQEl from './FAQ.jsx'
function Post({ data, opened, setOpened, small }) {
  console.log("from each post separately: ", data)
  const { name,
    rating,
    producer,
    COO,
    price,
    priceModel,
    tutorials,
    tipsAndTricks,
    category,
    tags,
    subCategory,
    articles,
    integrations,
    thumbnail,
    description,
    fearures,
    FAQ,
    chatCommunity,
    courses,
    worthiness,
    cons,
    pros,
    cummunities,
   communitySupport,
    pluginsEcoSystem,
    Platforms,
  } = data;
  return (
    <div
      onClick={() => {
        setOpened(data.id)
      }}
      className={`text-white rounded-3xl shadow-lg   transition-all overflow-hidden ${small ? "grid grid-cols-4":""} ${opened ? "col-start-1 max-h-fit row-start-1  top-0 bottom-0 md:col-span-1 lg:col-span-1 h-full" : "hover:shadow-amber-300 cursor-pointer bg-transparent backdrop-blur-2xl"} ${small ? "max-h-fit": ""}`}>
      <img src={thumbnail} alt={name} className={`w-full object-cover ${small ? " m-auto rounded-2xl cols-span-1": ""}`} />
      <div className={`p-4 ${small ? "col-span-3":""}`}>
        <h2 className="text-3xl font-bold text-violet-400 mb-2">{name}</h2>

        <p className={`text-gray-400 mb-4 ${!opened && "line-clamp-2"}`}>{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map(i => <p className="bg-blue-600 px-3 py-1 rounded-full text-sm">{i}</p>)}
        </div>
        <div className={` ${opened ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <p><span className="font-bold text-violet-300">Price:</span> {price}</p>
            <p><span className="font-bold text-violet-300">Rating:</span> {"⭐".repeat(rating)}</p>
            <p><span className="font-bold text-violet-300">Producer:</span> {producer}</p>
            <p><span className="font-bold text-violet-300">Price Model:</span> {priceModel}</p>
            <p><span className="font-bold text-violet-300">Category:</span> {category}</p>
            <p><span className="font-bold text-violet-300">SubCategory:</span> {subCategory}</p>
            <p><span className="font-bold text-violet-300">Country of origin:</span> {COO}</p>
            <p><span className="font-bold text-violet-300">Community Support:</span> {communitySupport}</p>
            <p><span className="font-bold text-violet-300">Plugins Ecosystem:</span> {pluginsEcoSystem}</p>
            <div>
              <p className="font-bold text-violet-300">Integrations:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {integrations?.map(i => <p className="bg-gray-700 px-2 py-1 rounded">{i}</p>)}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-violet-300 mb-2">Features</h3>
            {fearures?.map(i => <div className="flex justify-between items-center mb-1">
              <p>{i[0]}</p>
              <div className="flex items-center">
                <span className="text-yellow-400">{"💫".repeat(i[1])}</span>
                <span className="text-gray-500">{"😭".repeat(10 - i[1])}</span>
              </div>
            </div>)}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-violet-300 mb-2">Resources</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-violet-200">Articles</h4>
                {articles?.map(i => (<a href={i[1]} className="text-blue-400 hover:underline block">{i[0]}</a>))}
              </div>
              <div>
                <h4 className="font-bold text-violet-200">Tutorials</h4>
                {tutorials?.map(i => (<a href={i.link} className="text-blue-400 hover:underline block">{i.name}</a>))}
              </div>
              <div>
                <h4 className="font-bold text-violet-200">Communities</h4>
                {cummunities?.map(i => (<a href={i.link} className="text-blue-400 hover:underline block">{i.name}</a>))}
              </div>
              <div>
                <h4 className="font-bold text-violet-200">Tips & Tricks</h4>
                {tipsAndTricks?.map(i => (<a href={i.link} className="text-blue-400 hover:underline block">{i.name}</a>))}
              </div>
              <div>
                <h4 className="font-bold text-violet-200">Chat Community</h4>
                {chatCommunity?.map(i => <a href={i[1]} className="text-blue-400 hover:underline block">{i[0]}</a>)}
              </div>
              <div>
                <h4 className="font-bold text-violet-200">Courses</h4>
                {courses?.map(i => <a href={i[1]} className="text-blue-400 hover:underline block">{i[0]}</a>)}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-violet-300 mb-2">FAQ</h3>
            <FAQEl q={FAQ[0]} a={FAQ[1]} />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-violet-300 mb-2">Worth it for:</h3>
            <p className="text-gray-400">{worthiness}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Pros</h3>
              {pros?.map(i => <p className="text-gray-400">- {i}</p>)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Cons</h3>
              {cons?.map(i => <p className="text-gray-400">- {i}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
