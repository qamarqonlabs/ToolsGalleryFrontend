
import { useState } from 'react';
import DropListInput from './DropListInput.jsx';

export default function ToolSubmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    producer: '',
    COO: '',
    price: '',
    priceModel: 'One-time purchase',
    category: '',
    subCategory: '',
    tags: "",
    description: '',
    thumbnail: '',
    video: '',
    worthiness: '',
    communitySupport: '',
    pluginsEcoSystem: '',
    integrations: [],
    Platforms: [],
    features: [],
    FAQ: [],
    chatCommunity: [],
    tutorials: [],
    courses: [],
    tipsAndTricks: [],
    articles: [],
    communities: [],
    pictures: [],
    pros: [],
    cons: [],
  });

  const [tagDrops, setTagDrops] = useState([]);
  const stockTags = ['Synthesizer', 'VST', 'Sound Design', 'DAW', 'Audio Editor'];

  const [categoryDrops, setCategoryDrops] = useState([]);
  const stockCategories = ['Audio Production', 'Game Development', 'Photography', 'Streaming'];

  const [subCategoryDrops, setSubCategoryDrops] = useState([]);
  const stockSubCategories = ['Virtual Instrument', 'Game Engine', 'Photo Editing', 'Streaming Software'];

  const [cooDrops, setCooDrops] = useState([]);
  const stockCoo = ['USA', 'UK', 'Japan', 'Germany', 'Canada'];

  const handleTagChange = (nq) => {
    setFormData({ ...formData, tags: nq });
    const newTag = nq.toLowerCase().replace(/([a-z]+,)/gm, "").replace(/\s+/gm, "")
    console.log("newTag ", newTag)
    setTagDrops(
      stockTags.filter(i => {
        if (i.toLowerCase().includes(newTag) && nq !== "") {
          return true
        }
      })
    )
  }

  const handleCategoryChange = (nq) => {
    setFormData({ ...formData, category: nq });
    setCategoryDrops(
      stockCategories.filter(i => {
        if (i.toLowerCase().includes(nq.toLowerCase()) && nq !== "") {
          return true
        }
      })
    )
  }

  const handleSubCategoryChange = (nq) => {
    setFormData({ ...formData, subCategory: nq });
    setSubCategoryDrops(
      stockSubCategories.filter(i => {
        if (i.toLowerCase().includes(nq.toLowerCase()) && nq !== "") {
          return true
        }
      })
    )
  }

  const handleCooChange = (nq) => {
    setFormData({ ...formData, COO: nq });
    setCooDrops(
      stockCoo.filter(i => {
        if (i.toLowerCase().includes(nq.toLowerCase()) && nq !== "") {
          return true
        }
      })
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, arrayName, fieldName) => {
    const newArray = [...formData[arrayName]];
    if (fieldName !== undefined) {
      newArray[index][fieldName] = e.target.value;
    } else {
      newArray[index] = e.target.value;
    }
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName) => {
    let newItem;
    switch (arrayName) {
      case 'features':
        newItem = ['', ''];
        break;
      case 'FAQ':
        newItem = ['', ''];
        break;
      case 'chatCommunity':
      case 'tutorials':
      case 'courses':
      case 'tipsAndTricks':
      case 'articles':
      case 'communities':
        newItem = ['', ''];
        break;
      default:
        newItem = '';
    }
    setFormData({ ...formData, [arrayName]: [...formData[arrayName], newItem] });
  };

  const removeArrayItem = (index, arrayName) => {
    const newArray = [...formData[arrayName]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [arrayName]: newArray });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  const renderArrayInputs = (arrayName, fields) => (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-violet-400 mt-4">{arrayName.charAt(0).toUpperCase() + arrayName.slice(1)}</h3>
      {formData[arrayName].map((item, index) => (
        <div key={index} className="flex space-x-2 mt-2">
          {fields ? (
            fields.map((field, fieldIndex) => (
              <input
                key={fieldIndex}
                type="text"
                placeholder={field.placeholder}
                value={item[fieldIndex]}
                onChange={(e) => handleArrayChange(e, index, arrayName, fieldIndex)}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            ))
          ) : (
            <input
              type="text"
              placeholder={`${arrayName.slice(0, -1)} ${index + 1}`}
              value={item}
              onChange={(e) => handleArrayChange(e, index, arrayName)}
              className="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          )}
          <button
            type="button"
            onClick={() => removeArrayItem(index, arrayName)}
            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayItem(arrayName)}
        className="mt-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg"
      >
        Add {arrayName.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-violet-400 mb-8">Submit a New Tool</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="name" placeholder="Tool Name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="text" name="producer" placeholder="Producer" value={formData.producer} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <DropListInput placeHolders={["Country of Origin"]} drops={cooDrops} onChange={handleCooChange} value={formData.COO} />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <select name="priceModel" value={formData.priceModel} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>One-time purchase</option>
            <option>Subscription</option>
            <option>Freemium</option>
            <option>Free</option>
          </select>
          <DropListInput placeHolders={["Category"]} drops={categoryDrops} onChange={handleCategoryChange} />
          <DropListInput placeHolders={["Sub-category"]} drops={subCategoryDrops} onChange={handleSubCategoryChange} />
          <input type="text" name="thumbnail" placeholder="Thumbnail URL" value={formData.thumbnail} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="text" name="video" placeholder="Video URL" value={formData.video} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="text" name="communitySupport" placeholder="Community Support" value={formData.communitySupport} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="text" name="pluginsEcoSystem" placeholder="Plugins Ecosystem" value={formData.pluginsEcoSystem} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"></textarea>
        <textarea name="worthiness" placeholder="Worthiness" value={formData.worthiness} onChange={handleInputChange} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"></textarea>

        <div>
            <h3 className="text-lg font-semibold text-violet-400 mt-4">Tags</h3>
            <DropListInput
                placeHolders={["Search for tags..."]}
                drops={tagDrops}
                onChange={handleTagChange}
            />
            <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.split(",").map((tag, index) => (
                    <div key={index} className="bg-violet-600 text-white px-3 py-1 rounded-full flex items-center">
                        <span>{tag}</span>
                        <button
                            type="button"
                            onClick={() => {
                                const newTags = [...formData.tags];
                                newTags.splice(index, 1);
                                setFormData({ ...formData, tags: newTags });
                            }}
                            className="ml-2 text-white font-bold"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {renderArrayInputs('integrations')}
        {renderArrayInputs('Platforms')}
        {renderArrayInputs('pictures')}
        {renderArrayInputs('pros')}
        {renderArrayInputs('cons')}

        {renderArrayInputs('features', [{ placeholder: 'Feature Name' }, { placeholder: 'Rating' }])}
        {renderArrayInputs('FAQ', [{ placeholder: 'Question' }, { placeholder: 'Answer' }])}
        {renderArrayInputs('chatCommunity', [{ placeholder: 'Name' }, { placeholder: 'URL' }])}
        {renderArrayInputs('tutorials', [{ placeholder: 'Title' }, { placeholder: 'URL' }])}
        {renderArrayInputs('courses', [{ placeholder: 'Title' }, { placeholder: 'URL' }])}
        {renderArrayInputs('tipsAndTricks', [{ placeholder: 'Title' }, { placeholder: 'URL' }])}
        {renderArrayInputs('articles', [{ placeholder: 'Title' }, { placeholder: 'URL' }])}
        {renderArrayInputs('communities', [{ placeholder: 'Name' }, { placeholder: 'URL' }])}


        <button type="submit" className="w-full mt-8 px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg text-xl">Submit Tool</button>
      </form>
    </div>
  );
}
