import DropListInput from './DropListInput.jsx'
import {useState} from 'react'
function ToolSubmitionForm() {
  const [tagsDrops, setTagsDrops] = useState([])

  const stockPlaceHoldersForTags = ["a placeholder", 'b placeholder', 'placeholder', 'd placeholder']
  const stockTagDrops = ['drop a', 'dropb', 'dropc', 'drop and so on']
  const onChangeTag =  (nq) => {
   if (nq != "") {
    setTagsDrops(stockTagDrops.filter(i => {if (i.includes(nq)) {return true}}))
    } 
  }
return (
    <div>
<h1>Submit a New Tool</h1>
      <form>
       <input type="text" name="Name" placeholder="Name of the tool" required /> 
        <textarea rows="10" placeholder="Descroption" required></textarea>
          <DropListInput  placeHolders={stockPlaceHoldersForTags}  drops={tagsDrops} onChange={onChangeTag} />
      </form>
    </div>

)
}
export default ToolSubmitionForm
